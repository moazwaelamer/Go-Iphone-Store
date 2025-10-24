import { useState, useEffect } from "react";
import { toast } from "react-toastify";


// ------------------ بيانات المنتجات ------------------
export const products = {
  iphones: [
  { id: 1, title: "iPhone 17 Pro Max", price: 1599, description: "Apple’s most powerful smartphone with A19 Pro chip, 6.9-inch Super Retina XDR display, and advanced camera system.", image: "/images/17promax.jpg" },
  { id: 2, title: "iPhone 17 Pro", price: 1399, description: "Premium performance with A19 Pro chip, ProMotion display, and titanium frame.", image: "/images/17pro.jpg" },
  { id: 3, title: "iPhone 17", price: 1199, description: "The latest iPhone with A19 chip, improved battery life, and enhanced camera quality.", image: "/images/17.jpg" },
  { id: 4, title: "iPhone 16 Pro Max", price: 1499, description: "Flagship model featuring A18 Pro chip, ProMotion OLED display, and top-tier camera system.", image: "/images/16promax.jpg" },
  { id: 5, title: "iPhone 16 Pro", price: 1299, description: "High-performance smartphone with A18 Pro chip and stainless steel design.", image: "/images/iphone16pro.jpg" },
  { id: 6, title: "iPhone 16", price: 1099, description: "Powerful and stylish iPhone with A18 chip and enhanced camera features.", image: "/images/iphone16.jpg" },
  { id: 7, title: "iPhone 15 Pro Max", price: 1299, description: "Titanium build, A17 Pro chip, and industry-leading camera quality.", image: "/images/15promax.jpg" },
  { id: 8, title: "iPhone 15 Pro", price: 1199, description: "Compact powerhouse with A17 Pro chip and beautiful design.", image: "/images/15pro.jpg" },
  { id: 9, title: "iPhone 15", price: 999, description: "Versatile smartphone with A16 chip and impressive photo performance.", image: "/images/iph15.jpg" },
  { id: 10, title: "iPhone 14 Pro Max", price: 1099, description: "Large display and A16 Bionic chip with ProMotion technology.", image: "/images/14promax.jpg" },
  { id: 11, title: "iPhone 14 Pro", price: 999, description: "Pro-level performance with A16 Bionic chip and advanced camera system.", image: "/images/14pro.jpg" },
  { id: 12, title: "iPhone 14", price: 849, description: "All-around great phone with A15 Bionic chip and improved battery life.", image: "/images/14.jpg" },
  { id: 13, title: "iPhone 13 Pro Max", price: 899, description: "Flagship A15 Bionic chip, great camera, and long-lasting battery.", image: "/images/13promax.jpg" },
  { id: 14, title: "iPhone 13 Pro", price: 799, description: "Balanced performance and compact design with A15 chip.", image: "/images/13pro.jpg" },
  { id: 15, title: "iPhone 13", price: 699, description: "Smooth experience with A15 Bionic chip and dual camera system.", image: "/images/iph13.jpg" },
  { id: 16, title: "iPhone 12 Pro Max", price: 749, description: "A14 Bionic chip with large display and durable Ceramic Shield.", image: "/images/12promax.jpg" },
  { id: 17, title: "iPhone 12 Pro", price: 699, description: "Powerful and elegant design with A14 Bionic performance.", image: "/images/12pro.jpg" },
  { id: 18, title: "iPhone 12", price: 649, description: "Classic iPhone design powered by A14 Bionic chip and 5G.", image: "/images/12.jpg" },
  { id: 19, title: "iPhone 11 Pro Max", price: 649, description: "Triple-camera setup and A13 Bionic chip for great performance.", image: "/images/11promax.jpg" },
  { id: 20, title: "iPhone 11 Pro", price: 599, description: "Compact and reliable smartphone with A13 Bionic chip.", image: "/images/11pro.jpg" },
  { id: 21, title: "iPhone 11", price: 549, description: "Value phone with A13 chip and dual-camera system.", image: "/images/iph11.jpg" },
   
  ],

  ipads: [
  { id: 22, title: "iPad Air (M2)", price: 699, description: "Ultra-thin iPad with M2 chip, Liquid Retina display, and Apple Pencil Pro support.", image: "/images/ipad air.jpg" },
  { id: 23, title: "iPad Pro (M4)", price: 1299, description: "Professional-grade tablet with M4 chip, Ultra Retina XDR display, and advanced camera system.", image: "/images/ipad pro.jpg" },
  { id: 24, title: "iPad 10th Gen", price: 449, description: "Affordable iPad with A14 Bionic chip, great for everyday tasks and entertainment.", image: "/images/ipad10.jpg" },
  { id: 25, title: "iPad 11 (2024)", price: 549, description: "Sleek iPad with updated design, USB-C, and Apple Pencil compatibility.", image: "/images/ipad11.jpg" },
  { id: 26, title: "iPad Mini (6th Gen)", price: 499, description: "Compact iPad with A15 Bionic chip and 8.3-inch Liquid Retina display.", image: "/images/ipadmini.jpg" },
  { id: 27, title: "iPad 8th Gen", price: 329, description: "Classic iPad with A12 Bionic chip and 10.2-inch Retina display, perfect for students.", image: "/images/ipad8.jpg" },
],

macs: [
  { id: 28, title: "MacBook Air (M3)", price: 1199, description: "Lightweight laptop with M3 chip, long battery life, and Retina display.", image: "/images/macbookair.jpg" },
  { id: 29, title: "MacBook Pro (M3 Pro)", price: 1999, description: "High-performance laptop with M3 Pro chip, ProMotion display, and long battery life.", image: "/images/macbookpro.jpg" },
  { id: 30, title: "iMac (M3)", price: 1499, description: "All-in-one desktop with M3 chip, 24-inch 4.5K Retina display, and sleek design.", image: "/images/imac.jpg" },
],

watches: [
  { id: 31, title: "Apple Watch Series 10", price: 799, description: "Latest Apple Watch with larger display, advanced health sensors, and S10 chip.", image: "/images/series10.jpg" },
  { id: 32, title: "Apple Watch Series 7", price: 399, description: "Durable smartwatch with larger screen and fast charging.", image: "/images/series7.jpg" },
  { id: 33, title: "Apple Watch SE (2nd Gen)", price: 279, description: "Affordable Apple Watch with core fitness tracking and essential health features.", image: "/images/seriesse.jpg" },
  { id: 34, title: "Apple Watch Ultra 1", price: 799, description: "Adventure-ready smartwatch with rugged titanium case and extended battery.", image: "/images/ultra1.jpg" },
  { id: 35, title: "Apple Watch Ultra 2", price: 899, description: "Second-gen Ultra with brighter display and improved GPS precision.", image: "/images/ultra2.jpg" },
  { id: 36, title: "Apple Watch Ultra 3", price: 999, description: "Latest Ultra model with S10 chip, longer battery life, and enhanced durability.", image: "/images/ultra3.jpg" },
],

airpods: [
  { id: 37, title: "AirPods Pro 3", price: 299, description: "Next-gen wireless earbuds with adaptive noise cancellation and H3 chip.", image: "/images/airpodspro3.jpg" },
  { id: 38, title: "AirPods Pro 2", price: 249, description: "Premium earbuds with H2 chip, active noise cancellation, and spatial audio.", image: "/images/airpodspro2.jpg" },
  { id: 39, title: "AirPods 4", price: 179, description: "Comfortable fit with improved audio quality and adaptive EQ.", image: "/images/air4.jpg" },
],

jbls: [
  { id: 40, title: "JBL Clip 4", price: 79, description: "Ultra-portable Bluetooth speaker with waterproof design and strong bass.", image: "/images/clip4.jpg" },
  { id: 41, title: "JBL Go 4", price: 49, description: "Compact Bluetooth speaker with punchy sound and modern design.", image: "/images/go4.jpg" },
  { id: 42, title: "JBL PartyBox 310", price: 499, description: "Powerful portable speaker with light effects and deep bass for parties.", image: "/images/partyboox.jpg" },
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


