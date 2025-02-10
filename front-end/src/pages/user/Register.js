import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { REGISTER_USER } from "../../api/apiService"; // ✅ Fix the import path

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    userName: "",
    userPassword: "",
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    roleName: "User",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Format the user data correctly
    const userPayload = {
      userName: formData.userName,
      userPassword: formData.userPassword,
      active: 1, // Default to active
      userDetails: {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phoneNumber: formData.phoneNumber,
      },
      role: {
        roleName: formData.roleName,
      },
    };

    // Send the data to the API
    const response = await REGISTER_USER(userPayload);

    if (response) {
      alert("Đăng ký thành công!");
      navigate("/login"); // Redirect to login page
    } else {
      alert("Lỗi đăng ký. Vui lòng thử lại.");
    }
  };

  return (
    <section className="section-content padding-y">
      <div
        className="card mx-auto"
        style={{ maxWidth: "520px", marginTop: "40px" }}
      >
        <article className="card-body">
          <header className="mb-4">
            <h4 className="card-title">Đăng ký</h4>
          </header>
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="col form-group">
                <label>Họ</label>
                <input
                  type="text"
                  className="form-control"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col form-group">
                <label>Tên</label>
                <input
                  type="text"
                  className="form-control"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Số điện thoại</label>
              <input
                type="text"
                className="form-control"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Tên đăng nhập</label>
              <input
                type="text"
                className="form-control"
                name="userName"
                value={formData.userName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label>Mật khẩu</label>
                <input
                  type="password"
                  className="form-control"
                  name="userPassword"
                  value={formData.userPassword}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary btn-block">
                Đăng ký
              </button>
            </div>
          </form>
        </article>
      </div>
      <p className="text-center mt-4">
        Đã có tài khoản? <a href="/login">Đăng nhập</a>
      </p>
    </section>
  );
};

export default Register;
