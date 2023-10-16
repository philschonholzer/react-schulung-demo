import { useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)
  return (
    <>
      <ChangeCount setCount={setCount} />
      <ShowCount count={count} />
    </>
  )
}

interface ChangeCountProps {
  setCount: (value: React.SetStateAction<number>) => void
}

function ChangeCount({ setCount }: ChangeCountProps) {
  return (
    <>
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
    </>
  )
}

interface ShowCountProps {
  count: number
}
function ShowCount({ count }: ShowCountProps) {
  return <div>Count: {count}</div>
}
