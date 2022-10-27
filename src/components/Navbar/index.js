import Image from 'react-bootstrap/Image'
import { Link } from 'react-router-dom';
import './index.scss';
import KatAndOlive from '../../assets/images/kat_and_olive.png';
import KShadedLogo from '../../assets/images/k-shaded.png';
import FlatLogo from '../../assets/images/flat-logo.png';
import KatLogoGray from '../../assets/images/kat-logo-gray.png';
import React, { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

const FixedNavbar = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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




                {/* <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="auto-me routes">
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
                    <Nav className="auto-me social">
                        <Nav.Link
                            href="https://www.linkedin.com/in/kathrynherod/"
                            target="_blank"
                        >
                            <OverlayTrigger
                                placement="bottom"
                                delay={{ show: 250, hide: 400 }}
                                overlay={renderLinkedInTooltip}
                                trigger={['hover', 'focus']}
                            >
                                <FontAwesomeIcon
                                    icon={faLinkedin}
                                    color="white"
                                />
                            </OverlayTrigger>
                        </Nav.Link>
                        <Nav.Link
                            href="https://www.github.com/kathrynherod/"
                            target="_blank"
                        >
                            <OverlayTrigger
                                placement="bottom"
                                delay={{ show: 250, hide: 400 }}
                                overlay={renderGitHubTooltip}
                                trigger={['hover', 'focus']}
                            >
                                <FontAwesomeIcon
                                    icon={faGithub}
                                    color="white"
                                />
                            </OverlayTrigger>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse> */}
            </Navbar>
        </header>

    )
}
export default FixedNavbar;