'use client'

import { useEffect, useState } from 'react'
import { CalendarDays, Sprout, Sun } from 'lucide-react'
import { CreateHabitFlow } from '@/components/create-habit-flow'
import { ProgressView } from '@/components/progress-view'
import { TodayView } from '@/components/today-view'
import {
  createSeedHabits,
  toDateKey,
  type Habit,
} from '@/lib/habits'
import { cn } from '@/lib/utils'

type Tab = 'today' | 'progress'

export function HabitApp() {
  // Compute "today" and seed data on the client only, so server/client
  // timezone differences never cause a hydration mismatch.
  const [today, setToday] = useState<Date | null>(null)
  const [habits, setHabits] = useState<Habit[]>([])
  const [tab, setTab] = useState<Tab>('today')
  const [createOpen, setCreateOpen] = useState(false)

  useEffect(() => {
    const now = new Date()
    setToday(now)
    setHabits(createSeedHabits(now))
  }, [])

  function toggle(id: string) {
    if (!today) return
    const key = toDateKey(today)
    setHabits((prev) =>
      prev.map((h) =>
        h.id === id
          ? {
              ...h,
              completions: {
                ...h.completions,
                [key]: !h.completions[key],
              },
            }
          : h,
      ),
    )
  }

  function addHabit(habit: Habit) {
    setHabits((prev) => [...prev, habit])
    setCreateOpen(false)
    setTab('today')
  }

  const header = (
    <div className="flex items-center gap-2 px-6 pt-8 pb-2">
      <span className="flex size-9 items-center justify-center rounded-2xl bg-primary/15 text-primary">
        <Sprout className="size-5" aria-hidden="true" />
      </span>
      <span className="text-lg font-extrabold tracking-tight text-foreground">
        Little Wins
      </span>
    </div>
  )

  if (!today) {
    return (
      <div className="mx-auto flex min-h-screen w-full max-w-md flex-col">
        {header}
        <div className="flex flex-1 items-center justify-center px-6 pb-24">
          <p className="text-sm text-muted-foreground">
            Gathering your gentle wins…
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="mx-auto flex min-h-screen w-full max-w-md flex-col">
      {header}

      <main className="flex-1 px-6 pt-4 pb-32">
        {tab === 'today' ? (
          <TodayView
            habits={habits}
            today={today}
            onToggle={toggle}
            onCreate={() => setCreateOpen(true)}
          />
        ) : (
          <ProgressView habits={habits} today={today} />
        )}
      </main>

      <nav
        aria-label="Primary"
        className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/90 backdrop-blur-md"
      >
        <div className="mx-auto flex w-full max-w-md items-center justify-around px-6 py-3">
          <TabButton
            active={tab === 'today'}
            onClick={() => setTab('today')}
            icon={<Sun className="size-5" />}
            label="Today"
          />
          <TabButton
            active={tab === 'progress'}
            onClick={() => setTab('progress')}
            icon={<CalendarDays className="size-5" />}
            label="Progress"
          />
        </div>
      </nav>

      <CreateHabitFlow
        open={createOpen}
        onClose={() => setCreateOpen(false)}
        onCreate={addHabit}
      />
    </div>
  )
}

function TabButton({
  active,
  onClick,
  icon,
  label,
}: {
  active: boolean
  onClick: () => void
  icon: React.ReactNode
  label: string
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-current={active ? 'page' : undefined}
      className={cn(
        'flex flex-1 flex-col items-center gap-1 rounded-2xl py-1.5 text-xs font-semibold transition-colors',
        active ? 'text-primary' : 'text-muted-foreground hover:text-foreground',
      )}
    >
      {icon}
      {label}
    </button>
  )
}
