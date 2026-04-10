import { createContext } from "react";
import type { User } from "../../types/user.ts";
import type  posts  from "../../types/posts.ts";


interface AppContextType {
  users: User[];
  posts: posts[];
  usersLoading: boolean;
  postsLoading: boolean;
  usersError: string | null;
  postsError: string | null;
}

export const AppContext = createContext<AppContextType | null>(null);


