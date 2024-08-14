// src/pages/about.tsx
import * as React from 'react';
import { Container, Typography, Box, Button, Link as MuiLink } from '@mui/material';

const AboutPage: React.FC = () => {
  return (
    <Container maxWidth="md">
      {/* Hero Section */}
      <Box
        sx={{
          textAlign: 'center',
          my: 4,
          py: 4,
          px: 2,
          backgroundColor: '#f5f5f5',
          borderRadius: 2,
        }}
      >
        <Typography variant="h3" component="h1" gutterBottom>
          About Brighton Vibe
        </Typography>
        <Typography variant="h6" color="textSecondary" paragraph>
          Discover the best of Brighton with ease. Explore local venues, events, and more!
        </Typography>
        <Button variant="contained" color="primary" href="/">
          Back to Home
        </Button>
      </Box>

      {/* Content Section */}
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Our Story
        </Typography>
        <Typography variant="body1" paragraph>
          Having recently moved to Brighton, we were amazed by the vibrant local scene this city has to offer. From delightful eateries and charming shops to bustling bars and unique venues, Brighton is truly a city full of hidden gems. However, finding the best places to eat, drink, and shop, as well as staying updated on all the exciting events happening around town, proved to be a challenge.
        </Typography>
        <Typography variant="body1" paragraph>
          That’s why we created <strong>Brighton Vibe</strong>. Our mission is to make it easier for you to discover and enjoy the best of Brighton. Whether you’re a local or a visitor, our website is designed to be your go-to resource for finding exceptional venues and events in this fantastic city.
        </Typography>

        <Typography variant="h4" component="h2" gutterBottom>
          What We Do
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Brighton Vibe</strong> is the only website of its kind dedicated to showcasing and championing local businesses. We strive to gather and present comprehensive information about Brighton's venues, from restaurants and pubs to shops and entertainment spots. Our goal is to provide a central hub where you can find not only the top places to visit but also the latest and most exciting events happening throughout the city.
        </Typography>

        <Typography variant="h4" component="h2" gutterBottom>
          Our Commitment
        </Typography>
        <Typography variant="body1" paragraph>
          We are committed to serving the people of Brighton by offering a user-friendly platform that puts all this valuable information in one easy-to-find place. Our site is continuously updated to ensure you have the most current and relevant details at your fingertips.
        </Typography>

        <Typography variant="h4" component="h2" gutterBottom>
          For Makers and Academics
        </Typography>
        <Typography variant="body1" paragraph>
          In addition to serving our local community, we are passionate about supporting makers and academics. Our API is open and available upon request for those who want to integrate our data into their own projects or conduct research.
        </Typography>
      </Box>

      {/* Contact Section */}
      <Box sx={{ my: 4, textAlign: 'center' }}>
        <Typography variant="body1" paragraph>
          Thank you for visiting <strong>Brighton Vibe</strong>. We hope you find our site helpful in exploring all that Brighton has to offer. If you have any questions or suggestions, feel free to reach out to us!
        </Typography>
        <MuiLink href="/" variant="body2">
          Back to Home
        </MuiLink>
      </Box>
    </Container>
  );
};

export default AboutPage;
