import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("currentUser"));
    if (savedUser && savedUser.username) {
      setCurrentUser(savedUser.username);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    setCurrentUser(null);
    navigate("/login");
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <h1>
        Go<span>Iphone</span>
      </h1>

      <div
        className={`menu-toggle ${menuOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={menuOpen ? "show" : ""}>
        <li>
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        </li>
        <li>
          <Link to="/cart" onClick={() => setMenuOpen(false)}>Cart</Link>
        </li>

        {currentUser ? (
          <>
            <li style={{ color: "#ff004c", fontWeight: "bold" }}>
              👋 Hello, {currentUser}
            </li>
            <li>
              <button
                onClick={() => {
                  handleLogout();
                  setMenuOpen(false);
                }}
                style={{
                  background: "transparent",
                  border: "1px solid #ff004c",
                  color: "#fff",
                  padding: "6px 12px",
                  borderRadius: "6px",
                  cursor: "pointer",
                }}
              >
                Logout
              </button>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/login" onClick={() => setMenuOpen(false)}>
                Login
              </Link>
            </li>
            <li>
              <Link to="/signup" onClick={() => setMenuOpen(false)}>
                Signup
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;

