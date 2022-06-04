import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

export default function Header() {
  return (
    <header>
      <div className="container">
        <div className="header">
          <img
            src="https://www.planium.io/wordpress/wp-content/uploads/2018/11/logo-Planium-06.svg"
            width="250"
            height="100"
            alt="logo"
          ></img>
          <nav>
            <Link to="/">Beneficiarios</Link>
            <Link to="/planos">Planos</Link>
            <Link to="/precos">Preços</Link>
            <Link to="/propostas">Propostas</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
