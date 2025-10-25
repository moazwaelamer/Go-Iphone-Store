import { useState, useEffect } from "react";
import { toast } from "react-toastify";


// ------------------ بيانات المنتجات ------------------
export const products = {
  iphones: [
    { id: 1, title: "iPhone 17 Pro Max", price: 95999, description: "Apple’s most powerful iPhone with A19 Pro chip, 6.9-inch Super Retina XDR display, and pro camera system.", image: "/images/17promax.jpg" },
    { id: 2, title: "iPhone 17 Pro", price: 85000, description: "Elegant titanium design with A19 Pro chip for unmatched performance and smooth multitasking.", image: "/images/17pro.jpg" },
    { id: 3, title: "iPhone 17", price: 62000, description: "Brilliant display with A18 chip for a fast and smooth daily experience with an advanced camera.", image: "/images/17.jpg" },
    { id: 4, title: "iPhone 16 Pro Max", price: 75000, description: "Super Retina XDR display with professional cameras and A18 Pro chip for incredible performance.", image: "/images/16promax.jpg" },
    { id: 5, title: "iPhone 16 Pro", price: 65000, description: "Excellent performance powered by A18 Pro chip and a stylish durable design.", image: "/images/iphone16pro.jpg" },
    { id: 6, title: "iPhone 16", price: 46999, description: "Powerful performance and advanced dual camera system for Apple lovers.", image: "/images/iphone16.jpg" },
    { id: 7, title: "iPhone 15 Pro Max", price: 51999, description: "Titanium build with A17 Pro chip delivering a premium experience.", image: "/images/15promax.jpg" },
    { id: 8, title: "iPhone 15 Pro", price: 47999, description: "Outstanding performance with A17 Pro chip and pro-grade camera system.", image: "/images/15pro.jpg" },
    { id: 9, title: "iPhone 15", price: 41999, description: "Excellent performance with A16 chip and upgraded camera features.", image: "/images/iph15.jpg" },
    { id: 10, title: "iPhone 14 Pro Max", price: 38999, description: "Stunning display and pro camera setup with the A16 Bionic chip.", image: "/images/14promax.jpg" },
    { id: 11, title: "iPhone 14 Pro", price: 35999, description: "Fast performance, smooth display, and high-quality camera system.", image: "/images/14pro.jpg" },
    { id: 12, title: "iPhone 14", price: 32999, description: "Reliable Apple experience powered by the A15 Bionic chip.", image: "/images/14.jpg" },
    { id: 13, title: "iPhone 13 Pro Max", price: 30999, description: "OLED display and A15 chip with professional camera capabilities.", image: "/images/13promax.jpg" },
    { id: 14, title: "iPhone 13 Pro", price: 28999, description: "High performance and elegant design with A15 Bionic chip.", image: "/images/13pro.jpg" },
    { id: 15, title: "iPhone 13", price: 25999, description: "Powerful A15 chip with great battery life and reliable performance.", image: "/images/iph13.jpg" },
    { id: 16, title: "iPhone 12 Pro Max", price: 23999, description: "Smooth OLED display and A14 chip with triple-camera setup.", image: "/images/12promax.jpg" },
    { id: 17, title: "iPhone 12 Pro", price: 21999, description: "Elegant and fast with A14 chip for multitasking and gaming.", image: "/images/12pro.jpg" },
    { id: 18, title: "iPhone 12", price: 19999, description: "5G-ready device with great performance and modern design.", image: "/images/12.jpg" },
    { id: 19, title: "iPhone 11 Pro Max", price: 17999, description: "Triple-camera system powered by the A13 chip for solid performance.", image: "/images/11promax.jpg" },
    { id: 20, title: "iPhone 11", price: 15999, description: "Affordable iPhone with A13 chip and strong battery life.", image: "/images/iph11.jpg" },
  ],

  ipads: [
    { id: 21, title: "iPad Air (M2)", price: 39999, description: "Lightweight design with M2 chip and stunning Liquid Retina display.", image: "/images/ipad air.jpg" },
    { id: 22, title: "iPad Pro (M4)", price: 61999, description: "Most powerful iPad with M4 chip and Ultra Retina XDR display.", image: "/images/ipad pro.jpg" },
    { id: 23, title: "iPad 10th Gen", price: 29999, description: "Affordable iPad with A14 chip, perfect for students and daily tasks.", image: "/images/ipad10.jpg" },
    { id: 24, title: "iPad 11 (2024)", price: 32999, description: "Modern design iPad with USB-C and Apple Pencil support.", image: "/images/ipad11.jpg" },
    { id: 25, title: "iPad Mini (6th Gen)", price: 31999, description: "Compact iPad with A15 chip and 8.3-inch Liquid Retina display.", image: "/images/ipadmini.jpg" },
  ],

  macs: [
    { id: 26, title: "MacBook Air (M3)", price: 64999, description: "Ultra-light laptop with M3 chip and long battery life.", image: "/images/macbookair.jpg" },
    { id: 27, title: "MacBook Pro (M3 Pro)", price: 99999, description: "Professional-grade performance with M3 Pro chip and ProMotion display.", image: "/images/macbookpro.jpg" },
    { id: 28, title: "iMac (M3)", price: 84999, description: "24-inch 4.5K Retina display with M3 chip and sleek design.", image: "/images/imac.jpg" },
  ],

  watches: [
    { id: 29, title: "Apple Watch Ultra 3", price: 49999, description: "Latest Apple Watch with better battery and rugged titanium design.", image: "/images/ultra3.jpg" },
    { id: 30, title: "Apple Watch Ultra 2", price: 43999, description: "Durable smartwatch with bright display and advanced GPS.", image: "/images/ultra2.jpg" },
    { id: 31, title: "Apple Watch Series 10", price: 29999, description: "New generation Apple Watch with larger screen and S10 chip.", image: "/images/series10.jpg" },
    { id: 32, title: "Apple Watch Series 7", price: 19999, description: "Elegant design, fast charging, and advanced health tracking.", image: "/images/series7.jpg" },
    { id: 33, title: "Apple Watch SE (2nd Gen)", price: 14999, description: "Affordable Apple Watch with great performance and essential features.", image: "/images/seriesse.jpg" },
  ],

  airpods: [
    { id: 34, title: "AirPods Pro 3", price: 14999, description: "Next-gen AirPods with active noise cancellation and H3 chip.", image: "/images/airpodspro3.jpg" },
    { id: 35, title: "AirPods Pro 2", price: 11999, description: "Excellent sound quality, noise cancellation, and MagSafe charging.", image: "/images/airpodspro2.jpg" },
    { id: 36, title: "AirPods 4", price: 8999, description: "Lightweight wireless earbuds with clear sound and comfortable fit.", image: "/images/air4.jpg" },
  ],

  jbls: [
    { id: 37, title: "JBL Clip 4", price: 2499, description: "Portable waterproof Bluetooth speaker with powerful sound.", image: "/images/clip4.jpg" },
    { id: 38, title: "JBL Go 4", price: 1899, description: "Compact Bluetooth speaker with clear sound and modern design.", image: "/images/go4.jpg" },
    { id: 39, title: "JBL PartyBox 310", price: 15999, description: "Powerful party speaker with LED lights and deep bass.", image: "/images/partyboox.jpg" },
  ],
};

export default products;

// ------------------ CART FUNCTIONS ------------------

export const getCartKey = () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  return currentUser && currentUser.username
    ? `cart_${currentUser.username}`
    : "cart_guest";
};

export const getCart = () => {
  const cartKey = getCartKey();
  return JSON.parse(localStorage.getItem(cartKey)) || [];
};

export const saveCart = (cart) => {
  const cartKey = getCartKey();
  localStorage.setItem(cartKey, JSON.stringify(cart));
};

export const addToCart = (product) => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const cartKey = getCartKey();
  let cart = JSON.parse(localStorage.getItem(cartKey)) || [];

  const existing = cart.find((item) => item.id === product.id);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ ...product, qty: 1 });
  }

  localStorage.setItem(cartKey, JSON.stringify(cart));
  toast.success(`🛒 ${product.title} added to your cart!`);
};

export const changeQty = (id, amount) => {
  let cart = getCart();
  const product = cart.find((item) => item.id === id);

  if (product) {
    product.qty += amount;
    if (product.qty <= 0) {
      cart = cart.filter((item) => item.id !== id);
    }
  }

  saveCart(cart);
  return cart;
};

export const removeFromCart = (id) => {
  let cart = getCart();
  cart = cart.filter((item) => item.id !== id);
  saveCart(cart);
  return cart;
};

// ==================== SIGN UP ====================
export const signupUser = (username, email, password) => {
  const cleanUsername = String(username).trim();
  const cleanEmail = String(email).trim().toLowerCase();
  const cleanPassword = String(password).trim();

  if (!cleanUsername || !cleanEmail || !cleanPassword) {
    toast.warn("Please fill all fields!");
    return { success: false };
  }

  let users = JSON.parse(localStorage.getItem("users")) || [];

  if (users.some((u) => u.username === cleanUsername)) {
    toast.error("Username already exists!");
    return { success: false };
  }

  const newUser = { username: cleanUsername, email: cleanEmail, password: cleanPassword };
  users.push(newUser);
  localStorage.setItem("users", JSON.stringify(users));

  toast.success("Account created successfully!");
  return { success: true };
};

// ==================== LOGIN ====================
export const loginUser = (username, password) => {
  const cleanUsername = String(username).trim();
  const cleanPassword = String(password).trim();

  const users = JSON.parse(localStorage.getItem("users")) || [];
  const savedUser = users.find(
    (user) => user.username === cleanUsername && user.password === cleanPassword
  );

  if (!savedUser) {
    toast.error("Invalid username or password!");
    return { success: false };
  }

  localStorage.setItem("currentUser", JSON.stringify(savedUser));
  toast.success(`Welcome back, ${cleanUsername}!`);
  return { success: true, user: savedUser };
};



export const logoutUser = () => {
  localStorage.removeItem("currentUser");
  toast.info("You have been logged out.");
  setTimeout(() => {
    window.location.href = "/";
  }, 1500);
};

// ------------------ HOOKS ------------------
export const useProducts = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(products);
  }, []);
  return data;
};

export const useCart = () => {
  const [cart, setCart] = useState(getCart());
  const update = () => setCart(getCart());

  const add = (product) => {
    addToCart(product);
    update();
  };

  const remove = (id) => {
    removeFromCart(id);
    update();
  };

  const change = (id, amount) => {
    changeQty(id, amount);
    update();
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  return { cart, add, remove, change, total };
};

export const useAuth = () => {
  const [user, setUser] = useState(() => {
    const current = JSON.parse(localStorage.getItem("currentUser"));
    return current ? current.username : null;
  });

  const login = (u, p) => {
    const result = loginUser(u, p);
    if (result.success) setUser(result.user);
    return result;
  };

  const signup = (u, e, p) => signupUser(u, e, p);

  const logout = () => {
    logoutUser();
    setUser(null);
  };

  return { user, login, signup, logout };
};


