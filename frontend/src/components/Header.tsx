import React from 'react'

export default function Header() {
  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto py-4 px-6 flex items-center justify-between">
        <div className="text-xl font-semibold">Options Strategy Builder (Prototype)</div>
        <div className="text-sm text-gray-600">Demo - Sample data only - No live trading</div>
      </div>
    </header>
  )
}
