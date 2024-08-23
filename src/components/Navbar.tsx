"use client";

import React, { useState } from 'react';
import { AppBar, Container, Toolbar, Typography, Button, IconButton, Box, Menu, MenuItem, Link as MuiLink } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import NextLink from 'next/link';

const styles = {
	logoLink: {
		textDecoration: 'none',
		color: 'inherit',
		display: 'flex',
		alignItems: 'center'
	},
	logoText: {
		fontWeight: 'bold',
		fontSize: '1.5rem',
		mr: 1
	},
	logoHighlight: {
		color: 'blue'
	},
	menuButton: {
		display: { xs: 'block', md: 'none' },
	},
	menuPaper: {
		width: '80vw',
		maxWidth: '80vw',
		right: 0,
		top: '56px !important',
		borderRadius: 0
	},
	link: {
		textDecoration: 'none',
		color: 'inherit'
	},
	desktopLinks: {
		display: { xs: 'none', md: 'flex' },
		gap: 3
	},
	separator: {
		borderBottom: '1px solid #d3d3d3',
		width: '100%',
		maxWidth: 'lg',
		margin: '0 auto'
	}
};

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

			{/* Site Logo */}
			<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
				<NextLink href="/" passHref>
				<MuiLink sx={styles.logoLink}>
					<Box component="span" sx={styles.logoText}>
					<Box component="span" sx={styles.logoHighlight}>Brighton</Box>
					Vi.be
					</Box>
				</MuiLink>
				</NextLink>
			</Typography>

			{/* Menu button for mobile view */}
			<Box sx={styles.menuButton}>
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
					'& .MuiPaper-root': styles.menuPaper,
				}}
				>
				<MenuItem onClick={handleMenuClose}>
					<NextLink href="/eat" passHref>
					<MuiLink sx={styles.link}>Eat</MuiLink>
					</NextLink>
				</MenuItem>
				<MenuItem onClick={handleMenuClose}>
					<NextLink href="/drink" passHref>
					<MuiLink sx={styles.link}>Drink</MuiLink>
					</NextLink>
				</MenuItem>
				<MenuItem onClick={handleMenuClose}>
					<NextLink href="/events" passHref>
					<MuiLink sx={styles.link}>What's on</MuiLink>
					</NextLink>
				</MenuItem>
				<MenuItem onClick={handleMenuClose}>
					<NextLink href="/blog" passHref>
					<MuiLink sx={styles.link}>Blog</MuiLink>
					</NextLink>
				</MenuItem>
				<MenuItem onClick={handleMenuClose}>
					<NextLink href="/about" passHref>
					<MuiLink sx={styles.link}>About</MuiLink>
					</NextLink>
				</MenuItem>
				</Menu>
			</Box>

			{/* Links for desktop view */}
			<Box sx={styles.desktopLinks}>
				<NextLink href="/eat" passHref>
				<Button sx={styles.link}>Eat</Button>
				</NextLink>
				<NextLink href="/drink" passHref>
				<Button sx={styles.link}>Drink</Button>
				</NextLink>
				<NextLink href="/events" passHref>
				<Button sx={styles.link}>What's on</Button>
				</NextLink>
				<NextLink href="/blog" passHref>
				<Button sx={styles.link}>Blog</Button>
				</NextLink>
				<NextLink href="/about" passHref>
				<Button sx={styles.link}>About</Button>
				</NextLink>
			</Box>
			</Toolbar>
		</Container>

		{/* Separator with same width as the container */}
		<Box sx={styles.separator} />
		</AppBar>
	);
};

export default Navbar;