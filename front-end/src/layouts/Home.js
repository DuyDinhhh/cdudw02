// import React, { useEffect, useState } from "react";
// import { GET_ALL_PRODUCTS } from "../api/apiService";
// import Slide from "../pages/home2/Slide";

// function Home() {
//   const [products, setProducts] = useState([]);
//   const [cart, setCart] = useState([]); // State to store cart items

//   // Fetch products when the component mounts
//   useEffect(() => {
//     GET_ALL_PRODUCTS()
//       .then((allProducts) => {
//         if (allProducts.length > 0) {
//           console.log(allProducts);
//           setProducts(allProducts);
//         }
//       })
//       .catch((error) => console.error("Error fetching products:", error));
//   }, []);

//   // Function to handle adding product to the cart
//   const addToCart = (product) => {
//     setCart([...cart, product]); // Add product to cart state
//     alert(`${product.productName} added to cart!`);
//   };

//   return (
//     <div className="container">
//       <Slide />
//       <h2 className="text-center">Products</h2>
//       <div className="row">
//         {products.length > 0 ? (
//           products.map((product) => (
//             <div key={product.id} className="col-lg-3 col-md-4 col-sm-6 mb-4">
//               {/* Each product takes 3 columns (lg) for 4 items per row */}
//               <div className="card">
//                 {/* Render product image */}
//                 <img
//                   src={`/images/${product.image}`} // Ensure correct path for images
//                   className="card-img-top"
//                   alt={product.productName}
//                   style={{ height: "200px", objectFit: "contain" }}
//                 />
//                 <div className="card-body">
//                   <h5 className="card-title">{product.productName}</h5>
//                   <p className="card-text">
//                     <strong>Price:</strong> ${product.price}
//                   </p>
//                   <p className="card-text">
//                     <strong>Category:</strong> {product.category}
//                   </p>
//                   <p className="card-text">
//                     <strong>Availability:</strong>{" "}
//                     {product.availability ? " Yes" : "Out of stock"}
//                   </p>
//                   {/* Add to Cart Button */}
//                   <button
//                     className="btn btn-primary mt-2"
//                     onClick={() => addToCart(product)}
//                     disabled={!product.availability} // Disable if out of stock
//                   >
//                     {product.availability ? "Add to Cart" : "Out of Stock"}
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p className="text-center">No products available.</p>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Home;
import React, { useEffect, useState } from "react";
import { GET_ALL_PRODUCTS } from "../api/apiService";
import Slide from "../pages/home2/Slide";
// import ProductCard from "../components/ProductCard"; // ✅ Import ProductCard
import ProductCard from "../pages/components/ProductCard";
function Home() {
  const [products, setProducts] = useState([]);

  // Fetch products when the component mounts
  useEffect(() => {
    GET_ALL_PRODUCTS()
      .then((allProducts) => {
        if (allProducts.length > 0) {
          // console.log(allProducts);
          setProducts(allProducts);
        }
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div className="container">
      <Slide />
      <h2 className="text-center">Sản phẩm</h2>
      <div className="row">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p className="text-center">Không có sản phẩm.</p>
        )}
      </div>
    </div>
  );
}

export default Home;
