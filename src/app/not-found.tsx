import { Box, Typography, Button } from '@mui/material';
import Link from 'next/link';

const Custom404 = () => (
  <Box 
    sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      px: 2,
      py: 4,
      maxWidth: '600px',
      mx: 'auto',
      textAlign: 'center',
    }}
  >
    <Typography variant="h1" component="h1" gutterBottom>
      404
    </Typography>
    <Typography variant="h4" component="h2" gutterBottom>
      Page Not Found
    </Typography>
    <Typography variant="body1" paragraph>
      Sorry, the page you are looking for does not exist.
    </Typography>
    <Link href="/" passHref>
      <Button variant="contained" color="primary">
        Go to Home
      </Button>
    </Link>
  </Box>
);

export default Custom404;