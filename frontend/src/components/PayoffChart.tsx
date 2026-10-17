import React from 'react'

type Point = { x: number; y: number }

function svgPath(points: Point[]) {
  if (!points.length) return ''
  const step = points.map((p, i) => `${i===0?'M':'L'} ${p.x} ${p.y}`).join(' ')
  return step
}

export default function PayoffChart({ points }: { points: number[] }) {
  // points: array of payoff y-values for a monotonically increasing x-axis
  const width = 700
  const height = 240
  if (!points || points.length === 0) return <div className="p-4">No payoff data</div>
  const max = Math.max(...points)
  const min = Math.min(...points)
  const range = max - min || 1

  const pts = points.map((y, i) => ({ x: (i / (points.length - 1)) * width, y: height - ((y - min) / range) * height }))

  return (
    <div className="bg-white p-3 shadow rounded">
      <svg width={width} height={height}>
        <path d={svgPath(pts)} stroke="#10b981" strokeWidth={2} fill="none" />
        {/* breakeven and axes can be added */}
      </svg>
    </div>
  )
}
