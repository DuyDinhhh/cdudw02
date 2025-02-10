import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { PLACE_ORDER } from "../api/apiService";
import { CLEAR_CART } from "../api/apiService";
import Total from "../pages/shoppingcart/Total";

const ShoppingCart = () => {
  const navigate = useNavigate();
  const { user, setCart, cart, addCart, removeCart } = useContext(UserContext);
  const [total, setTotal] = useState(0);
  const [updatedQuantities, setUpdatedQuantities] = useState({});

  useEffect(() => {
    let totalPrice = 0;
    cart.forEach((item) => {
      if (item.product) {
        totalPrice += item.product.price * item.quantity;
      }
    });
    setTotal(totalPrice);
  }, [cart]);

  // ✅ Store new quantity values
  const handleQuantityChange = (productId, value) => {
    setUpdatedQuantities({
      ...updatedQuantities,
      [productId]: parseInt(value, 10),
    });
  };

  // ✅ Function to update the cart when "Update" is clicked
  const handleUpdateClick = (product) => {
    const newQuantity = updatedQuantities[product.id] || product.quantity;
    if (newQuantity > 0) {
      addCart(product, newQuantity); // Pass the full new quantity
    }
  };

  const handlePlaceOrder = async () => {
    if (!user) {
      alert("Bạn cần đăng nhập để đặt hàng!");
      navigate("/login");
      return;
    }

    const cartId = localStorage.getItem("cartId"); // ✅ Get cartId from localStorage
    if (!cartId) {
      alert("Không tìm thấy giỏ hàng!");
      return;
    }

    try {
      const response = await PLACE_ORDER(user.id, cartId); // ✅ Call the order function
      if (response) {
        window.location.reload(); // ✅ Reload page after login

        alert("Đặt hàng thành công!");

        navigate("/"); // ✅ Redirect to homepage
      } else {
        alert("Đặt hàng thất bại, vui lòng thử lại.");
      }
    } catch (error) {
      console.error("Lỗi khi đặt hàng:", error);
    }
  };

  return (
    <section className="section-content padding-y">
      <div className="container">
        <div className="row">
          <main className="col-md-9">
            <div className="card">
              <table className="table table-borderless table-shopping-cart">
                <thead className="text-muted">
                  <tr className="small text-uppercase">
                    <th scope="col">Sản phẩm</th>
                    <th scope="col" width="150">
                      Số lượng
                    </th>
                    <th scope="col" width="120">
                      Giá
                    </th>
                    <th scope="col" className="text-right" width="200"></th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((item, index) => {
                    if (!item.product) return null;
                    return (
                      <tr key={index}>
                        <td>
                          <figure className="itemside">
                            <figcaption className="info">
                              <a href="#" className="title text-dark">
                                {item.product.productName}
                              </a>
                            </figcaption>
                          </figure>
                        </td>
                        <td>
                          {/* ✅ Number Input for Quantity */}
                          <input
                            type="number"
                            className="form-control"
                            value={
                              updatedQuantities[item.product.id] ??
                              item.quantity
                            }
                            min="1"
                            max="100"
                            onChange={(e) =>
                              handleQuantityChange(
                                item.product.id,
                                e.target.value
                              )
                            }
                          />
                          {/* ✅ Update Button (Inside Each Row) */}
                          <button
                            className="btn btn-sm btn-secondary mt-2"
                            onClick={() => handleUpdateClick(item.product)}
                          >
                            Cập nhật
                          </button>
                        </td>
                        <td>
                          {(item.product.price * item.quantity).toFixed(2)}₫
                        </td>
                        <td className="text-right">
                          <button
                            className="btn btn-light btn-round"
                            onClick={() => removeCart(item.product.id)}
                          >
                            <i className="fas fa-times"></i>
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <div className="card-body border-top">
                <button
                  className="btn btn-primary float-md-right"
                  onClick={handlePlaceOrder}
                >
                  Mua hàng <i className="fa fa-chevron-right"></i>
                </button>
              </div>
            </div>
          </main>
          <Total total={total} />
        </div>
      </div>
    </section>
  );
};

export default ShoppingCart;
