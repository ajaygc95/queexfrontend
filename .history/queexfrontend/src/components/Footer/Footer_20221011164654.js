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
              <ul></ul>
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
