import axios from "axios";

// Base URLs matching Spring Boot microservices
const PRODUCT_API_URL = "http://localhost:8810";
const RECOMMENDATION_API_URL = "http://localhost:8812";
const USER_API_URL = "http://localhost:8900/api/accounts"; // Ensure correct API base URL
const ORDER_API_URL = "http://localhost:8813"; // Change this based on your backend port

// Generic API call function
export function callApi(
  endpoint,
  method = "GET",
  body = null,
  baseUrl = PRODUCT_API_URL
) {
  return axios({
    method,
    url: `${baseUrl}/${endpoint}`,
    data: body,
  }).catch((e) => {
    console.error("API Error:", e);
  });
}

// Product APIs (Product Catalog Service - Port 8810)
export function GET_ALL_PRODUCTS() {
  return callApi("products", "GET").then((response) => {
    // console.log("cmm", response);
    if (response && response.data) {
      return response.data; // Ensure only data is returned
    }
    return [];
  });
}

export function GET_PRODUCT_ID(id) {
  return callApi(`products/${id}`, "GET");
}

export function POST_ADD_PRODUCT(data) {
  return callApi("admin/products", "POST", data);
}

export function PUT_EDIT_PRODUCT(data) {
  return callApi("admin/products", "PUT", data);
}

export function DELETE_PRODUCT_ID(id) {
  return callApi(`admin/products/${id}`, "DELETE");
}

// Category APIs
export function GET_ALL_CATEGORIES() {
  return callApi("categories", "GET");
}

export function GET_CATEGORY_ID(id) {
  return callApi(`categories/${id}`, "GET");
}

// User APIs
export function REGISTER_USER(userData) {
  return callApi("users", "POST", userData, USER_API_URL);
}

export function GET_USER_BY_ID(id) {
  return callApi(`users/${id}`, "GET", null, USER_API_URL);
}

export function GET_USER_BY_NAME(userName) {
  return callApi(
    `users?name=${encodeURIComponent(userName)}`,
    "GET",
    null,
    USER_API_URL
  );
}

export function LOGIN_USER(credentials) {
  return callApi("login", "POST", credentials, USER_API_URL);
}

export function GET_PRODUCTS_BY_CATEGORY(categoryId) {
  return callApi(`products?category=${categoryId}`, "GET");
}

// Recommendation APIs (Recommendation Service - Port 8812)
export function GET_RECOMMENDATIONS_BY_PRODUCT(productName) {
  return callApi(
    `recommendations?name=${productName}`,
    "GET",
    null,
    RECOMMENDATION_API_URL
  );
}

export function POST_ADD_RECOMMENDATION(userId, productId, rating) {
  return callApi(
    `${userId}/recommendations/${productId}?rating=${rating}`,
    "POST",
    null,
    RECOMMENDATION_API_URL
  );
}

export function DELETE_RECOMMENDATION(id) {
  return callApi(
    `recommendations/${id}`,
    "DELETE",
    null,
    RECOMMENDATION_API_URL
  );
}
const getUserCartId = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  return user ? user.data.id : null; // Use userId as cartId
};

export function GET_CART(cartId) {
  return axios({
    method: "GET",
    url: `http://localhost:8813/cart?cartId=${cartId}`,
  })
    .then((response) => response.data)
    .catch((error) => console.error("API Error:", error));
}

export function ADD_TO_CART(productId, cartId, quantity) {
  return axios({
    method: "POST",
    url: `http://localhost:8813/cart?cartId=${cartId}&productId=${productId}&quantity=${quantity}`,
  })
    .then((response) => response.data)
    .catch((error) => console.error("API Error:", error));
}

export function REMOVE_FROM_CART(cartId, productId) {
  return axios({
    method: "DELETE",
    url: `http://localhost:8813/cart?cartId=${cartId}&productId=${productId}`,
  })
    .then((response) => response.data)
    .catch((error) => console.error("API Error:", error));
}
// export function REMOVE_FROM_CART(cartId, productId) {
//   return callApi(
//     `cart?cartId=${cartId}&productId=${productId}`,
//     "DELETE",
//     null,
//     ORDER_API_URL
//   );
// }

export function PLACE_ORDER(userId, cartId) {
  return callApi(
    `order/${userId}?cartId=${cartId}`,
    "POST",
    null,
    ORDER_API_URL
  );
}
export function CLEAR_CART(cartId) {
  return axios({
    method: "DELETE",
    url: `http://localhost:8813/cart?cartId=${cartId}`, // ✅ Deletes all items in cart
  })
    .then((response) => response.data)
    .catch((error) => console.error("API Error:", error));
}
