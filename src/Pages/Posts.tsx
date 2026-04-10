import PostsList from "../Components/PostsList.tsx";
import SearchBar from "../Components/SearchBar.tsx";
import { useState } from "react";
import { useAppContext } from "../context/user/useUserContext.ts";
import { useTheme } from "../context/theme/useThemeContext.ts";

function PostsSkeleton({ isDark }: { isDark: boolean }) {
  return (
    <div>
      <div
        className={`mb-5 h-6 w-32 rounded animate-pulse ${isDark ? "bg-gray-700" : "bg-gray-300"
          }`}
      />
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

function Posts() {
  const [search, setSearch] = useState("");
  const { posts, postsLoading, postsError } = useAppContext();
  const { theme } = useTheme();
  const isDark = theme === "dark";

  if (postsLoading) return <PostsSkeleton isDark={isDark} />;
  if (postsError) return <p>Error: {postsError}</p>;
  if (!posts) return <p>No posts found.</p>;

  const filteredPosts = posts.filter((post) =>
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
        <p
          className={`font-bold text-center text-xl md:text-2xl ${isDark ? "text-teal-200" : "text-teal-700"
            }`}
        >
          No posts match your search.
        </p>
      ) : (
        <PostsList posts={filteredPosts} />
      )}
    </div>
  );
}

export default Posts;
