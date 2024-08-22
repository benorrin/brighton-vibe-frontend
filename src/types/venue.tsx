export interface Venue {
	id: string;
	name: string;
	summary: string;
	description: string;
	venueTypeId: string;
	venueImages: { imageUrl: string }[];
	venueOpeningHours?: { day: string; hours: string }[];
}
  
export interface VenueType {
	id: string;
	slug: string;
	name: string;
	description: string;
	venues: VenueCard[];
}

export interface VenueCategory {
	id: string;
	slug: string;
	name: string;
	description: string;
	venueTypes: VenueType[];
}
  
export interface VenueCard {
	name: string;
	image: string;
	link: string;
}
  
export interface VenueProps {
	venue: Venue | null;
	type: VenueType | null;
	similarVenues: VenueCard[] | null;
	error: string | null;
}

export interface VenueTypeProps {

}
  
export interface VenueCategoryProps {
	venueCategory: VenueCategory | null;
	error: string | null;
}