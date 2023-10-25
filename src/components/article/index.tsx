import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import ArticleList from './article-list'

export default function Articles() {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <ArticleList />
    </QueryClientProvider>
  )
}
