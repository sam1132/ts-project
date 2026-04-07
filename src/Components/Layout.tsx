import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

function Layout() {
  return (
    <div className="flex h-screen">
    <div className="w-62.5 bg-black text-white border-r-2">
        <Sidebar/>
    </div>
    <div className="flex-1 p-5 overflow-y-auto bg-black text-white">
        <Outlet/>
    </div>
    </div>
  )
}

export default Layout