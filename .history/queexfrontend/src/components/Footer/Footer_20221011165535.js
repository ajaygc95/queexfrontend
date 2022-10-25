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

            <div className="col">
              <ul>
                <h4>Contact US</h4>
                <li>408 111 111</li>
                <li>help@queex.com</li>
                <li>Facebook</li>
              </ul>
            </div>
          </div>
          <div className="row">
            <p className="col-sm">
              &copy; {new Date().getFullYear()} | All rights Reserved | Privacy
              | Terms of Services
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
