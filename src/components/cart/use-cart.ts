import { create } from 'zustand'

type CartStore = {
  articles: number[]
  priceTotal: number
  addToCart: (articleId: number) => void
  removeFromCart: (articleId: number) => void
}

const useCart = create<CartStore>()((set) => ({
  articles: [],
  priceTotal: 0,
  addToCart: (articleId) =>
    set((state) => ({ articles: [...state.articles, articleId] })),
  removeFromCart: (articleId) =>
    set((state) => ({
      articles: state.articles.filter((a) => a !== articleId),
    })),
}))

export const useArticlesInCart = () => useCart((state) => state.articles)
export const priceTotal = () => useCart((state) => state.priceTotal)

export default useCart
