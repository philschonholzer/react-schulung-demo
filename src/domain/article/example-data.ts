export function makeArticle(override: Partial<Article> = {}): Article {
  return {
    id: 1,
    name: 'T-Shirt',
    description: 'Blau',
    price: 2.5,
    ...override,
  }
}

export function makeArticleList(): Article[] {
  return [
    makeArticle(),
    makeArticle({ id: 2, description: 'Rot' }),
    makeArticle({ id: 3, description: 'Grün' }),
  ]
}
