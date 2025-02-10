import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Link } from "react-router-dom";

const CartItem = () => {
  const { count } = useContext(UserContext);

  return (
    <Link to="/ShoppingCart" className="widget-view">
      <div className="icon-area">
        <i className="fa fa-shopping-cart"></i>
        <span className="notify">{count}</span>
      </div>
      <small className="text"> Giỏ hàng </small>
    </Link>
  );
};

export default CartItem;
