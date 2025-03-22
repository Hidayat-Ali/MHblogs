import { a as getPost } from './wordpress-BZVDexVv.js';

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
const component = async () => component_cache ??= (await import('./_page.svelte-Dls8bxbz.js')).default;
const server_id = "src/routes/blog/[slug]/+page.server.js";
const imports = ["_app/immutable/nodes/5.Bp9GymNR.js","_app/immutable/chunks/BJOssxvh.js","_app/immutable/chunks/BJJP7Q0Q.js","_app/immutable/chunks/BCrd3Tvo.js","_app/immutable/chunks/Cxn-fYAn.js","_app/immutable/chunks/CBgqLuRN.js","_app/immutable/chunks/C6oW-XiA.js","_app/immutable/chunks/KFLWTKau.js","_app/immutable/chunks/BGoREh7s.js"];
const stylesheets = ["_app/immutable/assets/5.44d14pzk.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=5-pZCGdPzm.js.map
