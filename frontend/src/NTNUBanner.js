import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './personForm.scss';
import logo_ntnu from './images/logo-ntnu.png';

export default function NTNUBanner() {
    return (
        <>
            <Navbar className="above-navbar bg-body-tertiary" bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            alt="ntnu_logo"
                            src={logo_ntnu}
                            className="d-inline-block align-top"
                            height="36"
                        />{' '}
                        人事室
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </>
    )
}