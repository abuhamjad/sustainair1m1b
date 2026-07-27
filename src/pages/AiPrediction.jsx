import { BrainCircuit } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import Panel from '../components/Panel'
import StatCard from '../components/StatCard'
import ForecastChart from '../components/charts/ForecastChart'
import ModelFactors from '../components/prediction/ModelFactors'
import RecommendationList from '../components/prediction/RecommendationList'
import {
  AI_ASSESSMENT,
  FORECAST_SERIES,
  MODEL_FACTORS,
  PREDICTION_SUMMARY,
  RECOMMENDATIONS,
} from '../data/predictionData'

export default function AiPrediction() {
  return (
    <>
      <PageHeader
        eyebrow="Forecasting"
        title="AI Prediction"
        subtitle="24-Hour Air Quality Forecast using AI"
        meta="Model horizon · 24 hours"
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {PREDICTION_SUMMARY.map((card) => (
          <StatCard key={card.id} {...card} />
        ))}
      </div>

      <div className="mt-4">
        <Panel title="Forecast Curve" action="Projected AQI · Next 24 hours">
          <ForecastChart data={FORECAST_SERIES} />
        </Panel>
      </div>

      <div className="mt-4">
        <Panel title="AI Assessment" action="Model output">
          <div className="flex gap-3">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-panel border border-line bg-canvas">
              <BrainCircuit size={16} strokeWidth={1.75} className="text-brand" />
            </span>
            <div>
              <p className="text-[13px] leading-relaxed text-ink">{AI_ASSESSMENT}</p>
              <p className="mt-2 text-[12px] text-muted">
                SustainAir forecasting model · Confidence 92% · Mock data
              </p>
            </div>
          </div>

          <div className="mt-4">
            <p className="sa-label mb-2">Input Signals</p>
            <ModelFactors items={MODEL_FACTORS} />
          </div>
        </Panel>
      </div>

      <div className="mt-4">
        <Panel title="Recommendations" action="Advisory actions">
          <RecommendationList items={RECOMMENDATIONS} />
        </Panel>
      </div>
    </>
  )
}
