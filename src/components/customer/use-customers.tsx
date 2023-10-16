import { useQuery } from '@tanstack/react-query'
import type { Customer } from '../../pages/api/customers'

const queryFn = (): Promise<Customer[]> =>
  fetch('/api/customers').then((res) => res.json())
export const useCustomers = () =>
  useQuery({
    queryKey: ['customerData'],
    queryFn,
  })
