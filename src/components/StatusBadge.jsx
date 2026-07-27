const TONES = {
  good: 'border-[#ABEFC6] bg-[#ECFDF3] text-[#067647]',
  warning: 'border-[#F5D48A] bg-[#FFFAEB] text-[#B54708]',
  serious: 'border-[#F9CBA7] bg-[#FFF4ED] text-[#B93815]',
  critical: 'border-[#FECDCA] bg-[#FEF3F2] text-[#B42318]',
  neutral: 'border-line bg-canvas text-muted',
  info: 'border-[#BBD3E8] bg-brand-soft text-brand',
}

export default function StatusBadge({ tone = 'neutral', children }) {
  return (
    <span
      className={`inline-flex items-center rounded-badge border px-2 py-0.5 text-[11px] font-semibold uppercase tracking-[0.04em] ${
        TONES[tone] ?? TONES.neutral
      }`}
    >
      {children}
    </span>
  )
}
