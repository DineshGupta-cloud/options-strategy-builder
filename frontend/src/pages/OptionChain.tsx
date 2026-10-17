import React from 'react'
import FileUpload from '../components/FileUpload'
import useSampleData from '../hooks/useSampleData'

export default function OptionChain() {
  const { data, setData } = useSampleData()

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Option Chain</h1>
      <div className="mb-4">
        <FileUpload onData={(d)=> setData(Array.isArray(d)?d:[])} />
      </div>

      <div className="bg-white shadow rounded p-4">
        <table className="w-full table-auto">
          <thead>
            <tr>
              <th className="text-left">Strike</th>
              <th className="text-left">CE LTP</th>
              <th className="text-left">PE LTP</th>
              <th className="text-left">CE OI</th>
              <th className="text-left">PE OI</th>
            </tr>
          </thead>
          <tbody>
            {data.map((r:any, i:number)=> (
              <tr key={i} className="border-t">
                <td>{r.strike ?? r['Strike Price'] ?? '-'}</td>
                <td>{r.ce_ltp ?? r['CE_LTP'] ?? '-'}</td>
                <td>{r.pe_ltp ?? r['PE_LTP'] ?? '-'}</td>
                <td>{r.ce_oi ?? r['CE_OI'] ?? '-'}</td>
                <td>{r.pe_oi ?? r['PE_OI'] ?? '-'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
