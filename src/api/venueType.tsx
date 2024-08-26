import axios from 'axios';
import { VenueType } from '../types/venue';

const API_URL = process.env.API_URL;

export const fetchVenueType = async (typeSlug: string | null | undefined): Promise<VenueType> => {
	const response = await axios.get(`${API_URL}/venue-types/${typeSlug}/summary`);

	if (response.status !== 200) {
		throw new Error('Failed to fetch type data');
	}

	return response.data;
};