import { addToCart } from '../cart/use-cart'

export default function Article(props: { article: Article }) {
  return (
    <div className="grid grid-cols-[auto,1fr] gap-y-2 gap-x-8">
      <div>Name</div>
      <div>{props.article.name}</div>
      <div>Beschreibung</div>
      <div>{props.article.description}</div>
      <div>Preis</div>
      <div>{props.article.price}</div>
      <button onClick={() => addToCart(props.article.id)}>Add 🛒</button>
    </div>
  )
}
