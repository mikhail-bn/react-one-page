import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'

const teamsData = [
    {
      id: 1,
      image: '/public/team1.jpg',
      fbLink: 'https://www.facebook.com',
      twitterLink: 'https://www.twitter.com',
      linkedinLink: 'https://www.linkedin.com',
      name: 'Gabriel Hart',
      designation: 'CEO',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.'
    },
    {
      id: 2,
      image: '/public/team2.jpg',
      fbLink: 'https://www.facebook.com',
      twitterLink: 'https://www.twitter.com',
      linkedinLink: 'https://www.linkedin.com',
      name: 'David Antony',
      designation: 'Manager',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.'
    },
    {
      id: 3,
      image: '/public/team3.jpg',
      fbLink: 'https://www.facebook.com',
      twitterLink: 'https://www.twitter.com',
      linkedinLink: 'https://www.linkedin.com',
      name: 'Nicholas Perry',
      designation: 'UX Designer',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.'
    },
    {
      id: 4,
      image: '/public/team4.jpg',
      fbLink: 'https://www.facebook.com',
      twitterLink: 'https://www.twitter.com',
      linkedinLink: 'https://www.linkedin.com',
      name: 'Sarah Wills',
      designation: 'Developer',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.'
    },
    {
      id: 5,
      image: '/public/team5.jpg',
      fbLink: 'https://www.facebook.com',
      twitterLink: 'https://www.twitter.com',
      linkedinLink: 'https://www.linkedin.com',
      name: 'Sophia Pitt',
      designation: 'Developer',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.'
    },
    {
      id: 6,
      image: '/public/team6.jpg',
      fbLink: 'https://www.facebook.com',
      twitterLink: 'https://www.twitter.com',
      linkedinLink: 'https://www.linkedin.com',
      name: 'Taylor Lopez',
      designation: 'Developer',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.'
    },
    {
      id: 7,
      image: '/public/team7.jpg',
      fbLink: 'https://www.facebook.com',
      twitterLink: 'https://www.twitter.com',
      linkedinLink: 'https://www.linkedin.com',
      name: 'Ryan Giggs',
      designation: 'Content Writer',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.'
    },
    {
      id: 8,
      image: '/public/team8.jpg',
      fbLink: 'https://www.facebook.com',
      twitterLink: 'https://www.twitter.com',
      linkedinLink: 'https://www.linkedin.com',
      name: 'David Smith',
      designation: 'SEO Expert',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.'
    }
  ]

export default function AppTeam() {
    return (
        <section id='team' className='block teams-block'>
            <Container fluid >
                <div className="title-holder">
                    <h2>Our team</h2>
                    <div className="subtitle">Some of our experts</div>
                </div>
                <Row>

                    {
                       teamsData.map(person => {
                        return (
                            <Col sm={3} key={person.id}>
                                <div className="image">
                                    <Image src={person.image} />
                                    <div className="overlay">
                                        <div className="socials">
                                            <ul>
                                                <li> <a href={person.fbLink}><i className="fab fa-facebook-f"></i></a></li>
                                                <li> <a href={person.twitterLink}><i className="fab fa-twitter"></i></a></li>
                                                <li> <a href={person.linkedinLink}><i className="fab fa-linkedin-in"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="content">
                                    <h3>{person.name}</h3>
                                    <div className="designation">{person.designation}</div>
                                    <p>{person.description}</p>
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