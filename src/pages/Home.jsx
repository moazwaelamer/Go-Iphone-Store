import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Component/Navbar.jsx";
import Fotter from "../Component/Fotter.jsx";

const Home = () => {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const cats = [
      { name: "iPhones", path: "/iphone", image: "/images/17promax.jpg" },
      { name: "iPads", path: "/ipad", image: "/images/ipad air.jpg" },
      { name: "MacBooks", path: "/mac", image: "/images/macbookair.jpg" },
      { name: "Watches", path: "/watch", image: "/images/series10.jpg" },
      { name: "AirPods", path: "/airpods", image: "/images/airpodspro2.jpg" },
      { name: "JBL", path: "/jbl", image: "/images/clip4.jpg" },
    ];
    setCategories(cats);
  }, []);

  useEffect(() => {
    document.title = "Go Iphone Store";
  }, []);

  return (
    <>
     
      <Navbar />
      <main>
        <h1 style={{ textAlign: "center", margin: "30px 0" }}>
          Apple Categories
        </h1>

        <div className="products">
          {categories.map((cat, index) => (
            <div
              key={index}
              className="product-card"
              onClick={() => navigate(cat.path)}
              style={{ cursor: "pointer" }}
            >
              <img src={cat.image} alt={cat.name} />
              <h3>{cat.name}</h3>
              <p>Explore the latest {cat.name} lineup</p>
            </div>
          ))}
        </div>
      </main>
      <Fotter />
    </>
  );
};

export default Home;






