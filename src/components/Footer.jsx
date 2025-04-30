import React from 'react';
import { Box, Typography, Link, Stack } from '@mui/material';

function Footer() {
  return (
    <Box id="footer" sx={{ mt: 8, py: 3,  textAlign: 'center' }}>
      <Typography variant="body2" color="text.secondary">
        © 2025 FlashFeed. All rights reserved.
      </Typography>

      <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
        Developed by{' '}
        <Link href="https://github.com/aturtle4" target="_blank" underline="hover">
          Armaan
        </Link>
        ,{' '}
        <Link href="https://github.com/FakePickle" target="_blank" underline="hover">
          Harsh
        </Link>
        ,{' '}
        <Link href="https://github.com/Jaagss" target="_blank" underline="hover">
          Aditya
        </Link>
        ,{' '}
        <Link href="https://github.com/hemanthdindigallu" target="_blank" underline="hover">
          Hemanth
        </Link>
      </Typography>

      <Typography variant="body2" sx={{ mt: 1 }}>
        <Link href="https://github.com/aturtle4/FlashFeed" target="_blank" underline="hover">
          View on GitHub
        </Link>
      </Typography>
    </Box>
  );
}

export default Footer;
