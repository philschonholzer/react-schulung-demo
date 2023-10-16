import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import CustomerList from './customer-list'

const queryClient = new QueryClient()

export default function App() {
  return (
    // Provide the client to your App
    <QueryClientProvider client={queryClient}>
      <CustomerList />
    </QueryClientProvider>
  )
}
