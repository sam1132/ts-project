import { useState } from "react";
import SearchBar from "../Components/SearchBar";
import UserList from "../Components/UserList";
import { useFetch } from "../hooks/useFetch";
import { API } from "../services/api.ts";
import type { User } from "../types/user.ts";

function UsersSkeleton() {
  return (
    <div>
      <div>
        <div className="mb-5 h-6 w-32 rounded bg-gray-700 animate-pulse" />
        <div className="h-10 w-48 rounded bg-gray-700 animate-pulse" />
      </div>
      <ul className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Array.from({ length: 6 }).map((_, index) => (
          <li
            key={index}
            className="p-4 border rounded-lg shadow-sm border-gray-700 bg-gray-800 animate-pulse"
          >
            <div className="mb-5 h-4 w-24 rounded bg-gray-700" />
            <div className="flex justify-between gap-4">
              <div className="h-4 w-20 rounded bg-gray-700" />
              <div className="h-4 w-28 rounded bg-gray-700" />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Users() {
  const [search, setSearch] = useState("");
  const { data, loading, error } = useFetch<User[]>(API.USERS);

  if (loading) return <UsersSkeleton />;
  if (error) return <p>Error: {error}</p>;
  if (!data) return <p>No users found.</p>;

  const filteredUsers = data.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase()),
  );
  return (
    <div>
      <div className="flex justify-between mb-10">
        <h2 className="text-teal-300 font-semibold text-2xl ">Users</h2>
        <div>
          <SearchBar value={search} onChange={(value) => setSearch(value)} placeholder="search by name ..."/>
        </div>
      </div>
      <div>
        {filteredUsers.length === 0 ? (
          <p className="text-teal-200 font-bold text-center text-xl md:text-2xl">No users match your search.</p>
        ) : (
          <UserList users={filteredUsers} />
        )}
      </div>
    </div>
  );
}

export default Users;
