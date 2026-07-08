"use client"

import { Bell, Check, Flame } from "lucide-react"
import {
  COLOR_STYLES,
  currentStreak,
  formatReminder,
  type Habit,
} from "@/lib/habits"
import { useHabits } from "@/components/habit-store"
import { cn } from "@/lib/utils"

export function HabitCard({ habit, date }: { habit: Habit; date: Date }) {
  const { toggle } = useHabits()
  const styles = COLOR_STYLES[habit.color]
  const iso = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`
  const done = Boolean(habit.completions[iso])
  const streak = currentStreak(habit, date)

  return (
    <div
      className={cn(
        "flex items-center gap-4 rounded-3xl border border-border bg-card p-4 transition-colors",
        done && "border-transparent",
        done && styles.soft,
      )}
    >
      <button
        type="button"
        onClick={() => toggle(habit.id, date)}
        aria-pressed={done}
        aria-label={done ? `Mark "${habit.name}" as not done` : `Mark "${habit.name}" as done`}
        className={cn(
          "flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 transition-all duration-200 ease-out active:scale-90",
          done
            ? cn("border-transparent text-primary-foreground", styles.dot)
            : cn("border-border bg-background hover:ring-4", styles.ring),
        )}
      >
        <Check
          className={cn(
            "h-6 w-6 transition-all duration-200",
            done ? "scale-100 opacity-100" : "scale-50 opacity-0",
          )}
          strokeWidth={3}
        />
      </button>

      <div className="min-w-0 flex-1">
        <p
          className={cn(
            "truncate text-base font-semibold leading-snug text-foreground transition-colors",
            done && "text-muted-foreground line-through decoration-muted-foreground/40",
          )}
        >
          {habit.name}
        </p>
        <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-medium text-muted-foreground">
          {habit.reminder && (
            <span className="inline-flex items-center gap-1">
              <Bell className="h-3.5 w-3.5" aria-hidden />
              {formatReminder(habit.reminder)}
            </span>
          )}
          {streak > 0 && (
            <span className={cn("inline-flex items-center gap-1", styles.softText)}>
              <Flame className="h-3.5 w-3.5" aria-hidden />
              {streak} day{streak === 1 ? "" : "s"}
            </span>
          )}
          {done && <span className="text-primary">Done — nice.</span>}
        </div>
      </div>
    </div>
  )
}
