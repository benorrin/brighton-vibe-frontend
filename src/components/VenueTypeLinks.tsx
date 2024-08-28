import React from 'react';
import { Box, Typography } from '@mui/material';
import { LocalBar, Restaurant, Coffee, Nightlife, Fastfood } from '@mui/icons-material';
import Link from 'next/link';

const venueTypes = [
	{ name: 'Pubs', color: '#D84315', icon: <LocalBar /> }, // Vibrant Red-Orange
	{ name: 'Bars', color: '#C2185B', icon: <Nightlife /> }, // Rich Pink
	{ name: 'Clubs', color: '#1976D2', icon: <Nightlife /> }, // Strong Blue
	{ name: 'Restaurants', color: '#388E3C', icon: <Restaurant /> }, // Deep Green
	{ name: 'Cafes', color: '#FBC02D', icon: <Coffee /> }, // Bright Yellow
	{ name: 'Fast Food', color: '#F57C00', icon: <Fastfood /> }, // Warm Orange
];

const styles = {
	lineContainer: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		overflowX: 'auto',
		padding: '25px 0',
		mb: 6,
		mt: 4,
	},
	categoryBox: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		color: '#fff',
		borderRadius: 2,
		width: '150px',
		height: '150px',
		boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
		cursor: 'pointer',
		transition: 'transform 0.2s',
		mx: 2, // Margin to space out boxes
		'&:hover': {
			transform: 'scale(1.05)',
		},
	},
	icon: {
		fontSize: '3rem',
		mb: 1,
	},
	categoryText: {
		fontWeight: 'bold',
		textAlign: 'center',
	},
};

const VenueTypeLinks: React.FC = () => (
	<Box sx={styles.lineContainer}>
		{venueTypes.map((type) => (
			<Link key={type.name} href={`/types/${type.name.toLowerCase()}`} passHref>
				<Box sx={{ ...styles.categoryBox, backgroundColor: type.color }}>
					<Box sx={styles.icon}>{type.icon}</Box>
					<Typography variant="h6" sx={styles.categoryText}>
						{type.name}
					</Typography>
				</Box>
			</Link>
		))}
	</Box>
);

export default VenueTypeLinks;