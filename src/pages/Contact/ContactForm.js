import { Grid, TextField, Typography } from '@material-ui/core';
// import React, { useState } from 'react';
import Button from '../../components/Button/Button';

const ContactForm = () => {
  // const [emailSent, setEmailValue] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    // console.log('hello', emailSent);
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <div className='form-control'>
          <Grid item xs={12} lg={7}>
            <Grid container>
              <Grid item className='section_title mb_30 top_30'>
                <span></span>
                <Typography className='section_typography' variant='h6'>
                  Contact
                </Typography>
              </Grid>

              <Grid item xs={12}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={5}>
                    <TextField
                      fullwidth={'true'}
                      name='name'
                      label='Name'
                    ></TextField>
                  </Grid>
                  <Grid item xs={12} sm={5}>
                    <TextField
                      fullwidth={'true'}
                      name='email'
                      label='E-mail'
                    ></TextField>
                  </Grid>
                  <Grid item xs={12} sm={5}>
                    <TextField
                      fullwidth={'true'}
                      name='message'
                      label='Message'
                      multiline
                      rows={4}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button text={'Submit'} />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
