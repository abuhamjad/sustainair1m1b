import StatusBadge from '../StatusBadge'

export default function AlertSummary({ items }) {
  return (
    <div className="grid grid-cols-1 gap-px overflow-hidden rounded-panel border border-line bg-line sm:grid-cols-3">
      {items.map(({ id, label, value, badge, tone }) => (
        <div key={id} className="bg-panel px-4 py-3">
          <p className="sa-label">{label}</p>
          <div className="mt-1.5 flex items-center gap-2.5">
            <span className="text-[24px] font-semibold leading-none tracking-[-0.02em] text-ink">
              {value}
            </span>
            <StatusBadge tone={tone}>{badge}</StatusBadge>
          </div>
        </div>
      ))}
    </div>
  )
}
