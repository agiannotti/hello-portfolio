import './Header.css';

import HomeTwoToneIcon from '@material-ui/icons/HomeTwoTone';
import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { NavLink, withRouter } from 'react-router-dom';

import resumeData from '../../utils/resumeData';

// import SchoolTwoToneIcon from '@material-ui/icons/SchoolTwoTone';
// import WorkTwoToneIcon from '@material-ui/icons/WorkTwoTone';
// import LinkedInIcon from '@material-ui/icons/LinkedIn';
// import GitHubIcon from '@material-ui/icons/GitHub';

// import Button from '../Button/Button';
// import { Telegram } from '@material-ui/icons';

const Header = (props) => {
  const pathName = props?.location?.pathname;

  return (
    <Navbar expand='lg' sticky='top' className='header'>
      {/* Home Link */}
      <Nav.Link as={NavLink} to='/' className='header_navlink'>
        <Navbar.Brand className='header_home'>
          <HomeTwoToneIcon style={{ color: 'white' }} />
        </Navbar.Brand>
      </Nav.Link>

      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav className='header_left'>
          {/* Resume Link */}
          <Nav.Link
            as={NavLink}
            to='/'
            className={pathName === '/' ? 'header_link_active' : 'header_link'}
          >
            About
          </Nav.Link>
          {/* Portfolio Link */}
          <Nav.Link
            as={NavLink}
            to='/portfolio'
            className={
              pathName === '/portfolio' ? 'header_link_active' : 'header_link'
            }
          >
            Projects
          </Nav.Link>

          {/* Contact Link */}
          <Nav.Link
            as={NavLink}
            to='/contact'
            className={
              pathName === '/contact' ? 'header_link_active' : 'header_link'
            }
          >
            Contact
          </Nav.Link>
        </Nav>
        <div className='header_right'>
          {Object.keys(resumeData.socials).map((item, index) => (
            <div key={index}>
              <a
                href={resumeData.socials[item].link}
                target='_blank'
                rel='noreferrer'
              >
                {resumeData.socials[item].icon}
              </a>
            </div>
          ))}
          {/* <Button text={'Hire me'} icon={<Telegram />} /> */}
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default withRouter(Header);
