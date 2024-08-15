import { Box, Typography } from '@mui/material';

const Custom500: React.FC = () => {
	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				px: 2,
				maxWidth: '1200px',
				mx: 'auto',
				mt: 10,
			}}
		>
			<Typography variant="h1" color="error">
				500 - Server Error
			</Typography>
			<Typography variant="body1" mt={2}>
				An unexpected error occurred on the server.
			</Typography>
		</Box>
	);
};

export default Custom500;