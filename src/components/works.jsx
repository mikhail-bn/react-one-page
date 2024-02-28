import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Pagination from 'react-bootstrap/Pagination';
import { Image } from 'react-bootstrap';

const worksData = [
    {
      id: 1,
      link: 'https://www.google.com',
      image: 'public/img1s.jpg',
      title: 'Lonely Path',
      subtitle: 'Web Design'
    },
    {
      id: 2,
      link: 'https://www.google.com',
      image: 'public/img3s.jpg',
      title: 'Photographer Girl',
      subtitle: 'Branding'
    },
    {
      id: 3,
      link: 'https://www.google.com',
      image: 'public/img4s.jpg',
      title: 'The Difference',
      subtitle: 'Web Design'
    },
    {
      id: 4,
      link: 'https://www.google.com',
      image: 'public/img5s.jpg',
      title: 'Nature Patterns',
      subtitle: 'Branding'
    },
    {
      id: 5,
      link: 'https://www.google.com',
      image: 'public/img6s.jpg',
      title: 'The Difference',
      subtitle: 'Photography'
    },
    {
      id: 6,
      link: 'https://www.google.com',
      image: 'public/img7s.jpg',
      title: 'Winter Sonata',
      subtitle: 'Web Design'
    },
    {
      id: 7,
      link: 'https://www.google.com',
      image: 'public/img8s.jpg',
      title: 'Lonely Path',
      subtitle: 'Branding'
    },
    {
      id: 8,
      link: 'https://www.google.com',
      image: '/public/img9s.jpg',
      title: 'Appreciation',
      subtitle: 'Photography'
    },
    {
      id: 9,
      link: 'https://www.google.com',
      image: '/public/img2s.jpg',
      title: 'Happy Days',
      subtitle: 'Web Design'
    }
  ]

  let active = 2;
  let items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>,
    );
  }

export default function AppWorks() {
    return (
        <section id='works' className='block works-block'>
            <Container fluid>
                <div className="title-holder">
                    <h2>Our Works</h2>
                    <div className="subtitle">our awesome works</div>
                </div>                
                <Row className='portfoliolist'>
                    {
                       worksData.map(work => {
                        return (
                            <Col sm={4} key={work.id}> 
                                <div className="portfolio-wrapper">
                                    <a href="#">
                                        <Image src={work.image}/>
                                        <div className="label text-center">
                                            <h3>{work.title}</h3>
                                            <p>{work.subtitle}</p>
                                        </div>
                                    </a>
                                </div>
                            </Col>
                        )
                       }) 
                    }                    
                </Row>
                <Pagination>{items}</Pagination>
            </Container>
        </section>
    )
}