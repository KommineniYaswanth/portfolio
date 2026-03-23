import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const navItem = {
  initial: { opacity: 0, y: -8 },
  animate: { opacity: 1, y: 0 },
  hover: { y: -2 },
};

export default function Navbar() {
  return (
    <motion.nav
      className="navbar"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="navbar-content">
        <motion.h2 className="navbar-logo" whileHover={{ scale: 1.04 }}>
          Yaswanth&apos;s Portfolio
        </motion.h2>

        <div className="navbar-links">
          {[
            { to: "/", label: "Home" },
            { to: "/about", label: "About" },
            { to: "/projects", label: "Projects" },
            { to: "/contact", label: "Contact" },
          ].map((item) => (
            <motion.div key={item.to} variants={navItem} initial="initial" animate="animate" whileHover="hover">
              <NavLink
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  `nav-link ${isActive ? "is-active" : ""}`
                }
              >
                {item.label}
              </NavLink>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}