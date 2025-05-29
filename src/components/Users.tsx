import UserCard from './UserCard.tsx'
import UserDetails from './UserDetails'
const users = [
    { id: 1, name: "Users", icon: "/icons/users.svg", number: '2,453' },
    { id: 2, name: "Active Users", icon: "/icons/activeusers.svg", number: '2,453' },
    { id: 3, name: "Users with Loans", icon: "/icons/userswithloans.svg", number: '12,453' },
    { id: 4, name: "Users with Savings", icon: "/icons/userswithsavings.svg", number: '102,453' }
]
function Users() {
  return (
    <div className='users-container'>
        <h3 className='users-header'>Users</h3>
        <div className='userscard-container'>
          {users.map(user => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
        <UserDetails />
    </div>
  )
}

export default Users