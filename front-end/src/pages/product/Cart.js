import React from "react";
import startsActive from "../../assets/images/icons/stars-active.svg";
import startsDisable from "../../assets/images/icons/starts-disable.svg";

import { Link, useNavigate } from 'react-router-dom';


const Cart = (props) => {
    const navigate = useNavigate();
    const { product } = props;


    const handleLinkClick = () => {
        // Chuyển trang và cuộn lên đầu
        // window.scrollTo(0, 0);
    };
    return (
        <div class="col-xl-3 col-lg-3 col-md-4 col-6">
            <div class="card card-product-grid">
                <Link to={`/products/detail?productId=${product.id}`} class="img-wrap" onClick={handleLinkClick}>
                    <img src={require(`../../assets/images/items/${product.thumbail}`)} alt="" />
                </Link>
                <figcaption class="info-wrap">
                    <ul class="rating-stars mb-1">
                        <li class="stars-active">
                            <img src={startsActive} alt="" />
                        </li>
                        <li>
                            <img src={startsDisable} alt="" />
                        </li>
                    </ul>
                    <div>
                        <Link to={`/products/detail?productId=${product.id}`} class="title" d>{product.title}</Link>
                    </div>
                    <div  class="price h5 mt-2">{product.price}₫</div>
                </figcaption>
            </div>
        </div>
    );
};
export default Cart;