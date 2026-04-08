import { AppContext } from "./AppContext";
import { API } from "../services/api.ts";
import { useFetch } from "../hooks/useFetch.ts";
import type { User } from "../types/user.ts";
import type { posts } from "../types/posts.ts";

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const { data: users, loading:usersLoading, error:usersError } = useFetch<User[]>(API.USERS);
  const { data: posts,loading:postsLoading, error:postsError } = useFetch<posts[]>(API.POSTS);

  return (
    <AppContext.Provider value={{ users: users ?? [], posts: posts ?? [],usersLoading, postsLoading, usersError, postsError }}>
      {children}
    </AppContext.Provider>
  );
};