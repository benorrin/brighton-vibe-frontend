import React from 'react';
import { Box, Typography } from '@mui/material';

interface SidebarAdvertProps {
	imageUrl: string;
	altText: string;
}

const SidebarAdvert: React.FC<SidebarAdvertProps> = ({ imageUrl, altText }) => {
	return (
		<Box
		sx={{
			textAlign: 'center',
		}}
		>
		<img 
			src={imageUrl} 
			alt={altText} 
			style={{ width: '100%', height: 'auto' }} 
		/>
		</Box>
	);
};

export default SidebarAdvert;