import { Grid, Tabs, Tab, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import './Portfolio.css';

const Portfolio = () => {
  const [tabValue, setTabValue] = useState('All');

  return (
    <>
      <Grid container className='section pb_45 pt_45'>
        {/*  Title */}
        <Grid item className='section_title mb_30'>
          <span></span>
          <Typography variant='h6' className='section_title_text'>
            Portfolio
          </Typography>
        </Grid>

        {/* Tabs */}
        <Grid item xs={12}>
          <Tabs
            value={tabValue}
            indicatorColor='white'
            className='custom_tabs'
            onChange={(event, newValue) => setTabValue(newValue)}
          >
            <Tab
              label='All'
              value='All'
              className={
                tabValue === 'All'
                  ? 'customTabs_item active'
                  : 'customTabs_item'
              }
            />
          </Tabs>
        </Grid>
      </Grid>
    </>
  );
};

export default Portfolio;
