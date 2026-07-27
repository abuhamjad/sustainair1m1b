import { Droplets, Thermometer, Wind } from 'lucide-react'

const ICONS = {
  temperature: Thermometer,
  humidity: Droplets,
  wind: Wind,
}

export default function WeatherSnapshot({ items }) {
  return (
    <ul className="divide-y divide-line-soft">
      {items.map(({ id, label, value, icon }) => {
        const Icon = ICONS[icon] ?? Thermometer
        return (
          <li key={id} className="flex items-center justify-between gap-3 py-2.5 first:pt-0 last:pb-0">
            <span className="flex items-center gap-2.5 text-[13px] text-muted">
              <Icon size={16} strokeWidth={1.75} className="text-brand" />
              {label}
            </span>
            <span className="text-[14px] font-semibold tabular-nums text-ink">{value}</span>
          </li>
        )
      })}
    </ul>
  )
}
