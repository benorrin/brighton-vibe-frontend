// src/components/SidebarRecommendedPosts.tsx
import React from 'react';
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';
import NextLink from 'next/link';

interface SidebarRecommendedPostsProps {
	posts: Array<{ title: string; date: string; link: string }>;
}

const SidebarRecommendedPosts: React.FC<SidebarRecommendedPostsProps> = ({ posts }) => {
	return (
		<Box>
			<List>
				{posts.slice(0, 3).map((post, index) => (
				<NextLink key={index} href={post.link} passHref>
					<ListItem>
					<ListItemText
						primary={post.title}
						secondary={post.date}
					/>
					</ListItem>
				</NextLink>
				))}
			</List>
		</Box>
	);
};

export default SidebarRecommendedPosts;