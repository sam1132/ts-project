import type { Posts } from "../types/posts.ts"

interface PostsListProps { 
    posts: Posts[];
}
const PostsList = ({posts}:PostsListProps) => {
  return (
  <ul className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {
        posts.map((post)=>(
            <li key={post.id} className="mb-4 p-4 border rounded-lg shadow-sm ">
                <p className="mb-5">@{post.userId}</p>
                <div className="flex flex-col justify-between ">
                    <p className="text-sm text-teal-500 md:text-lg">{post.title}</p>
                    <p className="text-sm text-gray-500">{post.body}</p>
                </div>
            </li>
        ))
    }
    </ul>
  )
}

export default PostsList