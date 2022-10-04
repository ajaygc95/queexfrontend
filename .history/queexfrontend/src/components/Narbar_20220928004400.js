import React, { useState } from "react";
import { Link } from "react-router-dom";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

function Narbar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            <FontAwesomeIcon> </FontAwesomeIcon>
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Narbar;
