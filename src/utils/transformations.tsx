import { VenueCard, VenueType } from '../types/venue';

const ROOT_DOMAIN = process.env.ROOT_DOMAIN;

/**
 * Transforms an array of venue data into a simplified format suitable for display.
 * 
 * This function takes an array of `VenueCard` objects and maps each object to a new format
 * that includes only the essential properties: `name`, `image`, and `link`. 
 * If a venue does not have any images, a placeholder image URL is used. The `link` property 
 * is constructed using the venue's slug to create a URL pointing to the venue's detail page.
 * 
 * @param {VenueCard[]} venues - An array of venue objects to be transformed.
 * @returns {Array<{ name: string; image: string; link: string }>} - A new array with transformed venue data.
 */
export const transformVenueData = (venues: VenueCard[]) => venues.map((venue: any) => ({
	name: venue.name,
	image: venue.venueImages.length > 0 ? venue.venueImages[0].imageUrl : '/img/venue-placeholder.png',
	link: `${ROOT_DOMAIN}/venues/${venue.slug}`
}));

/**
 * Transforms an array of venue types into a simplified format suitable for display.
 * 
 * This function processes an array of `VenueType` objects and maps each object to a new format
 * that includes properties such as `slug`, `name`, `description`, and a transformed list of 
 * venues. The venue data within each `VenueType` object is processed using the `transformVenueData` 
 * function to ensure it is in the desired format.
 * 
 * @param {VenueType[]} venueTypes - An array of venue type objects to be transformed.
 * @returns {Array<{ slug: string; name: string; description: string; venues: Array<{ name: string; image: string; link: string }> }>} - A new array with transformed venue type data.
 */
export const transformVenueTypes = (venueTypes: VenueType[]) => venueTypes.map((venueType: any) => ({
	slug: venueType.slug,
	name: venueType.name,
	description: venueType.description,
	venues: transformVenueData(venueType.venues)
}));
