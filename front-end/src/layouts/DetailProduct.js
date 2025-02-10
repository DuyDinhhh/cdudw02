import ItemDetail from '../pages/detailproduct/ItemDetail'
import SestionHeader from '../pages/detailproduct/SestionHeader'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { GET_ALL_PRODUCTS, GET_PRODUCT_ID } from "../api/apiService";
const DetailProduct = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const productId = searchParams.get('productId');
    const [product, setProduct] = useState({});
    useEffect(() => {

        if (productId == null) {
            GET_ALL_PRODUCTS(`products`).then((item) => setProduct(item.data));
        }
        else {
            GET_PRODUCT_ID(`products`, productId).then((item) => setProduct(item.data)
            );
        }
    }, [productId]);
    return (
        <>
            <SestionHeader product={product} />
            <div className="container">
                <ItemDetail product={product} />
                {/* <SestionContend /> */}
            </div>
        </>
    )
}

export default DetailProduct