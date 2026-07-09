"use client"

import { useMemo, useState } from "react"
import { ConsistencyMatrix } from "@/components/consistency-matrix"
import { HabitList } from "@/components/habit-list"
import { NewHabitPanel } from "@/components/new-habit-panel"
import { StatCard } from "@/components/stat-card"
import {
  completionRate,
  createSeedHabits,
  lastNDates,
  longestStreak,
  newId,
  todayISO,
  type Habit,
  type HabitTone,
} from "@/lib/habits"

export function HabitTracker() {
  const [habits, setHabits] = useState<Habit[]>(() => createSeedHabits())

  function toggleToday(id: string) {
    const today = todayISO()
    setHabits((prev) =>
      prev.map((h) => {
        if (h.id !== id) return h
        const has = h.completions.includes(today)
        return {
          ...h,
          completions: has ? h.completions.filter((d) => d !== today) : [...h.completions, today],
        }
      }),
    )
  }

  function createHabit(name: string, tone: HabitTone) {
    setHabits((prev) => [
      ...prev,
      { id: newId(), name, tone, createdAt: todayISO(), completions: [] },
    ])
  }

  function deleteHabit(id: string) {
    setHabits((prev) => prev.filter((h) => h.id !== id))
  }

  const stats = useMemo(() => {
    const totalCompletions = habits.reduce((sum, h) => sum + h.completions.length, 0)
    const maxStreak = habits.reduce((max, h) => Math.max(max, longestStreak(h.completions)), 0)
    const efficiency =
      habits.length === 0
        ? 0
        : Math.round(habits.reduce((sum, h) => sum + completionRate(h.completions, 30), 0) / habits.length)

    // intensity per day = share of habits completed that day
    const intensityByDate: Record<string, number> = {}
    if (habits.length > 0) {
      for (const h of habits) {
        for (const iso of h.completions) {
          intensityByDate[iso] = (intensityByDate[iso] ?? 0) + 1 / habits.length
        }
      }
    }

    const today = todayISO()
    const completedToday = habits.filter((h) => h.completions.includes(today)).length
    const weekBars = lastNDates(7).map((iso) => {
      const count = habits.filter((h) => h.completions.includes(iso)).length
      return { iso, ratio: habits.length ? count / habits.length : 0 }
    })

    return { totalCompletions, maxStreak, efficiency, intensityByDate, completedToday, weekBars }
  }, [habits])

  const todayLabel = new Date().toLocaleDateString("en-US", { month: "short", day: "numeric" })

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
      <header className="flex flex-wrap items-end justify-between gap-4 border-b border-border pb-6">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">Habit system</p>
          <h1 className="mt-1 text-2xl font-semibold tracking-tight text-foreground">Cadence</h1>
        </div>
        <div className="flex items-center gap-6">
          <div className="text-right">
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">Today</p>
            <p className="mt-0.5 text-sm font-medium text-foreground tabular-nums">
              {stats.completedToday}/{habits.length} done
            </p>
          </div>
          <div className="text-right">
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">Cycle</p>
            <p className="mt-0.5 text-sm font-medium text-foreground tabular-nums">{todayLabel}</p>
          </div>
        </div>
      </header>

      <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-3">
        {/* Left column: form + stats */}
        <div className="flex flex-col gap-4">
          <NewHabitPanel onCreate={createHabit} />

          <div className="grid grid-cols-2 gap-4">
            <StatCard label="Total executions" value={stats.totalCompletions.toLocaleString()} />
            <StatCard label="Max streak" value={stats.maxStreak} suffix="days" />
          </div>

          <StatCard label="30-day efficiency" value={`${stats.efficiency}%`}>
            <div className="flex items-end gap-1.5">
              {stats.weekBars.map((b) => (
                <div key={b.iso} className="flex-1">
                  <div
                    className="w-full rounded-[2px] bg-success"
                    style={{ height: `${Math.max(6, b.ratio * 40)}px`, opacity: b.ratio === 0 ? 0.2 : 0.5 + b.ratio * 0.5 }}
                  />
                </div>
              ))}
            </div>
            <p className="mt-2 font-mono text-[9px] uppercase tracking-[0.12em] text-muted-foreground">Last 7 days</p>
          </StatCard>
        </div>

        {/* Right column: matrix + list */}
        <div className="flex flex-col gap-4 lg:col-span-2">
          <div className="rounded-lg border border-border bg-card p-5">
            <div className="mb-4 flex items-center justify-between">
              <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                Consistency matrix
              </p>
              <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">26 weeks</p>
            </div>
            <ConsistencyMatrix intensityByDate={stats.intensityByDate} />
          </div>

          <div>
            <div className="mb-3 flex items-center justify-between px-1">
              <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                Current cycle · {habits.length} active
              </p>
            </div>
            <HabitList habits={habits} onToggleToday={toggleToday} onDelete={deleteHabit} />
          </div>
        </div>
      </div>
    </div>
  )
}
