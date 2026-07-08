"use client"

import { Sparkles, Sun } from "lucide-react"
import { encouragement, isScheduledOn, toISO } from "@/lib/habits"
import { useHabits } from "@/components/habit-store"
import { HabitCard } from "@/components/habit-card"

function greeting(date: Date): string {
  const h = date.getHours()
  if (h < 12) return "Good morning"
  if (h < 18) return "Good afternoon"
  return "Good evening"
}

export function TodayView() {
  const { habits } = useHabits()
  const today = new Date()
  const iso = toISO(today)

  const todays = habits.filter((h) => isScheduledOn(h, today))
  const done = todays.filter((h) => h.completions[iso]).length
  const total = todays.length
  const pct = total === 0 ? 0 : Math.round((done / total) * 100)

  const dateLabel = today.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  })

  return (
    <div className="flex flex-col gap-6">
      <header className="flex flex-col gap-4">
        <div>
          <p className="flex items-center gap-2 text-sm font-semibold text-primary">
            <Sun className="h-4 w-4" aria-hidden />
            {dateLabel}
          </p>
          <h1 className="mt-1 text-pretty text-3xl font-extrabold tracking-tight text-foreground">
            {greeting(today)}, Riley
          </h1>
        </div>

        <div className="rounded-3xl border border-border bg-card p-5">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                Today&apos;s little wins
              </p>
              <p className="mt-1 text-2xl font-extrabold text-foreground">
                {done}{" "}
                <span className="text-lg font-semibold text-muted-foreground">
                  of {total}
                </span>
              </p>
            </div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/12 px-3 py-1.5 text-sm font-bold text-primary">
              <Sparkles className="h-4 w-4" aria-hidden />
              {pct}%
            </span>
          </div>
          <div
            className="mt-4 h-2.5 w-full overflow-hidden rounded-full bg-muted"
            role="progressbar"
            aria-valuenow={pct}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label="Today's progress"
          >
            <div
              className="h-full rounded-full bg-primary transition-[width] duration-500 ease-out"
              style={{ width: `${pct}%` }}
            />
          </div>
          <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground">
            {encouragement(done, total)}
          </p>
        </div>
      </header>

      <section aria-label="Today's habits" className="flex flex-col gap-3">
        {todays.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-border bg-card/50 p-8 text-center">
            <p className="text-base font-semibold text-foreground">
              Nothing scheduled today
            </p>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
              Enjoy the breathing room. Your routines will be here tomorrow.
            </p>
          </div>
        ) : (
          todays.map((habit) => (
            <HabitCard key={habit.id} habit={habit} date={today} />
          ))
        )}
      </section>
    </div>
  )
}
