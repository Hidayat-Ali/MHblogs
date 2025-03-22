import { g as getAllPosts } from './wordpress-BZVDexVv.js';

async function load() {
  try {
    const response = await getAllPosts();
    const posts = response.posts || [];
    const formattedPosts = posts.map((post) => ({
      id: post.ID,
      title: post.title,
      // excerpt: post.excerpt.replace(/<\/?[^>]+(>|$)/g, ''), // Strip HTML tags
      excerpt: post.excerpt,
      slug: post.slug,
      date: new Date(post.date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric"
      }),
      featuredImage: post.featured_image || null
    }));
    return {
      posts: formattedPosts
    };
  } catch (error) {
    console.error("Failed to load posts:", error);
    return {
      posts: [],
      error: "Failed to load blog posts. Please try again later."
    };
  }
}

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 4;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-B9f2e-Ny.js')).default;
const server_id = "src/routes/blog/+page.server.js";
const imports = ["_app/immutable/nodes/4.C8u6amIj.js","_app/immutable/chunks/BGAgWMwB.js","_app/immutable/chunks/BACdDkjB.js","_app/immutable/chunks/cbcU0EHI.js","_app/immutable/chunks/D_nXeGhm.js","_app/immutable/chunks/CbLfxgj4.js","_app/immutable/chunks/Da_MvtbN.js","_app/immutable/chunks/B-w6KL4i.js","_app/immutable/chunks/BByKcL6H.js","_app/immutable/chunks/BaRU1dVR.js"];
const stylesheets = ["_app/immutable/assets/4.DnVQ55pd.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=4-B8upwwdi.js.map
