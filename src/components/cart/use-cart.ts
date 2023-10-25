import { create } from 'zustand'

type CartStore = {
  articles: number[]
  priceTotal: number
}

const useCart = create<CartStore>()(() => ({
  articles: [],
  priceTotal: 0,
}))

export const useArticlesInCart = () => useCart((state) => state.articles)
export const priceTotal = () => useCart((state) => state.priceTotal)

export const addToCart = (articleId: number) =>
  useCart.setState((state) => ({ articles: [...state.articles, articleId] }))

export const removeFromCart = (articleId: number) =>
  useCart.setState((state) => ({
    articles: state.articles.filter((a) => a !== articleId),
  }))

export default useCart
