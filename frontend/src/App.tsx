import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Dashboard from './pages/Dashboard'
import OptionChain from './pages/OptionChain'
import StrategyBuilder from './pages/StrategyBuilder'

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-100">
        <Header />
        <div className="flex">
          <Sidebar />
          <main className="flex-1 p-6">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/option-chain" element={<OptionChain />} />
              <Route path="/strategy-builder" element={<StrategyBuilder />} />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  )
}
