import { Grid, TextField, Typography } from "@material-ui/core";
// import React, { useState } from 'react';
import { Form } from "react-bootstrap";
import MuiButton from "../../components/Button/MuiButton";
import resumeData from "../../utils/resumeData";
import "./Contact.css";

const Contact = () => {
  // const [emailSent, setEmailValue] = useState('false');

  const handleSubmit = () => {
    // console.log('hello', emailSent);
  };

  return (
    <>
      {/* Contact */}
      <Grid container spacing={2} className="section pt_45 pb_45">
        {/* Contact Form */}
        <Form onSubmit={handleSubmit()}>
          <Grid item xs={12} lg={7}>
            <Grid container>
              <Grid item className="section_title mb_30 top_30">
                <span></span>
                <Typography className="section_typography" variant="h6">
                  Contact
                </Typography>
              </Grid>

              <Grid item xs={12}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={5}>
                    <TextField fullWidth name="name" label="Name"></TextField>
                  </Grid>
                  <Grid item xs={12} sm={5}>
                    <TextField
                      fullWidth
                      name="email"
                      label="E-mail"
                    ></TextField>
                  </Grid>
                  <Grid item xs={12} sm={5}>
                    <TextField
                      fullWidth
                      name="message"
                      label="Message"
                      multiline
                      rows={4}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <MuiButton text={"Submit"}></MuiButton>
                    {/* 
                    {this.state.emailSent ===
                      true(<p className='success-msg'>Email Sent</p>)} */}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Form>
        {/* Contact Information */}
        <Grid item xs={12} lg={5}>
          <Grid container>
            <Grid item className="section_title mb_30  ml_15 top_30">
              <span></span>
              <Typography className="section_typography " variant="h6">
                Contact Information
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography className="contactInfo_item ml_15">
                    <span>Name: </span>
                    {resumeData.name}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography className="contactInfo_item ml_15">
                    <span>Title: </span>
                    {resumeData.title}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography className="contactInfo_item ml_15">
                    <span>Location: </span>
                    {resumeData.address}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography className="contactInfo_item ml_15">
                    <span>Phone: </span>
                    {resumeData.phone}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Grid container className="contactInfo_socialsContainer ml_15">
                {Object.keys(resumeData.socials).map((key) => (
                  <Grid item className="contactInfo_social">
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
