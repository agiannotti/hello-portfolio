import './Profile.css';

import { Typography } from '@material-ui/core';
import React from 'react';

import resumeData from '../../utils/resumeData';
import BasicTimeline from '../Timeline/Timeline';
import face from './../../assets/images/soho-self-square.png';
import PersonTwoToneIcon from '@material-ui/icons/PersonTwoTone';

const Profile = () => {
  return (
    <div className='profile container_shadow'>
      <div className='profile_name'>
        <Typography className='name'>{resumeData.name}</Typography>
        <Typography className='title'>{resumeData.title}</Typography>
      </div>
      <figure className='profile_image'>
        <img src={face} alt='face' />
      </figure>

      <div className='profile_information'>
        <BasicTimeline icon={<PersonTwoToneIcon />} />
        <br />
        <button>dat button</button>
      </div>
    </div>
  );
};

export default Profile;
