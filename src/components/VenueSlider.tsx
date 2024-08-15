import React from 'react';
import Slider from 'react-slick';
import { Card, CardMedia } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface VenueSliderProps {
	images: string[];
}

const VenueSlider: React.FC<VenueSliderProps> = ({ images }) => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	};

	return (
		<Slider {...settings}>
			{images.map((image, index) => (
				<Card key={index}>
					<CardMedia
						component="img"
						alt={`Venue Image ${index + 1}`}
						height="400"
						image={image}
						title={`Venue Image ${index + 1}`}
						sx={{
						objectFit: 'cover',
						}}
					/>
				</Card>
			))}
		</Slider>
	);
};

export default VenueSlider;