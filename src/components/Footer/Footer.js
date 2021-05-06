import { Typography } from '@material-ui/core';
import React from 'react';
import './Footer.css';
import resumeData from '../../utils/resumeData';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer_left'>
        <Typography className='footer_name'></Typography>
        <div className='footer_right'>
          <Typography className='footer_copyright'>
            Designed and developed by{' '}
            <a href='/' target='_blank' rel='noreferrer'>
              {resumeData.name}
            </a>
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Footer;
