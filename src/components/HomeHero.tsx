import React from 'react';
import { Box, Typography } from '@mui/material';

const styles = {
	hero: {
		width: '100%',
		height: '40vh',
		backgroundImage: 'url(/img/hero.jpg)',
		backgroundSize: 'cover',
		backgroundPosition: 'center',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		color: '#fff',
		textAlign: 'center',
		position: 'relative',
		px: 3,
	},
	overlay: {
		position: 'absolute',
		top: 0,
		left: 0,
		width: '100%',
		height: '100%',
		backgroundColor: 'rgba(0, 0, 0, 0.5)',
		zIndex: 1,
	},
	heroContent: {
		position: 'relative',
		zIndex: 2,
		maxWidth: '800px',
	},
	heroTitle: {
		fontSize: '3rem',
		fontWeight: 'bold',
		mb: 2,
	},
	heroSubtitle: {
		fontSize: '1.5rem',
		mb: 4,
	},
};

const HomeHero: React.FC = () => (
	<Box sx={styles.hero} mb={6}>
		{/* Transparent black overlay */}
		<Box sx={styles.overlay} />
		<Box sx={styles.heroContent}>
			<Typography variant="h2" sx={styles.heroTitle}>
				Welcome to Brighton Vibe
			</Typography>
			<Typography variant="h5" sx={styles.heroSubtitle}>
				Discover the best places to eat, drink, stay, and explore in Brighton & Hove.
			</Typography>
		</Box>
	</Box>
);

export default HomeHero;