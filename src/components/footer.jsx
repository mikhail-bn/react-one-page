import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';



export default function AppFooter() {
    const [showTopBtn, setshowTopBtn] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', () => { 
            window.scrollY > 400 ? setshowTopBtn(true) : setshowTopBtn(false)        
        })
    }, [])

    function goTop() {
        window.scrollTo({
            top:0,
            behavior: 'smooth'
        })
    }
    return (        
        <Container>
            <div className="copyright">© 2024 Interior Design. All Right Reserved.</div>
            <div className="socials">
                <ul>
                    <li> <a href="https://facebook.com"><i className='fab fa-facebook-f'></i></a></li>
                    <li> <a href="https://twitter.com"><i className='fab fa-twitter'></i></a></li>
                    <li> <a href="https://linkedin.com"><i className='fab fa-linkedin-in'></i></a></li>
                </ul>
            </div>
            {
                showTopBtn && ( <div className="go-top"onClick={goTop}></div> )
            }
        </Container>
    )
}