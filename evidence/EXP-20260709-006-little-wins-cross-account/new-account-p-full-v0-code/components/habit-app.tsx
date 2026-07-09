"use client"

import { useMemo, useState } from "react"
import { Sun, CalendarDays, Plus } from "lucide-react"
import {
  createSeedHabits,
  toISO,
  type Habit,
} from "@/lib/habits"
import { TodayView } from "@/components/today-view"
import { ProgressView } from "@/components/progress-view"
import { CreateHabit, type NewHabitInput } from "@/components/create-habit"
import { cn } from "@/lib/utils"

type View = "today" | "progress" | "create"

export function HabitApp() {
  // Fixed "today" for a stable prototype experience.
  const today = useMemo(() => new Date(), [])
  const [habits, setHabits] = useState<Habit[]>(() => createSeedHabits(today))
  const [view, setView] = useState<View>("today")

  const todayISO = toISO(today)

  function toggleHabit(id: string) {
    setHabits((prev) =>
      prev.map((h) => {
        if (h.id !== id) return h
        const next = new Set(h.history)
        if (next.has(todayISO)) next.delete(todayISO)
        else next.add(todayISO)
        return { ...h, history: next }
      }),
    )
  }

  function addHabit(input: NewHabitInput) {
    const habit: Habit = {
      id: `h${Date.now()}`,
      name: input.name.trim() || "New habit",
      note: input.note.trim() || "One small step at a time",
      icon: input.icon,
      days: input.days.length ? input.days : [0, 1, 2, 3, 4, 5, 6],
      reminderTime: input.reminderTime,
      history: new Set<string>(),
    }
    setHabits((prev) => [...prev, habit])
    setView("today")
  }

  const navItems: { id: View; label: string; icon: typeof Sun }[] = [
    { id: "today", label: "Today", icon: Sun },
    { id: "progress", label: "Progress", icon: CalendarDays },
    { id: "create", label: "Add", icon: Plus },
  ]

  return (
    <div className="min-h-dvh bg-background">
      <div className="mx-auto flex min-h-dvh w-full max-w-md flex-col px-5 pb-28 pt-8 sm:max-w-lg sm:px-8">
        {view === "today" && (
          <TodayView
            habits={habits}
            today={today}
            onToggle={toggleHabit}
            onAdd={() => setView("create")}
          />
        )}
        {view === "progress" && (
          <ProgressView habits={habits} today={today} />
        )}
        {view === "create" && (
          <CreateHabit onSave={addHabit} onCancel={() => setView("today")} />
        )}
      </div>

      <nav
        aria-label="Main"
        className="fixed inset-x-0 bottom-0 z-10 border-t border-border/70 bg-card/85 backdrop-blur-md"
      >
        <div className="mx-auto flex w-full max-w-md items-stretch justify-around px-4 py-2 sm:max-w-lg">
          {navItems.map((item) => {
            const Icon = item.icon
            const active = view === item.id
            const isAdd = item.id === "create"
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setView(item.id)}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "flex flex-1 flex-col items-center gap-1 rounded-2xl py-2 text-xs font-semibold transition-colors",
                  active
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                <span
                  className={cn(
                    "flex size-10 items-center justify-center rounded-full transition-colors",
                    isAdd && "bg-primary text-primary-foreground shadow-sm",
                    !isAdd && active && "bg-accent text-accent-foreground",
                  )}
                >
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                {item.label}
              </button>
            )
          })}
        </div>
      </nav>
    </div>
  )
}
