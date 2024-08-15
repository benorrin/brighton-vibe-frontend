// src/pages/venues/[id].tsx
import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { GetServerSideProps } from 'next';
import axios from 'axios';
import SidebarRecommendedPosts from '../../components/SidebarRecommendedPosts';
import VenueSlider from '../../components/VenueSlider';
import Breadcrumbs from '../../components/Breadcrumbs';
import VenueClaimAndReport from '../../components/VenueClaimAndReport';
import VenueInformation from '../../components/VenueInformation';

interface VenueProps {
  venue: any | null;
  error: string | null;
}

const Venue: React.FC<VenueProps> = ({ venue, error }) => {
	console.log('Venue Data:', venue);
	console.log('Error:', error);

	if (error) {
		return (
			<Box
				sx={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				px: 2,
				maxWidth: '1200px',
				mx: 'auto',
				mt: 10,
				}}
			>
				<Typography variant="h1" color="error">
					{error}
				</Typography>
			</Box>
		);
	}

	if (!venue) {
		return (
			<Box
				sx={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				px: 2,
				maxWidth: '1200px',
				mx: 'auto',
				mt: 10,
				}}
			>
				<Typography variant="h1" color="error">
					404 - Page Not Found
				</Typography>
				<Typography variant="body1">
					Sorry, the page you are looking for does not exist.
				</Typography>
			</Box>
		);
	}

	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				px: 2,
				maxWidth: '1200px',
				mx: 'auto',
			}}
		>

			{/* Breadcrumbs */}
			<Box sx={{ width: '100%', mb: 4 }}>
				<Breadcrumbs
					items={[
						{ label: 'Home', href: '/' },
						{ label: 'Venues', href: '/venues' },
						{ label: venue.name || 'Venue Name' },
					]}
				/>
			</Box>

			{/* Introduction Section */}
			<Box sx={{ width: '100%', mb: 4 }}>
				<Typography variant="h3" gutterBottom>
					{venue.name || 'Venue Name'}
				</Typography>
				<Typography variant="h5" color="textSecondary" gutterBottom>
					{venue.description || 'A lively venue with a great atmosphere and excellent drinks.'}
				</Typography>
			</Box>

			{/* Image Slider */}
			<Box sx={{ width: '100%', mb: 4 }}>
				<VenueSlider images={
					venue.images || 
					['https://via.placeholder.com/1200x400?text=Venue+Image', 
					'https://via.placeholder.com/1200x800?text=Venue+Image', 
					'https://via.placeholder.com/1200x400?text=Venue+Image'
					]} 
				/>
			</Box>

			<Grid container spacing={4} sx={{ width: '100%', mb: 4, mt: 2 }}>

				{/* Venue Details */}
				<Grid item xs={12} sm={8}>
					<Box>
						<Typography variant="body1" paragraph>
							Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.
						</Typography>
						
						{/* Venue Information */}
						<VenueInformation venue={venue} />

						{/* Claim Business and Report Incorrect Information */}
						<VenueClaimAndReport />
					</Box>
				</Grid>

				{/* Sidebar */}
				<Grid item xs={12} sm={4}>
					<Box
						sx={{
						position: 'sticky',
						top: 20,
						width: '100%',
						height: 'fit-content',
						display: 'flex',
						flexDirection: 'column',
						gap: 4,
						}}
					>
						{/* Sidebar Recommended Posts */}
						<SidebarRecommendedPosts />
					</Box>
				</Grid>
			</Grid>
		</Box>
	);
};

export const getServerSideProps: GetServerSideProps = async (context) => {
	const { id } = context.params!;
	
	try {
		console.log(`Fetching venue with ID: ${id}`);
		const response = await axios.get(`http://localhost:5295/venues/${id}`);
		
		if (response.status === 200 && response.data) {
			console.log('API Response Data:', response.data);
			return {
				props: {
				venue: response.data,
				error: null,
				},
			};
		} else {
			return {
				props: {
				venue: null,
				error: 'Venue not found.',
				},
			};
		}
	} catch (error) {
		console.error('API Request Error:', error);
			return {
				props: {
					venue: null,
					error: 'Venue not found.',
				},
			};
	}
};

export default Venue;