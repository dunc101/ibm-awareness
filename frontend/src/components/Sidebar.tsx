import { NavLink, useLocation } from 'react-router-dom'

const sections = [
  {
    title: 'Getting Started',
    items: [
      { to: '/just-diagnosed', label: 'Just Diagnosed' },
    ],
  },
  {
    title: 'About IBM',
    items: [
      { to: '/', label: 'Overview' },
      { to: '/types', label: 'Types of IBM' },
      { to: '/stages', label: 'Disease Stages' },
    ],
  },
  {
    title: 'Living with IBM',
    items: [
      { to: '/tips/early', label: 'Early Stage' },
      { to: '/tips/middle', label: 'Middle Stage' },
      { to: '/tips/advanced', label: 'Advanced Stage' },
      { to: '/tips/general', label: 'General Tips' },
      { to: '/adaptive-clothing', label: 'Adaptive Clothing' },
    ],
  },
  {
    title: 'Advanced Stage',
    items: [
      { to: '/advanced', label: 'Overview' },
      { to: '/advanced/travel', label: 'Travel Tips' },
      { to: '/advanced/equipment', label: 'Equipment Guide' },
      { to: '/advanced/caregiving', label: 'Caregiving' },
      { to: '/advanced/bathroom', label: 'Bathroom & Toileting' },
    ],
  },
  {
    title: 'Support',
    items: [
      { to: '/resources', label: 'Resources' },
      { to: '/blog', label: 'Blog' },
    ],
  },
]

interface SidebarProps {
  open?: boolean
  onClose?: () => void
}

export default function Sidebar({ open, onClose }: SidebarProps) {
  const location = useLocation()

  return (
    <aside className={`sidebar ${open ? 'open' : ''}`}>
      {sections.map(section => (
        <div key={section.title} className="sidebar-section">
          <div className="sidebar-section-title">{section.title}</div>
          {section.items.map(item => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                `sidebar-link${isActive || (item.to !== '/' && location.pathname.startsWith(item.to)) ? ' active' : ''}`
              }
              onClick={onClose}
            >
              <span className="sidebar-link-dot" />
              {item.label}
            </NavLink>
          ))}
        </div>
      ))}
    </aside>
  )
}
