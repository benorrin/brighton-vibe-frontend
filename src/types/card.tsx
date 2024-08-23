import { VenueSummary } from "./venue";

export interface CardCarouselProps {
	title: string;
	venues: VenueSummary[];
	seeMoreLink: string;
}