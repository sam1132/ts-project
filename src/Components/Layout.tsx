import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useTheme } from "../context/theme/useThemeContext";

function Layout() {
  const { theme } = useTheme();
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const isDark = theme === "dark";

  return (
    <div
      className={`flex h-screen transition-colors duration-200 ${
        isDark ? "bg-zinc-900" : "bg-slate-100"
      }`}
    >
      {isMobileSidebarOpen && (
        <button
          type="button"
          aria-label="Close sidebar overlay"
          className="md:hidden fixed inset-0 z-30 bg-black/40"
          onClick={() => setIsMobileSidebarOpen(false)}
        />
      )}

      <aside
        className={`fixed md:relative inset-y-0 left-0 z-40 border-r-2 transition-all duration-200 transform ${
          isMobileSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 ${
          isSidebarCollapsed ? "md:w-20" : "md:w-64"
        } w-64 ${isDark ? "text-gray-100 border-gray-700 bg-zinc-900" : "text-gray-800 border-gray-300 bg-slate-100"}`}
      >
        <Sidebar
          isCollapsed={isSidebarCollapsed}
          onToggleCollapse={() => setIsSidebarCollapsed((prev) => !prev)}
          onNavigate={() => setIsMobileSidebarOpen(false)}
          onCloseMobile={() => setIsMobileSidebarOpen(false)}
        />
      </aside>

      <div
        className={`flex-1 p-4 md:p-5 overflow-y-auto transition-colors duration-200 ${
          isDark ? "text-gray-100" : "text-gray-900"
        }`}
      >
        <button
          type="button"
          className={`md:hidden mb-4 border px-3 py-2 rounded-md ${
            isDark ? "border-gray-700 text-gray-100" : "border-gray-300 text-gray-800"
          }`}
          onClick={() => setIsMobileSidebarOpen(true)}
        >
          Menu
        </button>
        <Outlet />
      </div>
    </div>
  );
}

export default Layout