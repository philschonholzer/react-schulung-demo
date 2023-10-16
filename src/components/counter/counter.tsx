import { useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)
  return (
    <div className="bg-blue-700 rounded p-2">
      <button
        className="h-10 w-10 bg-red-500 rounded"
        onClick={() => setCount((prev) => prev + 1)}
      >
        +
      </button>
      <button
        className="h-10 w-10 bg-red-500 rounded"
        onClick={() => setCount((prev) => prev - 1)}
      >
        -
      </button>
      <div>Count: {count}</div>
    </div>
  )
}
