"use client"

import { useState } from "react"
import { CalendarDays, Leaf, Plus, Sun } from "lucide-react"
import { HabitProvider } from "@/components/habit-store"
import { TodayView } from "@/components/today-view"
import { ProgressView } from "@/components/progress-view"
import { CreateHabit } from "@/components/create-habit"
import { cn } from "@/lib/utils"

type Tab = "today" | "progress"

export function AppShell() {
  const [tab, setTab] = useState<Tab>("today")
  const [creating, setCreating] = useState(false)

  return (
    <HabitProvider>
      <div className="mx-auto flex min-h-screen w-full max-w-md flex-col">
        {/* Brand bar */}
        <div className="flex items-center gap-2 px-5 pt-6">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <Leaf className="h-4 w-4" aria-hidden />
          </span>
          <span className="text-lg font-extrabold tracking-tight text-foreground">
            Little Wins
          </span>
        </div>

        <main className="flex-1 px-5 pb-40 pt-6">
          {tab === "today" ? <TodayView /> : <ProgressView />}
        </main>

        {/* Floating add button */}
        <button
          type="button"
          onClick={() => setCreating(true)}
          aria-label="Add a new habit"
          className="fixed bottom-24 left-1/2 z-30 flex h-14 w-14 -translate-x-1/2 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/30 transition-transform hover:scale-105 active:scale-95 sm:left-auto sm:right-[calc(50%-13rem)] sm:translate-x-0"
        >
          <Plus className="h-7 w-7" strokeWidth={2.5} aria-hidden />
        </button>

        {/* Bottom navigation */}
        <nav className="fixed inset-x-0 bottom-0 z-20 border-t border-border bg-background/90 backdrop-blur-sm">
          <div className="mx-auto flex w-full max-w-md items-stretch">
            <NavButton
              active={tab === "today"}
              onClick={() => setTab("today")}
              label="Today"
              icon={<Sun className="h-5 w-5" aria-hidden />}
            />
            <NavButton
              active={tab === "progress"}
              onClick={() => setTab("progress")}
              label="Progress"
              icon={<CalendarDays className="h-5 w-5" aria-hidden />}
            />
          </div>
        </nav>

        <CreateHabit open={creating} onClose={() => setCreating(false)} />
      </div>
    </HabitProvider>
  )
}

function NavButton({
  active,
  onClick,
  label,
  icon,
}: {
  active: boolean
  onClick: () => void
  label: string
  icon: React.ReactNode
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-current={active ? "page" : undefined}
      className={cn(
        "flex flex-1 flex-col items-center gap-1 py-3 text-xs font-bold transition-colors",
        active ? "text-primary" : "text-muted-foreground hover:text-foreground",
      )}
    >
      {icon}
      {label}
    </button>
  )
}
