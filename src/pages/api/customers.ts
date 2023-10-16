export type Customer = {
  id: number
  name: string
}

const customers: Customer[] = [
  {
    id: 1,
    name: 'Acme Gmbh',
  },
  {
    id: 2,
    name: 'Müller AG',
  },
  {
    id: 3,
    name: 'Fam. Kramer und Co.',
  },
]

export async function GET() {
  return new Response(JSON.stringify(customers))
}
