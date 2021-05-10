import './Resume.css';

import { Grid, Icon, makeStyles, Paper, Typography } from '@material-ui/core';
import SchoolTwoToneIcon from '@material-ui/icons/SchoolTwoTone';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import TimelineItem from '@material-ui/lab/TimelineItem';
import React from 'react';

import BasicTimeline, {
  CustomTimelineSeparator,
} from '../../components/Timeline/Timeline';
import resumeData from '../../utils/resumeData';

const useStyles = makeStyles({
  cardBorder: {
    borderRadius: '14px',
    padding: '20px',
    boxShadow: '0px 0px 48px 0px rgba(4, 6, 4, 0.08) !important',
    minHeight: '186px',
    height: '100%',
  },
});

// import WorkTwoToneIcon from '@material-ui/icons/WorkTwoTone';
const Resume = () => {
  const classes = useStyles();
  return (
    <>
      {/* About Me */}

      {/* Education and experiences */}
      <Grid container className='section pb_45'>
        <Grid item className='section_title mb_30'>
          <span></span>
          {/* <Typography className='section_typography' variant='h6'>
            Resume
          </Typography> */}
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={0} className='resume_timeline pb_45'>
          {/* Experience */}
          <Grid item xs={12} md={6}>
            <Grid container className='section pb_45 about_container pt_45'>
              <Grid item className='section_title mb_30'>
                <div className='section_typography' variant='h6'>
                  About Me
                </div>
              </Grid>
              <Grid item xs={12}></Grid>
              <Typography variant='body2' className='aboutme_text'>
                {resumeData.about}
              </Typography>
            </Grid>

            {/* <BasicTimeline title={'Work Experience'} icon={<WorkTwoToneIcon />}>
              {resumeData.experiences.map((exp) => (
                <TimelineItem>
                  <CustomTimelineSeparator></CustomTimelineSeparator>

                  <TimelineContent className='timeline_content'>
                    <Typography className='timeline_title'>
                      {exp.title}
                    </Typography>
                    <Typography variant='caption' className='timeline_date'>
                      {exp.date}
                    </Typography>
                    <Typography
                      variant='body2'
                      className='timeline_description'
                    >
                      {exp.description}
                    </Typography>
                  </TimelineContent>
                </TimelineItem>
              ))}
            </BasicTimeline> */}
          </Grid>

          {/* Education */}
          <Grid item xs={12} md={5}>
            <Grid container spacing={10} className='resume_timeline p_30 '>
              <BasicTimeline title={'Education'} icon={<SchoolTwoToneIcon />}>
                {resumeData.educations.map((edu) => (
                  <TimelineItem>
                    <CustomTimelineSeparator></CustomTimelineSeparator>

                    <TimelineContent className='timeline_content '>
                      <Typography className='timeline_title '>
                        {edu.title}
                      </Typography>
                      <Typography variant='caption' className='timeline_date'>
                        {edu.date}
                      </Typography>
                      <Typography
                        variant='body2'
                        className='timeline_description '
                      >
                        {edu.description}
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </BasicTimeline>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/* Services */}

      <Grid container className='section pb_45'>
        <Grid item className='section_title mb_30 ml_15'>
          <span></span>
          <Typography
            variant='h6'
            className='section_title_text section_typography'
          ></Typography>
        </Grid>

        <Grid item xs={12}>
          <Grid container spacing={3} justify='space-around'>
            {resumeData.services.map((service) => (
              <Grid item xs={12} sm={6} md={3}>
                <div className='service top_30'>
                  <Icon className='service_icon'>{service.icon}</Icon>
                  <Typography className='service_title'>
                    {service.title}
                  </Typography>
                  <Typography className='service_description' variant='body2'>
                    {service.description}
                  </Typography>
                </div>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
      {/* Skills */}

      <Grid item xs={12}>
        <Grid container className='section graybg pb_45 p_50'>
          <Grid container justify='space-between' spacing={3}>
            {resumeData.skills.map((skill) => (
              <Grid item xs={12} sm={6} md={3}>
                <Paper elevation={0} className={classes.cardBorder}>
                  <Typography variant='h6' className='skill_title'>
                    {skill.title}
                  </Typography>
                  {skill.description.map((element) => (
                    <Typography variant='body2' className='skill_description'>
                      <TimelineDot
                        variant={'outlined'}
                        className='timeline_dot'
                      />
                      {element}
                    </Typography>
                  ))}
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Resume;
