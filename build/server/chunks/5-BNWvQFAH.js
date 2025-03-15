import { a as getPost } from './wordpress-BZVDexVv.js';
import { e as error } from './index-CvuFLVuQ.js';

async function load({ params }) {
  console.log("This is slug:", params.slug);
  const post = await getPost(params.slug);
  if (!post) {
    console.error("Post not found for slug:", params.slug);
    throw error(404, "Post not found");
  }
  return { post };
}

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 5;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-Da2_YMeT.js')).default;
const server_id = "src/routes/blog/[slug]/+page.server.js";
const imports = ["_app/immutable/nodes/5.B2pdpNHz.js","_app/immutable/chunks/BJOssxvh.js","_app/immutable/chunks/BJJP7Q0Q.js","_app/immutable/chunks/BCrd3Tvo.js","_app/immutable/chunks/CBgqLuRN.js","_app/immutable/chunks/C6oW-XiA.js","_app/immutable/chunks/KFLWTKau.js"];
const stylesheets = ["_app/immutable/assets/5.44d14pzk.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=5-BNWvQFAH.js.map
