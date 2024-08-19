import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { IconButton } from '@mui/material';
import { ArrowBackIos as ArrowBackIosIcon, ArrowForwardIos as ArrowForwardIosIcon } from '@mui/icons-material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface VenueImage {
    id: string;
    venueId: string;
    imageUrl: string;
    featured: boolean;
    description: string;
    createdAt: string;
}

interface VenueSliderProps {
    images: VenueImage[] | null;
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
        setIsClient(true);
    }, []);

    // If not on the client, don't render the slider
    if (!isClient) return null;

    // Render a placeholder image if the images array is null or empty
    if (!images || images.length === 0) {
        return (
            <div
                style={{
                    position: 'relative',
                    height: '400px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden',
                }}
            >
                <img
                    src="/img/venue-placeholder.png"
                    alt="Placeholder Image"
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'center',
                    }}
                />
            </div>
        );
    }

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
            {images.map((image) => (
                <div key={image.id}>
                    <img
                        src={image.imageUrl}
                        alt={image.description} // Use description as alt text
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            objectPosition: 'center',
                        }}
                    />
                </div>
            ))}
        </Slider>
    );
};

export default VenueSlider;