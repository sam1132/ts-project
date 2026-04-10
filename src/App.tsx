import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/Dashboard.tsx";
import Layout from "./Components/Layout.tsx";
import Users from "./Pages/Users.tsx";
import Posts from "./Pages/Posts.tsx";
import { AppProvider } from "./context/user/UserProvider.tsx";
import { ThemeProvider } from "./context/theme/ThemeContext.tsx";
function App() {
  return (
    <>
    <ThemeProvider>
    <AppProvider> 
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="/users" element={<Users />} />
            <Route path="/posts" element={<Posts />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppProvider>
    </ThemeProvider>
    </>
  );
}

export default App;
