import { AxiosError } from 'axios';

/**
 * Extracts a user-friendly error message from an AxiosError object.
 * 
 * This function takes an `AxiosError` object as input and determines the appropriate error message 
 * based on the HTTP status code present in the error response. It handles specific status codes such as 
 * 404 (Not Found) and 500 (Internal Server Error), providing corresponding messages for these cases. 
 * For any other status codes or if no response is available, a generic error message is returned.
 * 
 * @param {AxiosError} error - The AxiosError object containing error details.
 * @returns {string} - A user-friendly error message based on the status code or a generic message if no response is present.
 */
export const getErrorMessage = (error: AxiosError): string => {
	if (error.response) {
		const statusCode = error.response.status;
		switch (statusCode) {
		case 404:
			return 'Not found.';
		case 500:
			return 'Internal Server Error.';
		default:
			return 'An error occurred.';
		}
	}
	return 'An error occurred.';
};