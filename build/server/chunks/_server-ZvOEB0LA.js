import { W as WORDPRESS_URL } from './wordpress-UVGJd0qi.js';

async function GET() {
  const staticPages = [
    { url: "/", lastmod: (/* @__PURE__ */ new Date()).toISOString() },
    { url: "/about", lastmod: (/* @__PURE__ */ new Date()).toISOString() },
    { url: "/blog", lastmod: (/* @__PURE__ */ new Date()).toISOString() }
  ];
  const posts = await fetchBlogPosts();
  const pages = [
    ...staticPages,
    ...posts.map((post) => ({
      url: `/blog/${post.slug}`,
      lastmod: new Date(post.date).toISOString()
    }))
  ];
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${pages.map(
    (page) => `
        <url>
          <loc>https://www.mhidayat.live/${page.url}</loc>
          <lastmod>${page.lastmod}</lastmod>
          <changefreq>monthly</changefreq>
          <priority>${page.url === "/" ? "1.0" : "0.8"}</priority>
        </url>
      `
  ).join("")}
    </urlset>
  `;
  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml"
    }
  });
}
async function fetchBlogPosts() {
  const response = await fetch(`${WORDPRESS_URL}/posts?status=publish`);
  const data = await response.json();
  return data.posts;
}

export { GET };
//# sourceMappingURL=_server-ZvOEB0LA.js.map
