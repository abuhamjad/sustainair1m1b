import { BrainCircuit, Download, Eye, FileText, MapPin, TrendingUp } from 'lucide-react'

const ICONS = {
  daily: FileText,
  weekly: TrendingUp,
  hotspot: MapPin,
  ai: BrainCircuit,
}

export default function ReportCard({ title, description, meta, icon }) {
  const Icon = ICONS[icon] ?? FileText

  return (
    <article className="sa-panel flex h-full flex-col shadow-[0_1px_2px_rgba(26,31,54,0.04)]">
      <div className="flex flex-1 items-start gap-3 px-4 py-3.5">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-panel border border-line bg-canvas">
          <Icon size={17} strokeWidth={1.75} className="text-brand" />
        </span>

        <div className="min-w-0 flex-1">
          <h3 className="text-[14px] font-semibold leading-snug text-ink">{title}</h3>
          <p className="mt-1 text-[13px] leading-relaxed text-muted">{description}</p>
          <p className="mt-2 text-[12px] font-medium text-ink">{meta}</p>
        </div>
      </div>

      <div className="flex items-center gap-2 border-t border-line bg-canvas px-4 py-2.5">
        <button
          type="button"
          className="inline-flex items-center gap-1.5 rounded-panel border border-brand bg-brand px-2.5 py-1.5 text-[12.5px] font-medium text-white transition-colors hover:bg-brand-dark"
        >
          <Download size={14} strokeWidth={1.75} />
          Download PDF
        </button>

        <button
          type="button"
          className="inline-flex items-center gap-1.5 rounded-panel border border-line bg-panel px-2.5 py-1.5 text-[12.5px] font-medium text-ink transition-colors hover:border-brand hover:text-brand"
        >
          <Eye size={14} strokeWidth={1.75} />
          Preview
        </button>
      </div>
    </article>
  )
}
