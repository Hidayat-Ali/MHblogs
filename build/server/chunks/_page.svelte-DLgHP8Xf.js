import { p as push, c as pop } from './index2-BC1QlqKu.js';

function Hero($$payload) {
  $$payload.out += `<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet" class="svelte-1uvq7mz"> <section class="hero d-flex align-items-center position-relative overflow-hidden svelte-1uvq7mz"><div class="container svelte-1uvq7mz"><div class="row align-items-center svelte-1uvq7mz"><div class="col-md-7 order-md-1 order-2 svelte-1uvq7mz"><div class="hero-content svelte-1uvq7mz"><h6 class="text-primary mb-3 svelte-1uvq7mz">Hi, I'm</h6> <h1 class="display-3 fw-bold mb-4 gradient-text svelte-1uvq7mz">Hidayat Ali</h1> <h2 class="h3 mb-4 text-creative svelte-1uvq7mz">Creative <span class="text-primary svelte-1uvq7mz">Full-Stack Developer</span></h2> <div class="about-me mb-5 svelte-1uvq7mz"><p class="lead svelte-1uvq7mz">Building digital experiences that combine innovation with solid engineering. Specializing in modern web technologies and user-centric design principles.</p></div> <div class="d-flex flex-wrap gap-3 align-items-center svelte-1uvq7mz"><a href="#contact" class="btn download-cv btn-lg px-5 py-3 svelte-1uvq7mz">Download CV <i class="fas fa-download ms-2 svelte-1uvq7mz"></i></a> <div class="d-flex gap-3 py-5 svelte-1uvq7mz"><a href="#" class="social-icon svelte-1uvq7mz"><i class="fab fa-github fa-lg svelte-1uvq7mz"></i></a> <a href="#" class="social-icon svelte-1uvq7mz"><i class="fab fa-linkedin fa-lg svelte-1uvq7mz"></i></a> <a href="#" class="social-icon svelte-1uvq7mz"><i class="fab fa-codepen fa-lg svelte-1uvq7mz"></i></a></div></div></div></div> <div class="col-md-5 order-md-2 order-1 mb-md-0 mb-5 svelte-1uvq7mz"><div class="hero-image-wrapper position-relative svelte-1uvq7mz"><div class="hero-main-image mb-3 svelte-1uvq7mz"><img src="static/abc.png" alt="John Doe" class="img-fluid rounded-circle shadow svelte-1uvq7mz"></div> <div class="hero-image-bg svelte-1uvq7mz"></div></div> <div class="tech-stack-badge d-flex flex-wrap justify-content-center gap-2 mt-3 svelte-1uvq7mz"><span class="badge badge-icon svelte-1uvq7mz">JavaScript</span> <span class="badge badge-icon1 svelte-1uvq7mz">Python</span> <span class="badge badge-icon svelte-1uvq7mz">C#</span> <span class="badge badge-icon1 svelte-1uvq7mz">PHP</span></div></div></div></div></section>`;
}
function Latestblog($$payload, $$props) {
  push();
  $$payload.out += `<section class="blog-section py-5 position-relative overflow-hidden svelte-994zoj"><div class="container svelte-994zoj"><div class="row mb-5 svelte-994zoj"><div class="col-12 text-center svelte-994zoj"><h2 class="display-5 fw-bold mb-3 headding svelte-994zoj">Latest Insights</h2> <p class="lead headding svelte-994zoj">Exploring modern web development trends</p></div></div> <div class="row g-4 blog-container svelte-994zoj">`;
  {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div class="col-12 text-center svelte-994zoj"><p class="svelte-994zoj">Loading posts...</p></div>`;
  }
  $$payload.out += `<!--]--></div> <div class="row mt-5 svelte-994zoj"><div class="col-12 text-center svelte-994zoj"><a href="/blog" class="btn btn-outline view-all-posts px-5 py-3 svelte-994zoj">View All Posts <i class="bi bi-arrow-up-right-circle ms-2 svelte-994zoj"></i></a></div></div></div> <div class="blog-deco blog-deco-1 svelte-994zoj"></div> <div class="blog-deco blog-deco-2 svelte-994zoj"></div></section>`;
  pop();
}
function _page($$payload) {
  Hero($$payload);
  $$payload.out += `<!----> `;
  Latestblog($$payload);
  $$payload.out += `<!---->`;
}

export { _page as default };
//# sourceMappingURL=_page.svelte-DLgHP8Xf.js.map
