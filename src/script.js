import { useState, useEffect } from "react";
import { toast } from "react-toastify";


// ------------------ بيانات المنتجات ------------------
export const products = {
  iphones: [
    {
      id: 1,
      title: "iPhone 17 Pro Max",
      price: "99,999 L.E",
      description:
        "Apple’s most powerful iPhone with A19 Pro chip, 6.9-inch Super Retina XDR display, and pro-level cameras.",
      image: "/images/17promax.jpg",
    },
    {
      id: 2,
      title: "iPhone 17 Pro",
      price: "89,999 L.E",
      description:
        "Premium titanium design with A19 Pro chip and ProMotion display for ultra-smooth performance.",
      image: "/images/17pro.jpg",
    },
    {
      id: 3,
      title: "iPhone 17",
      price: "79,999 L.E",
      description:
        "The latest generation with A19 chip, strong battery life, and enhanced AI-powered camera.",
      image: "/images/17.jpg",
    },
    {
      id: 4,
      title: "iPhone 16 Pro Max",
      price: "84,999 L.E",
      description:
        "Stunning OLED display and A18 Pro chip for unmatched performance and speed.",
      image: "/images/16promax.jpg",
    },
    {
      id: 5,
      title: "iPhone 16 Pro",
      price: "74,999 L.E",
      description:
        "Powerful performance with A18 Pro chip and stainless-steel design.",
      image: "/images/iphone16pro.jpg",
    },
    {
      id: 6,
      title: "iPhone 16",
      price: "64,999 L.E",
      description:
        "Sleek design with A18 chip and advanced dual camera system.",
      image: "/images/iphone16.jpg",
    },
    {
      id: 7,
      title: "iPhone 15 Pro Max",
      price: "69,999 L.E",
      description:
        "Titanium build and A17 Pro chip with professional-grade photography features.",
      image: "/images/15promax.jpg",
    },
    {
      id: 8,
      title: "iPhone 15 Pro",
      price: "63,999 L.E",
      description:
        "Compact and premium iPhone with A17 Pro chip and sharp display.",
      image: "/images/15pro.jpg",
    },
    {
      id: 9,
      title: "iPhone 15",
      price: "54,999 L.E",
      description:
        "High performance with A16 chip and improved camera system.",
      image: "/images/iph15.jpg",
    },
    {
      id: 10,
      title: "iPhone 14 Pro Max",
      price: "49,999 L.E",
      description:
        "Large display and A16 chip for a smooth user experience.",
      image: "/images/14promax.jpg",
    },
    {
      id: 11,
      title: "iPhone 14 Pro",
      price: "45,999 L.E",
      description:
        "Professional camera and A16 chip with excellent display.",
      image: "/images/14pro.jpg",
    },
    {
      id: 12,
      title: "iPhone 14",
      price: "41,999 L.E",
      description:
        "Balanced performance with A15 chip and all-day battery life.",
      image: "/images/14.jpg",
    },
    {
      id: 13,
      title: "iPhone 13 Pro Max",
      price: "39,999 L.E",
      description:
        "A15 chip and pro camera system with smooth performance.",
      image: "/images/13promax.jpg",
    },
    {
      id: 14,
      title: "iPhone 13 Pro",
      price: "36,999 L.E",
      description:
        "Elegant design with A15 chip and excellent speed.",
      image: "/images/13pro.jpg",
    },
    {
      id: 15,
      title: "iPhone 13",
      price: "33,999 L.E",
      description:
        "Great value with A15 chip and reliable performance.",
      image: "/images/iph13.jpg",
    },
    {
      id: 16,
      title: "iPhone 12 Pro Max",
      price: "31,999 L.E",
      description:
        "OLED screen with A14 chip and powerful triple camera setup.",
      image: "/images/12promax.jpg",
    },
    {
      id: 17,
      title: "iPhone 12 Pro",
      price: "29,999 L.E",
      description:
        "Stylish and fast with A14 chip for smooth multitasking.",
      image: "/images/12pro.jpg",
    },
    {
      id: 18,
      title: "iPhone 12",
      price: "27,999 L.E",
      description:
        "5G-ready iPhone with A14 chip and modern design.",
      image: "/images/12.jpg",
    },
    {
      id: 19,
      title: "iPhone 11 Pro Max",
      price: "25,999 L.E",
      description:
        "Triple-camera system and A13 chip for reliable performance.",
      image: "/images/11promax.jpg",
    },
    {
      id: 20,
      title: "iPhone 11 Pro",
      price: "23,999 L.E",
      description:
        "Great camera and A13 chip at an affordable price.",
      image: "/images/11pro.jpg",
    },
    {
      id: 21,
      title: "iPhone 11",
      price: "21,999 L.E",
      description:
        "Budget-friendly iPhone powered by A13 chip with strong battery.",
      image: "/images/iph11.jpg",
    },
  ],

  ipads: [
    { id: 22, title: "iPad Air (M2)", price: "69,999 L.E", description: "Ultra-thin iPad with M2 chip, Liquid Retina display, and Apple Pencil Pro support.", image: "/images/ipad air.jpg" },
    { id: 23, title: "iPad Pro (M4)", price: "129,999 L.E", description: "Professional-grade tablet with M4 chip, Ultra Retina XDR display, and advanced camera system.", image: "/images/ipad pro.jpg" },
    { id: 24, title: "iPad 10th Gen", price: "44,999 L.E", description: "Affordable iPad with A14 chip, great for everyday tasks and entertainment.", image: "/images/ipad10.jpg" },
    { id: 25, title: "iPad 11 (2024)", price: "54,999 L.E", description: "Sleek iPad with updated design, USB-C, and Apple Pencil compatibility.", image: "/images/ipad11.jpg" },
    { id: 26, title: "iPad Mini (6th Gen)", price: "49,999 L.E", description: "Compact iPad with A15 chip and 8.3-inch Liquid Retina display.", image: "/images/ipadmini.jpg" },
    { id: 27, title: "iPad 8th Gen", price: "32,999 L.E", description: "Classic iPad with A12 chip and 10.2-inch Retina display, perfect for students.", image: "/images/ipad8.jpg" },
  ],

  macs: [
    { id: 28, title: "MacBook Air (M3)", price: "119,999 L.E", description: "Lightweight laptop with M3 chip, long battery life, and Retina display.", image: "/images/macbookair.jpg" },
    { id: 29, title: "MacBook Pro (M3 Pro)", price: "199,999 L.E", description: "High-performance laptop with M3 Pro chip, ProMotion display, and long battery life.", image: "/images/macbookpro.jpg" },
    { id: 30, title: "iMac (M3)", price: "149,999 L.E", description: "All-in-one desktop with M3 chip, 24-inch 4.5K Retina display, and sleek design.", image: "/images/imac.jpg" },
  ],

  watches: [
    { id: 31, title: "Apple Watch Series 10", price: "79,999 L.E", description: "Latest Apple Watch with larger display, advanced health sensors, and S10 chip.", image: "/images/series10.jpg" },
    { id: 32, title: "Apple Watch Series 7", price: "39,999 L.E", description: "Durable smartwatch with larger screen and fast charging.", image: "/images/series7.jpg" },
    { id: 33, title: "Apple Watch SE (2nd Gen)", price: "27,999 L.E", description: "Affordable Apple Watch with core fitness tracking and essential health features.", image: "/images/seriesse.jpg" },
    { id: 34, title: "Apple Watch Ultra 1", price: "79,999 L.E", description: "Adventure-ready smartwatch with rugged titanium case and extended battery.", image: "/images/ultra1.jpg" },
    { id: 35, title: "Apple Watch Ultra 2", price: "89,999 L.E", description: "Second-gen Ultra with brighter display and improved GPS precision.", image: "/images/ultra2.jpg" },
    { id: 36, title: "Apple Watch Ultra 3", price: "99,999 L.E", description: "Latest Ultra model with S10 chip, longer battery life, and enhanced durability.", image: "/images/ultra3.jpg" },
  ],

  airpods: [
    { id: 37, title: "AirPods Pro 3", price: "29,999 L.E", description: "Next-gen wireless earbuds with adaptive noise cancellation and H3 chip.", image: "/images/airpodspro3.jpg" },
    { id: 38, title: "AirPods Pro 2", price: "24,999 L.E", description: "Premium earbuds with H2 chip, noise cancellation, and spatial audio.", image: "/images/airpodspro2.jpg" },
    { id: 39, title: "AirPods 4", price: "17,999 L.E", description: "Comfortable fit with improved sound quality and adaptive EQ.", image: "/images/air4.jpg" },
  ],

  jbls: [
    { id: 40, title: "JBL Clip 4", price: "7,999 L.E", description: "Ultra-portable Bluetooth speaker with waterproof design and strong bass.", image: "/images/clip4.jpg" },
    { id: 41, title: "JBL Go 4", price: "4,999 L.E", description: "Compact Bluetooth speaker with punchy sound and modern design.", image: "/images/go4.jpg" },
    { id: 42, title: "JBL PartyBox 310", price: "49,999 L.E", description: "Powerful speaker with deep bass and LED light effects for parties.", image: "/images/partyboox.jpg" },
  ],
};

export default products;


// ------------------ CART FUNCTIONS ------------------

export const getCartKey = () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  return currentUser && currentUser.username ? `cart_${currentUser.username}` : null;
};

export const getCart = () => {
  const cartKey = getCartKey();
  if (!cartKey) return [];
  return JSON.parse(localStorage.getItem(cartKey)) || [];
};

export const saveCart = (cart) => {
  const cartKey = getCartKey();
  if (!cartKey) return;
  localStorage.setItem(cartKey, JSON.stringify(cart));
};


export const addToCart = (product) => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  if (!currentUser || !currentUser.username) {
    toast.error("⚠️ Please login to add items to your cart.");
    return;
  }

  if (!product || !product.id) {
    console.error("Invalid product:", product);
    toast.error("❌ Error adding product. Please try again.");
    return;
  }

  const cartKey = `cart_${currentUser.username}`;
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


