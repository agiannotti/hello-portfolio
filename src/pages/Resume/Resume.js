import { Grid, Icon, Paper, TextField, Typography } from '@material-ui/core';
import React from 'react';
import './Resume.css';
import resumeData from '../../utils/resumeData';
import BasicTimeline, {
  CustomTimelineSeparator,
} from '../../components/Timeline/Timeline';
import WorkTwoToneIcon from '@material-ui/icons/WorkTwoTone';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineContent from '@material-ui/lab/TimelineContent';
import SchoolTwoToneIcon from '@material-ui/icons/SchoolTwoTone';
import TimelineDot from '@material-ui/lab/TimelineDot';
import MuiButton from '../../components/Button/MuiButton';

const Resume = () => {
  return (
    <>
      {/* About Me */}
      <Grid container className='section pb_45 pt_45'>
        <Grid item className='section_title mb_30'>
          <span></span>
          <Typography className='section_typography' variant='h6'>
            About Me
          </Typography>
        </Grid>
        <Grid item xs={12}></Grid>
        <Typography variant='body2' className='aboutme_text'>
          {resumeData.about}
        </Typography>
      </Grid>

      {/* Education and experiences */}
      <Grid container className='section pb_45'>
        <Grid item className='section_title mb_30'>
          <span></span>
          <Typography className='section_typography' variant='h6'>
            Resume
          </Typography>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container className='resume_timeline pb_45'>
          {/* Experience */}
          <Grid item xs={12} md={6}>
            <BasicTimeline title={'Work Experience'} icon={<WorkTwoToneIcon />}>
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
            </BasicTimeline>
          </Grid>

          {/* Education */}
          <Grid item xs={12} md={6}>
            <BasicTimeline title={'Education'} icon={<SchoolTwoToneIcon />}>
              {resumeData.educations.map((edu) => (
                <TimelineItem>
                  <CustomTimelineSeparator></CustomTimelineSeparator>

                  <TimelineContent className='timeline_content'>
                    <Typography className='timeline_title'>
                      {edu.title}
                    </Typography>
                    <Typography variant='caption' className='timeline_date'>
                      {edu.date}
                    </Typography>
                    <Typography
                      variant='body2'
                      className='timeline_description'
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
      {/* Services */}

      <Grid container className='section pb_45'>
        <Grid item className='section_title mb_30'>
          <span></span>
          <Typography variant='h6' className='section_title_text'>
            My Services
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Grid container spacing={3} justify='space-around'>
            {resumeData.services.map((service) => (
              <Grid item xs={12} sm={6} md={3}>
                <div className='service'>
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
          <Grid container justify='space-between'>
            {resumeData.skills.map((skill) => (
              <Grid item xs={12} sm={6} md={3}>
                <Paper elevation={0} className='skill'>
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

      {/* Contact */}
      <Grid container spacing={7} className='section pt_45 pb_45'>
        {/* Contact Form */}
        <Grid item xs={12} lg={7}>
          <Grid container>
            <Grid item className='section_title mb_30'>
              <span></span>
              <Typography className='section_typography' variant='h6'>
                Contact
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth name='name' label='Name'></TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth name='email' label='E-mail'></TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    name='message'
                    label='Message'
                    multiline
                    rows={4}
                  />
                </Grid>
                <Grid item xs={12}>
                  <MuiButton text={'Submit'}></MuiButton>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        {/* Contact Information */}
        <Grid item xs={12} lg={5}>
          <Grid container>
            <Grid item className='section_title mb_30'>
              <span></span>
              <Typography className='section_typography' variant='h6'>
                Contact Information
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <Typography className='contactInfo_item'>
                    <span>Name: </span>
                    {resumeData.name}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography className='contactInfo_item'>
                    <span>Title: </span>
                    {resumeData.title}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography className='contactInfo_item'>
                    <span>Location: </span>
                    {resumeData.address}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography className='contactInfo_item'>
                    <span>Phone: </span>
                    {resumeData.phone}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Grid container className='contactInfo_socialsContainer'>
                {Object.keys(resumeData.socials).map((key) => (
                  <Grid item className='contactInfo_social'>
                    <a href={resumeData.socials[key].link}>
                      {resumeData.socials[key].icon}
                    </a>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Resume;
