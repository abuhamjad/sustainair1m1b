import { AlertTriangle, Gauge, RadioTower, TrendingUp } from 'lucide-react'
import StatusBadge from './StatusBadge'

const ICONS = {
  gauge: Gauge,
  trending: TrendingUp,
  stations: RadioTower,
  alerts: AlertTriangle,
}

export default function StatCard({ label, value, unit, status, caption, icon }) {
  const Icon = ICONS[icon] ?? Gauge

  return (
    <article className="sa-panel flex items-start justify-between gap-3 px-4 py-3 shadow-[0_1px_2px_rgba(26,31,54,0.04)]">
      <div className="min-w-0">
        <p className="sa-label">{label}</p>

        <div className="mt-1.5 flex items-baseline gap-2">
          <span className="text-[26px] font-semibold leading-none tracking-[-0.02em] text-ink">
            {value}
          </span>
          {unit ? <span className="text-[13px] text-muted">{unit}</span> : null}
        </div>

        <div className="mt-2 flex items-center gap-2">
          {status ? <StatusBadge tone={status.tone}>{status.text}</StatusBadge> : null}
        </div>

        {caption ? (
          <p className="mt-2 truncate text-[12px] text-muted">{caption}</p>
        ) : null}
      </div>

      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-panel border border-line bg-canvas">
        <Icon size={16} strokeWidth={1.75} className="text-brand" />
      </span>
    </article>
  )
}
