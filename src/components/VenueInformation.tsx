import React from 'react';
import { Typography, Link as MuiLink, Stack, Box } from '@mui/material';
import { LocationOn as LocationOnIcon, Phone as PhoneIcon, Mail as MailIcon, Language as LanguageIcon, Facebook as FacebookIcon, Twitter as TwitterIcon, Instagram as InstagramIcon } from '@mui/icons-material';

interface VenueInformationProps {
  venue: {
    address?: string;
    phoneNumber?: string;
    emailAddress?: string;
    website?: string;
    facebook?: string;
    twitter?: string;
    instagram?: string;
  };
}

const VenueInformation: React.FC<VenueInformationProps> = ({ venue }) => {
  return (
    <Box
      sx={{
        borderTop: '1px solid #ddd', // Light border on top
        borderBottom: '1px solid #ddd', // Light border on bottom
        padding: 2,
        backgroundColor: '#f9f9f9',
      }}
    >
      <Stack spacing={2}>
        {/* Address */}
        {venue.address && (
          <Stack direction="row" alignItems="center" spacing={1}>
            <LocationOnIcon />
            <MuiLink
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(venue.address)}`}
              target="_blank"
              rel="noopener noreferrer"
              variant="body1"
            >
              {venue.address}
            </MuiLink>
          </Stack>
        )}

        {/* Phone */}
        {venue.phoneNumber && (
          <Stack direction="row" alignItems="center" spacing={1}>
            <PhoneIcon />
            <MuiLink
              href={`tel:${venue.phoneNumber}`}
              variant="body1"
            >
              {venue.phoneNumber}
            </MuiLink>
          </Stack>
        )}

        {/* Email */}
        {venue.emailAddress && (
          <Stack direction="row" alignItems="center" spacing={1}>
            <MailIcon />
            <MuiLink
              href={`mailto:${venue.emailAddress}`}
              variant="body1"
            >
              {venue.emailAddress}
            </MuiLink>
          </Stack>
        )}

        {/* Website */}
        {venue.website && (
          <Stack direction="row" alignItems="center" spacing={1}>
            <LanguageIcon />
            <MuiLink
              href={venue.website}
              target="_blank"
              rel="noopener noreferrer"
              variant="body1"
            >
              Website
            </MuiLink>
          </Stack>
        )}

        {/* Social Media Links */}
        {venue.facebook && (
          <Stack direction="row" alignItems="center" spacing={1}>
            <FacebookIcon />
            <MuiLink
              href={venue.facebook}
              target="_blank"
              rel="noopener noreferrer"
              variant="body1"
            >
              Facebook
            </MuiLink>
          </Stack>
        )}

        {venue.twitter && (
          <Stack direction="row" alignItems="center" spacing={1}>
            <TwitterIcon />
            <MuiLink
              href={venue.twitter}
              target="_blank"
              rel="noopener noreferrer"
              variant="body1"
            >
              Twitter
            </MuiLink>
          </Stack>
        )}

        {venue.instagram && (
          <Stack direction="row" alignItems="center" spacing={1}>
            <InstagramIcon />
            <MuiLink
              href={venue.instagram}
              target="_blank"
              rel="noopener noreferrer"
              variant="body1"
            >
              Instagram
            </MuiLink>
          </Stack>
        )}
      </Stack>
    </Box>
  );
};

export default VenueInformation;