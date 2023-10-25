import { useQuery } from '@tanstack/react-query'
import { getArticleById, getArticles } from '../../adaptors/shop-backend'

export const useArticles = () =>
  useQuery({
    queryKey: ['articleData'],
    queryFn: getArticles,
  })

export const useArticle = (articleId: number) =>
  useQuery({
    queryKey: ['article', articleId],
    queryFn: (articleId) => getArticleById,
  })
