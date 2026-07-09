"use client"

import { lastNDates } from "@/lib/habits"
import { cn } from "@/lib/utils"

const WEEKS = 26
const DAYS = WEEKS * 7

/**
 * GitHub-style contribution grid. `intensityByDate` maps an ISO date to a
 * value between 0 and 1 (share of habits completed that day).
 */
export function ConsistencyMatrix({ intensityByDate }: { intensityByDate: Record<string, number> }) {
  const dates = lastNDates(DAYS)
  const monthLabels: { index: number; label: string }[] = []
  let lastMonth = -1

  dates.forEach((iso, i) => {
    if (i % 7 !== 0) return
    const month = new Date(iso).getMonth()
    if (month !== lastMonth) {
      monthLabels.push({ index: i / 7, label: new Date(iso).toLocaleString("en-US", { month: "short" }) })
      lastMonth = month
    }
  })

  // columns of 7 days
  const columns: string[][] = []
  for (let i = 0; i < dates.length; i += 7) {
    columns.push(dates.slice(i, i + 7))
  }

  function levelClass(value: number | undefined) {
    if (!value) return "bg-muted"
    if (value < 0.25) return "bg-success/25"
    if (value < 0.5) return "bg-success/45"
    if (value < 0.75) return "bg-success/70"
    return "bg-success"
  }

  return (
    <div className="w-full">
      <div className="flex items-start gap-2 overflow-x-auto pb-1">
        <div className="flex flex-col gap-[3px] pt-[18px]">
          {["Mon", "Wed", "Fri"].map((d) => (
            <span
              key={d}
              className="h-[10px] font-mono text-[9px] leading-[13px] text-muted-foreground"
              style={{ marginBottom: 3 }}
            >
              {d}
            </span>
          ))}
        </div>
        <div className="min-w-max">
          <div className="mb-1 flex gap-[3px]">
            {columns.map((_, colIndex) => {
              const label = monthLabels.find((m) => m.index === colIndex)
              return (
                <span key={colIndex} className="w-[13px] font-mono text-[9px] text-muted-foreground">
                  {label ? label.label : ""}
                </span>
              )
            })}
          </div>
          <div className="flex gap-[3px]">
            {columns.map((week, colIndex) => (
              <div key={colIndex} className="flex flex-col gap-[3px]">
                {week.map((iso) => (
                  <div
                    key={iso}
                    title={`${iso}`}
                    className={cn("h-[13px] w-[13px] rounded-[2px]", levelClass(intensityByDate[iso]))}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-4 flex items-center justify-end gap-1.5">
        <span className="mr-1 font-mono text-[9px] uppercase tracking-[0.12em] text-muted-foreground">Less</span>
        <div className="h-[11px] w-[11px] rounded-[2px] bg-muted" />
        <div className="h-[11px] w-[11px] rounded-[2px] bg-success/25" />
        <div className="h-[11px] w-[11px] rounded-[2px] bg-success/45" />
        <div className="h-[11px] w-[11px] rounded-[2px] bg-success/70" />
        <div className="h-[11px] w-[11px] rounded-[2px] bg-success" />
        <span className="ml-1 font-mono text-[9px] uppercase tracking-[0.12em] text-muted-foreground">More</span>
      </div>
    </div>
  )
}
