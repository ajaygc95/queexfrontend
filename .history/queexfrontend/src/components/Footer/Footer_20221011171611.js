import React from "react";
import "./Footer.css";

import { faRotateLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "../Button/Button";
function Footer() {
  return (
    <>
      <div className="footer-container">
        <section className="footer-subscription">
          <p className="footer-subscription-heading">Join The Adventure</p>
          <p className="footer-subscription-text">
            You Can ubsubscribe at any time
          </p>
          <div className="input-areas">
            <form>
              <input
                type="email"
                name="email"
                placeholder="your email"
                className="footer-input"
              />
              <Button buttonStyle="btn--outline">Subscribe</Button>
            </form>
          </div>
        </section>
        <div className="footer-links">
          <div className="footer-link-wrapper">
            <div className="footer-link-items">
              <h2>About Us</h2>
              <Link to=/></Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;

{
  /* <div className="footercontainer">
          <div className="row">
            <div className="col">
              <ul>
                <h4>Contact US</h4>
                <li>408 111 111</li>
                <li>help@queex.com</li>
                <li>Facebook</li>
              </ul>
            </div>
            <div className="col">
              <ul>
                <h4>Contact US</h4>
                <li>408 111 111</li>
                <li>help@queex.com</li>
                <li>Facebook</li>
              </ul>
            </div>
          </div>
          <hr />
          <div className="row">
            <p className="col-sm">
              &copy; {new Date().getFullYear()} | All rights Reserved | Privacy
              | Terms of Services
            </p>
          </div>

          <div className="col">
            <Link to="/" className="footer-logo">
              Queex
              <FontAwesomeIcon className="fa-typo3" icon={faRotateLeft} />
            </Link>
          </div>
        </div> */
}
