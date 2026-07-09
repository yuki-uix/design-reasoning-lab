"use client"

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react"
import {
  type Habit,
  type HabitColor,
  newId,
  seedHabits,
  toISO,
} from "@/lib/habits"

type NewHabitInput = {
  name: string
  color: HabitColor
  days: number[]
  reminder: string | null
}

type HabitStore = {
  habits: Habit[]
  toggle: (habitId: string, date: Date) => void
  addHabit: (input: NewHabitInput) => void
}

const HabitContext = createContext<HabitStore | null>(null)

export function HabitProvider({ children }: { children: ReactNode }) {
  const [habits, setHabits] = useState<Habit[]>(() => seedHabits())

  const toggle = useCallback((habitId: string, date: Date) => {
    const iso = toISO(date)
    setHabits((prev) =>
      prev.map((h) => {
        if (h.id !== habitId) return h
        const completions = { ...h.completions }
        if (completions[iso]) {
          delete completions[iso]
        } else {
          completions[iso] = true
        }
        return { ...h, completions }
      }),
    )
  }, [])

  const addHabit = useCallback((input: NewHabitInput) => {
    setHabits((prev) => [
      ...prev,
      {
        id: newId(),
        name: input.name.trim(),
        color: input.color,
        days: input.days,
        reminder: input.reminder,
        completions: {},
      },
    ])
  }, [])

  const value = useMemo(
    () => ({ habits, toggle, addHabit }),
    [habits, toggle, addHabit],
  )

  return <HabitContext.Provider value={value}>{children}</HabitContext.Provider>
}

export function useHabits(): HabitStore {
  const ctx = useContext(HabitContext)
  if (!ctx) throw new Error("useHabits must be used within HabitProvider")
  return ctx
}
