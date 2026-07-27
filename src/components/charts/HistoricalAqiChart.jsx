import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import ChartTooltip from './ChartTooltip'

const BAR_COLOR = '#005BAC'
const AXIS_COLOR = '#667085'
const GRID_COLOR = '#E6EAF0'

export default function HistoricalAqiChart({ data }) {
  return (
    <div className="h-[220px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 20, right: 16, bottom: 4, left: -12 }}>
          <CartesianGrid stroke={GRID_COLOR} strokeWidth={1} vertical={false} />

          <XAxis
            dataKey="week"
            tickLine={false}
            axisLine={{ stroke: GRID_COLOR }}
            tick={{ fill: AXIS_COLOR, fontSize: 12 }}
            tickMargin={8}
          />
          <YAxis
            domain={[0, 180]}
            ticks={[0, 60, 120, 180]}
            tickLine={false}
            axisLine={false}
            tick={{ fill: AXIS_COLOR, fontSize: 12 }}
            width={48}
          />

          <Tooltip cursor={{ fill: '#F5F7FA' }} content={<ChartTooltip />} />

          <Bar
            dataKey="aqi"
            fill={BAR_COLOR}
            barSize={24}
            radius={[4, 4, 0, 0]}
            isAnimationActive={false}
          >
            <LabelList
              dataKey="aqi"
              position="top"
              offset={8}
              fill="#1A1F36"
              fontSize={12}
              fontWeight={600}
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
