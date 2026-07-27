import PageHeader from '../components/PageHeader'
import Panel from '../components/Panel'
import AlertSummary from '../components/alerts/AlertSummary'
import AlertsTable from '../components/dashboard/AlertsTable'
import { ALERT_SUMMARY, ENVIRONMENTAL_ALERTS } from '../data/alertData'

export default function AlertManagement() {
  return (
    <>
      <PageHeader
        eyebrow="Response"
        title="Alert Management"
        subtitle="Current Environmental Alerts"
        meta="Active protocol · GRAP Stage II"
      />

      <Panel
        title="Alert Register"
        action={`${ENVIRONMENTAL_ALERTS.length} monitoring locations`}
        bodyClassName="p-0"
      >
        <AlertsTable rows={ENVIRONMENTAL_ALERTS} />
      </Panel>

      <div className="mt-4">
        <p className="sa-label mb-2">Summary</p>
        <AlertSummary items={ALERT_SUMMARY} />
      </div>
    </>
  )
}
