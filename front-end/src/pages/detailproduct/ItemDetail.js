import React, { useEffect, useState } from 'react'
import { useContext } from 'react';
import { UserContext } from '../../context/UseContext';
function ItemDetail(props) {
    const { addCart } = useContext(UserContext);
    const [quantity, setQuantity] = useState(1);
    const numberFormatter = new Intl.NumberFormat('de-DE', {
        style: 'decimal',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    });
    
    const { product } = props
    const handleAddCart = () => {
        // Retrieve existing array from sessionStorage or initialize an empty array
        const existingArray = JSON.parse(sessionStorage.getItem("arrayProduct")) || [];

        // Check if the product with the same ID already exists in the cart
        const existingProduct = existingArray.find(item => item.id === product.id);

        if (existingProduct) {
            // If the product already exists, increment its quantity by 1
            existingProduct.quantity += quantity;
        } else {
            // If the product doesn't exist, add it to the cart with quantity 1
            const cart = {
                "id": product.id,
                "quantity": quantity,
                "image": product.thumbail,
                "name": product.title,
                "price": product.price,
                "category": product.category.name
            };

            // Add the current product to the array
            existingArray.push(cart);
            addCart(existingArray.length);
        }

        // Save the updated array back to sessionStorage
        sessionStorage.setItem("arrayProduct", JSON.stringify(existingArray));
    }

    const handlePlus = () => {
        if (quantity > 4) {
            return;
        }
        setQuantity(quantity + 1);
    }
    const handleChangeQuantity = (event) => {
        if (event.target.value > 4) {
            setQuantity(5);
            return;
        }
        if (event.target.value < 2) {
            setQuantity(1);
            return;
        }

    }
    const handleMinus = () => {
        if (quantity < 2) {
            return;
        }
        setQuantity(quantity - 1);
    }
    console.log(">>>LL:", quantity);
    return (
        <section class="section-content bg-white padding-y">
            <div class="container">

                <div class="row">
                    <aside class="col-md-6">
                        <div class="card">
                            <article class="gallery-wrap">
                                <div class="img-big-wrap">
                                    {product && product.thumbail && (
                                        <div> <a href="#"><img src={require(`../../assets/images/items/${product.thumbail}`)} alt="" /></a></div>
                                    )}

                                </div>
                                <div class="thumbs-wrap">
                                {product && product.thumbail && (
                                        <>
                                            <a href="#" class="item-thumb"> <img src={require(`../../assets/images/items/${product.thumbail}`)} alt="" /></a>
                                            <a href="#" class="item-thumb"> <img src={require(`../../assets/images/items/${product.thumbail}`)} alt="" /></a>
                                        </>
                                    )}

                                </div>
                            </article>
                        </div>
                    </aside>
                    <main class="col-md-6">
                        <article class="product-info-aside">

                            <h2 class="title mt-3">{product.title} </h2>

                            <div class="rating-wrap my-3">
                                <ul class="rating-stars">
                                    <li style={{ width: "80%" }} class="stars-active">
                                        <i class="fa fa-star"></i> <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i> <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                    </li>
                                    <li>
                                        <i class="fa fa-star"></i> <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i> <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                    </li>
                                </ul>
                                <small class="label-rating text-muted">132 reviews</small>
                                <small class="label-rating text-success"> <i class="fa fa-clipboard-check"></i> 154 orders </small>
                            </div>

                            <div class="mb-3">
                                <var class="price h4" >{numberFormatter.format(product.price)}₫ </var>
                                {/* <span class="text-muted">USD 562.65 incl. VAT</span> */}
                            </div>
                            <p> {product.description}</p>
                            <dl class="row">
                                <dt class="col-sm-3">Hãng</dt>
                                <dd class="col-sm-9"><a href="#">Great textile Ltd.</a></dd>
                                <dt class="col-sm-3">Bảo hành</dt>
                                <dd class="col-sm-9">2 năm</dd>

                                <dt class="col-sm-3">Thời gian giao hàng</dt>
                                <dd class="col-sm-9">3-4 ngày</dd>

                                <dt class="col-sm-3">Tình trạng</dt>
                                <dd class="col-sm-9">Trong kho</dd>
                            </dl>
                            <div class="form-row  mt-4">
                                <div class="form-group">
                                    <div class="input-group mb-3 input-spinner">
                                        <div class="input-group-prepend">
                                            <button class="btn btn-light" type="button" id="button-plus" onClick={() => handlePlus()}> + </button>
                                        </div>
                                        <input type="text" class="form-control" value={quantity} max="5" min="1" onChange={(event) => handleChangeQuantity(event)} />
                                        <div class="input-group-append">
                                            <button class="btn btn-light" type="button" id="button-minus" onClick={() => handleMinus()}> &minus; </button>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group col-md">
                                    <a class="btn  btn-primary" onClick={()=>handleAddCart()}>
                                        <i class="fas fa-shopping-cart"></i> <span class="text" >Thêm giỏ hàng</span>
                                    </a>
                                    {/* <a href="#" class="btn btn-light">
                                        <i class="fas fa-envelope"></i> <span class="text">Contact supplier</span>
                                    </a> */}
                                </div>
                            </div>

                        </article>
                    </main>
                </div>




            </div>
        </section>
    )
}

export default ItemDetail