export default function Card(props: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={`border rounded p-4 ${props.className}`}>
      {props.children}
    </div>
  )
}
