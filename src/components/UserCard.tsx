
interface User {
  icon: string;
  name: string;
  number: string | number;
}

interface UserCardProps {
  user: User;
}

function UserCard({ user }: UserCardProps) {
  return (
    <div className='user-card'>
      <img src={user.icon} alt={user.name} />
      <p>{user.name}</p>
      <span>{user.number}</span>
    </div>
  )
}

export default UserCard