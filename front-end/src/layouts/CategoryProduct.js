import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Slide from "../pages/home2/Slide";
import Looking from "../pages/home2/Looking";
import Page3 from "../pages/PhanTrang";
import { GET_ALL_PRODUCTS, GET_CATEGORY_ID } from "../api/apiService";

function Product() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const categoryId = searchParams.get("categoryid");

  const [category, setCategory] = useState("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (!categoryId) {
      GET_ALL_PRODUCTS().then((response) => {
        if (response && response.data) {
          setProducts(response.data);
        }
      });
      setCategory("");
    } else {
      GET_ALL_PRODUCTS().then((response) => {
        if (response && response.data) {
          setProducts(
            response.data.filter((item) => item.categoryId === categoryId)
          );
        }
      });

      GET_CATEGORY_ID(categoryId).then((response) => {
        if (response && response.data) {
          setCategory(response.data);
        }
      });
    }
  }, [categoryId]);

  return (
    <div className="container">
      <Slide />
      <Page3 product={products} category={category} />
      <Looking />
    </div>
  );
}

export default Product;
