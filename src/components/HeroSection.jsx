import React from 'react';
import { Typography, Button, Grid, Box } from '@mui/material';
import { motion } from 'framer-motion';
import logo from '../assets/logo_coloured.png';

const MotionBox = motion(Box);

function HeroSection() {
  return (
    <Grid
    container
    id="hero"
    spacing={4}
    alignItems="center"
    justifyContent="center" 
    sx={{ py: { xs: 6, md: 10 }, px: { xs: 2, md: 6 } }}
    >
      <Grid item xs={12} md={6}>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
            FlashFeed
          </Typography>
          <Typography variant="h6" color="text.secondary" gutterBottom>
            Your personalized, reel-style phone news app — fast, smart, and minimal.
          </Typography>
          <Box sx={{ mt: 4, display: 'flex', gap: 2 }}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="contained" size="large">
                Download App
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="outlined" size="large">
                Learn More
              </Button>
            </motion.div>
          </Box>
        </motion.div>
      </Grid>

      <Grid item xs={12} md={6}>
        <MotionBox
          component="img"
          src= {logo}
          alt="App preview"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          sx={{ width: '100%', maxWidth: 400, borderRadius: 4, boxShadow: 5, mx: 'auto' }}
        />
      </Grid>
    </Grid>
  );
}

export default HeroSection;
