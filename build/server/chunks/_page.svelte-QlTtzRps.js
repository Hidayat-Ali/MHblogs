import { h as head, p as push, c as pop } from './index-BZgSNx4l.js';

function Hero($$payload) {
  $$payload.out += `<section class="hero d-flex align-items-center position-relative overflow-hidden svelte-1iegyum"><div class="container svelte-1iegyum"><div class="row align-items-center svelte-1iegyum"><div class="col-md-7 order-md-1 order-2 svelte-1iegyum"><div class="hero-content svelte-1iegyum"><h6 class="text-primary mb-3 svelte-1iegyum">Hi, I'm</h6> <h1 class="display-3 fw-bold mb-4 gradient-text svelte-1iegyum">Hidayat Ali</h1> <h2 class="h3 mb-4 text-creative svelte-1iegyum">Creative <span class="text-primary svelte-1iegyum">Full-Stack Developer</span></h2> <div class="about-me mb-5 svelte-1iegyum"><p class="lead svelte-1iegyum">Building digital experiences that combine innovation with solid engineering. Specializing in modern web technologies and user-centric design principles.</p></div> <div class="d-flex flex-wrap gap-3 align-items-center svelte-1iegyum"><a href="#contact" class="btn download-cv btn-lg px-5 py-3 svelte-1iegyum">Download CV <i class="fas fa-download ms-2 svelte-1iegyum"></i></a> <div class="d-flex gap-3 py-5 svelte-1iegyum"><a href="https://github.com/Hidayat-Ali" class="social-icon svelte-1iegyum" aria-label="hidayat github"><i class="fab fa-github fa-lg svelte-1iegyum"></i></a> <a href="https://www.linkedin.com/in/hidayat-ali-mir-7806271b7/" class="social-icon svelte-1iegyum" aria-label="hidayat linkedin"><i class="fab fa-linkedin fa-lg svelte-1iegyum"></i></a> <a href="https://x.com/HidayatAlimir1" class="social-icon svelte-1iegyum" aria-label="hidayat twitter"><i class="fab fa-twitter fa-lg svelte-1iegyum"></i></a></div></div></div></div> <div class="col-md-5 order-md-2 order-1 mb-md-0 mb-5 svelte-1iegyum"><div class="hero-image-wrapper position-relative svelte-1iegyum"><div class="hero-main-image mb-3 svelte-1iegyum"><img src="/abc.png" alt="Hidayat ali mir" class="img-fluid rounded-circle shadow svelte-1iegyum" loading="lazy"></div> <div class="hero-image-bg svelte-1iegyum"></div></div> <div class="tech-stack-badge d-flex flex-wrap justify-content-center gap-2 mt-3 svelte-1iegyum"><span class="badge badge-icon svelte-1iegyum">JavaScript</span> <span class="badge badge-icon1 svelte-1iegyum">Python</span> <span class="badge badge-icon svelte-1iegyum">C#</span> <span class="badge badge-icon1 svelte-1iegyum">PHP</span></div></div></div></div></section>`;
}
function Latestblog($$payload, $$props) {
  push();
  $$payload.out += `<section class="blog-section py-5 position-relative overflow-hidden svelte-xx5pcf"><div class="container svelte-xx5pcf"><div class="row mb-5 svelte-xx5pcf"><div class="col-12 text-center svelte-xx5pcf"><h2 class="display-5 fw-bold mb-3 headding svelte-xx5pcf">Latest Insights</h2> <p class="lead headding svelte-xx5pcf">Exploring modern web development trends</p></div></div> <div class="row g-4 blog-container svelte-xx5pcf">`;
  {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div class="col-12 text-center svelte-xx5pcf"><p class="svelte-xx5pcf">Loading posts...</p></div>`;
  }
  $$payload.out += `<!--]--></div> <div class="row mt-5 svelte-xx5pcf"><div class="col-12 text-center svelte-xx5pcf"><a href="/blog" class="btn btn-outline view-all-posts px-5 py-3 svelte-xx5pcf">View All Posts <i class="bi bi-arrow-up-right-circle ms-2 svelte-xx5pcf"></i></a></div></div></div> <div class="blog-deco blog-deco-1 svelte-xx5pcf"></div> <div class="blog-deco blog-deco-2 svelte-xx5pcf"></div></section>`;
  pop();
}
function _page($$payload) {
  head($$payload, ($$payload2) => {
    $$payload2.out += `<meta name="description" content="Software Engineer Hidayat Ali"> <meta property="og:title" content="Hidayat Ali || Full Stack Dev">`;
  });
  Hero($$payload);
  $$payload.out += `<!----> `;
  Latestblog($$payload);
  $$payload.out += `<!---->`;
}

export { _page as default };
//# sourceMappingURL=_page.svelte-QlTtzRps.js.map
