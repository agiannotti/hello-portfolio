import React from 'react';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import WorkTwoToneIcon from '@material-ui/icons/WorkTwoTone';

import './Timeline.css';
import { Typography } from '@material-ui/core';

const BasicTimeline = ({ title, children }) => {
  return (
    <Timeline className={'timeline'}>
      {/*  Item Header */}
      <TimelineItem className='timeline_firstItem'>
        <TimelineSeparator>
          <TimelineDot className={'timeline_dot_header'}>
            <WorkTwoToneIcon style={{ width: 50, height: 50 }} />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant='h6' className={'timeline_header'}>
            {'title'}
            {children}
          </Typography>
        </TimelineContent>
      </TimelineItem>

      {/* Remaining Items */}
      <TimelineItem>
        <CustomTimelineSeparator />
        <TimelineContent>Code</TimelineContent>
      </TimelineItem>
    </Timeline>
  );
};

export const CustomTimelineSeparator = () => {
  return (
    <TimelineSeparator className={'separator_padding'}>
      <TimelineDot variant={'outlined'} className={'timeline_dot'} />
      <TimelineConnector />
    </TimelineSeparator>
  );
};

export default BasicTimeline;
