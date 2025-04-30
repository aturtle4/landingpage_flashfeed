import React from 'react';
import { Box, Typography, Paper, Button } from '@mui/material';
import { motion } from 'framer-motion';

const screenshots = [
  {
    title: 'Home Screen',
    description: 'Easily access all app features.',
    image: '/screenshots/onboarding.png',
  },
  {
    title: 'Key Features',
    description: 'Feature-rich and intuitive.',
    image: '/screenshots/onboarding.png',
  },
  {
    title: 'Settings',
    description: 'Customize notifications and theme.',
    image: '/screenshots/onboarding.png',
  },
  {
    title: 'Onboarding',
    description: 'Simple and smooth onboarding flow.',
    image: '/screenshots/onboarding.png',
  },
];

function AppScreenshots() {
  return (
        <Box
        sx={{
            py: 10,
            px: 2,
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
        }}
        >
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
        >
            <Typography variant="h4" gutterBottom>
            App Screenshots
            </Typography>
        </motion.div>

        <Box
            sx={{
            mt: 4,
            display: 'flex',
            overflowX: 'auto',
            gap: 3,
            pb: 4,
            px: 2,
            width: '100%',
            justifyContent: 'center',
            '&::-webkit-scrollbar': { display: 'none' },
            }}
        >
            {screenshots.map((item, idx) => (
            <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
                <Paper
                elevation={3}
                sx={{
                    width: 280,
                    minWidth: 280,
                    borderRadius: 4,
                    overflow: 'hidden',
                    flexShrink: 0,
                }}
                >
                <Box
                    component="img"
                    src={item.image}
                    alt={item.title}
                    sx={{
                    height: 650,
                    width: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.3s',
                    '&:hover': { transform: 'scale(1.03)' },
                    }}
                />
                <Box sx={{ p: 2 }}>
                    <Typography variant="h6">{item.title}</Typography>
                    <Typography variant="body2" color="text.secondary">
                    {item.description}
                    </Typography>
                </Box>
                </Paper>
            </motion.div>
            ))}
        </Box>

        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Button
            variant="contained"
            size="large"
            href="https://github.com/aturtle4/FlashFeed"
            target="_blank"
            rel="noopener noreferrer"
        >
            Download Now
        </Button>
        </motion.div>

    </Box>
  );
}

export default AppScreenshots;
