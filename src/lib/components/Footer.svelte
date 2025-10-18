<script>
  import { onMount } from 'svelte';
  
  let showBackToTop = false;
  const email = "your-email@example.com";

  function handleClick() {
      window.location.href = `mailto:${email}`;
  }

  onMount(() => {
    const handleScroll = () => {
      showBackToTop = window.scrollY > 500;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
</script>

<footer class="footer-section py-5">
  <div class="container">
    <div class="row g-5 align-items-center text-center text-lg-start">
      <!-- Brand -->
      <div class="col-lg-4">
        <h2 class="footer-brand hover-rotate">HA</h2>
        <p class="footer-text mt-2">Web Developer & AI Passionate Learner</p>
      </div>

      <!-- Quick Links / Social -->
      <div class="col-lg-4">
        <h4 class="footer-text mb-3">Quick Links</h4>
        <div class="d-flex gap-3 justify-content-center justify-content-lg-start flex-wrap">
          <a href="https://github.com/Hidayat-Ali" class="social-icon" aria-label="GitHub">
            <i class="fab fa-github fa-lg"></i>
          </a>
          <a href="https://www.linkedin.com/in/hidayat-ali-mir-7806271b7/" class="social-icon" aria-label="LinkedIn">
            <i class="fab fa-linkedin fa-lg"></i>
          </a>
          <a href="https://x.com/HidayatAlimir1" class="social-icon" aria-label="Twitter">
            <i class="fab fa-twitter fa-lg"></i>
          </a>
        </div>
      </div>

      <!-- Contact Button -->
      <div class="col-lg-4 mt-3 mt-lg-0 text-center text-lg-end">
        <button class="contact-button" on:click={handleClick}>
          <span>Contact Me</span>
          <div class="icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
              <path fill="none" d="M0 0h24v24H0z"/>
              <path fill="currentColor" d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm17 4.238l-7.928 7.1L4 7.216V19h16V7.238zM4.511 5l7.55 6.662L19.502 5H4.511z"/>
            </svg>
          </div>
        </button>
      </div>
    </div>

    <!-- Copyright -->
    <div class="row mt-5">
      <div class="col-12 text-center">
        <p class="text-muted mb-0 hover-float">
          © 2024 Hidayat Ali • developed with <span class="text-danger">♥</span>
        </p>
      </div>
    </div>
  </div>

  <!-- Back to Top -->
  {#if showBackToTop}
  <div class="back-to-top show" on:click={scrollToTop} aria-label="Back to top">
    <i class="fas fa-arrow-up"></i>
  </div>
  {/if}
</footer>

<style>
.footer-section{
  background-color: var(--main-bg);
}

/* Brand */
.footer-brand {
  font-size: 2.5rem;
  font-weight: 900;
  color: var(--Accent-color);
  cursor: default;
  display: inline-block;
  transition: transform 0.6s ease;
}
.hover-rotate:hover {
  transform: rotateY(15deg) rotateX(10deg) scale(1.05);
}
.footer-text { color: var(--body-text-color); opacity: 0.85; }

/* Social Icons */
.social-icon {
  width: 50px;
  height: 50px;
  border: 2px solid var(--primary-color);
  border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  color: var(--body-text-color);
  transition: all 0.4s ease;
}
.social-icon:hover {
  background: linear-gradient(135deg, #2575fc, #6a11cb);
  color: #fff;
  transform: translateY(-5px) rotate(15deg);
}

/* Contact Button */
.contact-button {
  display: inline-flex;
  align-items: center;
  padding: 15px 30px;
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  background: linear-gradient(135deg, #2575fc, #6a11cb);
  border: none;
  border-radius: 50px;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.3s ease;
}
.contact-button:hover {
  transform: translateY(-3px) scale(1.05);
}
.contact-button .icon { margin-left: 10px; transition: transform 0.3s ease; }
.contact-button:hover .icon { transform: translateX(5px); }

/* Back to Top */
.back-to-top {
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 45px;
  height: 45px;
  background: linear-gradient(135deg, #2575fc, #6a11cb);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 1.2rem;
  cursor: pointer;
  opacity: 0;
  transition: all 0.3s ease;
  z-index: 100;
}
.back-to-top.show {
  opacity: 1;
}
.back-to-top:hover {
  transform: translateY(-5px) scale(1.1);
}

/* Floating Effect */
.hover-float {
  display: inline-block;
  transition: transform 0.5s ease, color 0.3s ease;
}
.hover-float:hover { transform: translateY(-5px); color: var(--Accent-color); }

/* Responsive */
@media(max-width:992px){
  .footer-brand { font-size: 2.2rem; }
  .contact-button { font-size: 16px; padding: 12px 24px; width: 100%; justify-content: center; margin-top: 15px; }
  .d-flex.justify-content-center.justify-content-lg-start { justify-content: center !important; }
}
@media(max-width:576px){
  .footer-brand { font-size: 2rem; }
  .social-icon { width: 45px; height: 45px; }
  .contact-button { font-size: 15px; padding: 12px; }
}
</style>
