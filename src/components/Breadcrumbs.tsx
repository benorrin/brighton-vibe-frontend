import React from 'react';
import { Breadcrumbs as MUIBreadcrumbs, Link, Typography } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NextLink from 'next/link';

interface BreadcrumbsProps {
	items: {
		label: string; 
		href?: string 
	}[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
	return (
		<MUIBreadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
			{items.map((item, index) => (
				item.href ? (
				<NextLink key={index} href={item.href} passHref>
					<Link color="inherit">{item.label}</Link>
				</NextLink>
				) : (
				<Typography key={index} color="textPrimary">
					{item.label}
				</Typography>
				)
			))}
		</MUIBreadcrumbs>
	);
};

export default Breadcrumbs;