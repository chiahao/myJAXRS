import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo_ntnu from './images/logo-ntnu.png';

export default function NTNUBanner() {
    return (
        <>
            <Navbar data-bs-theme="dark">
                <Container fluid>
                    <Navbar.Brand href="#home">
                        <img
                            alt="ntnu_logo"
                            src={logo_ntnu}
                            className="d-inline-block align-top navbar_right_border"
                            height="36"
                        />{' '}
                        <span>{' '}人事室</span>
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </>
    )
}