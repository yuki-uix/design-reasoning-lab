'use client'

import { useState } from 'react'
import { Check, ChevronLeft, ChevronRight, Flame } from 'lucide-react'
import { HabitIcon } from '@/components/habit-icon'
import {
  DAY_LABELS,
  addDays,
  bestStreak,
  currentStreak,
  isScheduledOn,
  toDateKey,
  weekDates,
  type Habit,
} from '@/lib/habits'
import { cn } from '@/lib/utils'

export function ProgressView({
  habits,
  today,
}: {
  habits: Habit[]
  today: Date
}) {
  const [weekOffset, setWeekOffset] = useState(0)
  const reference = addDays(today, weekOffset * 7)
  const days = weekDates(reference)
  const todayKey = toDateKey(today)

  const weekLabel =
    weekOffset === 0
      ? 'This week'
      : weekOffset === -1
        ? 'Last week'
        : `${days[0].toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} – ${days[6].toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}`

  // Weekly completion rate across scheduled days (past + today only).
  let scheduled = 0
  let completed = 0
  for (const habit of habits) {
    for (const d of days) {
      if (d > today) continue
      if (isScheduledOn(habit, d)) {
        scheduled++
        if (habit.completions[toDateKey(d)]) completed++
      }
    }
  }
  const rate = scheduled === 0 ? 0 : Math.round((completed / scheduled) * 100)

  return (
    <div className="flex flex-col gap-6">
      <header className="flex flex-col gap-1">
        <h1 className="text-2xl font-extrabold tracking-tight text-foreground">
          Your progress
        </h1>
        <p className="text-pretty leading-relaxed text-muted-foreground">
          {rate >= 80
            ? 'Beautifully steady. Look how far you have come.'
            : rate >= 40
              ? 'Nice and consistent — every dot is a choice you made.'
              : 'Every mark counts. Small and steady is more than enough.'}
        </p>
      </header>

      <div className="rounded-3xl border border-border bg-card p-5">
        <div className="mb-4 flex items-center justify-between">
          <button
            type="button"
            onClick={() => setWeekOffset((o) => o - 1)}
            aria-label="Previous week"
            className="flex size-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            <ChevronLeft className="size-5" />
          </button>
          <span className="text-sm font-semibold text-foreground">
            {weekLabel}
          </span>
          <button
            type="button"
            onClick={() => setWeekOffset((o) => Math.min(0, o + 1))}
            disabled={weekOffset >= 0}
            aria-label="Next week"
            className="flex size-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground disabled:pointer-events-none disabled:opacity-30"
          >
            <ChevronRight className="size-5" />
          </button>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex flex-1 flex-col gap-1">
            <div className="flex items-baseline gap-1.5">
              <span className="text-3xl font-extrabold text-foreground">
                {rate}%
              </span>
              <span className="text-sm font-medium text-muted-foreground">
                of planned habits kept
              </span>
            </div>
            <div className="h-2.5 w-full overflow-hidden rounded-full bg-muted">
              <div
                className="h-full rounded-full bg-primary transition-all duration-700"
                style={{ width: `${rate}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      <ul className="flex flex-col gap-3">
        {habits.map((habit) => {
          const streak = currentStreak(habit, today)
          const best = bestStreak(habit)
          return (
            <li
              key={habit.id}
              className="rounded-3xl border border-border bg-card p-5"
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-2xl bg-muted text-muted-foreground">
                  <HabitIcon name={habit.icon} className="size-5" />
                </span>
                <div className="flex min-w-0 flex-1 flex-col">
                  <span className="truncate font-semibold text-foreground">
                    {habit.name}
                  </span>
                  <span className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="inline-flex items-center gap-1 font-medium text-primary">
                      <Flame className="size-3.5" aria-hidden="true" />
                      {streak} day{streak === 1 ? '' : 's'} now
                    </span>
                    <span aria-hidden="true">·</span>
                    <span>best {best}</span>
                  </span>
                </div>
              </div>

              <div className="flex justify-between gap-1.5">
                {days.map((d, i) => {
                  const key = toDateKey(d)
                  const done = !!habit.completions[key]
                  const planned = isScheduledOn(habit, d)
                  const future = d > today
                  const isToday = key === todayKey
                  return (
                    <div
                      key={key}
                      className="flex flex-1 flex-col items-center gap-1.5"
                    >
                      <span
                        className={cn(
                          'text-xs font-medium',
                          isToday
                            ? 'text-primary'
                            : 'text-muted-foreground',
                        )}
                      >
                        {DAY_LABELS[i]}
                      </span>
                      <div
                        className={cn(
                          'flex aspect-square w-full max-w-11 items-center justify-center rounded-2xl border transition-colors',
                          done && 'border-primary bg-primary text-primary-foreground',
                          !done &&
                            planned &&
                            !future &&
                            'border-border bg-background',
                          !done &&
                            planned &&
                            future &&
                            'border-dashed border-border bg-transparent',
                          !planned && 'border-transparent bg-muted/50',
                          isToday && !done && 'border-primary',
                        )}
                        aria-label={`${DAY_LABELS[i]} ${d.getDate()}: ${
                          !planned
                            ? 'rest day'
                            : done
                              ? 'completed'
                              : future
                                ? 'upcoming'
                                : 'not marked'
                        }`}
                      >
                        {done ? (
                          <Check className="size-4" strokeWidth={3} />
                        ) : planned ? (
                          <span
                            className={cn(
                              'size-1.5 rounded-full',
                              future ? 'bg-border' : 'bg-muted-foreground/40',
                            )}
                          />
                        ) : null}
                      </div>
                    </div>
                  )
                })}
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
