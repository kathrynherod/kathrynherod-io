import Image from 'react-bootstrap/Image'
import { Link } from 'react-router-dom';
import './index.scss';
import KatAndOlive from '../../assets/images/kat_and_olive.png';
import React, { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import Offcanvas from 'react-bootstrap/Offcanvas';

const FixedNavbar = () => {
    const renderGitHubTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Github
        </Tooltip>
    );

    const renderLinkedInTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            LinkedIn
        </Tooltip>
    );

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <header>
            <Navbar collapseOnSelect expand="md" bg="dark" variant="dark" className='sticky-top'>
                <Navbar.Brand className="d-flex align-items-center" as={Link} to="/">
                    <Image
                        alt='Kathryn Herod and her dog, Olive'
                        className='navbar-brand__image'
                        fluid={true}
                        roundedCircle={true}
                        src={KatAndOlive}
                    />
                    <h3 className='navbar-brand__title'>Kathryn Herod</h3>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls={'offcanvasNavbar-expand'} />

                <Navbar.Offcanvas
                    id={'offcanvasNavbar-expand'}
                    aria-labelledby='offcanvasNavbarLabel-expan'
                    placement="end"
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id={'offcanvasNavbarLabel-expand'}>
                            Offcanvas
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
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