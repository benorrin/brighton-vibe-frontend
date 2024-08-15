"use client";

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
            {/* Site Logo */}
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
                  width: '80vw',
                  maxWidth: '80vw',
                  right: 0,
                  top: '56px !important',
                  borderRadius: 0,
                },
              }}
            >
              <MenuItem onClick={handleMenuClose}><a href={`${rootDomain}/eat`}>Eat</a></MenuItem>
              <MenuItem onClick={handleMenuClose}><a href={`${rootDomain}/drink`}>Drink</a></MenuItem>
              <MenuItem onClick={handleMenuClose}><a href={`${rootDomain}/events`}>What's on</a></MenuItem>
              <MenuItem onClick={handleMenuClose}><a href={`${rootDomain}/blog`}>Blog</a></MenuItem>
			  <MenuItem onClick={handleMenuClose}><a href={`${rootDomain}/about`}>About</a></MenuItem>
            </Menu>
          </Box>

          {/* Links for desktop view */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3 }}>
            <Button color="inherit" href={`${rootDomain}/eat`}>Eat</Button>
            <Button color="inherit" href={`${rootDomain}/drink`}>Drink</Button>
            <Button color="inherit" href={`${rootDomain}/events`}>What's on</Button>
            <Button color="inherit" href={`${rootDomain}/blog`}>Blog</Button>
			<Button color="inherit" href={`${rootDomain}/about`}>About</Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;