import { useState, useEffect } from 'react'

export default function useSampleData() {
  const [data, setData] = useState<any[]>([])

  useEffect(() => {
    fetch('/data/sample_option_chain.json')
      .then(r => r.json())
      .then(setData)
      .catch(() => setData([]))
  }, [])

  return { data, setData }
}
