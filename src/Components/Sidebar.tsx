import { NavLink } from "react-router-dom";
import { useTheme } from "../context/theme/useThemeContext";

type SidebarProps = {
  isCollapsed: boolean;
  onToggleCollapse: () => void;
  onNavigate: () => void;
  onCloseMobile: () => void;
};

function Sidebar({
  isCollapsed,
  onToggleCollapse,
  onNavigate,
  onCloseMobile,
}: SidebarProps) {
  const { theme, toggleTheme } = useTheme();
  const isLight = theme === "light";

  const navBaseClass =
    "block no-underline transition-all duration-200 mb-3 px-3 py-2 text-base font-semibold rounded-md";
  const navStateClass = (isActive: boolean) =>
    isActive
      ? "text-teal-300 bg-teal-500/10"
      : isLight
      ? "text-gray-800 hover:bg-gray-200"
      : "text-white hover:bg-zinc-800";

  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center justify-between px-4 py-4 border-b border-inherit">
        <h2
          className={`font-medium md:font-bold text-teal-300 transition-all duration-200 ${
            isCollapsed ? "text-base" : "text-xl md:text-2xl"
          }`}
        >
          {isCollapsed ? "TA" : "TYPED API"}
        </h2>
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="md:hidden border px-2 py-1 rounded-md cursor-pointer"
            onClick={onCloseMobile}
          >
            Close
          </button>
          <button
            type="button"
            className="hidden md:block border px-2 py-1 rounded-md cursor-pointer"
            onClick={onToggleCollapse}
          >
            {isCollapsed ? ">" : "<"}
          </button>
        </div>
      </div>

      <nav className="p-4 flex-1">
        <NavLink
          to="/"
          onClick={onNavigate}
          className={({ isActive }) => `${navBaseClass} ${navStateClass(isActive)}`}
        >
          <span className={`transition-all duration-200 ${isCollapsed ? "text-sm" : "text-base"}`}>
            {isCollapsed ? "D" : "Dashboard"}
          </span>
        </NavLink>
        <NavLink
          to="/users"
          onClick={onNavigate}
          className={({ isActive }) => `${navBaseClass} ${navStateClass(isActive)}`}
        >
          <span className={`transition-all duration-200 ${isCollapsed ? "text-sm" : "text-base"}`}>
            {isCollapsed ? "U" : "Users"}
          </span>
        </NavLink>
        <NavLink
          to="/posts"
          onClick={onNavigate}
          className={({ isActive }) => `${navBaseClass} ${navStateClass(isActive)}`}
        >
          <span className={`transition-all duration-200 ${isCollapsed ? "text-sm" : "text-base"}`}>
            {isCollapsed ? "P" : "Posts"}
          </span>
        </NavLink>
      </nav>

      <div className={`flex justify-center items-center p-4 ${isCollapsed ? "" : ""}`}>
        <button
          className={`border p-2 rounded-lg cursor-pointer text-sm ${
            isLight ? "border-gray-400 text-gray-800" : "border-gray-500 text-gray-100"
          }`}
          onClick={toggleTheme}
        >
          {isCollapsed ? "Theme" : "Change theme"}
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
