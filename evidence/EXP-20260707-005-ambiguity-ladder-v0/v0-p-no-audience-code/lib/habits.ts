export type ScheduleType = 'daily' | 'weekdays' | 'custom'

export type Habit = {
  id: string
  name: string
  icon: string
  scheduleType: ScheduleType
  // 0 = Sunday ... 6 = Saturday. Used when scheduleType === 'custom'.
  days: number[]
  reminderTime: string | null
  createdAt: string
  // Map of ISO date string (yyyy-mm-dd) -> completed
  completions: Record<string, boolean>
}

export const HABIT_ICONS = [
  'Sun',
  'Droplet',
  'BookOpen',
  'Footprints',
  'Sprout',
  'Moon',
  'Heart',
  'Dumbbell',
  'PenLine',
  'Coffee',
  'Music',
  'Leaf',
] as const

export const DAY_LABELS = ['S', 'M', 'T', 'W', 'T', 'F', 'S']
export const DAY_LABELS_FULL = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]

export function toDateKey(date: Date): string {
  const y = date.getFullYear()
  const m = String(date.getMonth() + 1).padStart(2, '0')
  const d = String(date.getDate()).padStart(2, '0')
  return `${y}-${m}-${d}`
}

export function addDays(date: Date, amount: number): Date {
  const next = new Date(date)
  next.setDate(next.getDate() + amount)
  return next
}

/** Returns the 7 dates of the week (Sun..Sat) containing `date`. */
export function weekDates(date: Date): Date[] {
  const start = addDays(date, -date.getDay())
  return Array.from({ length: 7 }, (_, i) => addDays(start, i))
}

export function isScheduledOn(habit: Habit, date: Date): boolean {
  const day = date.getDay()
  if (habit.scheduleType === 'daily') return true
  if (habit.scheduleType === 'weekdays') return day >= 1 && day <= 5
  return habit.days.includes(day)
}

export function scheduleLabel(habit: Habit): string {
  if (habit.scheduleType === 'daily') return 'Every day'
  if (habit.scheduleType === 'weekdays') return 'Weekdays'
  if (habit.days.length === 0) return 'No days yet'
  if (habit.days.length === 7) return 'Every day'
  return habit.days
    .slice()
    .sort((a, b) => a - b)
    .map((d) => DAY_LABELS_FULL[d].slice(0, 3))
    .join(', ')
}

/**
 * Counts consecutive scheduled days completed up to and including today.
 * Days the habit isn't scheduled for don't break the streak.
 */
export function currentStreak(habit: Habit, today = new Date()): number {
  let streak = 0
  let cursor = new Date(today)
  // Look back up to a year.
  for (let i = 0; i < 366; i++) {
    if (isScheduledOn(habit, cursor)) {
      const key = toDateKey(cursor)
      if (habit.completions[key]) {
        streak++
      } else {
        // Allow today to be incomplete without breaking an existing streak.
        if (toDateKey(cursor) === toDateKey(today)) {
          cursor = addDays(cursor, -1)
          continue
        }
        break
      }
    }
    cursor = addDays(cursor, -1)
  }
  return streak
}

/** Best streak ever recorded across all completions. */
export function bestStreak(habit: Habit): number {
  const keys = Object.keys(habit.completions)
    .filter((k) => habit.completions[k])
    .sort()
  if (keys.length === 0) return 0
  let best = 1
  let run = 1
  for (let i = 1; i < keys.length; i++) {
    const prev = new Date(keys[i - 1])
    const curr = new Date(keys[i])
    const gap = Math.round(
      (curr.getTime() - prev.getTime()) / (1000 * 60 * 60 * 24),
    )
    // Count contiguous scheduled days; allow gaps that are only unscheduled days.
    let onlyUnscheduledBetween = true
    for (let d = 1; d < gap; d++) {
      if (isScheduledOn(habit, addDays(prev, d))) {
        onlyUnscheduledBetween = false
        break
      }
    }
    if (gap === 1 || onlyUnscheduledBetween) {
      run++
    } else {
      run = 1
    }
    best = Math.max(best, run)
  }
  return best
}

let idCounter = 0
export function makeId(): string {
  idCounter += 1
  return `habit-${Date.now().toString(36)}-${idCounter}`
}

/**
 * Seed data with realistic recent history so streaks feel alive.
 * Fully deterministic (no Math.random / time-of-day) so server and client
 * render identically and hydration stays stable.
 *
 * `today` is passed in from the client so all date math is consistent.
 */
export function createSeedHabits(today: Date): Habit[] {
  const build = (
    partial: Omit<Habit, 'completions' | 'createdAt' | 'id'> & {
      id: string
      historyDays: number
      // Days-ago offsets (counted only across scheduled days) to leave blank.
      skipEvery: number
      todayDone: boolean
    },
  ): Habit => {
    const { historyDays, skipEvery, todayDone, ...rest } = partial
    const completions: Record<string, boolean> = {}
    const habitBase: Habit = {
      ...rest,
      createdAt: toDateKey(addDays(today, -historyDays)),
      completions,
    }
    let scheduledSeen = 0
    for (let i = historyDays; i >= 1; i--) {
      const date = addDays(today, -i)
      if (isScheduledOn(habitBase, date)) {
        scheduledSeen += 1
        // Deterministic "mostly done" pattern: skip one out of every skipEvery.
        if (scheduledSeen % skipEvery !== 0) {
          completions[toDateKey(date)] = true
        }
      }
    }
    if (todayDone) completions[toDateKey(today)] = true
    return habitBase
  }

  return [
    build({
      id: 'seed-stretch',
      name: 'Morning stretch',
      icon: 'Sun',
      scheduleType: 'daily',
      days: [0, 1, 2, 3, 4, 5, 6],
      reminderTime: '07:00',
      historyDays: 30,
      skipEvery: 12,
      todayDone: true,
    }),
    build({
      id: 'seed-water',
      name: 'Drink water',
      icon: 'Droplet',
      scheduleType: 'daily',
      days: [0, 1, 2, 3, 4, 5, 6],
      reminderTime: '10:00',
      historyDays: 30,
      skipEvery: 6,
      todayDone: false,
    }),
    build({
      id: 'seed-read',
      name: 'Read a few pages',
      icon: 'BookOpen',
      scheduleType: 'daily',
      days: [0, 1, 2, 3, 4, 5, 6],
      reminderTime: '21:00',
      historyDays: 30,
      skipEvery: 4,
      todayDone: false,
    }),
    build({
      id: 'seed-walk',
      name: 'Evening walk',
      icon: 'Footprints',
      scheduleType: 'custom',
      days: [1, 3, 5],
      reminderTime: '18:30',
      historyDays: 30,
      skipEvery: 5,
      todayDone: false,
    }),
  ]
}
