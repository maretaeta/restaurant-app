import React from "react";
import { getFaq } from "../../api";
import { Container, Row, Col } from "reactstrap";
import "./testimonial.css";

import testimonialImg from "../../assets/images/review1.png";

import Slider from "react-slick";
import { useState } from "react";
import { useEffect } from "react";

const Testimonials = () => {
  const [faq, setFaq] = useState([])

  useEffect(() => {
    getFaq().then((result)=>{
      setFaq(result)
    })
  }, [])

  const settings = {
    infinite: true,
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };


  return (
    <section id="faq">
      <Container>
        <Row>
          <Col lg="8" sm="12" md="12" className="m-auto">
            <div className="slider__wrapper d-flex align-items-center gap-5  ">
              <div className="slider__content w-50">
                <h2 className="mb-4 ps-3">Frequently Asked Questions</h2>
                
                <Slider {...settings}>
                {faq.map((item) => (
                  <div key={item.id}>
                    <div className="single__testimonial">
                    
                      <h5 className="review__content">
                      {item.question}
                      </h5>
                      
                      <h6>{item.answer}</h6>
                    </div>
                  </div>
                  ))}
                  
                </Slider>
                
              </div>

              <div className="slider__img w-50">
                <img src={testimonialImg} alt="" className="w-100" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

{/* <div>
                  {faq.map((item) => (
                    <div className="single__testimonial" key={item.id}>
                    
                      <p className="review__content" >
                        {item.question}
                      </p>
                      <p>{item.answer}</p>
                    </div>
                    ))}
                  </div> */}

export default Testimonials;
