import React, { useEffect, useState } from "react";
import { GET_ALL_PRODUCTS } from "../../api/apiService";
import Cart from "../product/Cart";

const Category = ({ categoryName, categoryId }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    GET_ALL_PRODUCTS()
      .then((response) => {
        if (response && response.data) {
          setProducts(
            response.data.filter((product) => product.categoryId === categoryId)
          );
        }
      })
      .catch((error) => console.error("Error fetching products", error));
  }, [categoryId]);

  return (
    <section className="padding-bottom">
      <header className="section-heading heading-line">
        <h4 className="title-section text-uppercase">{categoryName}</h4>
      </header>

      <div className="row">
        {products.length > 0 ? (
          products.map((product) => <Cart product={product} key={product.id} />)
        ) : (
          <p>No products found for this category.</p>
        )}
      </div>
    </section>
  );
};

export default Category;
