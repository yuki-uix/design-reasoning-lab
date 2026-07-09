"use client"

import { Check, Flame, Trash2 } from "lucide-react"
import { currentStreak, lastNDates, todayISO, type Habit, type HabitTone } from "@/lib/habits"
import { cn } from "@/lib/utils"

const TONE_BG: Record<HabitTone, string> = {
  green: "bg-success border-success",
  blue: "bg-sky-400 border-sky-400",
  violet: "bg-violet-400 border-violet-400",
  amber: "bg-amber-400 border-amber-400",
}

const TONE_DOT: Record<HabitTone, string> = {
  green: "bg-success",
  blue: "bg-sky-400",
  violet: "bg-violet-400",
  amber: "bg-amber-400",
}

function MiniWeek({ habit }: { habit: Habit }) {
  const days = lastNDates(7)
  const set = new Set(habit.completions)
  return (
    <div className="hidden items-center gap-[3px] sm:flex">
      {days.map((iso) => (
        <div
          key={iso}
          className={cn("h-2 w-2 rounded-[2px]", set.has(iso) ? TONE_DOT[habit.tone] : "bg-muted")}
        />
      ))}
    </div>
  )
}

export function HabitList({
  habits,
  onToggleToday,
  onDelete,
}: {
  habits: Habit[]
  onToggleToday: (id: string) => void
  onDelete: (id: string) => void
}) {
  const today = todayISO()

  if (habits.length === 0) {
    return (
      <div className="rounded-lg border border-dashed border-border bg-card/50 p-10 text-center">
        <p className="text-sm text-muted-foreground">No habits yet. Create your first routine to begin tracking.</p>
      </div>
    )
  }

  return (
    <ul className="flex flex-col gap-2">
      {habits.map((habit) => {
        const done = habit.completions.includes(today)
        const streak = currentStreak(habit.completions)
        return (
          <li
            key={habit.id}
            className={cn(
              "group flex items-center gap-4 rounded-lg border bg-card p-4 transition-colors",
              done ? "border-success/40" : "border-border",
            )}
          >
            <button
              type="button"
              role="checkbox"
              aria-checked={done}
              aria-label={`Mark ${habit.name} complete for today`}
              onClick={() => onToggleToday(habit.id)}
              className={cn(
                "flex h-9 w-9 shrink-0 items-center justify-center rounded-md border transition",
                done ? TONE_BG[habit.tone] : "border-border bg-transparent hover:border-ring",
              )}
            >
              <Check
                className={cn("h-4 w-4 transition", done ? "text-background opacity-100" : "opacity-0")}
                strokeWidth={3}
              />
            </button>

            <div className="min-w-0 flex-1">
              <p
                className={cn(
                  "truncate text-sm font-medium",
                  done ? "text-muted-foreground line-through" : "text-card-foreground",
                )}
              >
                {habit.name}
              </p>
              <div className="mt-1 flex items-center gap-1.5">
                <Flame className={cn("h-3 w-3", streak > 0 ? "text-success" : "text-muted-foreground")} />
                <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-muted-foreground">
                  {streak} day{streak === 1 ? "" : "s"} streak
                </span>
              </div>
            </div>

            <MiniWeek habit={habit} />

            <button
              type="button"
              aria-label={`Delete ${habit.name}`}
              onClick={() => onDelete(habit.id)}
              className="shrink-0 rounded-md p-2 text-muted-foreground opacity-0 transition hover:bg-muted hover:text-destructive focus:opacity-100 group-hover:opacity-100"
            >
              <Trash2 className="h-4 w-4" />
            </button>
          </li>
        )
      })}
    </ul>
  )
}
