import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import HomeTwoToneIcon from '@material-ui/icons/HomeTwoTone';
// import SchoolTwoToneIcon from '@material-ui/icons/SchoolTwoTone';
// import WorkTwoToneIcon from '@material-ui/icons/WorkTwoTone';
// import LinkedInIcon from '@material-ui/icons/LinkedIn';
// import GitHubIcon from '@material-ui/icons/GitHub';
import resumeData from '../../utils/resumeData';
import MuiButton from '../Button/MuiButton';
import './Header.css';

import {
  // Button,
  // Form,
  // FormControl,
  Nav,
  Navbar,
  // NavDropdown,
} from 'react-bootstrap';
import { Telegram } from '@material-ui/icons';

const Header = (props) => {
  const pathName = props?.location?.pathname;

  return (
    <Navbar expand='lg' sticky='top' className='header'>
      {/* Home Link */}
      <Nav.Link as={NavLink} to='/' className='header_navlink'>
        <Navbar.Brand className='header_home'>
          <HomeTwoToneIcon />
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
            Resume
          </Nav.Link>
          {/* Portfolio Link */}
          <Nav.Link
            as={NavLink}
            to='/portfolio'
            className={
              pathName === '/portfolio' ? 'header_link_active' : 'header_link'
            }
          >
            Portfolio
          </Nav.Link>
          {/* Blog Link */}
          <Nav.Link
            as={NavLink}
            to='/blog'
            className={
              pathName === '/blog' ? 'header_link_active' : 'header_link'
            }
          >
            Blog
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
          {Object.keys(resumeData.socials).map((key) => (
            <a
              href={resumeData.socials[key].link}
              target='_blank'
              rel='noreferrer'
            >
              {resumeData.socials[key].icon}
            </a>
          ))}
          <MuiButton text={'Hire me'} icon={<Telegram />} />
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default withRouter(Header);
