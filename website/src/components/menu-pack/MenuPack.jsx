import React, { useState, useEffect } from "react";
import { getMenuCategories, getMenuList } from "../../api";
import { Container, Row, Col } from "reactstrap";
import "./menu-pack.css";
import ProductCard from "../product-card/ProductCard";

const MenuPack = () => {
  const [categories, setMenuCategories] = useState([]);
  const [menuList, setMenuList] = useState([]);
  const [dataCategories, setDataCategories] = useState([]);
  const [filter, setFilter] = useState("");

  const handleFilter = (name) => {
    setFilter(name);
    setDataCategories(menuList.filter((list) => list.category === name));
  };

  useEffect(() => {
    getMenuCategories().then((result) => {
      setMenuCategories(result);
    });

    getMenuList().then((result) => {
      setMenuList(result);
    });
  }, [filter]);

  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="text-center mb-4">
            <h3 className="menu__title">Our Menu Pack</h3>
          </Col>
          <Col lg="12" className="text-center mb-5">
            {categories.map((item) => (
              <button
                className={`filter-btn ${
                  item.name === filter ? "active__btn" : ""
                }`}
                onClick={() => handleFilter(item.name)}
                key={item.id}
              >
                <span>{item.name}</span>
              </button>
            ))}
          </Col>

          {console.log(dataCategories)}
          {dataCategories.map((item) => (
            <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mb-4">
              {""}
              <ProductCard item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default MenuPack;
