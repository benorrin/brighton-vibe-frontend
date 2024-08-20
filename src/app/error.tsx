"use client"

import { Box, Typography, Button } from '@mui/material';
import Link from 'next/link';
import { GetServerSideProps } from 'next';

interface ErrorPageProps {
	statusCode: number | null;
	message: string;
}

const CustomError: React.FC<ErrorPageProps> = ({ statusCode, message }) => (
	<Box 
		sx={{
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		px: 2,
		py: 4,
		maxWidth: '600px',
		mx: 'auto',
		textAlign: 'center',
		}}
	>
		<Typography variant="h1" component="h1" gutterBottom>
			Error
		</Typography>
		<Typography variant="h4" component="h2" gutterBottom>
			{message || 'Something went wrong'}
		</Typography>
		<Typography variant="body1" paragraph>
			{message || 'We’re sorry, something went wrong on our end.'}
		</Typography>
		<Link href="/" passHref>
			<Button variant="contained" color="primary">
				Go to Home
			</Button>
		</Link>
	</Box>
);

export const getServerSideProps: GetServerSideProps<ErrorPageProps> = async (context) => {
	const { res } = context;
	const statusCode = res?.statusCode || null;
  
	let message = 'An unexpected error has occurred.';
  
	switch (statusCode) {
	  case 400:
		message = 'Bad Request. The server could not understand the request.';
		break;
	  case 401:
		message = 'Unauthorized. You need to log in to access this page.';
		break;
	  case 403:
		message = 'Forbidden. You do not have permission to access this page.';
		break;
	  case 404:
		message = 'Sorry, the page you are looking for does not exist.';
		break;
	  case 500:
		message = 'Internal Server Error. Something went wrong on our end.';
		break;
	  case 502:
		message = 'Bad Gateway. The server received an invalid response from an upstream server.';
		break;
	  case 503:
		message = 'Service Unavailable. The server is currently unable to handle the request.';
		break;
	  case 504:
		message = 'Gateway Timeout. The server took too long to respond.';
		break;
	  default:
		message = 'An unexpected error has occurred.';
		break;
	}
  
	return {
		props: {
			statusCode: statusCode || null,
			message,
		},
	};
  };

export default CustomError;