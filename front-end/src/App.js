import "./assets/sass/app.scss";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import Main from "./layouts/Main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductList from "./layouts/ProductList";
import UserLogin from "./layouts/UserLogin";
import UserRegister from "./layouts/UserRegister";
import ShoppingCart from "./layouts/ShoppingCart";
import { UserProvider } from "./context/UserContext";

function App() {
  return (
    <Router>
      <UserProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/login" element={<UserLogin />} />
          <Route path="/register" element={<UserRegister />} />
          <Route path="/ShoppingCart" element={<ShoppingCart />} />
        </Routes>
        <Footer />
      </UserProvider>
    </Router>
  );
}

export default App;
