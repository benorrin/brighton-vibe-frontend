import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import Head from 'next/head';
import Breadcrumbs from '../../components/Breadcrumbs';
import { GetServerSideProps } from 'next';
import { VenueType, VenueTypeProps } from '../../types/venue';
import { fetchVenueType } from '../../api/venueType';
import { getErrorMessage } from '../../utils/error';
import CardGrid from '../../components/CardGrid';

// Define common styles used across the page
const styles = {
	container: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		maxWidth: '1200px',
		mx: 'auto',
	},
	mb: 4,
	mt: 6,
};

// Component to display an error message
const ErrorPage: React.FC<{ message: string }> = ({ message }) => (
	<Box sx={{ ...styles.container, mt: 10 }}>
		<Typography variant="h1" color="error">{message}</Typography>
	</Box>
);

// Component to render the main content of the Eat page
const VenueTypeContent: React.FC<{ venueType }> = ({ venueType }) => (
	<>
		<Head>
			<meta name="description" content={venueType.description} />
			<title>Discover the Best Restaurants and Cafés in Brighton & Hove - Brighton Vibe</title>
		</Head>
		<Container>
			{/* Breadcrumbs for navigation */}
			<Box sx={{ width: '100%', mb: 4 }}>
				<Breadcrumbs
					items={[
					{ label: 'Home', href: '/' },
					{ label: venueType.venueCategory.name, href: '/' + venueType.venueCategory.slug },
					{ label: venueType.name },
					]}
				/>
			</Box>

			{/* Card Grid */}
			<CardGrid title={venueType.name} venues={venueType.venues} />

		</Container>
	</>
);

// Main page component that decides which content to render based on props
const VenueTypePage: React.FC<VenueTypeProps> = ({ venueType, error }) => {
	if (error) {
		// Render the error page if there is an error
		return <ErrorPage message={error} />;
	}

	// Render the main content if there is no error
	return <VenueTypeContent venueType={venueType} />;
};

// Fetch data on the server side before rendering the page
export const getServerSideProps: GetServerSideProps = async (context) => {
	try {
		const slugParam = context.params?.slug;

		const typeSlug = Array.isArray(slugParam) ? slugParam[0] : slugParam;

		// Fetch the venue type data from the API
		const venueType = await fetchVenueType(typeSlug);
  
		return { 
			props: { 
				venueType,
				error: null
			} 
		};
  
	} catch (error) {
		// Handle errors by returning an error message as props
		const errorMessage = getErrorMessage(error);
		return { 
			props: { 
				venueType: null,
				error: errorMessage 
			} 
		};
	}
};

export default VenueTypePage;