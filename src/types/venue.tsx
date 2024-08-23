export interface Venue {
	id: string;
	name: string;
	venueType: VenueType,
	venueCategory: VenueCategory,
	summary: string;
	description: string;
	venueImages: VenueImage[];
	venueOpeningHours?: VenueOpeningHours[];
	similarVenues: VenueSummary[];
}

export interface VenueSummary {
	slug: string;
	name: string;
	venueImages: VenueImage[];
}

export interface VenueImage {
    id: string;
    venueId: string;
    imageUrl: string;
    featured: boolean;
    description: string;
    createdAt: Date;
}

export interface VenueOpeningHours {
    id: string;
    venueId: string;
    weekDay: number;
    openingTime: string;
    closingTime: string;
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
	error: string | null;
}

export interface VenueTypeProps {

}
  
export interface VenueCategoryProps {
	venueCategory: VenueCategory | null;
	error: string | null;
}