import PageHeader from '../components/PageHeader'
import Panel from '../components/Panel'
import StatCard from '../components/StatCard'
import AqiTrendChart from '../components/charts/AqiTrendChart'
import PollutantDonutChart from '../components/charts/PollutantDonutChart'
import AiRecommendation from '../components/dashboard/AiRecommendation'
import AlertsTable from '../components/dashboard/AlertsTable'
import PollutantLegend from '../components/dashboard/PollutantLegend'
import WeatherSnapshot from '../components/dashboard/WeatherSnapshot'
import {
  AI_RECOMMENDATION,
  AQI_TREND,
  LAST_UPDATED,
  POLLUTANT_BREAKDOWN,
  RECENT_ALERTS,
  SUMMARY_CARDS,
  WEATHER_SNAPSHOT,
} from '../data/dashboardData'

export default function Dashboard() {
  return (
    <>
      <PageHeader
        eyebrow="Operations"
        title="Executive Dashboard"
        subtitle="National Air Quality Operations Center"
        meta="Reporting period · 27 Jul 2026"
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {SUMMARY_CARDS.map((card) => (
          <StatCard key={card.id} {...card} />
        ))}
      </div>

      <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-12">
        <div className="flex flex-col gap-4 lg:col-span-8">
          <Panel title="AQI Trend" action="Last 7 days · National average">
            <AqiTrendChart data={AQI_TREND} />
          </Panel>

          <Panel title="Recent Alerts" action="3 open" bodyClassName="p-0">
            <AlertsTable rows={RECENT_ALERTS} />
          </Panel>
        </div>

        <div className="flex flex-col gap-4 lg:col-span-4">
          <Panel title="Pollutant Breakdown" action="Share of load">
            <PollutantDonutChart data={POLLUTANT_BREAKDOWN} />
            <PollutantLegend items={POLLUTANT_BREAKDOWN} />
          </Panel>

          <Panel title="Weather Snapshot" action="Current">
            <WeatherSnapshot items={WEATHER_SNAPSHOT} />
          </Panel>

          <AiRecommendation text={AI_RECOMMENDATION} />
        </div>
      </div>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-line pt-3 text-[12px] text-muted">
        <span>
          Last Updated · <span className="text-ink">{LAST_UPDATED}</span>
        </span>
        <span>Mock Data</span>
      </div>
    </>
  )
}
