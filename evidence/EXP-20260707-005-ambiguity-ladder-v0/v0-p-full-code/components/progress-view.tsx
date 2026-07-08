"use client"

import { useState } from "react"
import { Check, ChevronLeft, ChevronRight, Flame } from "lucide-react"
import {
  addDays,
  COLOR_STYLES,
  currentStreak,
  DAY_LABELS,
  isScheduledOn,
  toISO,
  weekDates,
  type Habit,
} from "@/lib/habits"
import { useHabits } from "@/components/habit-store"
import { cn } from "@/lib/utils"

function DayDot({
  habit,
  date,
  isFuture,
}: {
  habit: Habit
  date: Date
  isFuture: boolean
}) {
  const styles = COLOR_STYLES[habit.color]
  const scheduled = isScheduledOn(habit, date)
  const done = Boolean(habit.completions[toISO(date)])

  if (!scheduled) {
    return (
      <div className="flex h-9 items-center justify-center">
        <span className="h-1.5 w-1.5 rounded-full bg-border" aria-hidden />
      </div>
    )
  }

  return (
    <div className="flex h-9 items-center justify-center">
      <span
        className={cn(
          "flex h-8 w-8 items-center justify-center rounded-full text-primary-foreground transition-colors",
          done
            ? styles.dot
            : isFuture
              ? "border-2 border-dashed border-border"
              : "border-2 border-border bg-background",
        )}
      >
        {done && <Check className="h-4 w-4" strokeWidth={3} aria-hidden />}
      </span>
    </div>
  )
}

function HabitRow({ habit, week }: { habit: Habit; week: Date[] }) {
  const styles = COLOR_STYLES[habit.color]
  const streak = currentStreak(habit)
  const todayIso = toISO(new Date())

  const scheduledInWeek = week.filter((d) => isScheduledOn(habit, d))
  const doneInWeek = scheduledInWeek.filter(
    (d) => habit.completions[toISO(d)],
  ).length

  return (
    <div className="rounded-3xl border border-border bg-card p-4">
      <div className="flex items-center justify-between gap-3">
        <div className="flex min-w-0 items-center gap-2.5">
          <span className={cn("h-3 w-3 shrink-0 rounded-full", styles.dot)} aria-hidden />
          <p className="truncate text-sm font-semibold text-foreground">
            {habit.name}
          </p>
        </div>
        {streak > 0 && (
          <span
            className={cn(
              "inline-flex shrink-0 items-center gap-1 text-xs font-bold",
              styles.softText,
            )}
          >
            <Flame className="h-3.5 w-3.5" aria-hidden />
            {streak}
          </span>
        )}
      </div>

      <div className="mt-3 grid grid-cols-7 gap-1">
        {week.map((d) => {
          const iso = toISO(d)
          const isFuture = iso > todayIso
          return <DayDot key={iso} habit={habit} date={d} isFuture={isFuture} />
        })}
      </div>

      <p className="mt-2 text-xs font-medium text-muted-foreground">
        {scheduledInWeek.length === 0
          ? "Resting this week"
          : `${doneInWeek} of ${scheduledInWeek.length} this week`}
      </p>
    </div>
  )
}

export function ProgressView() {
  const { habits } = useHabits()
  const [weekOffset, setWeekOffset] = useState(0)
  const ref = addDays(new Date(), weekOffset * 7)
  const week = weekDates(ref)
  const todayIso = toISO(new Date())

  const bestStreak = habits.reduce(
    (max, h) => Math.max(max, currentStreak(h)),
    0,
  )

  // Weekly consistency across all scheduled habit-days in the visible week.
  let scheduledCount = 0
  let doneCount = 0
  for (const h of habits) {
    for (const d of week) {
      if (toISO(d) > todayIso) continue
      if (isScheduledOn(h, d)) {
        scheduledCount++
        if (h.completions[toISO(d)]) doneCount++
      }
    }
  }
  const consistency =
    scheduledCount === 0 ? 0 : Math.round((doneCount / scheduledCount) * 100)

  const rangeLabel = `${week[0].toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  })} – ${week[6].toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  })}`

  return (
    <div className="flex flex-col gap-6">
      <header className="flex flex-col gap-4">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-foreground">
            Your progress
          </h1>
          <p className="mt-1 text-pretty text-sm leading-relaxed text-muted-foreground">
            A gentle look at how your routines are growing. Gaps are just part
            of the rhythm.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-3xl border border-border bg-card p-4">
            <p className="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground">
              <Flame className="h-4 w-4 text-primary" aria-hidden />
              Longest streak
            </p>
            <p className="mt-1.5 text-2xl font-extrabold text-foreground">
              {bestStreak}
              <span className="ml-1 text-sm font-semibold text-muted-foreground">
                day{bestStreak === 1 ? "" : "s"}
              </span>
            </p>
          </div>
          <div className="rounded-3xl border border-border bg-card p-4">
            <p className="text-xs font-semibold text-muted-foreground">
              This week
            </p>
            <p className="mt-1.5 text-2xl font-extrabold text-foreground">
              {consistency}
              <span className="ml-0.5 text-sm font-semibold text-muted-foreground">
                %
              </span>
            </p>
          </div>
        </div>
      </header>

      <section aria-label="Weekly habit progress" className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <button
            type="button"
            onClick={() => setWeekOffset((w) => w - 1)}
            aria-label="Previous week"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-colors hover:text-foreground"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden />
          </button>
          <p className="text-sm font-bold text-foreground">
            {weekOffset === 0 ? "This week" : rangeLabel}
          </p>
          <button
            type="button"
            onClick={() => setWeekOffset((w) => Math.min(0, w + 1))}
            disabled={weekOffset === 0}
            aria-label="Next week"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-colors hover:text-foreground disabled:opacity-40"
          >
            <ChevronRight className="h-5 w-5" aria-hidden />
          </button>
        </div>

        <div className="grid grid-cols-7 gap-1 px-4">
          {week.map((d, i) => {
            const isToday = toISO(d) === todayIso
            return (
              <div
                key={toISO(d)}
                className={cn(
                  "flex flex-col items-center gap-0.5 text-xs font-bold",
                  isToday ? "text-primary" : "text-muted-foreground",
                )}
              >
                <span>{DAY_LABELS[i]}</span>
                <span className="text-[0.7rem] font-semibold tabular-nums">
                  {d.getDate()}
                </span>
              </div>
            )
          })}
        </div>

        {habits.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-border bg-card/50 p-8 text-center text-sm text-muted-foreground">
            Add your first habit to start seeing your progress here.
          </div>
        ) : (
          habits.map((habit) => (
            <HabitRow key={habit.id} habit={habit} week={week} />
          ))
        )}
      </section>
    </div>
  )
}
