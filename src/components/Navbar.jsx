import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar flex items-center justify-center p-6 bg-white dark:bg-gray-900 shadow-md">
      {/* Wrap the heading and links in a flex container */}
      <div className="flex items-center space-x-12">
        <h2 className="text-xl font-bold">Yaswanth's Portfolio</h2>
        <div className="flex space-x-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `px-3 py-2 rounded hover:text-blue-500 ${isActive ? "text-blue-600 font-semibold" : "text-gray-700 dark:text-gray-300"}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `px-3 py-2 rounded hover:text-blue-500 ${isActive ? "text-blue-600 font-semibold" : "text-gray-700 dark:text-gray-300"}`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `px-3 py-2 rounded hover:text-blue-500 ${isActive ? "text-blue-600 font-semibold" : "text-gray-700 dark:text-gray-300"}`
            }
          >
            Projects
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `px-3 py-2 rounded hover:text-blue-500 ${isActive ? "text-blue-600 font-semibold" : "text-gray-700 dark:text-gray-300"}`
            }
          >
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
}