import React from 'react';
import { Box, Typography, Chip, Stack, Grid, Card, CardMedia, Button, Link as MuiLink, IconButton, List, ListItem, ListItemText } from '@mui/material';
import Slider from 'react-slick';
import { Facebook as FacebookIcon, Twitter as TwitterIcon, Instagram as InstagramIcon } from '@mui/icons-material';
import NextLink from 'next/link';

// Sample venue data, replace this with your data source
const sampleVenue = {
  name: "The BRZN Arms",
  description: "A lively venue with a great atmosphere and excellent drinks.",
  address: "123 Main Street, Brighton",
  phoneNumber: "+44 123 456 7890",
  emailAddress: "contact@brznarms.com",
  website: "http://www.brznarms.com",
  socialMedia: {
    facebook: "https://facebook.com/brznarms",
    twitter: "https://twitter.com/brznarms",
    instagram: "https://instagram.com/brznarms"
  },
  images: [
    "https://brightonbeerblog.com/wp-content/uploads/the-BRZN-arms-10.jpg",
    "https://brightonbeerblog.com/wp-content/uploads/the-BRZN-arms-11.jpg",
    "https://brightonbeerblog.com/wp-content/uploads/the-BRZN-arms-12.jpg"
  ],
  keyFeatures: [
    "Delicious Pub Food",
    "Live Sports on Big Screens",
    "Pool Table",
    "Outdoor Seating",
    "Family Friendly"
  ],
  upcomingEvents: [
    {
      date: 'August 20, 2024',
      event: 'Live Music Night',
      description: 'Enjoy live performances from local bands and artists.',
      image: 'https://via.placeholder.com/400x300?text=Live+Music+Night',
      link: '/events/live-music-night'
    },
    {
      date: 'August 27, 2024',
      event: 'Trivia Tuesday',
      description: 'Test your knowledge and win exciting prizes.',
      image: 'https://via.placeholder.com/400x300?text=Trivia+Tuesday',
      link: '/events/trivia-tuesday'
    },
    {
      date: 'September 5, 2024',
      event: 'Seasonal Beer Tasting',
      description: 'Sample a variety of seasonal beers curated by our expert brewers.',
      image: 'https://via.placeholder.com/400x300?text=Beer+Tasting',
      link: '/events/seasonal-beer-tasting'
    }
  ],
  reviews: [
    { author: 'Alex M.', text: 'The BRZN Arms has become my favorite pub in Brighton! The atmosphere is cozy, and the craft beer selection is outstanding.' },
    { author: 'Sarah K.', text: 'I had a great time at The BRZN Arms. The food was delicious, and the staff were incredibly friendly. Highly recommend!' }
  ]
};

const Venue: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        px: 2,
        maxWidth: '1200px',
        mx: 'auto',
      }}
    >
      {/* Introduction Section */}
      <Box sx={{ width: '100%', mb: 4 }}>
        <Typography variant="h3" gutterBottom>
          {sampleVenue.name}
        </Typography>
        <Typography variant="h5" color="textSecondary" gutterBottom>
          {sampleVenue.description}
        </Typography>
        <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
          <Chip label="Verified" color="success" />
          <Chip label="Featured" color="primary" />
          <Chip label="Popular" color="warning" />
        </Stack>
      </Box>

      {/* Image Slider */}
      <Box sx={{ width: '100%', mb: 4 }}>
        <Slider {...settings}>
          {sampleVenue.images.map((image, index) => (
            <Card key={index} sx={{ position: 'relative' }}>
              <CardMedia
                component="img"
                alt={`Image ${index + 1}`}
                height="400"
                image={image}
                title={`Image ${index + 1}`}
                sx={{
                  objectFit: 'cover'
                }}
              />
            </Card>
          ))}
        </Slider>
      </Box>

      <Grid container spacing={4} sx={{ width: '100%', mb: 4, mt: 2 }}>
        {/* Venue Details */}
        <Grid item xs={12} sm={8}>
          <Box>
            <Typography variant="body1" paragraph>
              Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.
            </Typography>
            
            <Typography variant="h6" gutterBottom>
              Venue Details
            </Typography>
            <Typography variant="body1" paragraph>
              {sampleVenue.description}
            </Typography>
            <Typography variant="body1">Address: {sampleVenue.address}</Typography>
            <Typography variant="body1">Phone: {sampleVenue.phoneNumber}</Typography>
            <Typography variant="body1">Email: {sampleVenue.emailAddress}</Typography>
            <Typography variant="body1">
              Website: <MuiLink href={sampleVenue.website} target="_blank" rel="noopener noreferrer">{sampleVenue.website}</MuiLink>
            </Typography>
            
            {/* Social Media Links */}
            <Box sx={{ mt: 2 }}>
              <Typography variant="subtitle1" gutterBottom>
                Follow us on Social Media:
              </Typography>
              <Stack direction="row" spacing={1}>
                <IconButton onClick={() => window.open(sampleVenue.socialMedia.facebook, '_blank')} color="primary">
                  <FacebookIcon />
                </IconButton>
                <IconButton onClick={() => window.open(sampleVenue.socialMedia.twitter, '_blank')} color="primary">
                  <TwitterIcon />
                </IconButton>
                <IconButton onClick={() => window.open(sampleVenue.socialMedia.instagram, '_blank')} color="primary">
                  <InstagramIcon />
                </IconButton>
              </Stack>
            </Box>

            {/* Key Features */}
            <Box sx={{ mt: 4 }}>
              <Typography variant="h6" gutterBottom>
                Key Features
              </Typography>
              <ul>
                {sampleVenue.keyFeatures.map((feature, index) => (
                  <li key={index}>
                    <Typography variant="body1">{feature}</Typography>
                  </li>
                ))}
              </ul>
            </Box>
          </Box>
        </Grid>

        {/* Sidebar */}
        <Grid item xs={12} sm={4}>
          <Box
            sx={{
              position: 'sticky',
              top: 20,
              width: '100%',
              height: 'fit-content',
              display: 'flex',
              flexDirection: 'column',
              gap: 4,
            }}
          >
            {/* Sponsored Advertisement */}
            <Box
              sx={{
                textAlign: 'center',
                py: 2,
                border: '1px solid #ddd',
                borderRadius: 1,
                backgroundColor: '#fafafa',
              }}
            >
              <Typography variant="h6" gutterBottom>
                Sponsored Advertisement
              </Typography>
              <img 
                src='https://via.placeholder.com/350x300?text=Sponsored+Ad' 
                alt="Sponsored Advertisement" 
                style={{ width: '100%', height: 'auto' }} 
              />
            </Box>

            {/* Recommended Venues */}
            <Box>
              <Typography variant="h6" gutterBottom>
                Recommended Venues
              </Typography>
              <List>
                <ListItem>
                  <ListItemText
                    primary="The Royal Oak"
                    secondary="A classic pub with a historic charm."
                    component={NextLink}
                    href="/venue/2"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="The Crafty Fox"
                    secondary="Known for its wide selection of craft beers."
                    component={NextLink}
                    href="/venue/3"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="The Brighton Tavern"
                    secondary="Popular for its vibrant nightlife."
                    component={NextLink}
                    href="/venue/4"
                  />
                </ListItem>
              </List>
            </Box>
          </Box>
        </Grid>
      </Grid>

      {/* Detailed Events Section */}
      <Box sx={{ width: '100%', mb: 6 }}>
        <Typography variant="h4" gutterBottom>
          Upcoming Events
        </Typography>
        <Grid container spacing={4}>
          {sampleVenue.upcomingEvents.map((event, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card>
                <CardMedia
                  component="img"
                  alt={event.event}
                  height="200"
                  image={event.image}
                  title={event.event}
                />
                <Box sx={{ p: 2 }}>
                  <Typography variant="h6" gutterBottom>
                    {event.event}
                  </Typography>
                  <Typography variant="body1" color="textSecondary" gutterBottom>
                    {event.date}
                  </Typography>
                  <Typography variant="body2" paragraph>
                    {event.description}
                  </Typography>
                  <NextLink href={event.link} passHref>
                    <Button variant="contained" color="primary">
                      Learn More
                    </Button>
                  </NextLink>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Venue;
