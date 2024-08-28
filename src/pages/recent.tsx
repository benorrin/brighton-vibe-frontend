import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import Head from 'next/head';
import Breadcrumbs from '../components/Breadcrumbs';
import { GetServerSideProps } from 'next';
import { fetchRecentlyAddedVenues } from '../api/venue'; // Import the function to fetch recent venues
import { getErrorMessage } from '../utils/error';
import CardGrid from '../components/CardGrid';
import Hero from '../components/Hero';

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

// Component to render the main content of the Recent page
const RecentPageContent: React.FC<{ recentVenues }> = ({ recentVenues }) => (
	<>
		<Head>
			<meta name="description" content="Explore the latest venues added to Brighton Vibe." />
			<title>Recent Venues - Brighton Vibe</title>
		</Head>
		<Container>
			{/* Breadcrumbs for navigation */}
			<Box sx={{ width: '100%', mb: 4 }}>
				<Breadcrumbs
					items={[
						{ label: 'Home', href: '/' },
						{ label: 'Recent' }
					]}
				/>
			</Box>

			{/* Hero Section */}
			<Hero 
				title="Recent Venues" 
				description="Discover the latest venues added to Brighton Vibe."
			/>

			{/* Card Grid */}
			<CardGrid 
				venues={recentVenues} 
			/>
		</Container>
	</>
);

// Main page component that decides which content to render based on props
const RecentPage: React.FC<{ recentVenues; error }> = ({ recentVenues, error }) => {
	if (error) {
		// Render the error page if there is an error
		return <ErrorPage message={error} />;
	}

	// Render the main content if there is no error
	return <RecentPageContent recentVenues={recentVenues} />;
};

// Fetch data on the server side before rendering the page
export const getServerSideProps: GetServerSideProps = async () => {
	try {
		// Fetch the recently added venues from the API
		const recentVenues = await fetchRecentlyAddedVenues();

		return { 
			props: { 
				recentVenues,
				error: null
			} 
		};
  
	} catch (error) {
		// Handle errors by returning an error message as props
		const errorMessage = getErrorMessage(error);
		return { 
			props: { 
				recentVenues: null,
				error: errorMessage 
			} 
		};
	}
};

export default RecentPage;