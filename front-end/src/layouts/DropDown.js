import React, { useState, useEffect } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";
import { GET_ALL_CATEGORIES } from "../api/apiService";

const DropDown = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    GET_ALL_CATEGORIES()
      .then((response) => {
        if (response && response.data) {
          setCategories(response.data);
        }
      })
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);

  return (
    <Dropdown>
      <Dropdown.Toggle variant="white" id="dropdown-basic">
        <i className="fa fa-bars text-muted mr-2"></i> Danh mục
      </Dropdown.Toggle>

      <Dropdown.Menu style={{ width: "200px", padding: "10px" }}>
        <nav className="row">
          <div className="col-12">
            {categories.length > 0 ? (
              categories.map((category) => (
                <Link
                  to={`/products?category=${category.id}`} // Updated to match API
                  style={{
                    display: "block",
                    padding: "5px",
                    color: "#333",
                    textDecoration: "none",
                  }}
                  key={category.id}
                >
                  {category.name}
                </Link>
              ))
            ) : (
              <p className="text-muted">Không có danh mục nào</p>
            )}
          </div>
        </nav>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default DropDown;
