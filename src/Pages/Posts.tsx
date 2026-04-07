import type { posts } from "../types/posts";
import { useFetch } from "../hooks/useFetch";
import { API } from "../services/api.ts";
import PostsList from "../Components/PostsList.tsx";
import SearchBar from "../Components/SearchBar.tsx";
import { useState } from "react";

function PostsSkeleton() {
  return (
    <div>
      <div className="mb-5 h-6 w-32 rounded bg-gray-700 animate-pulse" />
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

function Posts() {
  const { data, loading, error } = useFetch<posts[]>(API.POSTS);
  const [search, setSearch] = useState("");

  if (loading) return <PostsSkeleton />;
  if (error) return <p>Error: {error}</p>;
  if (!data) return <p>No posts found.</p>;

  const filteredPosts = data.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase()),
  );
  return (
    <div>
      <div className="flex justify-between mb-10">
        <h2 className="text-teal-300 font-semibold text-2xl">Posts</h2>
        <SearchBar
          value={search}
          onChange={(value) => setSearch(value)}
          placeholder="search posts..."
        />
      </div>
      {filteredPosts.length === 0 ? (
        <p className="text-teal-200 font-bold text-center text-xl md:text-2xl">
          No posts match your search.
        </p>
      ) : (
        <PostsList posts={filteredPosts} />
      )}
    </div>
  );
}

export default Posts;
