import axios from 'axios';
import { Venue, VenueCard } from '../types/venue';

const API_URL = process.env.API_URL;

/**
 * Fetches detailed information about a specific venue from the API.
 * 
 * This asynchronous function sends a GET request to the API endpoint that provides
 * details for a venue identified by its slug. It checks the HTTP response status code 
 * to ensure the request was successful. If the status code is not 200 (OK), it throws
 * an error indicating that the venue data could not be fetched. If successful, it returns
 * the venue data from the response.
 * 
 * @param {string} venueSlug - The unique slug identifier for the venue to be fetched.
 * @returns {Promise<Venue>} A promise that resolves to the detailed venue data.
 * @throws {Error} Throws an error if the HTTP request fails or the status code is not 200.
 */
export const fetchVenue = async (venueSlug: string | null | undefined): Promise<Venue> => {
	if (!venueSlug) {
		throw new Error('Venue slug undefined');
	}
  
	try {
		const response = await axios.get(`${API_URL}/venues/${venueSlug}`);

		if (response.status !== 200) {
			throw new Error('Failed to fetch venue data');
		}

		return response.data;

	} catch (error) {
		throw new Error('Failed to fetch from the API');
	}
};

/**
 * Asynchronously fetches a list of recently added venues from the API.
 * 
 * This function makes an HTTP GET request to the API endpoint for recently added venues. If the request is successful (status code 200),
 * it returns the data in the form of an array of `VenueCard` objects. If the request fails or returns an error status, 
 * it throws an exception with an error message indicating the failure.
 * 
 * @returns {Promise<VenueCard[]>} A promise that resolves to an array of `VenueCard` objects representing the recently added venues.
 * @throws {Error} Throws an error if the HTTP response status is not 200, indicating a failure in fetching the data.
 */
export const fetchRecentlyAddedVenues = async (): Promise<VenueCard[]> => {
	const response = await axios.get(`${API_URL}/venues/recent`);

	if (response.status !== 200) {
		throw new Error('Failed to fetch venue data');
	}

	return response.data;
};

/**
 * Fetches a list of venues based on the specified venue type ID.
 * 
 * This asynchronous function sends a GET request to the API to retrieve a list of venues
 * associated with a given `venueTypeId`. It performs the following checks and operations:
 * - Throws an error if the `venueTypeId` is not provided (i.e., it is `null` or `undefined`).
 * - Sends a GET request to the API endpoint using the `venueTypeId` to fetch the venues.
 * - Throws an error if the response status is not 200 (OK) or if an error occurs during the request.
 * - Returns the list of venues from the response if the request is successful.
 * 
 * @param {string | null | undefined} venueTypeId - The ID of the venue type for which to fetch venues. Must be a non-null, defined string.
 * @returns {Promise<Venue[] | null>} A promise that resolves to an array of venue objects if successful, or `null` if no venues are found.
 * @throws {Error} Throws an error if the venue type ID is invalid or if the API request fails.
 */
export const fetchVenuesByType = async (venueTypeId: string | null | undefined): Promise<Venue[]> => {
	if (!venueTypeId) {
		throw new Error('Venue type undefined');
	}
  
	try {
		const response = await axios.get(`${process.env.API_URL}/venues/type/${venueTypeId}`);

		if (response.status !== 200) {
			throw new Error('Failed to fetch venue data');
		}

		return response.data;

	} catch (error) {
		throw new Error('Failed to fetch from the API');
	}
};