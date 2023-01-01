import React, { useState, useEffect } from "react";
import { getMenuCategories, getMenuList } from "../../api";
import { Container, Row, Col } from "reactstrap";
import "./menu-pack.css";
import ProductCard from "../product-card/ProductCard";

const MenuPack = () => {
  const [categories, setMenuCategories] = useState([]);
  const [menuList, setMenuList] = useState([]);
  const [dataCategories, setDataCategories] = useState(menuList);
  const [filter, setFilter] = useState("");
  const [loading, setLoading] = useState(true);

  const handleFilter = (name) => {
    if (name !== filter) {
      setFilter(name);
    } else {
      setFilter("");
    }
  };

  useEffect(() => {
    getMenuCategories().then((result) => {
      setMenuCategories(result);
    });

    getMenuList().then((result) => {
      setMenuList(result);
      if (filter) {
        setDataCategories(menuList.filter((list) => list.category === filter));
      } else {
        setDataCategories(menuList);
      }
      setLoading(false);
    });
  }, [filter, loading]);

  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="text-center mb-4">
            <h3 className="menu__title">All Menu</h3>
          </Col>
          <Col lg="12" className="text-center mb-5">
            {!loading
              ? categories.map((item) => (
                  <button
                    className={`filter-btn ${
                      item.name === filter ? "active__btn" : ""
                    }`}
                    onClick={() => handleFilter(item.name)}
                    key={item.id}
                  >
                    <span>{item.name}</span>
                  </button>
                ))
              : ""}
          </Col>

          {console.log(dataCategories)}
          {!loading
            ? dataCategories.map((item) => (
                <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mb-4">
                  {""}
                  <ProductCard item={item} />
                </Col>
              ))
            : ""}
        </Row>
      </Container>
    </section>
  );
};

export default MenuPack;
