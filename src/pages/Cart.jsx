import { useEffect, useState } from "react";
import { getCart, changeQty, removeFromCart } from "../script.js";
import Navbar from "../Component/Navbar.jsx";
import Fotter from "../Component/Fotter.jsx";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    setCartItems(getCart());
  }, []);

  const increaseQuantity = (id) => {
    const updated = changeQty(id, 1);
    setCartItems([...updated]);
  };

  const decreaseQuantity = (id) => {
    const updated = changeQty(id, -1);
    setCartItems([...updated]);
  };

  const removeItem = (id) => {
    const updated = removeFromCart(id);
    setCartItems([...updated]);
  };

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <div>
      <Navbar />
      <main id="cart-container">
        <h2>Your Cart</h2>

        {cartItems.length === 0 ? (
          <p>Cart is empty</p>
        ) : (
          <>
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.title} width="120" />
                <div className="cart-details">
                  <h3>{item.title}</h3>
                  <p>{item.price}</p>

                  <div className="quantity-controls">
                    <button onClick={() => decreaseQuantity(item.id)}>-</button>
                    <span>{item.qty}</span>
                    <button onClick={() => increaseQuantity(item.id)}>+</button>
                  </div>

                  <button
                    className="delete-btn"
                    onClick={() => removeItem(item.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}

            <div className="cart-summary">
              <h3>Total: ${totalPrice.toFixed(2)}</h3>
            </div>
          </>
        )}
      </main>
      <Fotter />
    </div>
  );
};

export default Cart;





