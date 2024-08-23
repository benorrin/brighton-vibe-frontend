import axios from 'axios';
import { VenueCategory } from '../types/venue';

const API_URL = process.env.API_URL;

/**
 * Fetches detailed information about a specific venue category from the API.
 * 
 * This asynchronous function sends a GET request to the endpoint that provides 
 * a summary of a venue category identified by its slug. It handles the HTTP 
 * response by checking if the status code is 200 (OK). If the request is 
 * successful, it returns the category data. If the request fails, it throws 
 * an error indicating the failure.
 * 
 * @param {string} categorySlug - The unique slug identifier for the venue category to be fetched.
 * @returns {Promise<VenueCategory>} A promise that resolves to the venue category data.
 * @throws {Error} Throws an error if the HTTP request fails or the status code is not 200.
 */
export const fetchVenueCategory = async (categorySlug: string): Promise<VenueCategory> => {
	const response = await axios.get(`${API_URL}/venue-categories/${categorySlug}/summary`);

	if (response.status !== 200) {
		throw new Error('Failed to fetch category data');
	}

	return response.data;
};