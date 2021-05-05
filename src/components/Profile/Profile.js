import './Profile.css';

import { Typography } from '@material-ui/core';
import React from 'react';

import resumeData from '../../utils/resumeData';
import BasicTimeline, { CustomTimelineSeparator } from '../Timeline/Timeline';
import face from './../../assets/images/soho-self-square.png';
import PersonTwoToneIcon from '@material-ui/icons/PersonTwoTone';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineContent from '@material-ui/lab/TimelineContent';

const CustomTimelineItem = ({ title, text, link }) => (
  <TimelineItem>
    <CustomTimelineSeparator />
    <TimelineContent className='timeline_content'>
      {link ? (
        <Typography className='timelineItem_text'>
          <span>{title}:</span>
          <a href={link} target='_blank' rel='noreferrer'>
            {text}
          </a>
        </Typography>
      ) : (
        <Typography className='timelineItem_text'>
          {' '}
          <span>{title}:</span> {text}
        </Typography>
      )}
    </TimelineContent>
  </TimelineItem>
);

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
        <BasicTimeline icon={<PersonTwoToneIcon />} title={resumeData.title}>
          <CustomTimelineItem title='Name' text={resumeData.name} />
          <CustomTimelineItem title='Title' text={resumeData.title} />
          <CustomTimelineItem title='Email' text={resumeData.email} />
          <CustomTimelineItem title='Email' text={resumeData.address} />
          <CustomTimelineItem title='Email' text={resumeData.phone} />

          {Object.keys(resumeData.socials).map((key) => (
            <CustomTimelineItem
              title={key}
              text={resumeData.socials[key].text}
              link={resumeData.socials[key].link}
            />
          ))}
        </BasicTimeline>
        <br />
        <button>dat button</button>
      </div>
    </div>
  );
};

export default Profile;
