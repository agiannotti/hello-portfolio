import './Profile.css';

import { Grid, Typography } from '@material-ui/core';
import React from 'react';

import resumeData from '../../utils/resumeData';
import BasicTimeline, { CustomTimelineSeparator } from '../Timeline/Timeline';
import face from './../../assets/images/soho-self-square.jpg';
import PersonTwoToneIcon from '@material-ui/icons/PersonTwoTone';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineContent from '@material-ui/lab/TimelineContent';
import Button from '../Button/Button';
import GetAppTwoToneIcon from '@material-ui/icons/GetAppTwoTone';

const CustomTimelineItem = ({ title, text, link }) => (
  <TimelineItem>
    <CustomTimelineSeparator />
    <TimelineContent className='timeline_content'>
      {link ? (
        <Typography className='timelineItem_text'>
          <span>{title}: </span>
          <a href={link} target='_blank' rel='noreferrer'>
            {text}
          </a>
        </Typography>
      ) : (
        <Typography className='timelineItem_text'>
          {' '}
          <span>{title}: </span> {text}
        </Typography>
      )}
    </TimelineContent>
  </TimelineItem>
);

const Profile = () => {
  return (
    <Grid container>
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
            <CustomTimelineItem title='Address' text={resumeData.address} />
            <CustomTimelineItem title='Phone' text={resumeData.phone} />

            {Object.keys(resumeData.socials).map((item, index) => (
              <div key={index}>
                <CustomTimelineItem
                  title={item}
                  text={resumeData.socials[item].text}
                  link={resumeData.socials[item].link}
                />
              </div>
            ))}
          </BasicTimeline>

          <a
            className='btn_container'
            target='_blank'
            rel='noreferrer'
            href='https://www.dropbox.com/s/64v0sjyf394h8ob/AG_Resume.pdf?dl=0'
          >
            <Button text={'Dropbox Cv'} icon={<GetAppTwoToneIcon />} />
          </a>
        </div>
      </div>
    </Grid>
  );
};

export default Profile;
