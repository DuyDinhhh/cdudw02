// import React, { createContext, useState, useEffect } from "react";

// const UserContext = createContext(); // ✅ Make sure it's properly initialized

// const UserProvider = ({ children }) => {
//   const [cart, setCart] = useState([]);
//   const [count, setCount] = useState(0);
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const storedUser = localStorage.getItem("user");
//     if (storedUser) {
//       setUser(JSON.parse(storedUser).data);
//     }
//   }, []);
//   // Load cart from sessionStorage on app start
//   useEffect(() => {
//     const storedCart = JSON.parse(sessionStorage.getItem("arrayProduct")) || [];
//     setCart(storedCart);
//     setCount(storedCart.length);
//   }, []);

//   // Function to add product to cart
//   const addCart = (product) => {
//     let updatedCart = [...cart];
//     const existingProduct = updatedCart.find((item) => item.id === product.id);

//     if (existingProduct) {
//       existingProduct.quantity += 1; // ✅ Increase quantity if exists
//     } else {
//       updatedCart.push({ ...product, quantity: 1 }); // ✅ Add new product
//     }

//     sessionStorage.setItem("arrayProduct", JSON.stringify(updatedCart));
//     setCart(updatedCart);
//     setCount(updatedCart.length);
//   };

//   const removeCart = (id) => {
//     const updatedCart = cart.filter((item) => item.id !== id);
//     sessionStorage.setItem("arrayProduct", JSON.stringify(updatedCart));
//     setCart(updatedCart);
//     setCount(updatedCart.length);
//   };
//   const updateCartQuantity = (id, quantity) => {
//     const updatedCart = cart.map((item) =>
//       item.id === id ? { ...item, quantity: quantity } : item
//     );

//     sessionStorage.setItem("arrayProduct", JSON.stringify(updatedCart));
//     setCart(updatedCart);
//   };
//   return (
//     <UserContext.Provider
//       value={{ user, cart, count, addCart, removeCart, updateCartQuantity }}
//     >
//       {children}
//     </UserContext.Provider>
//   );
// };

// export { UserContext, UserProvider };
import React, { createContext, useState, useEffect } from "react";
import { GET_CART, ADD_TO_CART, REMOVE_FROM_CART } from "../api/apiService";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);

  // ✅ Load user from localStorage
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) setUser(storedUser.data);
  }, []);

  // ✅ Fetch Cart Data After Login
  useEffect(() => {
    if (user?.id) {
      GET_CART(user.id).then((response) => {
        if (response) {
          setCart(response);
          console.log(response);
        }
      });
    }
  }, [user?.id]);

  const addCart = (product, quantity) => {
    const cartId = localStorage.getItem("cartId");
    if (!cartId) {
      alert("Không tìm thấy giỏ hàng! Vui lòng đăng nhập.");
      return;
    }

    const existingItem = cart.find((item) => item.product.id === product.id);
    if (existingItem) {
      // Send the full new quantity, not adding to existing
      ADD_TO_CART(product.id, cartId, quantity).then(() => {
        setCart(
          cart.map((item) =>
            item.product.id === product.id
              ? { ...item, quantity: quantity }
              : item
          )
        );
      });
    } else {
      ADD_TO_CART(product.id, cartId, quantity).then(() => {
        setCart([...cart, { product, quantity }]);
      });
    }
  };
  // ✅ Function to Remove Item from Cart

  const removeCart = (productId) => {
    const cartId = localStorage.getItem("cartId");
    REMOVE_FROM_CART(cartId, productId).then(() => {
      setCart(cart.filter((item) => item.product.id !== productId));
    });
  };

  return (
    <UserContext.Provider value={{ user, cart, addCart, removeCart, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
