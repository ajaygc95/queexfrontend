import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Narbar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
             import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Narbar;
