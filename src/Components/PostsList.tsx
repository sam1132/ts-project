import type { Posts } from "../types/posts.ts"
import { useTheme } from "../context/theme/useThemeContext";

interface PostsListProps {
    posts: Posts[];
}
const PostsList = ({ posts }: PostsListProps) => {
    const { theme } = useTheme();
    const isDark = theme === "dark";

    return (
        <ul className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {
                posts.map((post) => (
                    <li
                        key={post.id}
                        className={`mb-4 p-4 border rounded-lg shadow-sm ${isDark ? "border-gray-700 bg-zinc-800" : "border-gray-300 bg-white"
                            }`}
                    >
                        <p className="mb-5">@{post.userId}</p>
                        <div className="flex flex-col justify-between ">
                            <p className="text-sm text-teal-500 md:text-lg">{post.title}</p>
                            <p className={`text-sm ${isDark ? "text-gray-300" : "text-gray-600"}`}>{post.body}</p>
                        </div>
                    </li>
                ))
            }
        </ul>
    )
}

export default PostsList