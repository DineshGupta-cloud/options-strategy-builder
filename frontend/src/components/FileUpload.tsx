import React, { useRef } from 'react'

type Props = {
  onData: (data: any) => void
}

export default function FileUpload({ onData }: Props) {
  const inputRef = useRef<HTMLInputElement | null>(null)

  function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = (ev) => {
      const text = ev.target?.result as string
      try {
        if (file.name.endsWith('.json')) {
          const json = JSON.parse(text)
          onData(json)
        } else {
          // CSV simple parse
          const lines = text.split(/\r?\n/).filter(Boolean)
          const headers = lines[0].split(',').map(h=>h.trim())
          const rows = lines.slice(1).map(line => {
            const cols = line.split(',')
            const obj: any = {}
            headers.forEach((h,i)=> obj[h]=cols[i])
            return obj
          })
          onData(rows)
        }
      } catch (err) {
        alert('Failed to parse file: ' + (err as Error).message)
      }
    }
    reader.readAsText(file)
  }

  return (
    <div>
      <input ref={inputRef} type="file" accept=".csv,.json" onChange={handleFile} />
    </div>
  )
}
