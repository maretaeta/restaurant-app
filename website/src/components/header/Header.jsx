import React, { useRef } from "react";
import "./header.css";
import { getProfile } from "../../api";
import { Container } from "reactstrap";
import logo from "../../assets/images/logo.png";

const navLinks = [
  {
    display: "Home",
    url: "/",
  },
  {
    display: "About",
    url: "#footer",
  },

  {
    display: "Menu",
    url: "#menu",
  },
  {
    display: "FAQ",
    url: "#faq",
  },
  {
    display: "Contact",
    url: "#footer",
  },
];

const Header = () => {
  const menuRef = useRef();

  const menuToggle = () => menuRef.current.classList.toggle("active__menu");

  const [profile, setProfile] = React.useState([]);

  React.useEffect(() => {
    getProfile().then((result) => {
      setProfile(result);
    });
  }, []);

  return (
    <header className="header">
      <Container>
        <div className="navigation">
          <div className="logo">
            <h2 className=" d-flex align-items-center gap-1">
              <span>
              {profile.map((item) => (
                    <img src={item.logo} className="foto" />
                  ))}
              </span>{" "}
                {profile.map((item) => (
                    <span>{item.name} </span>
                  ))}
            </h2>
          </div>

          <div className="nav__menu " ref={menuRef}>
            <div className="nav__list__wrapper d-flex align-items-center gap-5">
              <ul className="nav__list">
                {navLinks.map((item, index) => (
                  <li className="nav__item" key={index}>
                    <a href={item.url} onClick={menuToggle}>
                      {item.display}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mobile__menu">
            <span>
              <i class="ri-menu-line" onClick={menuToggle}></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
