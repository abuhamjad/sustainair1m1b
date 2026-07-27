import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import StatusStrip from './StatusStrip'

export default function AppLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-canvas">
      <Navbar />
      <StatusStrip />

      <main className="flex-1">
        <div className="mx-auto w-full max-w-[1600px] px-6 py-6">
          <Outlet />
        </div>
      </main>

      <footer className="border-t border-line bg-panel">
        <div className="mx-auto flex max-w-[1600px] flex-wrap items-center justify-between gap-2 px-6 py-3 text-[12px] text-muted">
          <span>SustainAir · National Air Quality Intelligence Platform</span>
          <span>Prototype build · Demonstration data only</span>
        </div>
      </footer>
    </div>
  )
}
