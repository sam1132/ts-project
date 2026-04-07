import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div>
      <h2 className="font-medium md:font-bold text-xl text-teal-300 md:text-2xl px-9 py-5">
        TYPED API
      </h2>
      <nav className="p-5">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `block no-underline transition-all duration-200 mb-5 px-5 text-lg font-semibold ${isActive ? " text-teal-300 underline" : " text-white hover:underline"}  `
          }
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/users"
          className={({ isActive }) =>
            `block font-semibold px-5 mb-5 text-lg transition-all duration-200 ${
              isActive
                ? "text-teal-300 underline"
                : "text-white hover:underline"
            }`
          }
        >
          Users
        </NavLink>
        <NavLink
          to="/posts"
          className={({ isActive }) =>
            `block font-semibold px-5 mb-5 text-lg transition-all duration-200 ${
              isActive
                ? "text-teal-300 underline"
                : "text-white hover:underline"
            }`
          }
        >
          Posts
        </NavLink>
      </nav>
    </div>
  );
}

export default Sidebar;
