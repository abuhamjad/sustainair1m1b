export default function ChartTooltip({ active, payload, label, suffix = '' }) {
  if (!active || !payload?.length) return null

  const item = payload[0]
  const name = label ?? item.name

  return (
    <div className="rounded-panel border border-line bg-panel px-2.5 py-2 shadow-[0_2px_6px_rgba(26,31,54,0.10)]">
      <p className="text-[11px] font-semibold uppercase tracking-[0.06em] text-muted">
        {name}
      </p>
      <p className="mt-0.5 flex items-center gap-1.5 text-[13px] font-semibold text-ink">
        <span
          aria-hidden="true"
          className="inline-block h-2 w-2 rounded-[2px]"
          style={{ backgroundColor: item.payload?.color ?? item.color ?? '#005BAC' }}
        />
        {item.value}
        {suffix}
      </p>
    </div>
  )
}
