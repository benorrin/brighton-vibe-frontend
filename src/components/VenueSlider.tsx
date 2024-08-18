import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { Card, CardMedia, IconButton } from '@mui/material';
import { ArrowBackIos as ArrowBackIosIcon, ArrowForwardIos as ArrowForwardIosIcon } from '@mui/icons-material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface VenueSliderProps {
  images: string[];
}

const CustomPrevArrow: React.FC<any> = ({ onClick }) => (
  <IconButton
    onClick={onClick}
    sx={{
      position: 'absolute',
      top: '50%',
      left: 0,
      transform: 'translateY(-50%)',
      zIndex: 1,
      color: 'white',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      borderRadius: '50%',
      '&:hover': {
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
      },
    }}
  >
    <ArrowBackIosIcon />
  </IconButton>
);

const CustomNextArrow: React.FC<any> = ({ onClick }) => (
  <IconButton
    onClick={onClick}
    sx={{
      position: 'absolute',
      top: '50%',
      right: 0,
      transform: 'translateY(-50%)',
      zIndex: 1,
      color: 'white',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      borderRadius: '50%',
      '&:hover': {
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
      },
    }}
  >
    <ArrowForwardIosIcon />
  </IconButton>
);

const VenueSlider: React.FC<VenueSliderProps> = ({ images }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Ensure this runs only on the client
  }, []);

  // If not on the client, don't render the slider
  if (!isClient) return null;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  return (
    <Slider {...settings} style={{ position: 'relative' }}>
      {images.map((image, index) => (
        <Card
          key={index}
          sx={{
            position: 'relative',
            height: '400px', // Set a fixed height for the slider
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
          }}
        >
          <CardMedia
            component="img"
            alt={`Venue Image ${index + 1}`}
            image={image}
            title={`Venue Image ${index + 1}`}
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover', // Ensure the image covers the container
              objectPosition: 'center', // Center the image
            }}
          />
        </Card>
      ))}
    </Slider>
  );
};

export default VenueSlider;
