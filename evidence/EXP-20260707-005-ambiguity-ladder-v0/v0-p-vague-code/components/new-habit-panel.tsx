"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { TONES, type HabitTone } from "@/lib/habits"
import { cn } from "@/lib/utils"

export function NewHabitPanel({ onCreate }: { onCreate: (name: string, tone: HabitTone) => void }) {
  const [name, setName] = useState("")
  const [tone, setTone] = useState<HabitTone>("green")

  function submit() {
    const trimmed = name.trim()
    if (!trimmed) return
    onCreate(trimmed, tone)
    setName("")
    setTone("green")
  }

  return (
    <div className="rounded-lg border border-border bg-card p-5">
      <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">New routine</p>
      <h2 className="mt-1 text-lg font-semibold tracking-tight text-card-foreground">Create a habit</h2>

      <div className="mt-5">
        <label htmlFor="habit-name" className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
          Identifier
        </label>
        <input
          id="habit-name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.nativeEvent.isComposing && e.keyCode !== 229) submit()
          }}
          placeholder="e.g. Morning run"
          className="mt-2 w-full border-b border-border bg-transparent pb-2 text-sm text-card-foreground outline-none placeholder:text-muted-foreground/70 focus:border-ring"
        />
      </div>

      <div className="mt-5">
        <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">Marker tone</p>
        <div className="mt-2 flex items-center gap-2">
          {TONES.map((t) => (
            <button
              key={t.value}
              type="button"
              aria-label={t.label}
              aria-pressed={tone === t.value}
              onClick={() => setTone(t.value)}
              className={cn(
                "h-7 w-7 rounded-md ring-offset-2 ring-offset-card transition",
                t.className,
                tone === t.value ? "ring-2 ring-ring" : "opacity-70 hover:opacity-100",
              )}
            />
          ))}
        </div>
      </div>

      <Button onClick={submit} disabled={!name.trim()} className="mt-6 w-full font-mono text-xs uppercase tracking-[0.12em]">
        Initialize routine
      </Button>
    </div>
  )
}
