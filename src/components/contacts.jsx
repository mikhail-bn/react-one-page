import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';

export default function AppContacts() {
    return (
        <section id='contact' className='block contact-block'>
            <Container fluid>
                <div className="title-holder">
                    <h2>Contact us</h2>
                    <div className="subtitle">get connected with us</div>
                </div>
                <Form className='contact-form' >
                    <Row>
                        <Col sm={4}>
                            <Form.Control type='text' placeholder="Enter your first name" required/>
                        </Col>                        
                        <Col sm={4}>
                            <Form.Control type='email' placeholder="Enter your email address" required/>
                        </Col>
                        <Col sm={4}>
                            <Form.Control type='tel' placeholder="Enter your contact number" required/>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12}>
                            <Form.Control as="textarea" placeholder="Enter your message here" required/>
                        </Col>
                    </Row>
                    <div className="btn-holder">
                        <Button type="submit">Submit</Button>
                    </div>
                </Form>
            </Container>
            <div className="google-map">
                <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4763.40380175703!2d-6.275376084132272!3d53.34859222352856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48670df4010eb86b%3A0xae3edaec8bee258d!2sStaycity%20Aparthotels%2C%20Dublin%2C%20City%20Centre!5e0!3m2!1sen!2sua!4v1709208033001!5m2!1sen!2sua" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <Container fluid>
                <div className="contact-info">
                    <ul>
                        <li>
                            <i className='fas fa-envelope'></i>
                            support@domain.com
                        </li>
                        <li>
                            <i className='fas fa-phone'></i>
                            000-000-0000
                        </li>
                        <li>
                            <i className='fas fa-map-marker-alt'></i>
                            Dublin, Ireland
                        </li>
                    </ul>
                </div>
            </Container>
        </section>
    )
}