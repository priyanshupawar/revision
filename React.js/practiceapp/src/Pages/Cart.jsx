// Cart.js
import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import styles from "./modules/Cart.module.css";

function Cart() {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);

  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * 40, 0);
  };

  return (
    <div className={styles.CartContainer}>
      <h2>Your Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className={styles.CartItems}>
            {cart.map((item, index) => (
              <div className={styles.CartItem} key={index}>
                <img src={item.image} alt={item.category} />
                <span>{item.title}</span>
                <span>₹{item.price * 40}</span>
                <button onClick={() => removeFromCart(item)}>Remove</button>
              </div>
            ))}
          </div>
          <p className={styles.CartTotal}>Total: ₹{calculateTotalPrice()}</p>
          <button
            className={styles.ClearCartButton}
            onClick={() => clearCart()}
          >
            Clear Cart
          </button>
          <button
            className={styles.CheckoutButton}
            onClick={() => alert("Order Placed Successfully")}
          >
            Checkout
          </button>
        </>
      )}
    </div>
  );
}

export default Cart;
