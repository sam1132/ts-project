import type { User } from "../types/user.ts"
import { useTheme } from "../context/theme/useThemeContext";

interface UserListProps {
  users: User[];
}
function UserList({ users }: UserListProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <ul className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {
        users.map((user) => (
          <li
            key={user.id}
            className={`mb-4 p-4 border rounded-lg shadow-sm ${isDark ? "border-gray-700 bg-zinc-800" : "border-gray-300 bg-white"
              }`}
          >
            <p className="mb-2">@{user.username}</p>
            <div className="flex justify-between gap-3 flex-col lg:flex-row ">
              <p className={`text-sm ${isDark ? "text-gray-300" : "text-gray-600"}`}>{user.name}</p>
              <p className="text-sm text-teal-500">{user.email}</p>
            </div>
          </li>
        ))
      }
    </ul>
  )
}

export default UserList