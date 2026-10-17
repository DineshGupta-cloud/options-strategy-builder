import React from 'react'
import { Link } from 'react-router-dom'

const items = [
  { to: '/', label: 'Dashboard' },
  { to: '/option-chain', label: 'Option Chain' },
  { to: '/strategy-builder', label: 'Strategy Builder' }
]

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-800 text-white min-h-screen">
      <nav className="p-4">
        <div className="mb-6 text-lg font-bold">OSB</div>
        <ul>
          {items.map(it => (
            <li key={it.to} className="mb-2">
              <Link to={it.to} className="block px-3 py-2 rounded hover:bg-gray-700">{it.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}
