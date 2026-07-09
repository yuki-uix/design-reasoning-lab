export type HabitTone = "green" | "blue" | "violet" | "amber"

export type Habit = {
  id: string
  name: string
  tone: HabitTone
  createdAt: string
  /** ISO date strings (YYYY-MM-DD) that were completed */
  completions: string[]
}

export const TONES: { value: HabitTone; label: string; className: string }[] = [
  { value: "green", label: "Green", className: "bg-success" },
  { value: "blue", label: "Blue", className: "bg-sky-400" },
  { value: "violet", label: "Violet", className: "bg-violet-400" },
  { value: "amber", label: "Amber", className: "bg-amber-400" },
]

export function toISO(date: Date): string {
  const y = date.getFullYear()
  const m = String(date.getMonth() + 1).padStart(2, "0")
  const d = String(date.getDate()).padStart(2, "0")
  return `${y}-${m}-${d}`
}

export function todayISO(): string {
  return toISO(new Date())
}

export function addDays(date: Date, days: number): Date {
  const next = new Date(date)
  next.setDate(next.getDate() + days)
  return next
}

/** Returns the last `count` ISO dates ending today, oldest first. */
export function lastNDates(count: number): string[] {
  const today = new Date()
  const dates: string[] = []
  for (let i = count - 1; i >= 0; i--) {
    dates.push(toISO(addDays(today, -i)))
  }
  return dates
}

/** Current consecutive streak ending today (or yesterday if today not done yet). */
export function currentStreak(completions: string[]): number {
  const set = new Set(completions)
  let streak = 0
  const today = new Date()
  // Allow the streak to remain "alive" if today isn't checked yet.
  let cursor = set.has(toISO(today)) ? today : addDays(today, -1)
  while (set.has(toISO(cursor))) {
    streak++
    cursor = addDays(cursor, -1)
  }
  return streak
}

export function longestStreak(completions: string[]): number {
  if (completions.length === 0) return 0
  const sorted = [...new Set(completions)].sort()
  let best = 1
  let run = 1
  for (let i = 1; i < sorted.length; i++) {
    const prev = new Date(sorted[i - 1])
    const curr = new Date(sorted[i])
    const diff = Math.round((curr.getTime() - prev.getTime()) / 86400000)
    if (diff === 1) {
      run++
      best = Math.max(best, run)
    } else {
      run = 1
    }
  }
  return best
}

/** Completion rate over the last `window` days as a 0-100 integer. */
export function completionRate(completions: string[], window = 30): number {
  const dates = new Set(lastNDates(window))
  const hits = completions.filter((c) => dates.has(c)).length
  return Math.round((hits / window) * 100)
}

/**
 * Deterministic pseudo-random in [0,1) from two integer seeds. Using a stable
 * function (instead of Math.random) keeps SSR and client renders identical and
 * avoids hydration mismatches.
 */
function pseudoRandom(a: number, b: number): number {
  const x = Math.sin(a * 127.1 + b * 311.7) * 43758.5453
  return x - Math.floor(x)
}

function seedCompletions(seed: number, probability: number, days = 210): string[] {
  const dates = lastNDates(days)
  return dates.filter((_, i) => pseudoRandom(seed, i) < probability)
}

export function createSeedHabits(): Habit[] {
  const config: { name: string; tone: HabitTone; prob: number }[] = [
    { name: "Read 30 mins", tone: "green", prob: 0.7 },
    { name: "Hydration", tone: "blue", prob: 0.85 },
    { name: "Deep work", tone: "violet", prob: 0.55 },
    { name: "Meditation", tone: "amber", prob: 0.4 },
  ]
  return config.map((c, i) => ({
    id: `seed-${i + 1}`,
    name: c.name,
    tone: c.tone,
    createdAt: todayISO(),
    completions: seedCompletions(i + 1, c.prob),
  }))
}

export function newId(): string {
  return `h-${Date.now()}-${Math.floor(Math.random() * 1e6)}`
}
