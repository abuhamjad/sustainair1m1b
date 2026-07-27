export default function Panel({ title, action, children, bodyClassName = 'p-4', className = '' }) {
  return (
    <section className={`sa-panel shadow-[0_1px_2px_rgba(26,31,54,0.04)] ${className}`}>
      {title ? (
        <header className="flex items-center justify-between gap-3 border-b border-line px-4 py-2.5">
          <h2 className="text-[13px] font-semibold text-ink">{title}</h2>
          {action ? <div className="text-[12px] text-muted">{action}</div> : null}
        </header>
      ) : null}
      <div className={bodyClassName}>{children}</div>
    </section>
  )
}
