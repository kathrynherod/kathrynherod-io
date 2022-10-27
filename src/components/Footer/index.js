import * as React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import './index.scss';

const Footer = () => {
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

    return (
        <footer>
            <ListGroup horizontal>
                <ListGroup.Item data-testid="list-group-item=linkedIn">
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
                </ListGroup.Item>
                <ListGroup.Item>
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
                </ListGroup.Item>
            </ListGroup>
        </footer>
    );
}

export default Footer;