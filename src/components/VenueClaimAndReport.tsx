import React from 'react';
import { Box, Typography, Stack } from '@mui/material';

const VenueClaimAndReport: React.FC = () => {
  return (
    <Box sx={{ mt: 4 }}>
      {/* Horizontal Line */}
      <Box sx={{ mb: 2 }}>
        <hr style={{ border: '1px solid #ddd', margin: 0 }} />
      </Box>

      {/* Claim Business and Report Incorrect Information */}
      <Stack direction="row" spacing={2} sx={{ mb: 4 }}>
        <a href="/claim-business" style={{ textDecoration: 'none' }}>
          <Typography 
            variant="body2" 
            sx={{ color: 'text.secondary', '&:hover': { textDecoration: 'underline' } }}
          >
            Claim This Business
          </Typography>
        </a>
        <a href="/contact-us" style={{ textDecoration: 'none' }}>
          <Typography 
            variant="body2" 
            sx={{ color: 'text.secondary', '&:hover': { textDecoration: 'underline' } }}
          >
            Report Incorrect Information
          </Typography>
        </a>
      </Stack>
    </Box>
  );
};

export default VenueClaimAndReport;
