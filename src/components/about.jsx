import Container from 'react-bootstrap/Container';
import ProgressBar from 'react-bootstrap/ProgressBar';

export default function AppAbout() {
    const interior = 60
    const exterior = 95
    const furniture = 45

    return (        
        <section id='about' className='block about-block'>
            <Container fluid>
                <div className="title-holder">
                    <h2>About Us</h2>
                    <div className="subtitle">Learn more about us</div>
                </div>
                <div>
                    <div className='about-container '>
                        <div className='about-image'></div>
                        
                        <div className='about-content'>
                            <div><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit dicta veritatis sint quidem asperiores magni eaque praesentium temporibus, magnam, eveniet consequatur possimus nihil? Nemo deserunt repudiandae soluta neque doloribus, quo!</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae alias ex error distinctio laudantium recusandae, iure. Vel nisi soluta, minus consectetur reiciendis laborum, laudantium perspiciatis quos molestias quam eum.</p>
                            
                            <div className="progress-block">
                                <h4>Interior</h4>
                                <ProgressBar now={interior} label={`${interior}%`} />
                            </div>
                            <div className="progress-block">
                                <h4>Exterior</h4>
                                <ProgressBar now={exterior} label={`${exterior}%`} />
                            
                            </div>
                            <div className="progress-block">
                                <h4>Product and Furniture Design</h4>
                                <ProgressBar now={furniture} label={`${furniture}%`} />
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}