import React from 'react';
import { Box, Typography, Card, CardMedia, CardContent, Button } from '@mui/material';
import NextLink from 'next/link';

interface CardData {
	name: string;
	image: string;
	link: string;
}

interface CardCarouselProps {
	title: string;
	cards: CardData[];
	seeMoreLink: string;
}

const CardCarousel: React.FC<CardCarouselProps> = ({ title, cards, seeMoreLink }) => {
	// Ensure seeMoreLink is a non-empty string
	if (!seeMoreLink) {
		console.error('SeeMoreLink is not provided or is invalid');
		return null;
	}

	// Show up to 4 cards
	const displayedCards = cards.slice(0, 4);

	return (
		<Box sx={{ mb: 6 }}>
		<Typography variant="h4" component="h2" gutterBottom>
			{title}
		</Typography>
		<Box sx={{ display: 'flex', gap: 2 }}>
			{displayedCards.map((card, index) => (
			<Box key={index} sx={{ flex: '1 0 auto', width: '250px' }}>
				<NextLink href={card.link} passHref>
				<Card
					sx={{ boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)', textDecoration: 'none' }}
				>
					<CardMedia
					component="img"
					alt={card.name}
					height="200"
					image={card.image}
					title={card.name}
					/>
					<CardContent>
					<Typography variant="h6">{card.name}</Typography>
					</CardContent>
				</Card>
				</NextLink>
			</Box>
			))}
		</Box>

		{/* See More */}
		<Box sx={{ mt: 2 }}>
			<NextLink href={seeMoreLink} passHref>
			<Button variant="outlined" color="primary">
				See More
			</Button>
			</NextLink>
		</Box>
		</Box>
	);
};

export default CardCarousel;