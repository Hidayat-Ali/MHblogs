import { d as slot, p as push, c as pop } from './index-BC1QlqKu.js';
import { a as attr, t as to_class } from './attributes-xe7gdrC7.js';
import './escaping-CqgfEcN3.js';

function Navbar($$payload, $$props) {
  push();
  let isOpen = false;
  $$payload.out += `<nav class="navbar navbar-expand-lg shadow-sm fixed-top svelte-1gq4564"><div class="container"><a class="navbar-brand" href="/">(H) Blogs</a> <button class="navbar-toggler svelte-1gq4564" type="button"${attr("aria-expanded", isOpen)} aria-label="Toggle navigation">`;
  {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<span class="menu-icon svelte-1gq4564">☰</span>`;
  }
  $$payload.out += `<!--]--></button> <div${attr("class", to_class("navbar-collapse ", "svelte-1gq4564"))}><ul class="navbar-nav ms-auto mb-2 mb-lg-0"><li class="nav-item"><a class="nav-link svelte-1gq4564" href="/">Home</a></li> <li class="nav-item"><a class="nav-link svelte-1gq4564" href="/about">About</a></li> <li class="nav-item"><a class="nav-link svelte-1gq4564" href="/blog">Blogs</a></li></ul> <button class="btn btn-link nav-link theme-btn svelte-1gq4564">`;
  {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<span>🌙</span>`;
  }
  $$payload.out += `<!--]--></button></div></div></nav>`;
  pop();
}
function Footer($$payload, $$props) {
  push();
  let showBackToTop = false;
  $$payload.out += `<footer class="footer-section position-relative overflow-hidden  py-5 svelte-xky6c6"><div class="container"><div class="row g-5"><div class="col-lg-4"><div class="footer-brand"><h2 class="mb-3 hover-rotate-3d footer-text svelte-xky6c6">HA</h2></div></div> <div class="col-lg-4"><div class="h4 footer-text svelte-xky6c6">Quick Links</div> <div class="d-flex gap-3 py-5"><a href="#" class="social-icon svelte-xky6c6"><i class="fab fa-github fa-lg"></i></a> <a href="#" class="social-icon svelte-xky6c6"><i class="fab fa-linkedin fa-lg"></i></a> <a href="#" class="social-icon svelte-xky6c6"><i class="fab fa-codepen fa-lg"></i></a></div></div> <div${attr("class", to_class("back-to-top", "svelte-xky6c6", { "show": showBackToTop }))}><a href="#" class="text-white"><i class="fas fa-arrow-up"></i></a></div> <div class="col-lg-4"><button class="contact-button svelte-xky6c6"><span>Contact Me</span> <div class="icon svelte-xky6c6"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm17 4.238l-7.928 7.1L4 7.216V19h16V7.238zM4.511 5l7.55 6.662L19.502 5H4.511z"></path></svg></div></button></div></div> <div class="row mt-5"><div class="col-12"><div class="copyright-text text-center"><p class="text-muted mb-0 hover-float">© 2024 Hidayat Ali • developed with <span class="text-danger">♥</span></p></div></div></div></div> <div class="back-to-top svelte-xky6c6"><a href="#" class="text-white"><i class="fas fa-arrow-up"></i></a></div></footer>`;
  pop();
}
function _layout($$payload, $$props) {
  Navbar($$payload);
  $$payload.out += `<!----> <div><!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!----></div> `;
  Footer($$payload);
  $$payload.out += `<!---->`;
}

export { _layout as default };
//# sourceMappingURL=_layout.svelte-B51UhaYR.js.map
