import React from 'react';
import { Typography, Grid, Paper, Box } from '@mui/material';
import { Code, NewReleases, Swipe, Language, Update, Newspaper, ThumbUpAlt, Launch } from '@mui/icons-material';
import { motion } from 'framer-motion';

const MotionPaper = motion(Paper);

const features = [
  {
    icon: <NewReleases sx={{ fontSize: 40, color: '#2EDFA1' }} />,
    title: 'Latest News',
    desc: 'Stay up-to-date with real-time breaking headlines.',
  },
  {
    icon: <Swipe sx={{ fontSize: 40, color: '#2EDFA1' }} />,
    title: 'Reel-Style Swiping',
    desc: 'Swipe through stories like Instagram Reels.',
  },
  {
    icon: <Language sx={{ fontSize: 40, color: '#2EDFA1' }} />,
    title: 'Localization',
    desc: 'News in your preferred language — seamless and relevant.',
  },
  {
    icon: <Update sx={{ fontSize: 40, color: '#2EDFA1' }} />,
    title: 'Real-Time Feed',
    desc: 'Stories refresh as they happen — no need to reload.',
  },
  {
    icon: <Newspaper sx={{ fontSize: 40, color: '#2EDFA1' }} />,
    title: 'Minimal UI',
    desc: 'No clutter. Just fast, focused headlines.',
  },
  {
    icon: <ThumbUpAlt sx={{ fontSize: 40, color: '#2EDFA1' }} />,
    title: 'Curated for You',
    desc: 'Choose your interests and get news tailored just for you.',
  },
  {
    icon: <Code sx={{ fontSize: 40, color: '#2EDFA1' }} />,
    title: 'Completely Open Source',
    desc: 'Fully open-source and self-hostable. Take control of your news app.',
  },
  {
    icon: <Launch sx={{ fontSize: 40, color: '#2EDFA1' }} />, // reused icon
    title: 'In-App Article Launch',
    desc: 'Open full news articles without leaving the app — smooth and immersive.',
  },
];

function FeaturesSection() {
  return (
    <Box id="features" sx={{ my: 10, px: { xs: 2, md: 6 } }}>
      <Typography variant="h4" align="center" fontWeight="bold" gutterBottom>
        Why FlashFeed?
      </Typography>
      <Typography variant="body1" align="center" color="text.secondary" sx={{ mb: 6 }}>
        Designed to make news quick, clean, and personal.
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {features.map((feature, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <MotionPaper
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
              elevation={4}
              sx={{
                p: 4,
                textAlign: 'center',
                borderRadius: 4,
                height: '100%',
              }}
            >
              <Box sx={{ mb: 2 }}>{feature.icon}</Box>
              <Typography variant="h6" gutterBottom>
                {feature.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {feature.desc}
              </Typography>
            </MotionPaper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default FeaturesSection;
