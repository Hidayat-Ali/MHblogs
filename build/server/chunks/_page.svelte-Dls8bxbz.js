import { f as bind_props } from './index-BC1QlqKu.js';
import { h as html } from './html-FW6Ia4bL.js';
import { a as attr } from './attributes-xe7gdrC7.js';
import { e as escape_html } from './escaping-CqgfEcN3.js';

function _page($$payload, $$props) {
  let data = $$props["data"];
  let { post, isLoading } = data;
  $$payload.out += `<article><section class="svelte-1upojud">`;
  if (isLoading) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<h1>Loading...</h1>`;
  } else {
    $$payload.out += "<!--[!-->";
    if (post) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<div class="post-container mt-5 py-5 px-5"><h1 class="h2 headding svelte-1upojud">${html(post?.title)}</h1> `;
      if (post.featured_image) {
        $$payload.out += "<!--[-->";
        $$payload.out += `<img class="image-responsive"${attr("src", post.featured_image)} alt="">`;
      } else {
        $$payload.out += "<!--[!-->";
      }
      $$payload.out += `<!--]--> <div class="justify-content content"><div class="post-content svelte-1upojud">${html(post.content)}</div></div></div>`;
    } else {
      $$payload.out += "<!--[!-->";
      $$payload.out += `<p>No post available for this ${escape_html(post.slug)}</p>`;
    }
    $$payload.out += `<!--]-->`;
  }
  $$payload.out += `<!--]--></section></article>`;
  bind_props($$props, { data });
}

export { _page as default };
//# sourceMappingURL=_page.svelte-Dls8bxbz.js.map
