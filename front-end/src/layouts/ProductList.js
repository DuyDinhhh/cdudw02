import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { GET_ALL_PRODUCTS, GET_PRODUCTS_BY_CATEGORY } from "../api/apiService";

function ProductList() {
  const [products, setProducts] = useState([]);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const category = searchParams.get("category"); // Updated to use category name

  useEffect(() => {
    const fetchProducts = async () => {
      if (category) {
        GET_PRODUCTS_BY_CATEGORY(category).then((response) => {
          if (response && response.data) {
            setProducts(response.data);
          }
        });
      } else {
        GET_ALL_PRODUCTS().then((response) => {
          if (response && response.data) {
            setProducts(response.data);
          }
        });
      }
    };

    fetchProducts();
  }, [category]);

  return (
    <div className="container mt-4">
      {/* <h2 className="text-center">
        {category ? `Sản phẩm: Của danh mục ${category}` : "Tất cả sản phẩm"}
      </h2> */}
      <div className="row justify-content-center">
        {products.length > 0 ? (
          products.map((product) => (
            <div
              key={product.id}
              className="col-lg-3 col-md-4 col-sm-6 d-flex justify-content-center"
            >
              <div
                className="card text-center shadow-sm"
                style={{ width: "18rem" }}
              >
                <img
                  src={
                    product.image.startsWith("http")
                      ? product.image
                      : `/images/${product.image}`
                  }
                  className="card-img-top"
                  alt={product.productName}
                  style={{
                    height: "200px",
                    objectFit: "cover",
                    padding: "10px",
                  }}
                />
                <div className="card-body d-flex flex-column align-items-center">
                  <h5 className="card-title">{product.productName}</h5>
                  <p className="card-text">
                    <strong>Giá:</strong> ${product.price}
                  </p>
                  <p className="card-text">
                    <strong>Danh mục:</strong> {product.category}
                  </p>
                  <p className="card-text">
                    <strong>Tình trạng:</strong>{" "}
                    {product.availability
                      ? `${product.stockQuantity} sản phẩm có sẵn`
                      : "Hết hàng"}
                  </p>
                  <button className="btn btn-primary mt-auto w-100">
                    {product.availability ? "Thêm vào giỏ" : "Hết hàng"}
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center">Không có sản phẩm nào.</p>
        )}
      </div>
    </div>
  );
}

export default ProductList;
