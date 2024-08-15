import React from 'react';
import { Box, Typography, Button, Link as MuiLink, Stack } from '@mui/material';
import NextLink from 'next/link';

const blogPosts = [
  {
    title: 'Exploring the Best Beaches in Brighton',
    excerpt: 'Discover the top beaches in Brighton and why they are worth a visit.',
    date: 'August 1, 2024',
    image: 'https://via.placeholder.com/100x75?text=Beach',
    link: '/blog/exploring-best-beaches',
  },
  {
    title: 'Top 10 Things to Do in Brighton',
    excerpt: 'A comprehensive list of must-do activities in Brighton.',
    date: 'July 20, 2024',
    image: 'https://via.placeholder.com/100x75?text=Activities',
    link: '/blog/top-10-things-to-do',
  },
  {
    title: 'A Guide to Brighton’s Nightlife',
    excerpt: 'Experience the vibrant nightlife of Brighton with this guide.',
    date: 'June 15, 2024',
    image: 'https://via.placeholder.com/100x75?text=Nightlife',
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
        gap: 2,
      }}
    >
      {blogPosts.map((post, index) => (
        <Stack
          key={index}
          direction="row"
          spacing={2}
          sx={{ alignItems: 'flex-start', mb: 2 }}
        >
          <Box
            component="img"
            src={post.image}
            alt={post.title}
            sx={{ width: 100, height: 75, objectFit: 'cover' }}
          />
          <Box>
            <Typography variant="subtitle1" gutterBottom>
              <NextLink href={post.link} passHref>
                <MuiLink color="primary" underline="hover">
                  {post.title}
                </MuiLink>
              </NextLink>
            </Typography>
            <Typography variant="body2" color="textSecondary" gutterBottom>
              {post.date}
            </Typography>
            <Typography variant="body2">
              {post.excerpt}
            </Typography>
          </Box>
        </Stack>
      ))}
    </Box>
  );
};

export default SidebarRecommendedPosts;
