import React from 'react';
import { Breadcrumbs as MUIBreadcrumbs, Typography } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

interface BreadcrumbsProps {
  items: {
    label: string;
    href?: string;
  }[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <MUIBreadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
      {items.map((item, index) => (
        item.href ? (
          <a key={index} href={item.href} style={{ color: 'inherit' }}>
            {item.label}
          </a>
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
