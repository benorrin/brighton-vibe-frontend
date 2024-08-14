import React, { useState } from 'react';
import { AppBar, Container, Toolbar, Typography, Button, IconButton, Box, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar: React.FC = () => {

  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
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
              <Box component="span" sx={{ fontWeight: 'bold', fontSize: '1.5rem', mr: 1 }}>
                <Box component="span" sx={{ color: 'blue' }}>Brighton</Box>
                Vi.be
              </Box>
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
                <MenuItem onClick={handleMenuClose}>Landings</MenuItem>
                <MenuItem onClick={handleMenuClose}>Company</MenuItem>
                <MenuItem onClick={handleMenuClose}>Account</MenuItem>
                <MenuItem onClick={handleMenuClose}>Pages</MenuItem>
                <MenuItem onClick={handleMenuClose}>Blog</MenuItem>
                <MenuItem onClick={handleMenuClose}>Portfolio</MenuItem>
              </Menu>
            </Box>

            {/* Links for desktop view */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3 }}>
              <Button color="inherit">Landings</Button>
              <Button color="inherit">Company</Button>
              <Button color="inherit">Account</Button>
              <Button color="inherit">Pages</Button>
              <Button color="inherit">Blog</Button>
              <Button color="inherit">Portfolio</Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
  );
};

export default Navbar;
