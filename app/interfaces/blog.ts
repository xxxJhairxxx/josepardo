/** @format */

import { MetaSEO, Picture } from './shared';

export interface Blog {
	data: BlogData[];
}

export interface BlogData {
	id: number;
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
	image: Picture;
	titulo: string;
	slug: string;
	text: string;
	destacado:boolean;
	seo: MetaSEO;
}
