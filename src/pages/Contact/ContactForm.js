import { Grid, TextField, Typography } from '@material-ui/core';
// import React, { useState } from 'react';
import Button from '../../components/Button/Button';
import { UseForm } from '../../utils/UseForm';

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
    console.log('Submitted!', values.fullName);
  };

  return (
    <form onSubmit={onSubmit} id='contactForm'>
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
              <Grid
                style={{
                  color: 'black',
                  backgroundColor: 'white',
                  border: 'none',
                }}
                className='form-control'
                item
                xs={12}
                sm={5}
              >
                <TextField
                  type='text'
                  fullwidth='true'
                  name='fullName'
                  label='Name'
                  value={values.fullName}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid
                className='form-control'
                style={{
                  color: 'black',
                  backgroundColor: 'white',
                  border: 'none',
                }}
                item
                xs={12}
                sm={5}
              >
                <TextField
                  type='text'
                  fullwidth='true'
                  name='email'
                  label='E-mail'
                  value={values.email}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid
                className='form-control'
                style={{
                  color: 'black',
                  backgroundColor: 'white',
                  border: 'none',
                }}
                item
                xs={12}
                sm={5}
              >
                <TextField
                  type='text'
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
                <Button text='Submit' type='submit' />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </form>
  );
};

export default ContactForm;
