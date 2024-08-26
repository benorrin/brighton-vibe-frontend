import { VenueSummary } from "./venue";

export interface CardCarouselProps {
	title: string;
	venues: VenueSummary[];
	seeMoreLink: string;
}

export interface CardGridProps {
	title: string;
	venues: VenueSummary[];
}