import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts'
import ChartTooltip from './ChartTooltip'

export default function PollutantDonutChart({ data }) {
  const dominant = data.reduce((a, b) => (b.value > a.value ? b : a), data[0])

  return (
    <div className="relative h-[200px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            innerRadius={58}
            outerRadius={82}
            paddingAngle={2}
            stroke="#FFFFFF"
            strokeWidth={2}
            isAnimationActive={false}
          >
            {data.map((entry) => (
              <Cell key={entry.name} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip content={<ChartTooltip suffix="%" />} />
        </PieChart>
      </ResponsiveContainer>

      <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
        <span className="sa-label">Dominant</span>
        <span className="mt-0.5 text-[18px] font-semibold leading-none text-ink">
          {dominant.name}
        </span>
        <span className="mt-1 text-[12px] text-muted">{dominant.value}% share</span>
      </div>
    </div>
  )
}
