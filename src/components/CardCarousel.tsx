import React from 'react';
import { Box, Typography, Card, CardMedia, CardContent, Button } from '@mui/material';
import NextLink from 'next/link';
import { CardCarouselProps } from '../types/card';

const CardCarousel: React.FC<CardCarouselProps> = ({ title, venues, seeMoreLink }) => {
    // Ensure seeMoreLink is a non-empty string
    if (!seeMoreLink) {
        console.error('SeeMoreLink is not provided or is invalid');
        return null;
    }

    // Show up to 4 venues
    const displayedCards = venues.slice(0, 4);

    return (
        <Box sx={{ mb: 6 }}>
            <Typography variant="h4" component="h2" gutterBottom>
                {title}
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
                {displayedCards.map((venue, index) => {
                    // Determine the image to display: either the first image or a placeholder
					const imageUrl = venue.venueImages.length > 0 ? venue.venueImages[0].imageUrl : '/img/venue-placeholder.png'

                    return (
                        <Box key={index} sx={{ flex: '1 0 auto', width: '250px' }}>
                            <NextLink href={`/venues/${venue.slug}`} passHref>
                                <Card
                                    sx={{ boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)', textDecoration: 'none' }}
                                >
                                    <CardMedia
                                        component="img"
                                        alt={venue.name}
                                        height="200"
                                        image={imageUrl}
                                        title={venue.name}
                                    />
                                    <CardContent>
                                        <Typography variant="h6">{venue.name}</Typography>
                                    </CardContent>
                                </Card>
                            </NextLink>
                        </Box>
                    );
                })}
            </Box>

            {/* See More */}
            <Box sx={{ mt: 2 }}>
                <NextLink href={`${seeMoreLink}`} passHref>
                    <Button variant="outlined" color="primary">
                        See More
                    </Button>
                </NextLink>
            </Box>
        </Box>
    );
};

export default CardCarousel;