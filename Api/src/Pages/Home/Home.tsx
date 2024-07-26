import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import Header from '../../Components/Header';

const Home: React.FC = () => {
  return (
    <Box sx={{backgroundColor:'#f7f7f8',height:'100vh'}}>
       <Header />
      <Typography variant="h2" gutterBottom>
        Welcome to the Stock Market Overview
      </Typography>

      <Typography variant="h5" gutterBottom>
        Learn about the stock market and explore major exchanges.
      </Typography>

      <Grid container spacing={3} marginTop={2}>
        <Grid item xs={12} md={6}>
          <Box padding={2} border={1} borderColor="grey.300">
            <Typography variant="h4">Introduction to Stock Market</Typography>
            <Typography variant="body1">
              The stock market refers to the collection of markets and exchanges where activities such as buying, selling, and issuance of shares of publicly-held companies take place. 
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box padding={2} border={1} borderColor="grey.300">
            <Typography variant="h4">Major Stock Exchanges</Typography>
            <Typography variant="body1">
              Some of the major stock exchanges include the New York Stock Exchange (NYSE), NASDAQ, and the London Stock Exchange (LSE).
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box padding={2} border={1} borderColor="grey.300">
            <Typography variant="h4">Key Stock Market Indicators</Typography>
            <Typography variant="body1">
              Key indicators such as the Dow Jones Industrial Average, S&P 500, and NASDAQ Composite provide insights into the stock market's performance.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
