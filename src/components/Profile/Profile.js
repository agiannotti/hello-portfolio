import { Typography } from '@material-ui/core';
import React from 'react';
import './Profile.css';
import face from './../../assets/images/soho-self-square.png';
import BasicTimeline from '../Timeline/Timeline';

const Profile = () => {
  return (
    <div className='profile container_shadow'>
      <div className='profile_name'>
        <Typography className='name'>Anthony</Typography>
        <Typography className='title'>Giannotti</Typography>
      </div>
      <figure className='profile_image'>
        <img src={face} alt='face' />
      </figure>

      <div className='profile_information'>
        <BasicTimeline />
        <br />
        <button>dat button</button>
      </div>
    </div>
  );
};

export default Profile;
