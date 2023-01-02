import React from "react";
import { useState, useEffect } from "react";
import { Container } from "reactstrap";
import { getPopular } from "../../api";
import Slider from "react-slick";
import "./slider.css";

const HeroSlider = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getPopular().then((result) => {
      setPopular(result);
    });
  }, []);


  return (
    <section>
      <Container>
      <h2 className="popular">Popular Menu</h2>
        <Slider {...settings}>
          {popular.map((item) => (
            <div >
              <div key={item.id} className="slider__wrapper d-flex align-items-center justify-content-between pt-5">
                <div className="slider__content w-50 ps-2">
                  <h2 className="mb-3 ">{item.name}</h2>
                  <p>{item.description}</p>
                  {/* <button className="btn">Explore Food</button> */}
                </div>

                <div className="slider__img w-50">
                  <img src={item.image} alt="" className="popularFoto" />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </Container>
    </section>
  );
};

export default HeroSlider;
