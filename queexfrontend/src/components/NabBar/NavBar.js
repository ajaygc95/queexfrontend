import React, { useState, useEffect } from "react";
import { FaRProject, FaTimes } from "react-icons/fa";
import { CgMenuRight } from "react-icons/cg";
import { IconContext } from "react-icons";
import { logout } from "../contexts/Action/UserAction";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavLinks,
  NavItem,
  StyledLink,
} from "./NavBarStyles.js";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { data } from "../../data/NavbarData";
import { Button } from "../../globalStyles.js";
import {
  useAuthDispatch,
  useAuthState,
} from "../../components/contexts/AuthContext";
const Navbar = () => {
  const token = localStorage.getItem("token");
  const [show, setShow] = useState(false);
  const [transparent, setTransparent] = useState(false);

  let navigate = useNavigate();
  let location = useLocation();

  const dispatch = useAuthDispatch(); //get the dispatch method from the useDispatch custom hook
  const { is_authenticated, loading, errorMessage, user } = useAuthState();

  const handleClick = () => {
    setShow(!show);
  };

  const scrollTo = (id) => {
    const element = document.getElementById(id);

    element.scrollIntoView({
      behavior: "smooth",
    });
  };

  const closeMobileMenu = (to, id) => {
    setShow(false);
    navigate(to);
  };

  const handleLogout = (e) => {
    e.preventDefault();
    logout(dispatch, navigate);
  };
  return (
    <IconContext.Provider value={{ color: "#$403ae3" }}>
      <Nav transparent={location.pathname === "/" ? true : false}>
        <NavbarContainer>
          <NavLogo to="/">
            <NavIcon src="./assets/galamart_logo.png" />
          </NavLogo>
          <MobileIcon onClick={handleClick}>
            {show ? <FaTimes /> : <CgMenuRight />}
          </MobileIcon>
          <NavMenu show={show}>
            {data.map((el, index) => (
              <NavItem key={index}>
                <NavLinks
                  to={el.to}
                  onClick={() => closeMobileMenu(el.to, el.id)}
                >
                  {el.text}
                </NavLinks>
              </NavItem>
            ))}
            {is_authenticated || (token != "" && token != undefined) ? (
              <>
                <NavItem>
                  <NavLinks>
                    <StyledLink to="/sign-in" onClick={handleLogout}>
                      Logout
                    </StyledLink>
                  </NavLinks>
                </NavItem>
              </>
            ) : (
              <>
                <NavItem>
                  <NavLinks>
                    <StyledLink to="/sign-in" onClick={handleClick}>
                      Sign In
                    </StyledLink>
                  </NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks>
                    <Link to="/sign-up" onClick={handleClick}>
                      <Button>Sign Up</Button>
                    </Link>
                  </NavLinks>
                </NavItem>
              </>
            )}
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </IconContext.Provider>
  );
};

export default Navbar;
