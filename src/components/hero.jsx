import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../assets/bg-1.jpg'
import img2 from '../assets/bg-2.jpg'
import img3 from '../assets/bg-3.jpg'


export default function AppHero() {     

  return (
    <section id="home" className="hero-block">  
        <Carousel slide  data-bs-theme="light">
          <Carousel.Item interval={3000}>
            <img 
              className="d-block w-100"
              src={img1}
              alt="First slide"
            />
            <Carousel.Caption>
              <h5>First slide label</h5>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img 
              className="d-block w-100 "
              src={img2}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h5>Second slide label</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item >
          <Carousel.Item interval={3000}>
            <img 
              className="d-block w-100"
              src={img3}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h5>Third slide label</h5>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
    </section>
  );
}

