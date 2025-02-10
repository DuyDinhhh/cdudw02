import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LOGIN_USER } from "../../api/apiService"; // ✅ Import API function
import { UserContext } from "../../context/UserContext";
import { useContext } from "react";

const Login = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);
  const [credentials, setCredentials] = useState({
    userName: "",
    userPassword: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await LOGIN_USER(credentials);
    if (response) {
      alert("Đăng nhập thành công!");
      localStorage.setItem("user", JSON.stringify(response));
      localStorage.setItem("cartId", response.data.id); // ✅ Save user ID as cartId
      // setUser(response.data);

      navigate("/"); // ✅ Redirect to home page

      window.location.reload(); // ✅ Reload page after login
    } else {
      setError("Tên đăng nhập hoặc mật khẩu không chính xác!");
    }
  };

  return (
    <section
      className="section-content padding-y"
      style={{ minHeight: "84vh" }}
    >
      <div
        className="card mx-auto"
        style={{ maxWidth: "380px", marginTop: "100px" }}
      >
        <div className="card-body">
          <h4 className="card-title mb-4">Đăng nhập</h4>
          <a
            href="#"
            className="btn btn-facebook btn-block mb-2"
            style={{ backgroundColor: "mediumspringgreen" }}
          >
            <i className="fab fa-facebook-f"></i> Đăng nhập bằng Facebook
          </a>
          <a
            href="#"
            className="btn btn-google btn-block mb-4"
            style={{ backgroundColor: "red" }}
          >
            <i className="fab fa-google"></i> Đăng nhập bằng Google
          </a>
          {error && <div className="alert alert-danger">{error}</div>}
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                name="userName"
                className="form-control"
                placeholder="Tên đăng nhập"
                type="text"
                value={credentials.userName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                name="userPassword"
                className="form-control"
                placeholder="Mật khẩu"
                type="password"
                value={credentials.userPassword}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group d-flex justify-content-between align-items-center">
              <label className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  defaultChecked={true}
                />
                <div className="custom-control-label"> Ghi nhớ </div>
              </label>
              <a href="#" className="text-muted">
                Quên mật khẩu?
              </a>
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary btn-block">
                {" "}
                Đăng nhập{" "}
              </button>
            </div>
          </form>
        </div>
      </div>
      <p className="text-center mt-4">
        Chưa có tài khoản? <a href="/register">Đăng ký</a>
      </p>
    </section>
  );
};

export default Login;
