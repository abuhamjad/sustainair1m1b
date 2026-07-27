import { Info } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import Panel from '../components/Panel'
import HistoricalAqiChart from '../components/charts/HistoricalAqiChart'
import ReportCard from '../components/reports/ReportCard'
import { ABOUT_PROTOTYPE, HISTORICAL_AQI, REPORT_CARDS } from '../data/reportsData'

export default function Reports() {
  return (
    <>
      <PageHeader
        eyebrow="Compliance"
        title="Reports"
        subtitle="Environmental Intelligence Reports"
        meta="Latest cycle · Q2 2026"
      />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {REPORT_CARDS.map((report) => (
          <ReportCard key={report.id} {...report} />
        ))}
      </div>

      <div className="mt-4">
        <Panel title="Historical AQI" action="Last 4 weeks · National average">
          <HistoricalAqiChart data={HISTORICAL_AQI} />
        </Panel>
      </div>

      <div className="mt-4">
        <Panel title="About this Prototype" action="Reference">
          <div className="flex gap-3">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-panel border border-line bg-canvas">
              <Info size={16} strokeWidth={1.75} className="text-brand" />
            </span>
            <p className="max-w-4xl text-[13px] leading-relaxed text-ink">
              {ABOUT_PROTOTYPE}
            </p>
          </div>
        </Panel>
      </div>
    </>
  )
}
