import { Link, NavLink } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/types', label: 'Types' },
  { to: '/stages', label: 'Stages' },
  { to: '/tips', label: 'Tips' },
  { to: '/advanced', label: 'Advanced' },
  { to: '/resources', label: 'Resources' },
]

interface TopNavProps {
  mobileOpen: boolean
  onToggle: () => void
}

export default function TopNav({ mobileOpen, onToggle }: TopNavProps) {
  const { theme, toggle } = useTheme()

  return (
    <nav className="topnav">
      <Link to="/" className="topnav-brand">
        <div className="topnav-brand-icon">IBM</div>
        IBM Awareness
      </Link>
      <div className="topnav-right">
        <ul className="topnav-links">
          {navItems.map(item => (
            <li key={item.to}>
              <NavLink to={item.to} end={item.to === '/'}>
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
        <button
          className="theme-toggle"
          onClick={toggle}
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
          {theme === 'light' ? '☾' : '☀'}
        </button>
        <button
          className="mobile-menu-btn"
          onClick={onToggle}
          aria-label="Toggle menu"
        >
          {mobileOpen ? '✕' : '☰'}
        </button>
      </div>
    </nav>
  )
}
