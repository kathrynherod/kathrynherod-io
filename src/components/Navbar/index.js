import Image from 'react-bootstrap/Image'
import { Link } from 'react-router-dom';
import './index.scss';
import KatLogoGray from '../../assets/images/kat-logo-gray.png';
import Resume from '../../assets/files/KathrynHerod_FEDev_22.pdf';
import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'

const FixedNavbar = () => {
    return (
        <header>
            <Navbar collapseOnSelect expand='md' className='sticky-top'>
                <Navbar.Brand className="d-flex align-items-center" as={Link} to="/">
                    <Image
                        alt='Kathryn Herod and her dog, Olive'
                        className='navbar-brand__image'
                        src={KatLogoGray}
                    />
                </Navbar.Brand>

                <Navbar.Toggle aria-controls={'offcanvasNavbar-expand'}>
                    <FontAwesomeIcon
                        color="white"
                        icon={faBars}
                    />
                </Navbar.Toggle>

                <Navbar.Offcanvas
                    id={'offcanvasNavbar-expand'}
                    aria-labelledby='offcanvasNavbarLabel-expand'
                    backdrop={false}
                    placement="end"
                    scroll={true}
                >
                <Offcanvas.Header closeButton closeVariant="white"/>
                    <Offcanvas.Body>
                        <Nav className="auto-me">
                            <Nav.Link href={Resume} target="_blank">
                                Resumé
                            </Nav.Link>
                            <Nav.Link as={Link} to="/about">
                                About
                            </Nav.Link>
                            <Nav.Link as={Link} to="/work">
                                Work
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