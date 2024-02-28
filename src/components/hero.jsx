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
              <h2>First slide label</h2>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore veritatis placeat maxime! Autem id repellat expedita. Molestias quasi magni necessitatibus odio quas temporibus officia ut! Tenetur corporis aut perferendis cum?</p>
              <a className='btn btn-primary' href="">Learn more <i class='fas fa-chevron-right'></i></a>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img 
              className="d-block w-100 "
              src={img2}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h2>Second slide label</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam temporibus facilis animi maxime officia odio, minima perferendis? Impedit, neque nulla?</p>
              <a className='btn btn-primary' href="">Learn more <i class='fas fa-chevron-right'></i></a>
            </Carousel.Caption>
          </Carousel.Item >
          <Carousel.Item interval={3000}>
            <img 
              className="d-block w-100"
              src={img3}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h2>Third slide label</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum recusandae aperiam eveniet, inventore deserunt voluptate eum. Vitae culpa corporis quae?</p>
              <a className='btn btn-primary' href="">Learn more <i class='fas fa-chevron-right'></i></a>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
    </section>
  );
}

