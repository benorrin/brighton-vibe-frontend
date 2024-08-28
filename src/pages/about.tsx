import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import Head from 'next/head';
import NextLink from 'next/link';
import Hero from '../components/Hero';

// Define common styles used across the page
const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        maxWidth: '1200px',
        mx: 'auto',
        mt: 6,
        mb: 6,
    },
    content: {
        maxWidth: '800px',
        textAlign: 'center',
        px: 2,
    },
    heading: {
        fontSize: '2rem',
        fontWeight: 'bold',
        mb: 2,
    },
    paragraph: {
        fontSize: '1.2rem',
        mb: 3,
        lineHeight: '1.6',
    },
    section: {
        mb: 6,
    },
    link: {
        color: '#1976D2',
        textDecoration: 'none',
        '&:hover': {
            textDecoration: 'underline',
        },
    },
};

const AboutPage: React.FC = () => {
    return (
        <>
            <Head>
                <meta name="description" content="Learn more about Brighton Vibe, your ultimate guide to Brighton & Hove." />
                <title>About Us - Brighton Vibe</title>
            </Head>
            
            <Container sx={styles.container}>
                {/* Hero Section */}
                <Hero
                    title="About Brighton Vibe"
                    description="Discover who we are, our mission, and our vision for the future."
                />

                {/* Mission Section */}
                <Box sx={styles.section}>
                    <Typography variant="h2" sx={styles.heading}>
                        Our Mission
                    </Typography>
                    <Typography variant="body1" sx={styles.paragraph}>
                        At Brighton Vibe, our mission is to showcase the best local businesses and hotspots in Brighton & Hove. We provide a comprehensive guide to the city's dining, entertainment, and leisure options, ensuring that both residents and visitors can discover and enjoy the finest experiences our city has to offer.
                    </Typography>
                    <Typography variant="body1" sx={styles.paragraph}>
                        We are dedicated to curating the most relevant and up-to-date information about Brighton & Hove's vibrant scene. From hidden gems to popular spots, our goal is to connect people with the places they’ll love.
                    </Typography>
                </Box>

                {/* What We Offer Section */}
                <Box sx={styles.section}>
                    <Typography variant="h2" sx={styles.heading}>
                        What We Offer
                    </Typography>
                    <Typography variant="body1" sx={styles.paragraph}>
                        Brighton Vibe currently offers detailed information on a variety of local businesses, including restaurants, bars, cafes, and more. Our platform is designed to help you find the perfect place to eat, drink, and enjoy your time in the city.
                    </Typography>
                    <Typography variant="body1" sx={styles.paragraph}>
                        In the future, we plan to expand our offerings by adding user accounts, allowing local businesses and residents to contribute their own content. We also aim to incorporate event listings and updates, ensuring that you are always informed about the latest happenings in Brighton & Hove.
                    </Typography>
                </Box>

                {/* Report Incorrect Information or Abuse Section */}
                <Box sx={styles.section}>
                    <Typography variant="h2" sx={styles.heading}>
                        Report Incorrect Information or Abuse
                    </Typography>
                    <Typography variant="body1" sx={styles.paragraph}>
                        We strive to maintain the highest quality and accuracy in our listings. If you come across incorrect information or suspect any abuse, please let us know by reaching out to us through our <NextLink href="/contact" passHref><Typography component="a" sx={styles.link}>contact</Typography></NextLink> page.
                    </Typography>
                    <Typography variant="body1" sx={styles.paragraph}>
                        Our strict policy ensures that only the best businesses are featured. Unscrupulous businesses can be reported, and their listings will be reviewed and removed if necessary.
                    </Typography>
                </Box>

                {/* Join Us Section */}
                <Box sx={styles.section}>
                    <Typography variant="h2" sx={styles.heading}>
                        Join Us
                    </Typography>
                    <Typography variant="body1" sx={styles.paragraph}>
                        We invite you to explore Brighton Vibe and discover the best of Brighton & Hove. If you have any suggestions, feedback, or if you're interested in contributing to our platform, we would love to hear from you. Stay tuned for exciting updates as we continue to enhance our guide with new features and content.
                    </Typography>
                </Box>

                <Typography variant="body1" sx={styles.paragraph}>
                    Thank you for visiting Brighton Vibe. We look forward to helping you explore and enjoy our wonderful city!
                </Typography>
            </Container>
        </>
    );
};

export default AboutPage;
