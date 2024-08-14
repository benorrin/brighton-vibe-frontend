"use client";  // Mark this component as a Client Component

import React, { useState } from 'react';
import { AppBar, Container, Toolbar, Typography, Button, IconButton, Box, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const rootDomain = process.env.ROOT_DOMAIN;

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {/* Logo linking to the homepage */}
            <a href={rootDomain} style={{ textDecoration: 'none', color: 'inherit' }}>
              <Box component="span" sx={{ fontWeight: 'bold', fontSize: '1.5rem', mr: 1 }}>
                <Box component="span" sx={{ color: 'blue' }}>Brighton</Box>
                Vi.be
              </Box>
            </a>
          </Typography>

          {/* Menu button for mobile view */}
          <Box sx={{ display: { xs: 'block', md: 'none' } }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleMenuOpen}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              sx={{
                display: { xs: 'block', md: 'none' },
                '& .MuiPaper-root': {
                  width: '80vw', // Full width of the viewport
                  maxWidth: '80vw', // Remove max width constraint
                  right: 0, // Align with the left edge
                  top: '56px !important', // Adjust top position to align with AppBar
                  borderRadius: 0, // Remove border-radius
                },
              }}
            >
              <MenuItem onClick={handleMenuClose}><a href={`${rootDomain}/landings`}>Landings</a></MenuItem>
              <MenuItem onClick={handleMenuClose}><a href={`${rootDomain}/company`}>Company</a></MenuItem>
              <MenuItem onClick={handleMenuClose}><a href={`${rootDomain}/account`}>Account</a></MenuItem>
              <MenuItem onClick={handleMenuClose}><a href={`${rootDomain}/pages`}>Pages</a></MenuItem>
              <MenuItem onClick={handleMenuClose}><a href={`${rootDomain}/blog`}>Blog</a></MenuItem>
              <MenuItem onClick={handleMenuClose}><a href={`${rootDomain}/portfolio`}>Portfolio</a></MenuItem>
            </Menu>
          </Box>

          {/* Links for desktop view */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3 }}>
            <Button color="inherit" href={`${rootDomain}/landings`}>Landings</Button>
            <Button color="inherit" href={`${rootDomain}/company`}>Company</Button>
            <Button color="inherit" href={`${rootDomain}/account`}>Account</Button>
            <Button color="inherit" href={`${rootDomain}/pages`}>Pages</Button>
            <Button color="inherit" href={`${rootDomain}/blog`}>Blog</Button>
            <Button color="inherit" href={`${rootDomain}/portfolio`}>Portfolio</Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;