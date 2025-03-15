import { e as ensure_array_like, f as bind_props } from './index2-BC1QlqKu.js';
import { e as escape_html } from './escaping-CqgfEcN3.js';
import { a as attr } from './attributes-xe7gdrC7.js';
import { h as html } from './html-FW6Ia4bL.js';

function _page($$payload, $$props) {
  let data = $$props["data"];
  const { posts, error } = data;
  $$payload.out += `<section class=" all-Blogs py-5 mt-2  svelte-t5layl"><h1 class="headding1 text-center svelte-t5layl">All Blogs</h1> `;
  if (error) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<p class="error">${escape_html(error)}</p>`;
  } else {
    $$payload.out += "<!--[!-->";
    if (posts.length > 0) {
      $$payload.out += "<!--[-->";
      const each_array = ensure_array_like(posts);
      $$payload.out += `<div class="row justify-content-center"><!--[-->`;
      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
        let post = each_array[$$index];
        $$payload.out += `<div class="col-8 post1 mb-5 svelte-t5layl"><h2 class="post-title svelte-t5layl">${escape_html(post.title)}</h2> `;
        if (post.featuredImage) {
          $$payload.out += "<!--[-->";
          $$payload.out += `<img${attr("src", post.featuredImage)}${attr("alt", post.title)} width="200px">`;
        } else {
          $$payload.out += "<!--[!-->";
        }
        $$payload.out += `<!--]--> <p class="post-content svelte-t5layl">${html(post.excerpt)}</p> <p class="badge svelte-t5layl"><b>Published on:</b> ${escape_html(post.date)}</p> <p><a${attr("href", `/blog/${post.slug}`)} class="badge bg-primary text-decoration-none svelte-t5layl">Read more</a></p></div>`;
      }
      $$payload.out += `<!--]--></div>`;
    } else {
      $$payload.out += "<!--[!-->";
      $$payload.out += `<p>Sorry No posts available.</p>`;
    }
    $$payload.out += `<!--]-->`;
  }
  $$payload.out += `<!--]--></section>`;
  bind_props($$props, { data });
}

export { _page as default };
//# sourceMappingURL=_page.svelte-CGxiJ8nh.js.map
