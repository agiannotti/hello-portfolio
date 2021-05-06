import { Grid, TextField, Typography } from '@material-ui/core';
import React from 'react';
import MuiButton from '../../components/Button/MuiButton';
import resumeData from '../../utils/resumeData';
import './Contact.css';

const Contact = () => {
  return (
    <>
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

export default Contact;
