"use client"

import { useEffect, useState } from "react"
import {
  ArrowLeft,
  Bell,
  BellOff,
  Check,
  Sparkles,
  X,
} from "lucide-react"
import {
  COLOR_LABELS,
  COLOR_STYLES,
  DAY_LABELS,
  DAY_LABELS_FULL,
  formatReminder,
  scheduleSummary,
  type HabitColor,
} from "@/lib/habits"
import { useHabits } from "@/components/habit-store"
import { cn } from "@/lib/utils"

const COLORS: HabitColor[] = ["green", "sage", "apricot", "clay"]
const WEEKDAYS = [1, 2, 3, 4, 5]
const EVERYDAY = [0, 1, 2, 3, 4, 5, 6]

const REMINDER_PRESETS = ["07:00", "08:00", "12:30", "18:00", "19:30", "21:00"]

type Step = 0 | 1 | 2

export function CreateHabit({
  open,
  onClose,
}: {
  open: boolean
  onClose: () => void
}) {
  const { addHabit } = useHabits()
  const [step, setStep] = useState<Step>(0)
  const [name, setName] = useState("")
  const [color, setColor] = useState<HabitColor>("green")
  const [days, setDays] = useState<number[]>(EVERYDAY)
  const [reminder, setReminder] = useState<string | null>("08:00")

  useEffect(() => {
    if (open) {
      setStep(0)
      setName("")
      setColor("green")
      setDays(EVERYDAY)
      setReminder("08:00")
    }
  }, [open])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open, onClose])

  if (!open) return null

  const canContinue = step === 0 ? name.trim().length > 0 : true
  const canSave = name.trim().length > 0 && days.length > 0

  const toggleDay = (d: number) => {
    setDays((prev) =>
      prev.includes(d)
        ? prev.filter((x) => x !== d)
        : [...prev, d].sort((a, b) => a - b),
    )
  }

  const handleSave = () => {
    if (!canSave) return
    addHabit({ name, color, days, reminder })
    onClose()
  }

  const stepTitles = ["What would you like to build?", "When suits you?", "A gentle nudge?"]

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center sm:items-center"
      role="dialog"
      aria-modal="true"
      aria-label="Create a new habit"
    >
      <button
        type="button"
        aria-label="Close"
        onClick={onClose}
        className="absolute inset-0 bg-foreground/25 backdrop-blur-[2px]"
      />

      <div className="relative z-10 flex max-h-[92vh] w-full max-w-md flex-col overflow-hidden rounded-t-4xl border border-border bg-background shadow-xl sm:rounded-4xl">
        {/* Header */}
        <div className="flex items-center justify-between gap-2 px-5 pt-5">
          {step > 0 ? (
            <button
              type="button"
              onClick={() => setStep((s) => (s - 1) as Step)}
              aria-label="Back"
              className="flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              <ArrowLeft className="h-5 w-5" aria-hidden />
            </button>
          ) : (
            <span className="inline-flex items-center gap-1.5 text-sm font-bold text-primary">
              <Sparkles className="h-4 w-4" aria-hidden />
              New habit
            </span>
          )}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            <X className="h-5 w-5" aria-hidden />
          </button>
        </div>

        {/* Step dots */}
        <div className="flex items-center gap-1.5 px-5 pt-3">
          {[0, 1, 2].map((s) => (
            <span
              key={s}
              className={cn(
                "h-1.5 flex-1 rounded-full transition-colors",
                s <= step ? "bg-primary" : "bg-muted",
              )}
            />
          ))}
        </div>

        <div className="flex-1 overflow-y-auto px-5 pb-2 pt-5">
          <h2 className="text-pretty text-xl font-extrabold tracking-tight text-foreground">
            {stepTitles[step]}
          </h2>

          {step === 0 && (
            <div className="mt-5 flex flex-col gap-5">
              <div>
                <label
                  htmlFor="habit-name"
                  className="mb-1.5 block text-sm font-semibold text-foreground"
                >
                  Habit name
                </label>
                <input
                  id="habit-name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Stretch for 5 minutes"
                  autoFocus
                  onKeyDown={(e) => {
                    if (
                      e.key === "Enter" &&
                      !e.nativeEvent.isComposing &&
                      e.keyCode !== 229 &&
                      canContinue
                    ) {
                      setStep(1)
                    }
                  }}
                  className="w-full rounded-2xl border border-input bg-card px-4 py-3 text-base text-foreground outline-none transition-shadow placeholder:text-muted-foreground/70 focus:ring-4 focus:ring-primary/25"
                />
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  Keep it small and doable — tiny habits are the ones that stick.
                </p>
              </div>

              <div>
                <span className="mb-2 block text-sm font-semibold text-foreground">
                  Pick a color
                </span>
                <div className="flex gap-3">
                  {COLORS.map((c) => {
                    const styles = COLOR_STYLES[c]
                    const active = c === color
                    return (
                      <button
                        key={c}
                        type="button"
                        onClick={() => setColor(c)}
                        aria-label={COLOR_LABELS[c]}
                        aria-pressed={active}
                        className={cn(
                          "flex h-11 w-11 items-center justify-center rounded-full transition-transform active:scale-90",
                          styles.dot,
                          active
                            ? "ring-4 ring-offset-2 ring-offset-background " + styles.ring
                            : "opacity-80",
                        )}
                      >
                        {active && (
                          <Check
                            className="h-5 w-5 text-primary-foreground"
                            strokeWidth={3}
                            aria-hidden
                          />
                        )}
                      </button>
                    )
                  })}
                </div>
              </div>
            </div>
          )}

          {step === 1 && (
            <div className="mt-5 flex flex-col gap-5">
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setDays(EVERYDAY)}
                  className={cn(
                    "flex-1 rounded-full border px-3 py-2 text-sm font-semibold transition-colors",
                    days.length === 7
                      ? "border-transparent bg-primary text-primary-foreground"
                      : "border-border bg-card text-muted-foreground hover:text-foreground",
                  )}
                >
                  Every day
                </button>
                <button
                  type="button"
                  onClick={() => setDays(WEEKDAYS)}
                  className={cn(
                    "flex-1 rounded-full border px-3 py-2 text-sm font-semibold transition-colors",
                    days.length === 5 && WEEKDAYS.every((d) => days.includes(d))
                      ? "border-transparent bg-primary text-primary-foreground"
                      : "border-border bg-card text-muted-foreground hover:text-foreground",
                  )}
                >
                  Weekdays
                </button>
              </div>

              <div>
                <span className="mb-2 block text-sm font-semibold text-foreground">
                  Or choose your days
                </span>
                <div className="grid grid-cols-7 gap-1.5">
                  {DAY_LABELS.map((label, i) => {
                    const active = days.includes(i)
                    return (
                      <button
                        key={i}
                        type="button"
                        onClick={() => toggleDay(i)}
                        aria-label={DAY_LABELS_FULL[i]}
                        aria-pressed={active}
                        className={cn(
                          "flex h-11 items-center justify-center rounded-2xl text-sm font-bold transition-colors",
                          active
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted text-muted-foreground hover:bg-secondary hover:text-secondary-foreground",
                        )}
                      >
                        {label}
                      </button>
                    )
                  })}
                </div>
                <p className="mt-3 text-sm font-medium text-muted-foreground">
                  {days.length > 0
                    ? scheduleSummary(days)
                    : "Choose at least one day when you'd like to show up."}
                </p>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="mt-5 flex flex-col gap-5">
              <p className="text-sm leading-relaxed text-muted-foreground">
                A friendly reminder can help — but it&apos;s completely optional.
              </p>

              <div className="grid grid-cols-3 gap-2">
                {REMINDER_PRESETS.map((t) => {
                  const active = reminder === t
                  return (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setReminder(t)}
                      aria-pressed={active}
                      className={cn(
                        "rounded-2xl border px-2 py-3 text-sm font-bold transition-colors",
                        active
                          ? "border-transparent bg-primary text-primary-foreground"
                          : "border-border bg-card text-foreground hover:border-primary/40",
                      )}
                    >
                      {formatReminder(t)}
                    </button>
                  )
                })}
              </div>

              <div className="flex items-center gap-3 rounded-2xl border border-border bg-card px-4 py-3">
                <Bell className="h-4 w-4 text-primary" aria-hidden />
                <label htmlFor="custom-time" className="text-sm font-semibold text-foreground">
                  Custom time
                </label>
                <input
                  id="custom-time"
                  type="time"
                  value={reminder ?? ""}
                  onChange={(e) => setReminder(e.target.value || null)}
                  className="ml-auto rounded-xl border border-input bg-background px-3 py-1.5 text-sm font-semibold text-foreground outline-none focus:ring-4 focus:ring-primary/25"
                />
              </div>

              <button
                type="button"
                onClick={() => setReminder(null)}
                aria-pressed={reminder === null}
                className={cn(
                  "flex items-center justify-center gap-2 rounded-2xl border px-4 py-3 text-sm font-semibold transition-colors",
                  reminder === null
                    ? "border-transparent bg-secondary text-secondary-foreground"
                    : "border-border bg-card text-muted-foreground hover:text-foreground",
                )}
              >
                <BellOff className="h-4 w-4" aria-hidden />
                No reminder, thanks
              </button>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="border-t border-border bg-card/60 px-5 py-4">
          {step < 2 ? (
            <button
              type="button"
              onClick={() => canContinue && setStep((s) => (s + 1) as Step)}
              disabled={!canContinue}
              className="w-full rounded-full bg-primary px-5 py-3.5 text-base font-bold text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-40"
            >
              Continue
            </button>
          ) : (
            <button
              type="button"
              onClick={handleSave}
              disabled={!canSave}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-3.5 text-base font-bold text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-40"
            >
              <Check className="h-5 w-5" strokeWidth={3} aria-hidden />
              Add habit
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
