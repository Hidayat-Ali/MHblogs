import { a as attr } from './attributes-xe7gdrC7.js';
import { h as html } from './html-FW6Ia4bL.js';
import './escaping-CqgfEcN3.js';

let data;
let { post } = data;
function _page($$payload) {
  $$payload.out += `<article><section class="svelte-1upojud">`;
  if (data.post) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div class="post-container mt-5 py-5 px-5"><h1 class="h2 headding svelte-1upojud">${html(post.title)}</h1> `;
    if (post.featured_image) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<img class="image-responsive"${attr("src", post.featured_image)} alt="">`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--> <div class="justify-content content"><div class="post-content svelte-1upojud">${html(post.content)}</div></div></div>`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<p>Loading...</p>`;
  }
  $$payload.out += `<!--]--></section></article>`;
}

export { data, _page as default };
//# sourceMappingURL=_page.svelte-Da2_YMeT.js.map
