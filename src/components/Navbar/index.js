import Image from 'react-bootstrap/Image'
import { Link } from 'react-router-dom';
import './index.scss';
import KatLogoGray from '../../assets/images/kat-logo-gray.png';
import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

const FixedNavbar = () => {
    return (
        <header>
            <Navbar collapseOnSelect expand='md' className='sticky-top'>
                <Navbar.Brand className="d-flex align-items-center" as={Link} to="/">
                    <Image
                        alt='Kathryn Herod and her dog, Olive'
                        className='navbar-brand__image'
                        fluid={true}

                        src={KatLogoGray}
                    />
                </Navbar.Brand>

                <Navbar.Toggle aria-controls={'offcanvasNavbar-expand'} />

                <Navbar.Offcanvas
                    id={'offcanvasNavbar-expand'}
                    aria-labelledby='offcanvasNavbarLabel-expand'
                    backdrop={false}
                    placement="end"
                    scroll={true}
                >
                    <Offcanvas.Header closeButton />

                    <Offcanvas.Body>
                        <Nav className="auto-me routes">
                            <Nav.Link as={Link} to="/about">
                                Resumé
                            </Nav.Link>
                            <Nav.Link as={Link} to="/about">
                                About
                            </Nav.Link>
                            <Nav.Link as={Link} to="/portfolio">
                                Portfolio
                            </Nav.Link>
                            <Nav.Link as={Link} to="/contact">
                                Contact
                            </Nav.Link>
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Navbar>
        </header>
    )
}
export default FixedNavbar;