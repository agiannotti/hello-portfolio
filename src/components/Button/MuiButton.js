import { Button } from '@material-ui/core';
import React from 'react';
import './MuiButton.css';

const MuiButton = ({ text, icon }) => {
  return (
    <Button
      className='custom_btn'
      endIcon={icon ? <div className='btn_icon_container'>{icon}</div> : null}
    >
      <span className='btn_text'>{text}</span>
    </Button>
  );
};

export default MuiButton;
