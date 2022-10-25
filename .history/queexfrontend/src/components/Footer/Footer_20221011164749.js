import React from "react";
import "./Footer.css";

import { faRotateLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Footer() {
  return (
    <>
      <div className="main-footer">
        <div className="footercontainer">
          <div className="row">
            <div className="col">
              <ul>
                <h1>Contact US</h1>
                <li>408 111 111</li>
                <li>help@queex.com</li>
                <li>408 111 111</li>
              </ul>
            </div>

            <div className="col">
              <Link to="/" className="navbar-logo">
                Queex
                <FontAwesomeIcon className="fa-typo3" icon={faRotateLeft} />
              </Link>{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
