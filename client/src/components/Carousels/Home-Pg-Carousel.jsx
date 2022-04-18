import React, { Component } from "react";
import Slider from "react-slick";
import {Row, Col} from 'react-bootstrap';
import './styles.css';
import thumbnail from './Carousels-Thumbnail.webp'

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1
    };
    return (
      <div>
        <h2 className="header-2"> CHECK OUT OUR NEW ARRIVALS</h2>
        <Slider {...settings}>
          <div>
            <Row>
                <img src={thumbnail} className="carousel-item"/>
            </Row>
            <p className="carousel-text">Lorem ipsum dolor sit amet.</p>
          </div>
          <div>
            <Row>
                <img src={thumbnail} className="carousel-item"/>
            </Row>
            <p className="carousel-text">Lorem ipsum dolor sit amet.</p>
          </div>
          <div>
            <Row>
                <img src={thumbnail} className="carousel-item"/>
            </Row>
            <p className="carousel-text">Lorem ipsum dolor sit amet.</p>
          </div>
          <div>
            <Row>
                <img src={thumbnail} className="carousel-item"/>
            </Row>
            <p className="carousel-text">Lorem ipsum dolor sit amet.</p>
          </div>
          <div>
            <Row>
                <img src={thumbnail} className="carousel-item"/>
            </Row>
            <p className="carousel-text">Lorem ipsum dolor sit amet.</p>
          </div>
          <div>
            <Row>
                <img src={thumbnail} className="carousel-item"/>
            </Row>
            <p className="carousel-text">Lorem ipsum dolor sit amet.</p>
          </div>

        </Slider>
      </div>
    );
  }
}