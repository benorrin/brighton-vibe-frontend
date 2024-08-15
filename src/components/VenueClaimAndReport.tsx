import React from 'react';
import { Box, Typography, Stack } from '@mui/material';
import NextLink from 'next/link';

const VenueClaimAndReport: React.FC = () => {
  return (
    <Box sx={{ mt: 4 }}>
      {/* Horizontal Line */}
      <Box sx={{ mb: 2 }}>
        <hr style={{ border: '1px solid #ddd', margin: 0 }} />
      </Box>

      {/* Claim Business and Report Incorrect Information */}
      <Stack direction="row" spacing={2} sx={{ mb: 4 }}>
        <NextLink href="/claim-business" passHref>
          <Typography 
            component="a" 
            variant="body2" 
            sx={{ color: 'text.secondary', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
          >
            Claim This Business
          </Typography>
        </NextLink>
        <NextLink href="/contact-us" passHref>
          <Typography 
            component="a" 
            variant="body2" 
            sx={{ color: 'text.secondary', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
          >
            Report Incorrect Information
          </Typography>
        </NextLink>
      </Stack>
    </Box>
  );
};

export default VenueClaimAndReport;