'use client'

import { Check, Flame, Plus } from 'lucide-react'
import { HabitIcon } from '@/components/habit-icon'
import { Button } from '@/components/ui/button'
import {
  currentStreak,
  isScheduledOn,
  toDateKey,
  type Habit,
} from '@/lib/habits'
import { cn } from '@/lib/utils'

function formatReminder(time: string | null): string | null {
  if (!time) return null
  const [h, m] = time.split(':').map(Number)
  const period = h >= 12 ? 'pm' : 'am'
  const hour = h % 12 === 0 ? 12 : h % 12
  return `${hour}:${String(m).padStart(2, '0')} ${period}`
}

function greeting(date: Date): string {
  const h = date.getHours()
  if (h < 12) return 'Good morning'
  if (h < 18) return 'Good afternoon'
  return 'Good evening'
}

function encouragement(done: number, total: number): string {
  if (total === 0) return "Nothing scheduled today — enjoy the rest."
  if (done === 0) return "A fresh start whenever you're ready."
  if (done === total) return "Every one done. What a lovely day for you."
  if (done === 1) return "That's one small win. No rush on the rest."
  return `${done} done so far — you're moving gently forward.`
}

export function TodayView({
  habits,
  today,
  onToggle,
  onCreate,
}: {
  habits: Habit[]
  today: Date
  onToggle: (id: string) => void
  onCreate: () => void
}) {
  const todays = habits.filter((h) => isScheduledOn(h, today))
  const todayKey = toDateKey(today)
  const doneCount = todays.filter((h) => h.completions[todayKey]).length
  const dateLabel = today.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  })

  return (
    <div className="flex flex-col gap-6">
      <header className="flex flex-col gap-1">
        <p className="text-sm font-medium text-muted-foreground">{dateLabel}</p>
        <h1 className="text-pretty text-2xl font-extrabold tracking-tight text-foreground">
          {greeting(today)}
        </h1>
        <p className="text-pretty leading-relaxed text-muted-foreground">
          {encouragement(doneCount, todays.length)}
        </p>
      </header>

      {todays.length > 0 && (
        <div
          className="rounded-3xl border border-border bg-card p-5"
          aria-label="Today's progress"
        >
          <div className="mb-3 flex items-baseline justify-between">
            <span className="text-sm font-semibold text-foreground">
              Today&apos;s rhythm
            </span>
            <span className="text-sm font-medium text-muted-foreground">
              {doneCount} of {todays.length}
            </span>
          </div>
          <div className="flex gap-1.5" role="presentation">
            {todays.map((h) => (
              <div
                key={h.id}
                className={cn(
                  'h-2.5 flex-1 rounded-full transition-colors duration-500',
                  h.completions[todayKey] ? 'bg-primary' : 'bg-muted',
                )}
              />
            ))}
          </div>
        </div>
      )}

      <ul className="flex flex-col gap-3">
        {todays.map((habit) => {
          const done = !!habit.completions[todayKey]
          const streak = currentStreak(habit, today)
          const reminder = formatReminder(habit.reminderTime)
          return (
            <li key={habit.id}>
              <div
                className={cn(
                  'flex items-center gap-4 rounded-3xl border p-4 transition-colors duration-300',
                  done
                    ? 'border-primary/25 bg-accent'
                    : 'border-border bg-card',
                )}
              >
                <span
                  className={cn(
                    'flex size-12 shrink-0 items-center justify-center rounded-2xl transition-colors duration-300',
                    done
                      ? 'bg-primary/15 text-primary'
                      : 'bg-muted text-muted-foreground',
                  )}
                >
                  <HabitIcon name={habit.icon} className="size-5" />
                </span>

                <div className="flex min-w-0 flex-1 flex-col">
                  <span
                    className={cn(
                      'truncate font-semibold text-foreground transition-opacity',
                      done && 'opacity-70',
                    )}
                  >
                    {habit.name}
                  </span>
                  <span className="flex items-center gap-2 text-sm text-muted-foreground">
                    {streak > 0 && (
                      <span className="inline-flex items-center gap-1 font-medium text-primary">
                        <Flame className="size-3.5" aria-hidden="true" />
                        {streak} day{streak === 1 ? '' : 's'}
                      </span>
                    )}
                    {streak > 0 && reminder && (
                      <span aria-hidden="true">·</span>
                    )}
                    {reminder && <span>{reminder}</span>}
                    {streak === 0 && !reminder && <span>Ready when you are</span>}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => onToggle(habit.id)}
                  aria-pressed={done}
                  aria-label={
                    done
                      ? `Mark ${habit.name} as not done`
                      : `Mark ${habit.name} as done`
                  }
                  className={cn(
                    'flex size-11 shrink-0 items-center justify-center rounded-full border-2 transition-all duration-200 outline-none focus-visible:ring-3 focus-visible:ring-ring/50 active:scale-90',
                    done
                      ? 'border-primary bg-primary text-primary-foreground'
                      : 'border-border bg-background text-transparent hover:border-primary/50',
                  )}
                >
                  <Check
                    className={cn(
                      'size-5 transition-transform duration-200',
                      done ? 'scale-100' : 'scale-0',
                    )}
                    strokeWidth={3}
                  />
                </button>
              </div>
            </li>
          )
        })}
      </ul>

      <Button
        variant="outline"
        onClick={onCreate}
        className="h-12 rounded-2xl border-dashed text-muted-foreground hover:text-foreground"
      >
        <Plus className="size-4" />
        Add a new habit
      </Button>
    </div>
  )
}
