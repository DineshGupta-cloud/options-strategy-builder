import React, { useState } from 'react'
import PayoffChart from '../components/PayoffChart'

export default function StrategyBuilder() {
  const [spot, setSpot] = useState<number>(18000)
  const [strategy, setStrategy] = useState<string>('Long Call')
  const [strike, setStrike] = useState<number>(18100)
  const [premium, setPremium] = useState<number>(100)

  function generatePayoff() {
    // simple payoff for a long call single-leg
    const width = 101
    const points: number[] = []
    const start = spot - 500
    const step = 10
    for (let i=0;i<width;i++) {
      const price = start + i * step
      const payoff = Math.max(0, price - strike) - premium
      points.push(payoff)
    }
    return points
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Strategy Builder (Prototype)</h1>
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-1 bg-white p-4 shadow rounded">
          <label className="block mb-2">Underlying</label>
          <select className="w-full mb-3 p-2 border rounded">
            <option>NIFTY</option>
            <option>BANKNIFTY</option>
            <option>FINNIFTY</option>
          </select>

          <label className="block mb-2">Spot Price</label>
          <input value={spot} onChange={e=>setSpot(Number(e.target.value))} className="w-full p-2 border rounded mb-3" />

          <label className="block mb-2">Strategy</label>
          <select value={strategy} onChange={e=>setStrategy(e.target.value)} className="w-full p-2 border rounded mb-3">
            <option>Long Call</option>
            <option>Long Put</option>
            <option>Bull Call Spread</option>
          </select>

          <label className="block mb-2">Strike</label>
          <input value={strike} onChange={e=>setStrike(Number(e.target.value))} className="w-full p-2 border rounded mb-3" />

          <label className="block mb-2">Premium</label>
          <input value={premium} onChange={e=>setPremium(Number(e.target.value))} className="w-full p-2 border rounded mb-3" />

        </div>
        <div className="col-span-2">
          <div className="bg-white p-4 shadow rounded">
            <h2 className="font-semibold mb-2">Payoff</h2>
            <PayoffChart points={generatePayoff()} />
          </div>
        </div>
      </div>

    </div>
  )
}
