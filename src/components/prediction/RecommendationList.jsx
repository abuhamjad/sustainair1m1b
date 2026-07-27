import { Check } from 'lucide-react'

export default function RecommendationList({ items }) {
  return (
    <ol className="divide-y divide-line-soft">
      {items.map((item, index) => (
        <li
          key={item}
          className="flex items-center gap-3 py-2.5 first:pt-0 last:pb-0 text-[13px] text-ink"
        >
          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-[3px] border border-line bg-canvas">
            <Check size={12} strokeWidth={2} className="text-brand" />
          </span>
          <span className="flex-1">{item}</span>
          <span className="text-[11px] font-semibold uppercase tracking-[0.06em] text-muted">
            Priority {index + 1}
          </span>
        </li>
      ))}
    </ol>
  )
}
