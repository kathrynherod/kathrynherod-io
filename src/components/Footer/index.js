import * as React from 'react';
import Button from 'react-bootstrap/Button';
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
            <div className='button-group'>
                <OverlayTrigger
                    placement="bottom"
                    delay={{ show: 250, hide: 400 }}
                    overlay={renderLinkedInTooltip}
                    trigger={['hover', 'focus']}
                >
                    <Button>
                        <FontAwesomeIcon
                            icon={faLinkedin}
                            color="white"
                        />
                    </Button>
                </OverlayTrigger>

                <OverlayTrigger
                    placement="bottom"
                    delay={{ show: 250, hide: 400 }}
                    overlay={renderGitHubTooltip}
                    trigger={['hover', 'focus']}
                >
                    <Button>
                        <FontAwesomeIcon
                            icon={faGithub}
                            color="white"
                        />
                    </Button>
                </OverlayTrigger>
            </div>
        </footer>
    );
}

export default Footer;