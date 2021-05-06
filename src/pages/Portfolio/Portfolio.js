import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import './Portfolio.css';

const Portfolio = () => {
  return (
    <>
      <Grid container className='section pb_45 pt_45'>
        <Grid item className='section_title mb_30'>
          <span></span>
          <Typography variant='h6' className='section_title_text'>
            Portfolio
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default Portfolio;
