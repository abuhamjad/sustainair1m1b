import { Activity, Database, MapPin, RefreshCw } from 'lucide-react'

const META = [
  { icon: MapPin, label: 'Region', value: 'National · All States' },
  { icon: Database, label: 'Source', value: 'CPCB Monitoring Network' },
  { icon: RefreshCw, label: 'Last Sync', value: '27 Jul 2026, 09:40 IST' },
]

export default function StatusStrip() {
  return (
    <div className="border-b border-line bg-panel">
      <div className="mx-auto flex max-w-[1600px] flex-wrap items-center gap-x-6 gap-y-2 px-6 py-2">
        {META.map(({ icon: Icon, label, value }) => (
          <div key={label} className="flex items-center gap-2 text-[12px]">
            <Icon size={14} strokeWidth={1.75} className="text-muted" />
            <span className="font-semibold uppercase tracking-[0.06em] text-muted">
              {label}
            </span>
            <span className="text-ink">{value}</span>
          </div>
        ))}

        <div className="ml-auto flex items-center gap-2 text-[12px]">
          <Activity size={14} strokeWidth={1.75} className="text-brand" />
          <span className="text-ink">Data pipeline operational</span>
        </div>
      </div>
    </div>
  )
}
