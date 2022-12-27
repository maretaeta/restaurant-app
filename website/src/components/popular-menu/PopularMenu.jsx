import "./popular-menu.css";
import { getMenuList } from "../../api";
import React, { useEffect } from "react";

import { Container, Row, Col } from "reactstrap";
import ProductCard from "../product-card/ProductCard";

const Menu = () => {
  const [menu, setMenu] = React.useState([]);

  useEffect(() => {
    getMenuList().then((result) => {
      setMenu(result);
    });
  }, []);

  const MenuList = () => {
    return menu.map((item) => {
      return (
        <Col lg="3" md="4" sm="6" xs="6" className="mb-4" key={item.id}>
          <ProductCard item={item} />
        </Col>
      );
    });
  };
  return (
    <section className="pt-0">
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <h2 className="popular__menu-title">All Menu</h2>
          </Col>
          <MenuList />
        </Row>
      </Container>
    </section>
  );
};

export default Menu;
