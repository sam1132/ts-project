import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/Dashboard.tsx";
import Layout from "./Components/Layout.tsx";
import Users from "./Pages/Users.tsx";
import Posts from "./Pages/Posts.tsx";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="/users" element={<Users />} />
            <Route path="/posts" element={<Posts />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
