/** @format */

import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs/promises';
import path from 'path';

export const generateSitemap = async () => {
	try {
		const baseUrl = process.env.SITEMAP_URL;
		// Obtener las páginas estáticas desde la API

		let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
      <loc>${baseUrl}/</loc>
    </url>
  </urlset>`;

		const publicPath = path.join(process.cwd(), 'public');
		await fs.writeFile(path.join(publicPath, 'sitemap.xml'), sitemap, 'utf-8');
	} catch (error) {
		console.error('Error al generar el sitemap:', error);
	}
};

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	try {
		await generateSitemap();
		res.status(200).end();
	} catch (error) {
		console.error('Error al generar el sitemap:', error);
		res.status(500).end();
	}
}


