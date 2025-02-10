import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext"; // ✅ Import UserContext

const ProductCard = ({ product }) => {
  const { addCart } = useContext(UserContext); // ✅ Get `addCart` function

  return (
    <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
      <div className="card">
        <img
          src={`/images/${product.image}`}
          className="card-img-top"
          alt={product.productName}
          style={{ height: "200px", objectFit: "contain" }}
        />
        <div className="card-body">
          <h5 className="card-title">{product.productName}</h5>
          <p className="card-text">
            <strong>Giá:</strong> {product.price}₫
          </p>
          <button
            className="btn btn-primary mt-2"
            onClick={() => addCart(product, 1)} // ✅ Call `addCart`
            disabled={!product.availability}
          >
            {product.availability ? "Thêm vào giỏ" : "Hết hàng"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
