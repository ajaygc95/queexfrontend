import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, fa } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            <FontAwesomeIcon icon={faCoffee} />

            <div className="menu-icon">
              <FontAwesomeIcon icon="fa-solid fa-bars" />
            </div>
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
