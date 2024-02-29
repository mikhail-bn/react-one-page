import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const blogData = [
    {
      id: 1,
      image: '/public/blog1.jpg',
      time: '15 Nov 2016',
      title: 'Coffee Lovers',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, asperiores eaque quibusdam eum quod cum nesciunt.',
      link: 'https://www.google.com'
    },
    {
      id: 2,
      image: '/public/blog2.jpg',
      time: '10 Nov 2016',
      title: 'Tips for UI Design',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, asperiores eaque quibusdam eum quod cum nesciunt.',
      link: 'https://www.facebook.com'
    },
    {
      id: 3,
      image: '/public/blog3.jpg',
      time: '07 Nov 2016',
      title: 'Beautiful Day',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, asperiores eaque quibusdam eum quod cum nesciunt.',
      link: 'https://www.twitter.com'
    }
  ]

export default function AppBlog() {
    return (
        <section id="blog" className="block blog-block">
            <div className="title-holder">
                <h2>latest from our blog</h2>
                <div className="subtitle">get our latest news from blog</div>
            </div>
            <Container fluid>
                <Row>
                    {
                        blogData.map(blogItem => {
                            return (
                                <Col sm={4} key={blogItem.id}>
                                    <div className="holder">
                                        <Card>
                                            <Card.Img 
                                                variant="top" 
                                                src={blogItem.image} />
                                            <Card.Body>
                                                <time>{blogItem.time}</time>
                                                <Card.Title>{blogItem.title}</Card.Title>
                                                <Card.Text>
                                                    {blogItem.description}
                                                </Card.Text>
                                                <a href="#" className='btn btn-primary'>Read more <i className='fas fa-chevron-right' ></i></a>
                                            </Card.Body>
                                        </Card>
                                    </div>                        
                                </Col>
                            )
                        })   
                    }

                   
                </Row>
            </Container>
        </section>
    )
}