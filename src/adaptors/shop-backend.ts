import { makeArticle, makeArticleList } from '../domain/article/example-data'

const cart: number[] = []

export async function getArticles(): Promise<Article[]> {
  return makeArticleList()
}

export async function getArticleById(id: number): Promise<Article> {
  return makeArticle({ id })
}

export async function addToCart(userId: number, articleId: number) {
  cart.push(articleId)
  return Promise.resolve()
}
