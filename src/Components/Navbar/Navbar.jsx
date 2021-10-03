import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useRef } from "react";
import "./Navbar.scss";
function NavBar() {
  let location = useLocation();
  let routerEnd = location.pathname;
  let homeActive = {
    textDecoration: "none",
  };

  if (routerEnd === "/") {
    homeActive = {
      textDecoration: "line-through",
    };
  }

  let a = true;
  const btn = useRef(null);
  const rotateMenu = useRef(null);
  const navHidden = useRef(null);
  function menu() {
    if (a) {
      btn.current.style.display = "flex";
      rotateMenu.current.style.transform = "rotate(180deg)";
      rotateMenu.current.style.transition = "0.3s";

      a = false;
    } else {
      btn.current.style.display = "none";
      rotateMenu.current.style.transform = "rotate(0deg)";
      rotateMenu.current.style.transition = "0.3s";

      a = true;
    }
  }
  function noMenu() {
    btn.current.style.display = "none";
    rotateMenu.current.style.transform = "rotate(0deg)";
    rotateMenu.current.style.transition = "0.3s";
    a = true;
  }
  const isActive = {
    textDecoration: "line-through",
  };
  let prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos < currentScrollPos) {
      navHidden.current.style.bottom = "0px";
    } else {
      navHidden.current.style.bottom = "-109px";
    }
    prevScrollpos = currentScrollPos;
  };

  return (
    <>
      <nav className="mainNavBarWrapper" ref={navHidden}>
        <ul className="navBarWrapper">
          <li className="navBarItem">
            <NavLink to="/" className="navBarNavLink" activeStyle={homeActive}>
              About me
            </NavLink>
          </li>
          <li className="navBarItem">
            <NavLink
              to="/portfolio"
              className="navBarNavLink"
              activeStyle={isActive}
            >
              Portfolio
            </NavLink>
          </li>
          <li className="navBarItem">
            <NavLink
              to="/blogs"
              className="navBarNavLink"
              activeStyle={isActive}
            >
              Blog
            </NavLink>
          </li>
          <li className="navBarItem">
            <NavLink
              to="/contact"
              className="navBarNavLink"
              activeStyle={isActive}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
      <nav className="mainNavBarWrapper2">
        <button className="menuWrapper" onClick={menu}>
          <span className="rotateMenu" ref={rotateMenu}>
            menu
          </span>
        </button>
        <ul className="navBarWrapper2" ref={btn}>
          <li className="navBarItem" onClick={noMenu}>
            <NavLink to="/" className="navBarNavLink">
              About me
            </NavLink>
          </li>
          <li className="navBarItem" onClick={noMenu}>
            <NavLink
              to="/portfolio"
              className="navBarNavLink"
              activeStyle={isActive}
            >
              Portfolio
            </NavLink>
          </li>
          <li className="navBarItem" onClick={noMenu}>
            <NavLink
              to="/blogs"
              className="navBarNavLink"
              activeStyle={isActive}
            >
              Blog
            </NavLink>
          </li>
          <li className="navBarItem" onClick={noMenu}>
            <NavLink
              to="/contact"
              className="navBarNavLink"
              activeStyle={isActive}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}
export default NavBar;
