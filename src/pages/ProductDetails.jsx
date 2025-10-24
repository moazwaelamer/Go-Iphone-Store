import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import products, { addToCart } from "../script.js"; 
import Navbar from "../Component/Navbar.jsx";
import Fotter from "../Component/Fotter.jsx";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const navigate = useNavigate();

  const allProducts = [
    ...(products.iphones || []),
    ...(products.ipads || []),
    ...(products.macs || []),
    ...(products.watches || []),
    ...(products.airpods || []),
    ...(products.jbls || []),
  ];

  useEffect(() => {
    const found = allProducts.find((p) => p.id === parseInt(id));
    setProduct(found);
  }, [id]);

  
  useEffect(() => {
    const currentUser = localStorage.getItem("loggedInUser");
    if (currentUser) setLoggedInUser(currentUser);
  }, []);


  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    setLoggedInUser(null);
    navigate("/login");
  };

  if (!product) {
    return (
      <h2 style={{ textAlign: "center", marginTop: "50px" }}>
        Product not found
      </h2>
    );
  }

  return (
    <div>
      <Navbar />

      <main style={{ textAlign: "center", margin: "40px 0" }}>
        <div
          id="product-details"
          style={{
            display: "inline-block",
            maxWidth: "400px",
            textAlign: "center",
          }}
        >
          <img
            src={product.image}
            alt={product.title}
            style={{ width: "100%", borderRadius: "10px" }}
          />
          <h2 style={{ margin: "20px 0 10px" }}>{product.title}</h2>
          <p style={{ color: "#555" }}>{product.description}</p>
          <p style={{ fontSize: "20px", fontWeight: "bold" }}>
            ${product.price}
          </p>

          <button
            onClick={() => addToCart(product)}
            style={{
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              padding: "10px 20px",
              borderRadius: "5px",
              cursor: "pointer",
              marginTop: "10px",
            }}
          >
            Add to Cart
          </button>

          <div style={{ marginTop: "20px" }}>
            <Link to="/" style={{ textDecoration: "none", color: "#007bff" }}>
              ← Back to Home
            </Link>
          </div>
        </div>
      </main>

      <Fotter />
    </div>
  );
};

export default ProductDetails;



