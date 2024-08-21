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
import axios from 'axios';

interface VenueProps {
	venue: any | null;
	category: any | null;
	similarVenues: any | null;
	error: string | null;
}

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

const VenueContent: React.FC<{ venue: any; isClient: boolean; category: any; similarVenues: any }> = ({ venue, isClient, category, similarVenues }) => (
	<Box sx={styles.container}>
		{/* Breadcrumbs */}
		<Box sx={{ width: '100%', mb: 4 }}>
			<Breadcrumbs
				items={[
				{ label: 'Home', href: '/' },
				{ label: category.name, href: '/' + category.slug },
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
			cards={similarVenues}
			seeMoreLink={`${process.env.ROOT_DOMAIN}/${category.slug}`}
		/>
		)}

	</Box>
);

const Venue: React.FC<VenueProps> = ({ venue, category, similarVenues, error }) => {
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

	return<VenueContent venue={venue} isClient={isClient} category={category} similarVenues={similarVenues} />;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
	const { id } = context.params!;
	try {
		// Fetch venue
		const venueResponse = await axios.get(`${process.env.API_URL}/venues/${id}`);
		if (venueResponse.status !== 200 || !venueResponse.data) {
			return { 
				notFound: true
			};
		}

		const venue = venueResponse.data;

		// Fetch venue category
		const categoryResponse = await axios.get(`${process.env.API_URL}/venue-categories/${venue.categoryId}`);
		if (categoryResponse.status !== 200 || !categoryResponse.data) {
			return { 
				notFound: true
			};
		}

		const category = categoryResponse.data;

		// Fetch similar venues by category
		const similarVenuesResponse = await axios.get(`${process.env.API_URL}/venues/category/${venue.categoryId}`);
		if (similarVenuesResponse.status !== 200 || !similarVenuesResponse.data) {
			return { 
				props: { 
					venue, 
					category, 
					similarVenues: null, 
					error: 'Similar venues not found.' 
				} 
			};
		}

		const transformData = (data: any) => data.map((item: any) => ({
			name: item.name,
			image: item.venueImages.length > 0 ? item.venueImages[0].imageUrl : 'https://via.placeholder.com/200',
			link: `${process.env.ROOT_DOMAIN}/venues/${item.slug}`
		}));

		const similarVenues = transformData(similarVenuesResponse.data);

		return { 
			props: { 
				venue, 
				category, 
				similarVenues, 
				error: null 
			} 
		};

	} catch (error) {
		if (axios.isAxiosError(error) && error.response) {
			// Handle different error responses
			if (error.response.status === 404) {
				return { notFound: true };
			}
			if (error.response.status === 500) {
				return { props: { venue: null, category: null, similarVenues: null, error: 'Internal Server Error.' } };
			}
		}
		return { 
			props: { 
				venue: null, 
				category: null, 
				similarVenues: null, 
				error: 'An error occurred.' 
			} 
		};
	}
};

export default Venue;