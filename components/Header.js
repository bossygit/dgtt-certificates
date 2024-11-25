import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/dashboard">Tableau de Bord</Link></li>
          <li><Link to="/notifications">Notifications</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
