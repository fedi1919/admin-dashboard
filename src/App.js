import React from "react";
import { Routes, Route } from "react-router-dom";

import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/home/Home";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import Product from "./pages/product/Product";
import NewUser from "./pages/newUser/NewUser";
import NewProduct from "./pages/newProduct/NewProduct";
import ProductList from "./pages/productList/ProductList";

import "./App.css";

function App() {
  return (
    <div>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/users" element={<UserList />} exact />
          <Route path="/user/:userId" element={<User />} exact />
          <Route path="/newUser" element={<NewUser />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/newProduct" element={<NewProduct />} />
          <Route path="/product/:productId" element={<Product />} exact />
        </Routes>
      </div>
    </div>
  );
}

export default App;
