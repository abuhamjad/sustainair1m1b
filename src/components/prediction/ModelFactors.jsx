import { CircleDot, Droplets, TrendingUp, Wind } from 'lucide-react'

const ICONS = {
  trend: TrendingUp,
  particles: CircleDot,
  humidity: Droplets,
  wind: Wind,
}

export default function ModelFactors({ items }) {
  return (
    <div className="grid grid-cols-2 gap-px overflow-hidden rounded-panel border border-line bg-line lg:grid-cols-4">
      {items.map(({ id, label, value, icon }) => {
        const Icon = ICONS[icon] ?? CircleDot
        return (
          <div key={id} className="bg-panel px-3 py-2.5">
            <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.06em] text-muted">
              <Icon size={14} strokeWidth={1.75} className="text-brand" />
              {label}
            </p>
            <p className="mt-1.5 text-[14px] font-semibold text-ink">{value}</p>
          </div>
        )
      })}
    </div>
  )
}
