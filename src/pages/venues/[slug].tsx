import React, { useEffect, useState } from 'react';
import { Box, Typography, Grid } from '@mui/material';
import Breadcrumbs from '../../components/Breadcrumbs';
import VenueClaimAndReport from '../../components/VenueClaimAndReport';
import VenueInformation from '../../components/VenueInformation';
import VenueSlider from '../../components/VenueSlider';
import SidebarRecommendedPosts from '../../components/SidebarRecommendedPosts';
import CardCarousel from '../../components/CardCarousel';
import VenueOpeningHours from '../../components/VenueOpeningHours';
import { GetServerSideProps } from 'next';
import { VenueProps } from '../../types/venue';
import { fetchVenue } from '../../api/venue';
import { getErrorMessage } from '../../utils/error';

const styles = {
	container: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		px: 2,
		maxWidth: '1200px',
		mx: 'auto',
	},
	stickyBox: {
		position: 'sticky',
		top: 20,
		width: '100%',
		height: 'fit-content',
		display: 'flex',
		flexDirection: 'column',
		gap: 4,
	},
	mb: 4,
	mt: 10,
};

const ErrorPage: React.FC<{ message: string }> = ({ message }) => (
	<Box sx={{ ...styles.container, mt: 10 }}>
		<Typography variant="h1" color="error">{message}</Typography>
	</Box>
);

const VenueContent: React.FC<{ venue: any; isClient: boolean }> = ({ venue, isClient }) => (
	<Box sx={styles.container}>
		{/* Breadcrumbs */}
		<Box sx={{ width: '100%', mb: 4 }}>
			<Breadcrumbs
				items={[
				{ label: 'Home', href: '/' },
				{ label: venue.venueCategory.name, href: '/' + venue.venueCategory.slug },
				{ label: venue.venueType.name, href: '/' + venue.venueType.slug },
				{ label: venue.name },
				]}
			/>
		</Box>

		<Grid container spacing={4} sx={{ width: '100%', mb: 4 }}>
			{/* Introduction Section */}
			<Grid item xs={12} sm={5}>
				<Box>
					<Typography variant="h3" gutterBottom>{venue.name || 'Venue Name'}</Typography>
					<Typography variant="h5" color="textSecondary" gutterBottom>{venue.summary}</Typography>
					<VenueInformation venue={venue} />
				</Box>
			</Grid>

			{/* Venue Slider */}
			{isClient && (
				<Grid item xs={12} sm={7}>
				<Box sx={{ ...styles.stickyBox, mt: 4 }}>
					<VenueSlider images={venue.venueImages} />
				</Box>
				</Grid>
			)}
		</Grid>

		<Grid container spacing={4} sx={{ width: '100%', mb: 4, mt: 2 }}>
			{/* Venue Details */}
			<Grid item xs={12} sm={8}>
				<Box>
				<Typography variant="body1" paragraph>{venue.description}</Typography>
				{venue.venueOpeningHours?.length > 0 && <VenueOpeningHours hours={venue.venueOpeningHours} />}
				<VenueClaimAndReport />
				</Box>
			</Grid>

			{/* Sidebar */}
			{isClient && (
				<Grid item xs={12} sm={4}>
				<Box sx={styles.stickyBox}>
					<SidebarRecommendedPosts />
				</Box>
				</Grid>
			)}
		</Grid>

		{/* Similar Venues */}
		{isClient && (
		<CardCarousel
			title="Similar places"
			venues={venue.similarVenues}
			seeMoreLink={`${process.env.ROOT_DOMAIN}/${venue.venueType.slug}`}
		/>
		)}

	</Box>
);

const Venue: React.FC<VenueProps> = ({ venue, error }) => {
	const [isClient, setIsClient] = useState(false);

	useEffect(() => {
		setIsClient(true);
	}, []);

	if (error) {
		return <ErrorPage message={error} />;
	}

	if (!venue) {
		return <ErrorPage message="404 - Page Not Found" />;
	}

	return<VenueContent venue={venue} isClient={isClient} />;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
	const slugParam = context.params?.slug;

	const slug = Array.isArray(slugParam) ? slugParam[0] : slugParam;
	
	try {
		const venue = await fetchVenue(slug);

		return { 
			props: { 
				venue,
				error: null 
			} 
		};

	} catch (error) {
		// Handle errors by returning an error message as props
		const errorMessage = getErrorMessage(error);
		return { 
			props: { 
				venue: null,
				error: errorMessage 
			} 
		};
	}
};

export default Venue;