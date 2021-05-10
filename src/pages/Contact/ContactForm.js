import { Grid, TextField, Typography } from '@material-ui/core';

import Button from '../../components/Button/Button';
import { UseForm } from '../../components/utils/UseForm';

// import React, { useState } from 'react';
const initialValues = {
  id: 0,
  fullName: '',
  email: '',
  Message: '',
  isSent: false,
};

const ContactForm = () => {
  // const [emailSent, setEmailValue] = useState(false);
  const { values, handleInputChange } = UseForm(initialValues);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted!');
  };

  return (
    <form onSubmit={onSubmit}>
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
                  fullwidth='true'
                  name='fullName'
                  label='Name'
                  value={values.fullName}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12} sm={5}>
                <TextField
                  fullwidth='true'
                  name='email'
                  label='E-mail'
                  value={values.email}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12} sm={5}>
                <TextField
                  fullwidth='true'
                  name='message'
                  label='Message'
                  multiline
                  rows={4}
                  value={values.message}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <Button type='submit' text='Submit' />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </form>
  );
};

export default ContactForm;
