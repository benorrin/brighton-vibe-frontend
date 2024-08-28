import React from 'react';
import { Box, Typography, Card, CardMedia, CardContent, Grid } from '@mui/material';
import NextLink from 'next/link';
import { CardGridProps } from '../types/card';

const CardGrid: React.FC<CardGridProps> = ({ title, venues }) => {
    return (
        <Box sx={{ mb: 6 }}>
            {/* Conditionally render the title if it is provided */}
            {title && (
                <Typography variant="h4" component="h2" gutterBottom>
                    {title}
                </Typography>
            )}

            <Grid container spacing={2}>
                {venues.map((venue, index) => {
                    // Determine the image to display: either the first image or a placeholder
                    const imageUrl = venue.venueImages.length > 0 ? venue.venueImages[0].imageUrl : '/img/venue-placeholder.png';

                    return (
                        <Grid item xs={12} sm={6} md={3} key={index}>
                            <NextLink href={`/venues/${venue.slug}`} passHref>
                                <Card sx={{ boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)', textDecoration: 'none' }}>
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
                        </Grid>
                    );
                })}
            </Grid>
        </Box>
    );
};

export default CardGrid;