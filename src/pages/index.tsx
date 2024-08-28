import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import Head from 'next/head';
import CardCarousel from '../components/CardCarousel';
import { GetServerSideProps } from 'next';
import { getErrorMessage } from '../utils/error';
import { fetchRecentlyAddedVenues } from '../api/venue';
import { HomePageProps } from '../types/home';
import HomeHero from '../components/HomeHero'; // Import the HomeHero component
import VenueTypeLinks from '../components/VenueTypeLinks'; // Import VenueTypeLinks component

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

// Component to render the main content of the Index page
const IndexPageContent: React.FC<{ recentlyAdded }> = ({ recentlyAdded }) => (
	<>
		<Head>
			<meta name="description" content="Discover the best places to eat, drink, stay, and enjoy in Brighton & Hove." />
			<title>Brighton Vibe - Your Ultimate Guide to Brighton & Hove</title>
		</Head>
		
		<Container id="explore">
			{/* Hero Section */}
			<HomeHero />

			{/* Venue Type Links */}
			<VenueTypeLinks />

			{/* Dynamically render CardCarousels for each category */}
			<CardCarousel
				key="recently-added"
				title="Recently Added"
				venues={recentlyAdded}
				seeMoreLink="/recent"
			/>
		</Container>
	</>
);

// Main page component that decides which content to render based on props
const IndexPage: React.FC<HomePageProps> = ({ recentlyAdded, error }) => {
	if (error) {
		// Render the error page if there is an error
		return <ErrorPage message={error} />;
	}

	// Render the main content if there is no error
	return <IndexPageContent recentlyAdded={recentlyAdded} />;
};

// Fetch data on the server side before rendering the page
export const getServerSideProps: GetServerSideProps = async () => {
	try {
		const recentVenues = await fetchRecentlyAddedVenues();

		const summaryRecentVenues = recentVenues.slice(0, 4);

		return { 
			props: { 
				recentlyAdded: summaryRecentVenues,
				error: null
			}
		};
  
	} catch (error) {
		// Handle errors by returning an error message as props
		const errorMessage = getErrorMessage(error);
		return { 
			props: { 
				recentlyAdded: null,
				error: errorMessage 
			} 
		};
	}
};

export default IndexPage;