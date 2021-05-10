import { Grid, TextField, Typography, FormControl } from '@material-ui/core';
// import React, { useState } from 'react';
import Button from '../../components/Button/Button';
import { UseForm, Form } from '../../components/utils/UseForm';

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

  const onSubmit = () => {
    console.log('Submitted!');
  };

  return (
    <FormControl onSubmit={onSubmit}>
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
    </FormControl>
  );
};

export default ContactForm;
