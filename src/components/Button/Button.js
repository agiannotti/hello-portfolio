import './Button.css';

import { Button as MuiButton } from '@material-ui/core';
import React from 'react';

const Button = ({ text, icon }) => {
  return (
    <MuiButton
      className='custom_btn'
      endIcon={icon ? <div className='btn_icon_container'>{icon}</div> : null}
    >
      <span className='btn_text'>{text}</span>
    </MuiButton>
  );
};

export default Button;
