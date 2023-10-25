import { useArticle } from '../article/use-article'
import useCart, { useArticlesInCart } from './use-cart'

export default function Cart() {
  const articlesInCart = useArticlesInCart()
  const removeFromCart = useCart((state) => state.removeFromCart)
  return articlesInCart.length > 0 ? (
    <div>
      <ul>
        {articlesInCart.map((article) => (
          <li key={article}>
            {article}{' '}
            <button onClick={() => removeFromCart(article)}>🗑️</button>
          </li>
        ))}
      </ul>
    </div>
  ) : (
    <div>Empty cart</div>
  )
}
