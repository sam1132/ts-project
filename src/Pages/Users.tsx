import { useState } from "react";
import SearchBar from "../Components/SearchBar";
import UserList from "../Components/UserList";
import { useAppContext } from "../context/user/useUserContext";
import { useTheme } from "../context/theme/useThemeContext";

function UsersSkeleton({ isDark }: { isDark: boolean }) {
  return (
    <div>
      <div>
        <div
          className={`mb-5 h-6 w-32 rounded animate-pulse ${isDark ? "bg-gray-700" : "bg-gray-300"
            }`}
        />
        <div
          className={`h-10 w-48 rounded animate-pulse ${isDark ? "bg-gray-700" : "bg-gray-300"
            }`}
        />
      </div>
      <ul className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Array.from({ length: 6 }).map((_, index) => (
          <li
            key={index}
            className={`p-4 border rounded-lg shadow-sm animate-pulse ${isDark
                ? "border-gray-700 bg-gray-800"
                : "border-gray-300 bg-gray-100"
              }`}
          >
            <div
              className={`mb-5 h-4 w-24 rounded ${isDark ? "bg-gray-700" : "bg-gray-300"
                }`}
            />
            <div className="flex justify-between gap-4">
              <div
                className={`h-4 w-20 rounded ${isDark ? "bg-gray-700" : "bg-gray-300"
                  }`}
              />
              <div
                className={`h-4 w-28 rounded ${isDark ? "bg-gray-700" : "bg-gray-300"
                  }`}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Users() {
  const [search, setSearch] = useState("");
  const { users, usersError, usersLoading } = useAppContext();
  const { theme } = useTheme();
  const isDark = theme === "dark";

  if (usersLoading) return <UsersSkeleton isDark={isDark} />;
  if (usersError) return <p>Error: {usersError}</p>;
  if (!users) return <p>No users found.</p>;

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase()),
  );
  return (
    <div>
      <div className="flex justify-between mb-10">
        <h2 className="text-teal-300 font-semibold text-2xl ">Users</h2>
        <div>
          <SearchBar value={search} onChange={(value) => setSearch(value)} placeholder="search by name ..." />
        </div>
      </div>
      <div>
        {filteredUsers.length === 0 ? (
          <p
            className={`font-bold text-center text-xl md:text-2xl ${isDark ? "text-teal-200" : "text-teal-700"
              }`}
          >
            No users match your search.
          </p>
        ) : (
          <UserList users={filteredUsers} />
        )}
      </div>
    </div>
  );
}

export default Users;
