import { ,createContext, } from "react";
import type { User } from "../types/user.ts";
import type { posts } from "../types/posts.ts";
import { API } from "../services/api.ts";
import { useFetch } from "../hooks/useFetch.ts";

interface AppContextType {
  users: User[];
  posts: posts[];
}

const AppContext = createContext<AppContextType | null>(null);

export const AppProvider= ({ children }:{children:React.ReactNode}) => {
  const { data: users } = useFetch<User[]>(API.USERS);
  const { data: posts } = useFetch<posts[]>(API.POSTS);
  
  return(
    <AppContext.Provider value={{users : users ?? [],posts : posts ?? []}}>
        {children}
    </AppContext.Provider>
  )
};

