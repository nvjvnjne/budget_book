import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to="/">リスト一覧</Link>
      <Link to="/form">入力フォーム</Link>
    </nav>
  );
};

export default Navbar;
