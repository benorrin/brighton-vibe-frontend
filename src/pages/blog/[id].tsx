import React from 'react';
import { Box, Typography, Button, TextField, Paper, Chip, IconButton, Grid, List, ListItem, ListItemText } from '@mui/material';
import { Facebook as FacebookIcon, Twitter as TwitterIcon, LinkedIn as LinkedInIcon } from '@mui/icons-material';

const Venue: React.FC = () => {
  const shareUrl = "https://example.com"; // Replace with your actual post URL

  const handleShare = (platform: string) => {
    let url = '';
    switch (platform) {
      case 'facebook':
        url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
        break;
      case 'twitter':
        url = `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}`;
        break;
      case 'linkedin':
        url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;
        break;
      default:
        break;
    }
    window.open(url, '_blank', 'noopener,noreferrer');
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
      <Grid container spacing={4} sx={{ width: '100%' }}>
        {/* Main Content */}
        <Grid item xs={12} sm={8}>
          <Box sx={{ width: '100%', mb: 4 }}>
            <Typography variant="h3" gutterBottom>
              A Night Out at The BRZN Arms
            </Typography>
            <Typography variant="subtitle1" color="textSecondary" gutterBottom>
              Published on August 13, 2024 by Jane Doe
            </Typography>
          </Box>

          <Box sx={{ width: '100%', mb: 4 }}>
            <img 
              src='https://brightonbeerblog.com/wp-content/uploads/the-BRZN-arms-5.jpg' 
              alt="The BRZN Arms Pub" 
              style={{ width: '100%', height: 'auto' }} 
            />
          </Box>

          <Box sx={{ width: '100%', mb: 4 }}>
            <Typography variant="body1" paragraph>
              Last weekend, I had the pleasure of visiting The BRZN Arms, a charming pub nestled in the heart of Brighton. From the moment I stepped in, I was greeted with a warm, welcoming atmosphere. The pub features rustic decor with wooden beams and cozy seating areas, making it an ideal spot for a relaxed evening.
            </Typography>
            
            <Typography variant="body1" paragraph>
              The highlight of the night was the extensive selection of craft beers, each with its own unique flavor profile. I particularly enjoyed the local pale ale, which perfectly complemented the delicious pub fare. The menu boasts a variety of hearty dishes, and the classic fish and chips were a standout.
            </Typography>
            
            <Typography variant="body1" paragraph>
              The friendly staff and lively ambiance make The BRZN Arms a must-visit for anyone in Brighton looking for a great pub experience. Whether you're a local or just passing through, this pub is sure to provide a memorable night out.
            </Typography>
          </Box>

          {/* Social Share Buttons */}
          <Box sx={{ width: '100%', mb: 4 }}>
            <Typography variant="subtitle2" gutterBottom>
              Share this post:
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <IconButton onClick={() => handleShare('facebook')} color="primary">
                <FacebookIcon />
              </IconButton>
              <IconButton onClick={() => handleShare('twitter')} color="primary">
                <TwitterIcon />
              </IconButton>
              <IconButton onClick={() => handleShare('linkedin')} color="primary">
                <LinkedInIcon />
              </IconButton>
            </Box>
          </Box>

          {/* Call to Action Section */}
          <Box
            sx={{
              width: '100%',
              py: 4,
              backgroundColor: '#f5f5f5',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              px: 2,
              mt: 6,
            }}
          >
            <Paper
              elevation={0}
              sx={{
                padding: 3,
                width: '100%',
                maxWidth: 800,
                textAlign: 'center',
                backgroundColor: '#ffffff',
              }}
            >
              <Typography variant="h5" gutterBottom>
                Join the Brighton Vibe Mailing List
              </Typography>
              <Typography variant="body1" paragraph>
                Stay updated with the latest news, events, and exclusive offers from Brighton Vibe. Sign up now and never miss out!
              </Typography>
              <Box component="form" noValidate autoComplete="off" sx={{ mt: 2 }}>
                <TextField
                  fullWidth
                  label="Your Email Address"
                  variant="outlined"
                  size="small"
                  type="email"
                  required
                  sx={{ mb: 2 }}
                />
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  fullWidth
                >
                  Subscribe
                </Button>
              </Box>
            </Paper>
          </Box>
          
          {/* Pub Information Section */}
          <Box sx={{ width: '100%', mt: 6, mb: 4 }}>
            <Typography variant="h5" gutterBottom>
              About The BRZN Arms
            </Typography>
            <Typography variant="body1" paragraph>
              The BRZN Arms is a beloved pub located in the vibrant city of Brighton. Known for its inviting atmosphere and friendly service, it offers a range of locally brewed craft beers and classic pub dishes. The pub features a charming interior with a mix of traditional and modern elements, creating a cozy and relaxed environment.
            </Typography>
            <Typography variant="body1" paragraph>
              Address: 123 Bright Street, Brighton, BN1 2AB
            </Typography>
            <Typography variant="body1" paragraph>
              Opening Hours: Monday to Sunday, 12:00 PM – 11:00 PM
            </Typography>
            <Typography variant="body1" paragraph>
              For more information, visit their website or follow them on social media for updates and events.
            </Typography>
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

            {/* Recommended Posts */}
            <Box>
              <Typography variant="h6" gutterBottom>
                Recommended Posts
              </Typography>
              <List>
                <ListItem>
                  <ListItemText
                    primary="Exploring the Best Beaches in Brighton"
                    secondary="August 1, 2024"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Top 10 Things to Do in Brighton"
                    secondary="July 20, 2024"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="A Guide to Brighton’s Nightlife"
                    secondary="June 15, 2024"
                  />
                </ListItem>
              </List>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Venue;
