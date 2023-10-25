import Card from '../ui/card'
import Article from './article'
import { useArticles } from './use-article'

export default function ArticleList() {
  const { data, isLoading, error } = useArticles()

  if (error) {
    return <div>Error</div>
  }
  if (isLoading) {
    return <div>Loading...</div>
  }
  return (
    <ul className="space-y-2">
      {data?.map((article) => (
        <li key={article.id}>
          <Card>
            <Article article={article} />
          </Card>
        </li>
      ))}
    </ul>
  )
}
