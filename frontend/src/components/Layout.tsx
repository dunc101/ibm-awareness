import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import TopNav from './TopNav'
import Sidebar from './Sidebar'
import Footer from './Footer'

export default function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <>
      <TopNav mobileOpen={sidebarOpen} onToggle={() => setSidebarOpen(o => !o)} />
      <div className="layout">
        <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        <main className="main-content">
          <Outlet />
        </main>
      </div>
      <Footer />
    </>
  )
}
