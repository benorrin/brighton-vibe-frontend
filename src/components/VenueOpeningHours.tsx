import React from 'react';
import { Typography, Stack } from '@mui/material';
import styles from '../styles/VenueOpeningHours.module.css';

// Helper function to format time
const formatTime = (time: string | null) => {
	if (!time) return 'Closed';
	try {
		const [hours, minutes] = time.split(':');
		return `${hours}:${minutes}`;
	} catch {
		return 'Invalid Time Format';
	}
};

interface VenueOpeningHoursProps {
	hours: {
		id: string;
		venueId: string;
		weekDay: number;
		openingTime: string;
		closingTime: string;
	}[];
}

const VenueOpeningHours: React.FC<VenueOpeningHoursProps> = ({ hours }) => {
	// Map of day indices to day names
	const days = [
		'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'
	];

	// Transform the array into a dictionary
	const hoursByDay = hours.reduce((acc, curr) => {
		const day = days[curr.weekDay];
		if (!acc[day]) {
			acc[day] = { open: curr.openingTime, close: curr.closingTime };
		}
		return acc;
	}, {} as Record<string, { open: string | null; close: string | null }>);

	return (
		<Stack spacing={2} mt={4}>
			<Typography variant="h5" gutterBottom>
				Opening Hours
			</Typography>
			<ul className={styles.openingHoursList}>
				{days.map((day) => {
					const dayHours = hoursByDay[day];
					const isClosed = !dayHours || !dayHours.open || !dayHours.close;
					return (
						<li key={day} className={styles.openingHoursItem}>
							<Typography variant="body1" component="span" className={styles.openingHoursDay}>
								{day}:
							</Typography>
							{isClosed ? (
								<Typography variant="body1" color="textSecondary" component="span" className={styles.openingHoursTime}>
									Closed
								</Typography>
							) : (
								<Typography variant="body1" component="span" className={styles.openingHoursTime}>
									{formatTime(dayHours.open)} - {formatTime(dayHours.close)}
								</Typography>
							)}
						</li>
					);
				})}
			</ul>
		</Stack>
	);
};

export default VenueOpeningHours;
