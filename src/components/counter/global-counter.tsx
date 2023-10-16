import useCounter from './use-counter'

export default function GlobalCounter() {
  const { count, increment, decrement } = useCounter()

  return (
    <div>
      <div className="space-x-4 py-4">
        <button className="h-10 w-10 rounded bg-blue-950" onClick={decrement}>
          -
        </button>
        <button className="h-10 w-10 rounded bg-blue-950" onClick={increment}>
          +
        </button>
      </div>
      <p>Counter: {count}</p>
    </div>
  )
}
