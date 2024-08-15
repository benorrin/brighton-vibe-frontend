// pages/404.tsx
import React from 'react';
import { Box, Typography } from '@mui/material';

const Custom404: React.FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        px: 2,
        maxWidth: '1200px',
        mx: 'auto',
        mt: 10,
      }}
    >
      <Typography variant="h1" color="error">
        404 - Page Not Found
      </Typography>
      <Typography variant="body1">
        Sorry, the page you are looking for does not exist.
      </Typography>
    </Box>
  );
};

export default Custom404;