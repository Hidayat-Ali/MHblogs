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
const component = async () => component_cache ??= (await import('./_page.svelte-fNWjzbx1.js')).default;
const server_id = "src/routes/blog/+page.server.js";
const imports = ["_app/immutable/nodes/4.CnpEbDrq.js","_app/immutable/chunks/BJOssxvh.js","_app/immutable/chunks/BJJP7Q0Q.js","_app/immutable/chunks/BCrd3Tvo.js","_app/immutable/chunks/Cxn-fYAn.js","_app/immutable/chunks/CBgqLuRN.js","_app/immutable/chunks/Crr1uTy7.js","_app/immutable/chunks/C6oW-XiA.js","_app/immutable/chunks/KFLWTKau.js","_app/immutable/chunks/BGoREh7s.js"];
const stylesheets = ["_app/immutable/assets/4.DnVQ55pd.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=4-CYDKw80s.js.map
