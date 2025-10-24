  import React, { useEffect, useState } from "react";
  import { Link, useNavigate } from "react-router-dom";

  const Navbar = () => {
    const [currentUser, setCurrentUser] = useState(null);
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

    return (
      <nav className="navbar">
        <h1>
          Go<span>Iphone</span>
        </h1>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/cart">Cart</Link></li>

          {currentUser ? (
            <>
              <li style={{ color: "#ff0000", fontWeight: "bold" }}>
                👋 Hello, {currentUser}
              </li>
              <li>
                <button
                  onClick={handleLogout}
                  style={{
                    background: "transparent",
                    border: "1px solid #ff0000",
                    color: "#fff",
                    padding: "5px 10px",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                >
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/signup">Signup</Link></li>
            </>
          )}
        </ul>
      </nav>
    );
  };

  export default Navbar;
