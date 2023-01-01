import React from "react";
import { getProfile } from "../../api";
import "./footer.css";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import Opening from "../opening-hours/opening";
import { useEffect } from "react";

const footerLinks = [
  {
    display: "About Us",
    url: "#",
  },
  {
    display: "Menu",
    url: "#",
  },
  {
    display: "Recipes",
    url: "#",
  },

  {
    display: "Contact",
    url: "#",
  },
];

const Footer = () => {
  const [profile, setProfile] = React.useState([]);

  React.useEffect(() => {
    getProfile().then((result) => {
      setProfile(result);
    });
  }, []);

  return (
    <footer id="footer" className="footer">
      <div className="footer__top">
        <Container>
          <Row>
            <Col lg="4" md="4" sm="6">
              <div className="logo">
                <h2 className=" d-flex align-items-center gap-1 mb-4">
                  <span>
                    <i class="ri-restaurant-2-line"></i>
                  </span>{" "}
                  {profile.map((item) => (
                    <span>{item.name}</span>
                  ))}
                </h2>
                <p>
                  {profile.map((item) => (
                    <span>{item.about_us}</span>
                  ))}
                </p>
              </div>
            </Col>

            <Col lg="3" md="4" sm="6">
              <Opening />
            </Col>

            <Col lg="3" md="4" sm="6">
              <h5 className="footer__link-title">Contact</h5>

              <ListGroup>
                <ListGroupItem className="link__item d-flex align-items-center gap-3">
                  <i class="ri-map-pin-line"></i>
                  {profile.map((item) => (
                    <span>{item.address}</span>
                  ))}
                </ListGroupItem>

                <ListGroupItem className="link__item d-flex align-items-center gap-3">
                  <i class="ri-mail-line"></i>
                  {profile.map((item) => (
                    <span>{item.email}</span>
                  ))}
                </ListGroupItem>

                <ListGroupItem className="link__item d-flex align-items-center gap-3">
                  <i class="ri-phone-line"></i>
                  {profile.map((item) => (
                    <span>{item.phone}</span>
                  ))}
                </ListGroupItem>
              </ListGroup>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="footer__bottom">
        <Container>
          <Row>
            <Col lg="12">
              <p>Copyright &copy; Developed by Kelompok 3</p>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
