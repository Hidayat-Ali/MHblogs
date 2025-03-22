import { a as getPost } from './wordpress-UVGJd0qi.js';

let isLoading = true;
async function load({ params }) {
  let post = {};
  try {
    post = await getPost(params.slug);
    if (post) {
      isLoading = false;
    }
  } catch (error) {
    console.error(error);
    isLoading = false;
  }
  return { post, isLoading };
}

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 5;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-CKn8IgkY.js')).default;
const server_id = "src/routes/blog/[slug]/+page.server.js";
const imports = ["_app/immutable/nodes/5.BjrvS9Rr.js","_app/immutable/chunks/BGAgWMwB.js","_app/immutable/chunks/BACdDkjB.js","_app/immutable/chunks/cbcU0EHI.js","_app/immutable/chunks/D_nXeGhm.js","_app/immutable/chunks/CbLfxgj4.js","_app/immutable/chunks/B-w6KL4i.js","_app/immutable/chunks/BByKcL6H.js","_app/immutable/chunks/BaRU1dVR.js"];
const stylesheets = ["_app/immutable/assets/5.44d14pzk.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=5-saz235O5.js.map
