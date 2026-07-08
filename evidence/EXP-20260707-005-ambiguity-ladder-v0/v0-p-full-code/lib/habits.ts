export type HabitColor = "green" | "sage" | "apricot" | "clay"

export type Habit = {
  id: string
  name: string
  color: HabitColor
  /** Days of week the habit is scheduled: 0 = Sun ... 6 = Sat */
  days: number[]
  /** Reminder time in 24h "HH:MM" format, or null for none */
  reminder: string | null
  /** Map of ISO date (YYYY-MM-DD) -> completed */
  completions: Record<string, boolean>
}

export const COLOR_LABELS: Record<HabitColor, string> = {
  green: "Green",
  sage: "Sage",
  apricot: "Apricot",
  clay: "Clay",
}

/** Tailwind-friendly tint styles per habit color. */
export const COLOR_STYLES: Record<
  HabitColor,
  { dot: string; soft: string; softText: string; ring: string; bar: string }
> = {
  green: {
    dot: "bg-primary",
    soft: "bg-primary/12",
    softText: "text-primary",
    ring: "ring-primary/30",
    bar: "bg-primary",
  },
  sage: {
    dot: "bg-secondary-foreground",
    soft: "bg-secondary",
    softText: "text-secondary-foreground",
    ring: "ring-secondary-foreground/25",
    bar: "bg-secondary-foreground",
  },
  apricot: {
    dot: "bg-accent-foreground",
    soft: "bg-accent",
    softText: "text-accent-foreground",
    ring: "ring-accent-foreground/25",
    bar: "bg-accent-foreground",
  },
  clay: {
    dot: "bg-destructive",
    soft: "bg-destructive/12",
    softText: "text-destructive",
    ring: "ring-destructive/25",
    bar: "bg-destructive",
  },
}

export const DAY_LABELS = ["S", "M", "T", "W", "T", "F", "S"]
export const DAY_LABELS_FULL = [
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

export function addDays(date: Date, delta: number): Date {
  const d = new Date(date)
  d.setDate(d.getDate() + delta)
  return d
}

/** Returns the 7 dates of the week (Sun..Sat) containing `ref`. */
export function weekDates(ref: Date): Date[] {
  const start = addDays(ref, -ref.getDay())
  return Array.from({ length: 7 }, (_, i) => addDays(start, i))
}

export function isScheduledOn(habit: Habit, date: Date): boolean {
  return habit.days.includes(date.getDay())
}

/** Current streak = consecutive scheduled days up to today that are completed. */
export function currentStreak(habit: Habit, today = new Date()): number {
  let streak = 0
  let cursor = new Date(today)
  // Walk backwards up to a year to find the run of completed scheduled days.
  for (let i = 0; i < 366; i++) {
    if (isScheduledOn(habit, cursor)) {
      if (habit.completions[toISO(cursor)]) {
        streak++
      } else if (toISO(cursor) !== toISO(today)) {
        // A missed scheduled day (not today) ends the streak.
        break
      } else {
        // Today not done yet — doesn't break an existing streak.
      }
    }
    cursor = addDays(cursor, -1)
  }
  return streak
}

export function formatReminder(reminder: string | null): string {
  if (!reminder) return "No reminder"
  const [h, m] = reminder.split(":").map(Number)
  const period = h >= 12 ? "PM" : "AM"
  const hour12 = h % 12 === 0 ? 12 : h % 12
  return `${hour12}:${String(m).padStart(2, "0")} ${period}`
}

export function scheduleSummary(days: number[]): string {
  const sorted = [...days].sort((a, b) => a - b)
  if (sorted.length === 7) return "Every day"
  const weekdays = [1, 2, 3, 4, 5]
  if (
    sorted.length === 5 &&
    weekdays.every((d) => sorted.includes(d))
  )
    return "Weekdays"
  if (sorted.length === 2 && sorted.includes(0) && sorted.includes(6))
    return "Weekends"
  return sorted.map((d) => DAY_LABELS_FULL[d].slice(0, 3)).join(", ")
}

/** Warm, non-guilt-inducing encouragement based on how the day is going. */
export function encouragement(done: number, total: number): string {
  if (total === 0) return "A gentle, open day. Add a habit whenever you're ready."
  if (done === 0)
    return "A fresh start whenever you're ready — one small step counts."
  if (done === total) return "Every habit tended today. You showed up beautifully."
  if (done >= total / 2) return "Lovely momentum — you're taking good care of yourself."
  return "A kind beginning. Little wins add up."
}

let idCounter = 0
export function newId(): string {
  idCounter += 1
  return `habit-${Date.now()}-${idCounter}`
}

/** Seed a habit with realistic recent history (mostly done, some gentle misses). */
function seedCompletions(
  days: number[],
  daysBack: number,
  density: number,
): Record<string, boolean> {
  const out: Record<string, boolean> = {}
  const today = new Date()
  for (let i = 1; i <= daysBack; i++) {
    const date = addDays(today, -i)
    if (!days.includes(date.getDay())) continue
    // Deterministic-ish pattern so the prototype looks consistent.
    const seed = (date.getDate() * 7 + date.getDay() * 3) % 10
    out[toISO(date)] = seed / 10 < density
  }
  return out
}

export function seedHabits(): Habit[] {
  const everyday = [0, 1, 2, 3, 4, 5, 6]
  const weekdays = [1, 2, 3, 4, 5]
  return [
    {
      id: "seed-water",
      name: "Drink a glass of water",
      color: "green",
      days: everyday,
      reminder: "08:00",
      completions: seedCompletions(everyday, 40, 0.85),
    },
    {
      id: "seed-walk",
      name: "10-minute walk outside",
      color: "sage",
      days: weekdays,
      reminder: "12:30",
      completions: seedCompletions(weekdays, 40, 0.7),
    },
    {
      id: "seed-read",
      name: "Read to the kids",
      color: "apricot",
      days: everyday,
      reminder: "19:30",
      completions: seedCompletions(everyday, 40, 0.9),
    },
    {
      id: "seed-breathe",
      name: "Three deep breaths",
      color: "clay",
      days: everyday,
      reminder: null,
      completions: seedCompletions(everyday, 40, 0.6),
    },
  ]
}
