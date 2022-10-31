
import * as React from 'react';
import './index.scss';
import Layout from '../../components/Layout';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';

const Work = () => {
    return (
        <Layout>
            <section className='work__container'>
                <h2 className='heading'>Work Experience</h2>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col sm={3}>
                            <Nav variant="tabs" className="flex-column">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">
                                        Identity Automation
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">
                                        O'Reilly Auto Parts
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <h5 className='job-title'>Front End Developer & Scrum Master</h5>
                                    <p className='job-dates'>Sep 2020 - Present & Oct 2018 - Apr 2020</p>
                                    <ul>
                                        <li>Practiced servant leadership style by helping the engineering team embrace
                                            agile core values and principles, which resulted in teams doubling their
                                            previous velocities and producing monthly software releases, versus quarterly releases</li>
                                        <li>Boosted customer retention and referrals by working closely with product
                                            managers, customers, support, and developers to scope and refine requirements
                                            for our Rostering software</li>
                                        <li>On-boarded, up-skilled and mentored over 10 junior developers,
                                            offshore resource teams, and new hires and created corresponding
                                            documentation to reduce onboarding time from nearly two weeks, to a few days</li>
                                        <li>Delivered, supported, and maintained clean, readable, and commented code
                                            using the Ember JS framework, making the software accessible and responsive
                                            for users on various browsers and devices</li>
                                        <li>Increased overall test coverage within the front-end codebase from less
                                            than 30% to over 60% by implementing SonarQube tooling </li>
                                        <li>Set minimum testing requirements on new code to 75% coverage,
                                            which led to fewer bugs and regressions in releases and a test driven
                                            development mindset on the team</li>
                                    </ul>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    GAH GAH
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </section>
        </Layout>
    )
}

export default Work;