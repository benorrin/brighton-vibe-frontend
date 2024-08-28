import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import Head from 'next/head';
import Breadcrumbs from '../components/Breadcrumbs';
import CardCarousel from '../components/CardCarousel'; // Use CardCarousel here
import { GetServerSideProps } from 'next';
import { VenueCategoryProps } from '../types/venue';
import { fetchVenueCategory } from '../api/venueCategory';
import { getErrorMessage } from '../utils/error';
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

// Component to render the main content of the Eat page
const EatPageContent: React.FC<{ venueCategory }> = ({ venueCategory }) => (
	<>
		<Head>
			<meta name="description" content={venueCategory.description} />
			<title>Discover the Best Restaurants, Cafes, and Dining Spots in Brighton & Hove - Brighton Vibe</title>
		</Head>
		<Container>
			{/* Breadcrumbs for navigation */}
			<Box sx={{ width: '100%', mb: 4 }}>
				<Breadcrumbs
					items={[
						{ label: 'Home', href: '/' },
						{ label: 'Eat', href: '/eat' }
					]}
				/>
			</Box>

			{/* Hero */}
			<Hero 
				title="Explore the Best Dining Spots" 
				description="Discover a variety of restaurants, cafes, and more in Brighton & Hove."
			/>

			{/* Dynamically render CardCarousels based on venueTypes */}
			{venueCategory.venueTypes.map((type) => (
				<CardCarousel
					key={type.slug}
					title={type.name}
					venues={type.venues}
					seeMoreLink={`/types/${type.slug}`}
				/>
			))}
		</Container>
	</>
);

// Main page component that decides which content to render based on props
const EatPage: React.FC<VenueCategoryProps> = ({ venueCategory, error }) => {
	if (error) {
		// Render the error page if there is an error
		return <ErrorPage message={error} />;
	}

	// Render the main content if there is no error
	return <EatPageContent venueCategory={venueCategory} />;
};

// Fetch data on the server side before rendering the page
export const getServerSideProps: GetServerSideProps = async () => {
	try {
		const categorySlug = 'eat';

		// Fetch the venue category data from the API
		const venueCategory = await fetchVenueCategory(categorySlug);
  
		return { 
			props: { 
				venueCategory,
				error: null
			}
		};
  
	} catch (error) {
		// Handle errors by returning an error message as props
		const errorMessage = getErrorMessage(error);
		return { 
			props: { 
				venueCategory: null,
				error: errorMessage 
			} 
		};
	}
};

export default EatPage;