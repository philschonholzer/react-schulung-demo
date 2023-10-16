import UserCard from './user-card'

type User = {
  id: number
  firstName: string
  lastName: string
  role: string
}

export default function UserList() {
  const users = [
    {
      id: 1,
      firstName: 'Freddy',
      lastName: 'Hauser',
      role: 'Admin',
    },
    {
      id: 2,
      firstName: 'Fränzi',
      lastName: 'Schilter',
      role: 'CFO',
    },
    {
      id: 3,
      firstName: 'Jessi',
      lastName: 'Kramer',
      role: 'CEO',
    },
  ] satisfies User[]
  return (
    <section>
      <h2>Users</h2>
      <div className="space-y-2">
        {users.map((user) => (
          <UserCard name={user.firstName} />
        ))}
      </div>
    </section>
  )
}
