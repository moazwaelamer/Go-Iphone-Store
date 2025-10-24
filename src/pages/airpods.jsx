import { Link } from "react-router-dom";
import products, { addToCart } from "../script.js";
import Navbar from "../Component/Navbar.jsx";
import Fotter from "../Component/Fotter.jsx";

const AirPods = () => {
  const airpodProducts = products.airpods;

  return (
    <div>
      <Navbar />
      <main>
        <h1 style={{ textAlign: "center", margin: "30px 0" }}>AirPods</h1>

        <div className="products">
          {airpodProducts.map((item) => (
            <div key={item.id} className="product-card">
              <img src={item.image} alt={item.title} />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <p className="price">${item.price}</p>

              <div className="buttons">
                <Link to={`/product/${item.id}`}>
                  <button>Details</button>
                </Link>

                <button
                  onClick={() => addToCart(item)}
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
              </div>
            </div>
          ))}
        </div>
      </main>
      <Fotter />
    </div>
  );
};

export default AirPods;
