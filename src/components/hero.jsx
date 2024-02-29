import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

const heroData = [
  {
    id: 1,
    image: '/public/bg-1.jpg',
    title: 'The perfect design for your website',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab suscipit dicta nulla. Consequuntur obcaecati officiis, labore doloribus non tempore impedit consequatur ab dolor. Explicabo quam repellendus vero omnis, nisi odio!',
    link: 'https://www.google.com'
  },
  {
    id: 2,
    image: '/public/bg-2.jpg',
    title: 'Start Your Future Financial Plan',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab suscipit dicta nulla. Consequuntur obcaecati officiis, labore doloribus non tempore impedit consequatur ab dolor. Explicabo quam repellendus vero omnis, nisi odio!',
    link: 'https://www.facebook.com'
  },
  {
    id: 3,
    image: '/public/bg-3.jpg',
    title: 'Enjoy the Difference',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab suscipit dicta nulla. Consequuntur obcaecati officiis, labore doloribus non tempore impedit consequatur ab dolor. Explicabo quam repellendus vero omnis, nisi odio!',
    link: 'https://www.twitter.com'
  }
]


export default function AppHero() {     

  return (
    <section id="home" className="hero-block">  
        <Carousel slide  data-bs-theme="light">
          {
            heroData.map(item => {
              return (
                <Carousel.Item interval={3000} key={item.id}>
                  <img 
                    className="d-block w-100"
                    src={item.image}
                    alt={item.title}
                  />
                  <Carousel.Caption>
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                    <a className='btn btn-primary' href={item.link}>Learn more <i className='fas fa-chevron-right'></i></a>
                  </Carousel.Caption>
                </Carousel.Item>
              )
            })
          }         
        </Carousel> 
    </section>
  )
}

