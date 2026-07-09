"use client"

import { Check, Plus, Bell } from "lucide-react"
import {
  toISO,
  currentStreak,
  WEEKDAY_FULL,
  type Habit,
} from "@/lib/habits"
import { HabitIcon } from "@/components/habit-icon"
import { cn } from "@/lib/utils"

function formatTime(t: string): string {
  if (!t) return ""
  const [h, m] = t.split(":").map(Number)
  const period = h >= 12 ? "PM" : "AM"
  const hour = h % 12 === 0 ? 12 : h % 12
  return `${hour}:${String(m).padStart(2, "0")} ${period}`
}

function greeting(date: Date): string {
  const h = date.getHours()
  if (h < 12) return "Good morning"
  if (h < 18) return "Good afternoon"
  return "Good evening"
}

/** Warm, non-judgmental encouragement based on how the day is going. */
function encouragement(done: number, total: number): string {
  if (total === 0) return "Nothing scheduled today — enjoy the breathing room."
  if (done === 0) return "A fresh start whenever you're ready. No rush."
  if (done === total) return "Every one done today. Beautifully cared for."
  if (done >= total - 1) return "So close, and it already counts. Lovely work."
  return "You've made a start, and that's what matters."
}

export function TodayView({
  habits,
  today,
  onToggle,
  onAdd,
}: {
  habits: Habit[]
  today: Date
  onToggle: (id: string) => void
  onAdd: () => void
}) {
  const todayISO = toISO(today)
  const todays = habits.filter((h) => h.days.includes(today.getDay()))
  const done = todays.filter((h) => h.history.has(todayISO)).length
  const total = todays.length
  const pct = total === 0 ? 0 : Math.round((done / total) * 100)

  const dateLabel = today.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  })

  return (
    <div>
      <header className="mb-7">
        <p className="text-sm font-semibold text-primary">{dateLabel}</p>
        <h1 className="mt-1 text-3xl font-extrabold tracking-tight text-foreground text-balance">
          {greeting(today)}
        </h1>
      </header>

      {/* progress summary */}
      <section
        aria-label="Today's progress"
        className="mb-7 rounded-3xl bg-card p-6 shadow-sm ring-1 ring-border/60"
      >
        <div className="flex items-end justify-between">
          <div>
            <p className="text-sm font-medium text-muted-foreground">
              {WEEKDAY_FULL[today.getDay()]}&apos;s routine
            </p>
            <p className="mt-1 text-2xl font-extrabold text-foreground">
              {done} of {total} done
            </p>
          </div>
          <span className="text-3xl font-extrabold text-primary">{pct}%</span>
        </div>

        <div
          className="mt-4 h-3 w-full overflow-hidden rounded-full bg-muted"
          role="progressbar"
          aria-valuenow={pct}
          aria-valuemin={0}
          aria-valuemax={100}
        >
          <div
            className="h-full rounded-full bg-primary transition-[width] duration-500 ease-out"
            style={{ width: `${pct}%` }}
          />
        </div>

        <p className="mt-4 text-sm leading-relaxed text-muted-foreground text-pretty">
          {encouragement(done, total)}
        </p>
      </section>

      {/* habit list */}
      <ul className="flex flex-col gap-3">
        {todays.map((habit) => {
          const checked = habit.history.has(todayISO)
          const streak = currentStreak(habit, today)
          return (
            <li key={habit.id}>
              <button
                type="button"
                onClick={() => onToggle(habit.id)}
                aria-pressed={checked}
                className={cn(
                  "group flex w-full items-center gap-4 rounded-3xl p-4 text-left transition-all",
                  "ring-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                  checked
                    ? "bg-accent/60 ring-primary/25"
                    : "bg-card ring-border/60 hover:ring-border shadow-sm",
                )}
              >
                <span
                  className={cn(
                    "flex size-12 shrink-0 items-center justify-center rounded-2xl transition-colors",
                    checked
                      ? "bg-primary/15 text-primary"
                      : "bg-muted text-muted-foreground",
                  )}
                >
                  <HabitIcon name={habit.icon} className="size-6" />
                </span>

                <span className="min-w-0 flex-1">
                  <span
                    className={cn(
                      "block truncate font-bold text-foreground",
                      checked && "text-primary",
                    )}
                  >
                    {habit.name}
                  </span>
                  <span className="mt-0.5 flex items-center gap-2 text-xs text-muted-foreground">
                    {habit.reminderTime && (
                      <span className="inline-flex items-center gap-1">
                        <Bell className="size-3" aria-hidden="true" />
                        {formatTime(habit.reminderTime)}
                      </span>
                    )}
                    {streak > 0 && (
                      <span className="inline-flex items-center gap-1 font-semibold text-primary/80">
                        {streak}-day streak
                      </span>
                    )}
                  </span>
                </span>

                <span
                  className={cn(
                    "flex size-8 shrink-0 items-center justify-center rounded-full border-2 transition-all",
                    checked
                      ? "border-primary bg-primary text-primary-foreground scale-100"
                      : "border-border bg-transparent text-transparent group-hover:border-primary/50",
                  )}
                  aria-hidden="true"
                >
                  <Check
                    className={cn(
                      "size-5 transition-transform",
                      checked ? "scale-100" : "scale-0",
                    )}
                    strokeWidth={3}
                  />
                </span>
              </button>
            </li>
          )
        })}
      </ul>

      <button
        type="button"
        onClick={onAdd}
        className="mt-4 flex w-full items-center justify-center gap-2 rounded-3xl border border-dashed border-border py-4 text-sm font-semibold text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
      >
        <Plus className="size-4" aria-hidden="true" />
        Add a gentle new habit
      </button>
    </div>
  )
}
