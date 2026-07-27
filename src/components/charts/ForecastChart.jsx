import {
  Area,
  AreaChart,
  CartesianGrid,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import ChartTooltip from './ChartTooltip'

const LINE_COLOR = '#005BAC'
const AXIS_COLOR = '#667085'
const GRID_COLOR = '#E6EAF0'

function EndDot({ cx, cy, index, dataLength }) {
  if (index !== dataLength - 1) return null
  return (
    <circle cx={cx} cy={cy} r={4} fill={LINE_COLOR} stroke="#FFFFFF" strokeWidth={2} />
  )
}

function EndLabel({ x, y, value, index, dataLength }) {
  if (index !== dataLength - 1) return null
  return (
    <text x={x} y={y - 12} textAnchor="end" className="fill-[#1A1F36] text-[12px] font-semibold">
      {value}
    </text>
  )
}

export default function ForecastChart({ data }) {
  return (
    <div className="h-[280px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 16, right: 16, bottom: 4, left: -12 }}>
          <CartesianGrid stroke={GRID_COLOR} strokeWidth={1} vertical={false} />

          <XAxis
            dataKey="point"
            tickLine={false}
            axisLine={{ stroke: GRID_COLOR }}
            tick={{ fill: AXIS_COLOR, fontSize: 12 }}
            tickMargin={8}
          />
          <YAxis
            domain={[140, 190]}
            ticks={[140, 150, 160, 170, 180, 190]}
            tickLine={false}
            axisLine={false}
            tick={{ fill: AXIS_COLOR, fontSize: 12 }}
            width={48}
          />

          <ReferenceLine
            y={150}
            stroke="#B54708"
            strokeDasharray="4 4"
            strokeWidth={1}
            label={{
              value: 'Moderate threshold 150',
              position: 'insideBottomLeft',
              fill: AXIS_COLOR,
              fontSize: 11,
              dy: 12,
            }}
          />

          <Tooltip cursor={{ stroke: '#98A2B3', strokeWidth: 1 }} content={<ChartTooltip />} />

          <Area
            type="monotone"
            dataKey="aqi"
            stroke={LINE_COLOR}
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill={LINE_COLOR}
            fillOpacity={0.1}
            isAnimationActive={false}
            dot={<EndDot dataLength={data.length} />}
            activeDot={{ r: 4, fill: LINE_COLOR, stroke: '#FFFFFF', strokeWidth: 2 }}
            label={<EndLabel dataLength={data.length} />}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}
