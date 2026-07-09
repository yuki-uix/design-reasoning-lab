'use client'

import { useState } from 'react'
import { Bell, BellOff, Check, X } from 'lucide-react'
import { HabitIcon } from '@/components/habit-icon'
import { Button } from '@/components/ui/button'
import {
  DAY_LABELS,
  HABIT_ICONS,
  makeId,
  toDateKey,
  type Habit,
  type ScheduleType,
} from '@/lib/habits'
import { cn } from '@/lib/utils'

const SCHEDULE_OPTIONS: { value: ScheduleType; label: string }[] = [
  { value: 'daily', label: 'Every day' },
  { value: 'weekdays', label: 'Weekdays' },
  { value: 'custom', label: 'Custom' },
]

export function CreateHabitFlow({
  open,
  onClose,
  onCreate,
}: {
  open: boolean
  onClose: () => void
  onCreate: (habit: Habit) => void
}) {
  const [name, setName] = useState('')
  const [icon, setIcon] = useState<string>(HABIT_ICONS[0])
  const [scheduleType, setScheduleType] = useState<ScheduleType>('daily')
  const [days, setDays] = useState<number[]>([1, 3, 5])
  const [reminderOn, setReminderOn] = useState(true)
  const [reminderTime, setReminderTime] = useState('08:00')

  function reset() {
    setName('')
    setIcon(HABIT_ICONS[0])
    setScheduleType('daily')
    setDays([1, 3, 5])
    setReminderOn(true)
    setReminderTime('08:00')
  }

  function close() {
    reset()
    onClose()
  }

  function toggleDay(d: number) {
    setDays((prev) =>
      prev.includes(d) ? prev.filter((x) => x !== d) : [...prev, d],
    )
  }

  const canSave =
    name.trim().length > 0 &&
    (scheduleType !== 'custom' || days.length > 0)

  function handleSubmit() {
    if (!canSave) return
    const habit: Habit = {
      id: makeId(),
      name: name.trim(),
      icon,
      scheduleType,
      days:
        scheduleType === 'custom'
          ? days
          : scheduleType === 'weekdays'
            ? [1, 2, 3, 4, 5]
            : [0, 1, 2, 3, 4, 5, 6],
      reminderTime: reminderOn ? reminderTime : null,
      createdAt: toDateKey(new Date()),
      completions: {},
    }
    onCreate(habit)
    reset()
  }

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center sm:items-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby="create-habit-title"
    >
      <button
        type="button"
        aria-label="Close"
        onClick={close}
        className="absolute inset-0 bg-foreground/20 backdrop-blur-[2px]"
      />

      <div className="relative flex max-h-[92vh] w-full max-w-md flex-col overflow-hidden rounded-t-4xl border border-border bg-background shadow-xl sm:rounded-4xl">
        <div className="flex items-start justify-between gap-4 px-6 pt-6 pb-2">
          <div className="flex flex-col gap-1">
            <h2
              id="create-habit-title"
              className="text-xl font-extrabold tracking-tight text-foreground"
            >
              Start something small
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Pick one thing you&apos;d like to return to. You can always change
              it later.
            </p>
          </div>
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="flex size-9 shrink-0 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            <X className="size-5" />
          </button>
        </div>

        <div className="flex flex-col gap-6 overflow-y-auto px-6 pt-4 pb-2">
          {/* Name */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="habit-name"
              className="text-sm font-semibold text-foreground"
            >
              What would you like to do?
            </label>
            <input
              id="habit-name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Step outside for fresh air"
              autoComplete="off"
              className="h-12 rounded-2xl border border-border bg-card px-4 text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus-visible:border-primary focus-visible:ring-3 focus-visible:ring-ring/40"
            />
          </div>

          {/* Icon */}
          <div className="flex flex-col gap-2">
            <span className="text-sm font-semibold text-foreground">
              Choose an icon
            </span>
            <div className="grid grid-cols-6 gap-2">
              {HABIT_ICONS.map((name) => {
                const selected = icon === name
                return (
                  <button
                    key={name}
                    type="button"
                    onClick={() => setIcon(name)}
                    aria-label={`Icon ${name}`}
                    aria-pressed={selected}
                    className={cn(
                      'flex aspect-square items-center justify-center rounded-2xl border transition-colors',
                      selected
                        ? 'border-primary bg-primary/15 text-primary'
                        : 'border-border bg-card text-muted-foreground hover:bg-muted',
                    )}
                  >
                    <HabitIcon name={name} className="size-5" />
                  </button>
                )
              })}
            </div>
          </div>

          {/* Schedule */}
          <div className="flex flex-col gap-2">
            <span className="text-sm font-semibold text-foreground">
              How often?
            </span>
            <div className="flex gap-1.5 rounded-2xl bg-muted p-1.5">
              {SCHEDULE_OPTIONS.map((opt) => {
                const selected = scheduleType === opt.value
                return (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => setScheduleType(opt.value)}
                    className={cn(
                      'flex-1 rounded-xl py-2 text-sm font-medium transition-colors',
                      selected
                        ? 'bg-card text-foreground shadow-sm'
                        : 'text-muted-foreground hover:text-foreground',
                    )}
                  >
                    {opt.label}
                  </button>
                )
              })}
            </div>
            {scheduleType === 'custom' && (
              <div className="mt-1 flex justify-between gap-1.5">
                {DAY_LABELS.map((label, i) => {
                  const selected = days.includes(i)
                  return (
                    <button
                      key={i}
                      type="button"
                      onClick={() => toggleDay(i)}
                      aria-pressed={selected}
                      aria-label={`Toggle day ${label}`}
                      className={cn(
                        'flex size-10 items-center justify-center rounded-full border text-sm font-semibold transition-colors',
                        selected
                          ? 'border-primary bg-primary text-primary-foreground'
                          : 'border-border bg-card text-muted-foreground hover:bg-muted',
                      )}
                    >
                      {label}
                    </button>
                  )
                })}
              </div>
            )}
          </div>

          {/* Reminder */}
          <div className="flex flex-col gap-2">
            <span className="text-sm font-semibold text-foreground">
              A gentle nudge?
            </span>
            <div className="flex items-center gap-3 rounded-2xl border border-border bg-card p-3">
              <span
                className={cn(
                  'flex size-10 shrink-0 items-center justify-center rounded-xl transition-colors',
                  reminderOn
                    ? 'bg-primary/15 text-primary'
                    : 'bg-muted text-muted-foreground',
                )}
              >
                {reminderOn ? (
                  <Bell className="size-5" />
                ) : (
                  <BellOff className="size-5" />
                )}
              </span>
              <div className="flex flex-1 flex-col">
                <span className="text-sm font-medium text-foreground">
                  Reminder
                </span>
                <span className="text-xs text-muted-foreground">
                  {reminderOn ? 'We will softly remind you' : 'No reminder'}
                </span>
              </div>
              {reminderOn && (
                <input
                  type="time"
                  value={reminderTime}
                  onChange={(e) => setReminderTime(e.target.value)}
                  aria-label="Reminder time"
                  className="rounded-xl border border-border bg-background px-3 py-1.5 text-sm text-foreground outline-none focus-visible:border-primary focus-visible:ring-3 focus-visible:ring-ring/40"
                />
              )}
              <button
                type="button"
                role="switch"
                aria-checked={reminderOn}
                aria-label="Toggle reminder"
                onClick={() => setReminderOn((v) => !v)}
                className={cn(
                  'relative h-6 w-11 shrink-0 rounded-full transition-colors',
                  reminderOn ? 'bg-primary' : 'bg-muted-foreground/30',
                )}
              >
                <span
                  className={cn(
                    'absolute top-0.5 size-5 rounded-full bg-background transition-transform',
                    reminderOn ? 'translate-x-[22px]' : 'translate-x-0.5',
                  )}
                />
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 px-6 pt-4 pb-6">
          <Button
            onClick={handleSubmit}
            disabled={!canSave}
            className="h-12 rounded-2xl text-base"
          >
            <Check className="size-4" />
            Add this habit
          </Button>
          <p className="text-center text-xs text-muted-foreground">
            No streak to protect yet — just a kind place to begin.
          </p>
        </div>
      </div>
    </div>
  )
}
