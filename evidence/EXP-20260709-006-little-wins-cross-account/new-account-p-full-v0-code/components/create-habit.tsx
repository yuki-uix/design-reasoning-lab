"use client"

import { useState } from "react"
import { ArrowLeft, Bell, BellOff, Check } from "lucide-react"
import {
  ICON_OPTIONS,
  WEEKDAY_LABELS,
  type IconName,
} from "@/lib/habits"
import { HabitIcon } from "@/components/habit-icon"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export type NewHabitInput = {
  name: string
  note: string
  icon: IconName
  days: number[]
  reminderTime: string
}

const SCHEDULE_PRESETS: { label: string; days: number[] }[] = [
  { label: "Every day", days: [0, 1, 2, 3, 4, 5, 6] },
  { label: "Weekdays", days: [1, 2, 3, 4, 5] },
  { label: "Weekends", days: [0, 6] },
]

function sameDays(a: number[], b: number[]) {
  if (a.length !== b.length) return false
  const s = new Set(a)
  return b.every((d) => s.has(d))
}

export function CreateHabit({
  onSave,
  onCancel,
}: {
  onSave: (input: NewHabitInput) => void
  onCancel: () => void
}) {
  const [name, setName] = useState("")
  const [note, setNote] = useState("")
  const [icon, setIcon] = useState<IconName>("sparkles")
  const [days, setDays] = useState<number[]>([0, 1, 2, 3, 4, 5, 6])
  const [reminderOn, setReminderOn] = useState(true)
  const [reminderTime, setReminderTime] = useState("08:00")

  function toggleDay(d: number) {
    setDays((prev) =>
      prev.includes(d) ? prev.filter((x) => x !== d) : [...prev, d].sort(),
    )
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    onSave({
      name,
      note,
      icon,
      days,
      reminderTime: reminderOn ? reminderTime : "",
    })
  }

  const canSave = name.trim().length > 0 && days.length > 0

  return (
    <form onSubmit={handleSubmit}>
      <header className="mb-6 flex items-center gap-3">
        <button
          type="button"
          onClick={onCancel}
          aria-label="Go back"
          className="flex size-9 items-center justify-center rounded-full bg-card text-muted-foreground ring-1 ring-border/60 transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-5" aria-hidden="true" />
        </button>
        <div>
          <h1 className="text-2xl font-extrabold tracking-tight text-foreground">
            Add a habit
          </h1>
          <p className="text-sm text-muted-foreground">
            Start small. You can always adjust it later.
          </p>
        </div>
      </header>

      <div className="flex flex-col gap-6">
        {/* name + note */}
        <section className="rounded-3xl bg-card p-5 shadow-sm ring-1 ring-border/60">
          <label
            htmlFor="habit-name"
            className="block text-sm font-semibold text-foreground"
          >
            What would you like to nurture?
          </label>
          <input
            id="habit-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Stretch for two minutes"
            className="mt-2 w-full rounded-2xl border border-input bg-background px-4 py-3 text-base text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary focus:ring-2 focus:ring-ring/30"
          />

          <label
            htmlFor="habit-note"
            className="mt-4 block text-sm font-semibold text-foreground"
          >
            A kind reminder to yourself{" "}
            <span className="font-normal text-muted-foreground">
              (optional)
            </span>
          </label>
          <input
            id="habit-note"
            type="text"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="Why this matters to you"
            className="mt-2 w-full rounded-2xl border border-input bg-background px-4 py-3 text-base text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary focus:ring-2 focus:ring-ring/30"
          />
        </section>

        {/* icon */}
        <section className="rounded-3xl bg-card p-5 shadow-sm ring-1 ring-border/60">
          <p className="text-sm font-semibold text-foreground">
            Pick a little symbol
          </p>
          <div className="mt-3 grid grid-cols-4 gap-3">
            {ICON_OPTIONS.map((opt) => {
              const active = icon === opt.value
              return (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => setIcon(opt.value)}
                  aria-pressed={active}
                  className={cn(
                    "flex flex-col items-center gap-1.5 rounded-2xl py-3 text-xs font-semibold transition-colors",
                    active
                      ? "bg-primary/15 text-primary ring-2 ring-primary/30"
                      : "bg-muted text-muted-foreground hover:text-foreground",
                  )}
                >
                  <HabitIcon name={opt.value} className="size-6" />
                  {opt.label}
                </button>
              )
            })}
          </div>
        </section>

        {/* schedule */}
        <section className="rounded-3xl bg-card p-5 shadow-sm ring-1 ring-border/60">
          <p className="text-sm font-semibold text-foreground">
            When feels right?
          </p>

          <div className="mt-3 flex flex-wrap gap-2">
            {SCHEDULE_PRESETS.map((preset) => {
              const active = sameDays(days, preset.days)
              return (
                <button
                  key={preset.label}
                  type="button"
                  onClick={() => setDays(preset.days)}
                  aria-pressed={active}
                  className={cn(
                    "rounded-full px-4 py-1.5 text-sm font-semibold transition-colors",
                    active
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:text-foreground",
                  )}
                >
                  {preset.label}
                </button>
              )
            })}
          </div>

          <div className="mt-4 flex items-center justify-between gap-1.5">
            {WEEKDAY_LABELS.map((label, d) => {
              const active = days.includes(d)
              return (
                <button
                  key={d}
                  type="button"
                  onClick={() => toggleDay(d)}
                  aria-pressed={active}
                  aria-label={`Toggle day ${d}`}
                  className={cn(
                    "flex size-11 items-center justify-center rounded-2xl text-sm font-bold transition-colors",
                    active
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:text-foreground",
                  )}
                >
                  {label}
                </button>
              )
            })}
          </div>
        </section>

        {/* reminder */}
        <section className="rounded-3xl bg-card p-5 shadow-sm ring-1 ring-border/60">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span
                className={cn(
                  "flex size-10 items-center justify-center rounded-2xl transition-colors",
                  reminderOn
                    ? "bg-primary/15 text-primary"
                    : "bg-muted text-muted-foreground",
                )}
              >
                {reminderOn ? (
                  <Bell className="size-5" aria-hidden="true" />
                ) : (
                  <BellOff className="size-5" aria-hidden="true" />
                )}
              </span>
              <div>
                <p className="text-sm font-semibold text-foreground">
                  Gentle reminder
                </p>
                <p className="text-xs text-muted-foreground">
                  A soft nudge, never a nag
                </p>
              </div>
            </div>

            <button
              type="button"
              role="switch"
              aria-checked={reminderOn}
              aria-label="Toggle reminder"
              onClick={() => setReminderOn((v) => !v)}
              className={cn(
                "relative h-7 w-12 shrink-0 rounded-full transition-colors",
                reminderOn ? "bg-primary" : "bg-muted",
              )}
            >
              <span
                className={cn(
                  "absolute top-1 size-5 rounded-full bg-card shadow-sm transition-transform",
                  reminderOn ? "translate-x-6" : "translate-x-1",
                )}
              />
            </button>
          </div>

          {reminderOn && (
            <div className="mt-4">
              <label
                htmlFor="reminder-time"
                className="block text-xs font-semibold text-muted-foreground"
              >
                Remind me at
              </label>
              <input
                id="reminder-time"
                type="time"
                value={reminderTime}
                onChange={(e) => setReminderTime(e.target.value)}
                className="mt-1.5 rounded-2xl border border-input bg-background px-4 py-2.5 text-base font-semibold text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-ring/30"
              />
            </div>
          )}
        </section>

        <Button
          type="submit"
          disabled={!canSave}
          className="h-14 rounded-3xl text-base font-bold shadow-sm"
        >
          <Check className="size-5" aria-hidden="true" />
          Add this habit
        </Button>
      </div>
    </form>
  )
}
