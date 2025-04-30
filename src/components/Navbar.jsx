import React from 'react';
import { AppBar, Toolbar, Typography, Box, Button } from '@mui/material';

function Navbar() {
  return (
    <AppBar position="sticky" color="transparent" elevation={0}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <img src="/logo_coloured.png" alt="FlashFeed Logo" style={{ height: 80, marginRight: 8 }} />
          <Typography variant="h4" component="div" sx={{ fontWeight: 'bold', color: "#2EDFA1" }}>
            FlashFeed
          </Typography>
        </Box>

        <Box>
          <Button sx = {{color: "black"}}>Home</Button>
          <Button sx = {{color: "black"}}>Features</Button>
          <Button sx = {{fontWeight: 'bold'}}>Download</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
