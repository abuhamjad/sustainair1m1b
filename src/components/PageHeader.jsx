export default function PageHeader({ eyebrow, title, subtitle, meta }) {
  return (
    <div className="mb-5 flex flex-wrap items-end justify-between gap-4 border-b border-line pb-4">
      <div>
        {eyebrow ? <p className="sa-label mb-1.5">{eyebrow}</p> : null}
        <h1 className="text-[22px] font-semibold leading-tight tracking-[-0.01em] text-ink">
          {title}
        </h1>
        {subtitle ? (
          <p className="mt-1 max-w-3xl text-[13.5px] text-muted">{subtitle}</p>
        ) : null}
      </div>

      {meta ? (
        <div className="rounded-panel border border-line bg-panel px-3 py-2 text-[12px] text-muted">
          {meta}
        </div>
      ) : null}
    </div>
  )
}
