import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/home/Home";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import Product from "./pages/product/Product";
import NewUser from "./pages/newUser/NewUser";
import NewProduct from "./pages/newProduct/NewProduct";
import ProductList from "./pages/productList/ProductList";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";

import "./App.css";

function App() {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <div>
      <Topbar />
      <div className="container">
        {user && <Sidebar />}
        <Routes>
          <Route
            path="/login"
            element={user ? <Navigate replace to="/" /> : <Login />}
          />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/"
            element={user ? <Home /> : <Navigate replace to="/login" />}
            exact
          />
          <Route
            path="/users"
            element={user ? <UserList /> : <Navigate replace to="/login" />}
            exact
          />
          <Route
            path="/user/:userId"
            element={user ? <User /> : <Login />}
            exact
          />
          <Route
            path="/newUser"
            element={user ? <NewUser /> : <Navigate replace to="/login" />}
          />
          <Route
            path="/products"
            element={user ? <ProductList /> : <Navigate replace to="/login" />}
          />
          <Route
            path="/newProduct"
            element={user ? <NewProduct /> : <Navigate replace to="/login" />}
          />
          <Route
            path="/product/:productId"
            element={user ? <Product /> : <Navigate replace to="/login" />}
            exact
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
