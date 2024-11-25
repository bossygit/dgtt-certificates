import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-blue-600 text-white p-4 shadow-lg">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          <Link to="/">DGTT Certificates</Link>
        </h1>
        <ul className="flex space-x-4">
          <li><Link to="/dashboard" className="hover:underline">Dashboard</Link></li>
          <li><Link to="/certificate-form" className="hover:underline">Generate Certificate</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
