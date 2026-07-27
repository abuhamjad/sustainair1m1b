import StatusBadge from '../StatusBadge'

const SEVERITY_TONE = {
  High: 'critical',
  Moderate: 'warning',
  Low: 'good',
}

const STATUS_DOT = {
  Active: '#B42318',
  Monitoring: '#005BAC',
  Closed: '#667085',
}

export default function AlertsTable({ rows }) {
  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full min-w-130 border-collapse text-[13px]">
        <thead>
          <tr className="border-b border-line bg-canvas">
            <th className="px-4 py-2 text-left text-[11px] font-semibold uppercase tracking-[0.06em] text-muted">
              Location
            </th>
            <th className="px-4 py-2 text-right text-[11px] font-semibold uppercase tracking-[0.06em] text-muted">
              AQI
            </th>
            <th className="px-4 py-2 text-left text-[11px] font-semibold uppercase tracking-[0.06em] text-muted">
              Severity
            </th>
            <th className="px-4 py-2 text-left text-[11px] font-semibold uppercase tracking-[0.06em] text-muted">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr
              key={row.location}
              className="border-b border-line-soft last:border-b-0 hover:bg-canvas"
            >
              <td className="px-4 py-2.5 font-medium text-ink">{row.location}</td>
              <td className="px-4 py-2.5 text-right font-semibold tabular-nums text-ink">
                {row.aqi}
              </td>
              <td className="px-4 py-2.5">
                <StatusBadge tone={SEVERITY_TONE[row.severity] ?? 'neutral'}>
                  {row.severity}
                </StatusBadge>
              </td>
              <td className="px-4 py-2.5">
                <span className="inline-flex items-center gap-2 text-ink">
                  <span
                    aria-hidden="true"
                    className="inline-block h-1.5 w-1.5 rounded-full"
                    style={{ backgroundColor: STATUS_DOT[row.status] ?? '#667085' }}
                  />
                  {row.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
