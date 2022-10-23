import Image from 'react-bootstrap/Image'
import { Link } from 'react-router-dom';
import './index.scss';
import KatAndOlive from '../../assets/images/kat_and_olive.png';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import {
    faHome,
    faUser,
    faEnvelope,
    faSuitcase,
    faBars,
    faClose,
} from '@fortawesome/free-solid-svg-icons'

const FixedNavbar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='fixed-left'>
            <Navbar.Brand as={Link} to="/">
                <Image
                    alt='Kathryn Herod and her dog, Olive'
                    className='navbar-brand__image'
                    fluid={true}
                    roundedCircle={true}
                    src={KatAndOlive}
                />
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                <Container>
                    <Nav.Link
                        className="d-flex justify-content-center"
                        href="https://www.linkedin.com/in/kathrynherod/"
                        target="_blank"
                    >
                        <FontAwesomeIcon
                            icon={faLinkedin}
                            color="white"
                        />
                    </Nav.Link>
                    <Nav.Link
                        className="d-flex justify-content-center"
                        href="https://www.github.com/kathrynherod/"
                        target="_blank"
                    >
                        <FontAwesomeIcon
                            icon={faGithub}
                            color="white"
                        />
                    </Nav.Link>
                </Container>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default FixedNavbar;