import * as React from 'react';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import './index.scss';

const Footer = () => {
    const renderGitHubTooltip = () => (
        <Tooltip id='button-tooltip'>
            Github
        </Tooltip>
    );

    const renderLinkedInTooltip = () => (
        <Tooltip id='button-tooltip'>
            LinkedIn
        </Tooltip>
    );

    return (
        <footer>
            <div className='button-group'>
                <OverlayTrigger
                    placement='top'
                    delay={{ show: 250, hide: 400 }}
                    overlay={renderLinkedInTooltip}
                    trigger={['hover', 'focus']}
                >
                    <Button
                        data-testid='linkedIn-button'
                        href='https://linkedin.com/in/kathrynherod/'
                        variant="link"
                        target='_blank'
                    >
                        <FontAwesomeIcon
                            icon={faLinkedin}
                            color='white'
                        />
                    </Button>
                </OverlayTrigger>

                <OverlayTrigger
                    placement='top'
                    delay={{ show: 250, hide: 400 }}
                    overlay={renderGitHubTooltip}
                    trigger={['hover', 'focus']}
                >
                    <Button
                        data-testid='github-button'
                        href='https://github.com/kathrynherod'
                        variant="link"
                        target='_blank'
                    >
                        <FontAwesomeIcon
                            icon={faGithub}
                            color='white'
                        />
                    </Button>
                </OverlayTrigger>
            </div>
        </footer>
    );
}

export default Footer;