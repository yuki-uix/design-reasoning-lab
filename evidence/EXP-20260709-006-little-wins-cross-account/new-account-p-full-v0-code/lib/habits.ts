export type IconName =
  | "droplet"
  | "book"
  | "wind"
  | "footprints"
  | "phone"
  | "sparkles"
  | "moon"
  | "utensils"

export type Habit = {
  id: string
  name: string
  /** cheerful one-line intention shown under the name */
  note: string
  icon: IconName
  /** days of week the habit is scheduled: 0 = Sun ... 6 = Sat */
  days: number[]
  reminderTime: string // "HH:MM" 24h, or "" for none
  /** completion history as a set of ISO date strings (YYYY-MM-DD) */
  history: Set<string>
}

export const ICON_OPTIONS: { value: IconName; label: string }[] = [
  { value: "droplet", label: "Water" },
  { value: "book", label: "Read" },
  { value: "wind", label: "Breathe" },
  { value: "footprints", label: "Move" },
  { value: "phone", label: "Connect" },
  { value: "utensils", label: "Nourish" },
  { value: "moon", label: "Rest" },
  { value: "sparkles", label: "Care" },
]

export const WEEKDAY_LABELS = ["S", "M", "T", "W", "T", "F", "S"]
export const WEEKDAY_FULL = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
]

export function toISO(date: Date): string {
  const y = date.getFullYear()
  const m = String(date.getMonth() + 1).padStart(2, "0")
  const d = String(date.getDate()).padStart(2, "0")
  return `${y}-${m}-${d}`
}

export function addDays(date: Date, n: number): Date {
  const copy = new Date(date)
  copy.setDate(copy.getDate() + n)
  return copy
}

/** Returns the 7 dates for the week (Sun -> Sat) containing `ref`. */
export function weekDays(ref: Date): Date[] {
  const start = addDays(ref, -ref.getDay())
  return Array.from({ length: 7 }, (_, i) => addDays(start, i))
}

/** Count consecutive completed scheduled days ending today (or yesterday). */
export function currentStreak(habit: Habit, today: Date): number {
  let streak = 0
  let cursor = new Date(today)
  // allow the streak to remain intact if today isn't done yet
  if (!habit.history.has(toISO(cursor))) {
    cursor = addDays(cursor, -1)
  }
  // walk backwards over scheduled days only
  for (let i = 0; i < 400; i++) {
    if (habit.days.includes(cursor.getDay())) {
      if (habit.history.has(toISO(cursor))) {
        streak++
      } else {
        break
      }
    }
    cursor = addDays(cursor, -1)
  }
  return streak
}

/** How many of this week's scheduled days are complete so far. */
export function weekProgress(
  habit: Habit,
  ref: Date,
): { done: number; scheduled: number } {
  const days = weekDays(ref)
  let done = 0
  let scheduled = 0
  for (const d of days) {
    if (habit.days.includes(d.getDay())) {
      scheduled++
      if (habit.history.has(toISO(d))) done++
    }
  }
  return { done, scheduled }
}

const EVERY_DAY = [0, 1, 2, 3, 4, 5, 6]
const WEEKDAYS_ONLY = [1, 2, 3, 4, 5]

/** Seed a habit with a realistic-looking recent history. */
function seedHistory(
  today: Date,
  days: number[],
  completedOffsets: number[],
): Set<string> {
  const set = new Set<string>()
  for (const offset of completedOffsets) {
    const d = addDays(today, -offset)
    if (days.includes(d.getDay())) set.add(toISO(d))
  }
  return set
}

export function createSeedHabits(today: Date): Habit[] {
  return [
    {
      id: "h1",
      name: "Drink a glass of water",
      note: "Start the morning kind to yourself",
      icon: "droplet",
      days: EVERY_DAY,
      reminderTime: "07:30",
      history: seedHistory(today, EVERY_DAY, [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12]),
    },
    {
      id: "h2",
      name: "Read with the kids",
      note: "Ten cozy minutes before bed",
      icon: "book",
      days: EVERY_DAY,
      reminderTime: "19:30",
      history: seedHistory(today, EVERY_DAY, [1, 2, 3, 5, 6, 7, 9, 10]),
    },
    {
      id: "h3",
      name: "Three deep breaths",
      note: "A small pause between meetings",
      icon: "wind",
      days: WEEKDAYS_ONLY,
      reminderTime: "13:00",
      history: seedHistory(today, WEEKDAYS_ONLY, [1, 4, 5, 7, 8]),
    },
    {
      id: "h4",
      name: "Walk around the block",
      note: "Fresh air, no pressure on distance",
      icon: "footprints",
      days: [1, 3, 5],
      reminderTime: "17:00",
      history: seedHistory(today, [1, 3, 5], [2, 4, 7, 9]),
    },
  ]
}
