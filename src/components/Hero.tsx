import React from 'react';
import { Box, Typography } from '@mui/material';

// Hero Component
const Hero: React.FC<{ title: string, description: string }> = ({ title, description }) => (
    <Box
        sx={{
            width: '100%',
            backgroundColor: '#f5f5f5', // A light gray background color
            padding: '50px 0', // Add some padding to the top and bottom
            textAlign: 'center', // Center align the text
            mb: 4, // Add margin bottom to separate it from the next section
        }}
    >
        <Typography variant="h2" component="h1" sx={{ mb: 2 }}>
            {title}
        </Typography>
        <Typography variant="h6" component="p" sx={{ maxWidth: '800px', mx: 'auto' }}>
            {description}
        </Typography>
    </Box>
);

export default Hero;