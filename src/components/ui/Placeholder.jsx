import { ImageIcon } from 'lucide-react'

export default function Placeholder({ label = 'Placeholder image', className = '' }) {
  return (
    <div
      role="img"
      aria-label={label}
      className={`grid place-items-center bg-surface-raised text-muted ${className}`}
    >
      <div className="flex flex-col items-center gap-3 px-4 text-center">
        <ImageIcon size={28} strokeWidth={1.25} aria-hidden="true" />
        <span className="text-[10px] uppercase tracking-[0.18em]">{label}</span>
        <span className="text-[10px] uppercase tracking-[0.18em] text-accent">Placeholder</span>
      </div>
    </div>
  )
}
