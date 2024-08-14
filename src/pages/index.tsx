import * as React from 'react';
import { Grid, Card, CardContent, Container, Typography, Box, Button } from '@mui/material';
import CardList from '../components/CardList';

interface VenueDto {
	id: string;
	name: string;
	address: string;
	phoneNumber?: string;
	emailAddress?: string;
	website?: string;
	instagram?: string;
	facebook?: string;
}

interface CardData {
	id: string;
	name: string;
	description: string;
	link?: string;
}

const HomePage: React.FC = () => {
	const [cards, setCards] = React.useState<CardData[]>([]);
	const [loading, setLoading] = React.useState<boolean>(true);

	React.useEffect(() => {
		const fetchCards = async () => {
			try {
				const response = await fetch('http://localhost:5295/venues');
				const data: VenueDto[] = await response.json();
				
				const transformedCards: CardData[] = data.map((venue) => ({
					id: venue.id,
					name: venue.name,
					description: venue.address,
					link: venue.website,
				}));
				setCards(transformedCards);
			} catch (error) {
				console.error('Error fetching data:', error);
			} finally {
				setLoading(false);
			}
		};

		fetchCards();
	}, []);

	if (loading) {
		return(
			<Container>
				<Typography variant="h6">Loading...</Typography>
			</Container>
		);
	}

	return (
		<Container>
			<Box sx={{ textAlign: 'center', py: 8 }}>
				<Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
					Experience your music <br /> like never before.
				</Typography>
				<Typography variant="h6" color="textSecondary" sx={{ mb: 4 }}>
					Supper offer till the end of June. All the original headphones at maximum:
				</Typography>
				<Typography variant="h3" component="p" sx={{ color: 'red', fontWeight: 'bold', mb: 4 }}>
					$299.95
				</Typography>
				<Button variant="contained" color="primary" size="large" sx={{ mb: 4 }}>
					Discover the offer
				</Button>
				<Typography variant="body1" color="textSecondary">
					$60 Apple Music gift card with purchase of select Beats products.*
				</Typography>
			</Box>

			<Grid container spacing={4} justifyContent="center">
				<Grid item xs={12} sm={6} md={4}>
					<Card>
						<CardContent>
							<Box
							component="img"
							sx={{ maxHeight: 200, maxWidth: '100%' }}
							src="/path-to-your-image/headphones.png" // Update this with your image path
							alt="Headphones"
							/>
						</CardContent>
					</Card>
				</Grid>
				<Grid item xs={12} sm={6} md={4}>
					<Card>
						<CardContent>
							<Box
							component="img"
							sx={{ maxHeight: 200, maxWidth: '100%' }}
							src="/path-to-your-image/speaker.png" // Update this with your image path
							alt="Speaker"
							/>
						</CardContent>
					</Card>
				</Grid>
			</Grid>
			
			<Box sx={{ my: 4 }}>
				<Typography variant="h3" component="h1" gutterBottom>
					Welcome to the Venue App
				</Typography>
				<Typography variant="body1" paragraph>
					Explore the best venues in town. Browse through categories and discover the perfect place for your next event.
				</Typography>
				<Button variant="contained" color="primary">
					Get Started
				</Button>
			</Box>

			{/* Example sections */}
			<CardList
			title="Recently Added"
			cards={cards.slice(0, 5)} // Example: show first 5 cards
			buttonLabel="View More"
			buttonLink="/venues" // Adjust the link as needed
			/>
			
			<CardList
			title="Popular Venues"
			cards={cards.slice(5, 10)} // Example: show next 5 cards
			buttonLabel="View More"
			buttonLink="/popular-venues" // Adjust the link as needed
			/>
		</Container>
	);
};

export default HomePage;