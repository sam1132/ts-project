import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useTheme } from "../context/theme/useThemeContext";
function Layout() {
  const { theme } = useTheme();

  const isDark = theme === "dark";
  return (
    <div
      className={`flex h-screen transition-colors duration-200 ${
        isDark ? "bg-zinc-900" : "bg-slate-100"
      }`}
    >
      <div
        className={`w-62.5 border-r-2 transition-colors duration-200 ${
          isDark ? "text-gray-100 border-gray-700" : "text-gray-800 border-gray-300"
        }`}
      >
        <Sidebar />
      </div>
      <div
        className={`flex-1 p-5 overflow-y-auto transition-colors duration-200 ${
          isDark ? "text-gray-100" : "text-gray-900"
        }`}
      >
        <Outlet />
      </div>
    </div>
  );
}

export default Layout