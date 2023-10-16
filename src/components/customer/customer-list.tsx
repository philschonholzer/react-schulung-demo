import Customer from './customer'
import { useCustomers } from './use-customers'

export default function CustomerList() {
  const { isLoading, error, data } = useCustomers()

  if (isLoading) return 'Loading...'

  if (error) return `An error has occurred: ${error}`

  return (
    <div>
      <h1 className="text-2xl">Customers</h1>
      {data && data.map((c) => <Customer key={c.id} name={c.name} />)}
    </div>
  )
}
