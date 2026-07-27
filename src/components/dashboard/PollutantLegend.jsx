export default function PollutantLegend({ items }) {
  return (
    <ul className="mt-3 space-y-1.5">
      {items.map(({ name, value, color }) => (
        <li key={name} className="flex items-center gap-2.5 text-[13px]">
          <span
            aria-hidden="true"
            className="inline-block h-2.5 w-2.5 shrink-0 rounded-[2px]"
            style={{ backgroundColor: color }}
          />
          <span className="flex-1 text-ink">{name}</span>
          <span className="w-24 overflow-hidden rounded-[2px] bg-line-soft" aria-hidden="true">
            <span
              className="block h-1.5 rounded-[2px]"
              style={{ width: `${value}%`, backgroundColor: color }}
            />
          </span>
          <span className="w-9 text-right font-semibold tabular-nums text-ink">
            {value}%
          </span>
        </li>
      ))}
    </ul>
  )
}
