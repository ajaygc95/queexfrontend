import React from "react";
import "./Footer.css";

import { faRotateLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <>
      <div className="main-footer">
        <div className="footercontainer">
          <div className="row">
            {" "}
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
              Queex
              <FontAwesomeIcon className="fa-typo3" icon={faRotateLeft} />
            </Link>{" "}
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
