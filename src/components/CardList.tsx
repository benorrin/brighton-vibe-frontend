// src/components/CardList.tsx
import React, { useState } from 'react';
import { Grid, Card, CardContent, Typography, Button, Box, CardMedia, IconButton } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

interface CardData {
  id: string;
  name: string;
  description: string;
  link?: string;
}

interface CardListProps {
  title: string;
  cards: CardData[];
  buttonLabel: string;
  buttonLink: string;
}

const CardList: React.FC<CardListProps> = ({ title, cards, buttonLabel, buttonLink }) => {
  const [visibleStart, setVisibleStart] = useState(0);
  const visibleEnd = Math.min(visibleStart + 4, cards.length);

  const handleNext = () => {
    if (visibleEnd < cards.length) {
      setVisibleStart(visibleStart + 4);
    }
  };

  const handlePrevious = () => {
    if (visibleStart > 0) {
      setVisibleStart(visibleStart - 4);
    }
  };

  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h4" component="h2" gutterBottom>
        {title}
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <IconButton onClick={handlePrevious} disabled={visibleStart === 0}>
          <ArrowBackIosIcon />
        </IconButton>
        <Box
          sx={{
            overflowX: 'auto',
            display: 'flex',
            flexWrap: 'nowrap',
            gap: 2,
            py: 2, // Padding for vertical spacing
            scrollBehavior: 'smooth',
            '&::-webkit-scrollbar': {
              display: 'none' // Hide scrollbar for a cleaner look
            }
          }}
        >
          {cards.slice(visibleStart, visibleEnd).map((card, index) => (
            <Card
              key={index}
              sx={{
                flex: '0 0 auto', // Prevent card from shrinking or growing
                width: 300, // Fixed width for cards
                boxShadow: 3, // Ensures shadow is visible
                '&:hover': {
                  boxShadow: 6 // Add hover effect for better visibility
                }
              }}
            >
              <a href={`http://localhost:3000/venue/${card.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <CardMedia
                  component="img"
                  alt={card.name}
                  height="140"
                  image="https://brightonbeerblog.com/wp-content/uploads/the-BRZN-arms-10.jpg"
                  title={card.name}
                  sx={{ objectFit: 'cover' }} // Ensure image covers the area
                />
                <CardContent>
                  <Typography variant="h5" component="div">
                    {card.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" sx={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                    {card.description}
                  </Typography>
                </CardContent>
              </a>
            </Card>
          ))}
        </Box>
        <IconButton onClick={handleNext} disabled={visibleEnd >= cards.length}>
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>
      <Box sx={{ mt: 2 }}>
        <Button variant="contained" color="primary" href={buttonLink}>
          {buttonLabel}
        </Button>
      </Box>
    </Box>
  );
};

export default CardList;
