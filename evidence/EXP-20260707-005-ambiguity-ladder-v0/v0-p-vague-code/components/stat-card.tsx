import type { ReactNode } from "react"

export function StatCard({
  label,
  value,
  suffix,
  children,
}: {
  label: string
  value: ReactNode
  suffix?: string
  children?: ReactNode
}) {
  return (
    <div className="flex flex-col justify-between rounded-lg border border-border bg-card p-4">
      <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">{label}</p>
      <div className="mt-3 flex items-baseline gap-1.5">
        <span className="text-3xl font-semibold tracking-tight text-card-foreground tabular-nums">{value}</span>
        {suffix ? (
          <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">{suffix}</span>
        ) : null}
      </div>
      {children ? <div className="mt-3">{children}</div> : null}
    </div>
  )
}
