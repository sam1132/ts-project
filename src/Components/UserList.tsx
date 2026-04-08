import type { User } from "../types/user.ts"

interface UserListProps {
  users: User[];
}
function UserList({users}:UserListProps) {
  return (
    <ul className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {
        users.map((user)=>(
            <li key={user.id} className="mb-4 p-4 border rounded-lg shadow-sm ">
                <p className="mb-2">@{user.username}</p>
                <div className="flex justify-between gap-3 flex-col lg:flex-row ">
                    <p className="text-sm text-gray-500">{user.name}</p>
                    <p className="text-sm text-teal-500">{user.email}</p>
                </div>
            </li>
        ))
    }
    </ul>
  )
}

export default UserList