import { NavLink } from 'react-router-dom'
import { NAV_ROUTES } from '../router/routes'

function NavItem({ to, label }) {
  return (
    <NavLink
      to={to}
      end={to === '/'}
      className={({ isActive }) =>
        [
          'relative flex h-14 shrink-0 items-center whitespace-nowrap px-3 text-[13.5px] font-medium tracking-[0.01em] transition-colors lg:px-4',
          isActive ? 'text-brand' : 'text-muted hover:text-ink',
        ].join(' ')
      }
    >
      {({ isActive }) => (
        <>
          <span>{label}</span>
          <span
            aria-hidden="true"
            className={[
              'absolute inset-x-2 bottom-0 h-[3px] transition-colors',
              isActive ? 'bg-brand' : 'bg-transparent',
            ].join(' ')}
          />
        </>
      )}
    </NavLink>
  )
}

function Badge({ children }) {
  return (
    <span className="rounded-badge border border-line bg-canvas px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.06em] text-muted">
      {children}
    </span>
  )
}

export default function Navbar() {
  return (
    <header className="sticky top-0 z-30">
      <div className="h-[3px] w-full bg-brand" />

      <div className="border-b border-line bg-panel">
        <div className="mx-auto flex h-14 max-w-[1600px] items-center gap-4 px-6 lg:gap-8">
          <div className="flex shrink-0 items-baseline gap-2">
            <span className="text-[17px] font-bold tracking-[-0.01em] text-ink">
              SustainAir
            </span>
            <span className="hidden border-l border-line pl-2 text-[11px] font-medium uppercase tracking-[0.08em] text-muted lg:inline">
              Air Quality Intelligence
            </span>
          </div>

          <nav className="flex min-w-0 flex-1 items-center justify-center" aria-label="Primary">
            {NAV_ROUTES.map((route) => (
              <NavItem key={route.path} to={route.path} label={route.label} />
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-2">
            <Badge>Government of India</Badge>
          </div>
        </div>
      </div>
    </header>
  )
}
