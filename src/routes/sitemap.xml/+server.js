import { WORDPRESS_URL } from '$lib/Api/wordpress';
export async function GET() {
	// Define your static pages
	const staticPages = [
		{ url: '/', lastmod: new Date().toISOString() },
		{ url: '/about', lastmod: new Date().toISOString() },
		{ url: '/blog', lastmod: new Date().toISOString() }
	];

	// Fetch dynamic content (e.g., blog posts)
	const posts = await fetchBlogPosts();

	// Combine static and dynamic pages
	const pages = [
		...staticPages,
		...posts.map((post) => ({
			url: `/blog/${post.slug}`,
			lastmod: new Date(post.date).toISOString()
		}))
	];

	// Generate the sitemap XML
	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${pages
				.map(
					(page) => `
        <url>
          <loc>https://www.mhidayat.live/${page.url}</loc>
          <lastmod>${page.lastmod}</lastmod>
          <changefreq>monthly</changefreq>
          <priority>${page.url === '/' ? '1.0' : '0.8'}</priority>
        </url>
      `
				)
				.join('')}
    </urlset>
  `;

	// Return the sitemap as an XML response
	return new Response(sitemap, {
		headers: {
			'Content-Type': 'application/xml'
		}
	});
}

async function fetchBlogPosts() {
	const response = await fetch(`${WORDPRESS_URL}/posts?status=publish`);
	const data = await response.json();
	return data.posts;
}
