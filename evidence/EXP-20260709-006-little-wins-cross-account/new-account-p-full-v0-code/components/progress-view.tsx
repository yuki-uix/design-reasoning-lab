"use client"

import { Flame, Check } from "lucide-react"
import {
  weekDays,
  toISO,
  currentStreak,
  weekProgress,
  WEEKDAY_LABELS,
  type Habit,
} from "@/lib/habits"
import { HabitIcon } from "@/components/habit-icon"
import { cn } from "@/lib/utils"

export function ProgressView({
  habits,
  today,
}: {
  habits: Habit[]
  today: Date
}) {
  const days = weekDays(today)
  const todayISO = toISO(today)

  // gentle overall summary
  const totals = habits.reduce(
    (acc, h) => {
      const { done, scheduled } = weekProgress(h, today)
      acc.done += done
      acc.scheduled += scheduled
      return acc
    },
    { done: 0, scheduled: 0 },
  )
  const bestStreak = habits.reduce(
    (max, h) => Math.max(max, currentStreak(h, today)),
    0,
  )
  const weekPct =
    totals.scheduled === 0
      ? 0
      : Math.round((totals.done / totals.scheduled) * 100)

  const rangeLabel = `${days[0].toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  })} – ${days[6].toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  })}`

  return (
    <div>
      <header className="mb-7">
        <p className="text-sm font-semibold text-primary">This week</p>
        <h1 className="mt-1 text-3xl font-extrabold tracking-tight text-foreground text-balance">
          Look how far you&apos;ve come
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">{rangeLabel}</p>
      </header>

      {/* summary stats */}
      <section className="mb-7 grid grid-cols-2 gap-3">
        <div className="rounded-3xl bg-card p-5 shadow-sm ring-1 ring-border/60">
          <p className="text-sm font-medium text-muted-foreground">
            Check-ins this week
          </p>
          <p className="mt-1 text-3xl font-extrabold text-foreground">
            {totals.done}
            <span className="text-lg font-bold text-muted-foreground">
              {" "}
              / {totals.scheduled}
            </span>
          </p>
        </div>
        <div className="rounded-3xl bg-accent/60 p-5 ring-1 ring-primary/20">
          <p className="flex items-center gap-1.5 text-sm font-medium text-accent-foreground">
            <Flame className="size-4" aria-hidden="true" />
            Longest streak
          </p>
          <p className="mt-1 text-3xl font-extrabold text-accent-foreground">
            {bestStreak}
            <span className="text-lg font-bold"> days</span>
          </p>
        </div>
      </section>

      {/* per-habit weekly streak visualization */}
      <ul className="flex flex-col gap-3">
        {habits.map((habit) => {
          const streak = currentStreak(habit, today)
          const { done, scheduled } = weekProgress(habit, today)
          return (
            <li
              key={habit.id}
              className="rounded-3xl bg-card p-5 shadow-sm ring-1 ring-border/60"
            >
              <div className="flex items-center gap-3">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-2xl bg-muted text-muted-foreground">
                  <HabitIcon name={habit.icon} className="size-5" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="truncate font-bold text-foreground">
                    {habit.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {done} of {scheduled} this week
                    {streak > 0 && (
                      <span className="font-semibold text-primary">
                        {" "}
                        · {streak}-day streak
                      </span>
                    )}
                  </p>
                </div>
              </div>

              {/* week dots */}
              <div className="mt-4 flex items-center justify-between gap-1">
                {days.map((d, i) => {
                  const iso = toISO(d)
                  const scheduledDay = habit.days.includes(d.getDay())
                  const complete = habit.history.has(iso)
                  const isToday = iso === todayISO
                  return (
                    <div
                      key={iso}
                      className="flex flex-1 flex-col items-center gap-1.5"
                    >
                      <span
                        className={cn(
                          "text-[0.65rem] font-semibold",
                          isToday
                            ? "text-primary"
                            : "text-muted-foreground/70",
                        )}
                      >
                        {WEEKDAY_LABELS[i]}
                      </span>
                      <span
                        className={cn(
                          "flex aspect-square w-full max-w-9 items-center justify-center rounded-xl transition-colors",
                          !scheduledDay &&
                            "bg-transparent text-transparent ring-1 ring-dashed ring-border/50",
                          scheduledDay &&
                            complete &&
                            "bg-primary text-primary-foreground",
                          scheduledDay &&
                            !complete &&
                            "bg-muted text-transparent",
                          isToday &&
                            scheduledDay &&
                            !complete &&
                            "ring-2 ring-primary/40",
                        )}
                        aria-label={`${WEEKDAY_LABELS[i]} ${
                          !scheduledDay
                            ? "rest day"
                            : complete
                              ? "completed"
                              : "not yet"
                        }`}
                      >
                        {scheduledDay && complete && (
                          <Check className="size-4" strokeWidth={3} aria-hidden="true" />
                        )}
                      </span>
                    </div>
                  )
                })}
              </div>
            </li>
          )
        })}
      </ul>

      <p className="mt-6 text-center text-sm leading-relaxed text-muted-foreground text-pretty">
        Missed days aren&apos;t failures — they&apos;re just part of a real,
        busy life. Every check-in is a win worth celebrating.
      </p>
    </div>
  )
}
