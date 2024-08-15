import React from 'react';
import { Box, Card, CardMedia, CardContent, Typography, Button } from '@mui/material';
import NextLink from 'next/link';

const blogPosts = [
	{
		title: 'Exploring the Best Beaches in Brighton',
		excerpt: 'Discover the top beaches in Brighton and why they are worth a visit.',
		date: 'August 1, 2024',
		image: 'https://via.placeholder.com/400x300?text=Beach',
		link: '/blog/exploring-best-beaches',
	},
	{
		title: 'Top 10 Things to Do in Brighton',
		excerpt: 'A comprehensive list of must-do activities in Brighton.',
		date: 'July 20, 2024',
		image: 'https://via.placeholder.com/400x300?text=Activities',
		link: '/blog/top-10-things-to-do',
	},
	{
		title: 'A Guide to Brighton’s Nightlife',
		excerpt: 'Experience the vibrant nightlife of Brighton with this guide.',
		date: 'June 15, 2024',
		image: 'https://via.placeholder.com/400x300?text=Nightlife',
		link: '/blog/guide-to-nightlife',
	}
];

const SidebarRecommendedPosts: React.FC = () => {
	return (
		<Box
			sx={{
				position: 'sticky',
				top: 20,
				width: '100%',
				height: 'fit-content',
				display: 'flex',
				flexDirection: 'column',
				gap: 4,
		}}>
			{blogPosts.map((post, index) => (
				<Card key={index}>
					<CardMedia
						component="img"
						alt={post.title}
						height="200"
						image={post.image}
						title={post.title}
					/>
					<CardContent>
						<Typography variant="h6" gutterBottom>
						{post.title}
						</Typography>
						<Typography variant="body1" color="textSecondary" gutterBottom>
						{post.date}
						</Typography>
						<Typography variant="body2" paragraph>
						{post.excerpt}
						</Typography>
						<NextLink href={post.link} passHref>
						<Button variant="contained" color="primary">
							Read More
						</Button>
						</NextLink>
					</CardContent>
					</Card>
			))}
		</Box>
	);
};

export default SidebarRecommendedPosts;