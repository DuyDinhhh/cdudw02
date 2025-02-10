import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import DropDown from "./DropDown";
import CartItem from "./CartItem";

const Header = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser).data);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user"); // ✅ Remove user data
    setUser(null);
    navigate("/login"); // ✅ Redirect to login
  };

  return (
    <header className="section-header">
      <section className="header-main border-bottom">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-2 col-lg-3 col-md-12">
              <a href="/" className="brand-wrap">
                <img className="" style={{ width: "55px" }} alt="Logo" />
              </a>
            </div>
            <div className="col-xl-6 col-lg-5 col-md-6">
              <form
                action="#"
                className="search-header"
                style={{ borderColor: "pink" }}
              >
                <div className="input-group w-100">
                  <select
                    className="custom-select border-right"
                    name="category_name"
                  >
                    <option value="">All type</option>
                    <option value="codex">Special</option>
                    <option value="comments">Only best</option>
                    <option value="content">Latest</option>
                  </select>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search"
                  />
                  <div className="input-group-append">
                    <button
                      className="btn btn-primary"
                      type="submit"
                      style={{
                        backgroundColor: "pink",
                        color: "black",
                        borderColor: "pink",
                      }}
                    >
                      <i className="fa fa-search"></i> Tìm kiếm
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6">
              <div className="widgets-wrap float-md-right">
                {user ? (
                  // ✅ Show user info when logged in
                  <>
                    <div className="widget-header mr-3">
                      <a href="#" className="widget-view">
                        <div className="icon-area">
                          <i className="fa fa-user"></i>
                        </div>
                        <small className="text"> {user.userName} </small>
                      </a>
                    </div>
                    <div className="widget-header mr-3">
                      <button
                        onClick={handleLogout}
                        className="btn btn-outline-danger"
                      >
                        <i className="fa fa-sign-out"></i> Đăng xuất
                      </button>
                    </div>
                  </>
                ) : (
                  // ✅ Show login/register links when NOT logged in
                  <>
                    <div className="widget-header mr-3">
                      <Link to="/login" className="widget-view">
                        <div className="icon-area">
                          <i className="fa fa-user"></i>
                        </div>
                        <small className="text"> Đăng nhập </small>
                      </Link>
                    </div>
                    <div className="widget-header mr-3">
                      <Link to="/register" className="widget-view">
                        <div className="icon-area">
                          <i className="fa fa-user-plus"></i>
                        </div>
                        <small className="text"> Đăng kí </small>
                      </Link>
                    </div>
                  </>
                )}

                <div className="widget-header mr-3">
                  <a href="#" className="widget-view">
                    <div className="icon-area">
                      <i className="fa fa-store"></i>
                    </div>
                    <small className="text"> Đơn hàng </small>
                  </a>
                </div>
                <div className="widget-header">
                  <CartItem />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <nav
        className="navbar navbar-main navbar-expand-lg border-bottom"
        style={{ backgroundColor: "pink" }}
      >
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#main_nav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="main_nav">
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <Link className="nav-link" to="/">
                  Trang chủ
                </Link>
              </li>
              <li className="nav-item dropdown">
                <DropDown />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
