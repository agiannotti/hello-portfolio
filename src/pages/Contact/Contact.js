import { Grid, Typography } from '@material-ui/core';
// import React, { useState } from 'react';
import resumeData from '../../utils/resumeData';
import './Contact.css';
import ContactForm from './ContactForm';

const Contact = () => {
  return (
    <>
      {/* Contact */}
      <Grid container spacing={2} className='section pt_45 pb_45'>
        {/* Contact Form */}
        <ContactForm />
        {/* Contact Information */}
        <Grid item xs={12} lg={5}>
          <Grid container>
            <Grid item className='section_title mb_30  ml_15 top_30'>
              <span></span>
              <Typography className='section_typography ' variant='h6'>
                Contact Information
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography className='contactInfo_item ml_15'>
                    <span>Name: </span>
                    {resumeData.name}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography className='contactInfo_item ml_15'>
                    <span>Title: </span>
                    {resumeData.title}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography className='contactInfo_item ml_15'>
                    <span>Location: </span>
                    {resumeData.address}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography className='contactInfo_item ml_15'>
                    <span>Phone: </span>
                    {resumeData.phone}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Grid container className='contactInfo_socialsContainer ml_15'>
                {Object.keys(resumeData.socials).map((item, index) => (
                  <div key={index}>
                    <Grid item className='contactInfo_social'>
                      <a href={resumeData.socials[item].link}>
                        {resumeData.socials[item].icon}
                      </a>
                    </Grid>
                  </div>
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
