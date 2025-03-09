<script>
  import { onMount } from 'svelte';
  
  let showBackToTop = false;

  onMount(() => {
    const handleScroll = () => {
      showBackToTop = window.scrollY > 500;
    };

    window.addEventListener('scroll', handleScroll);
    
    // Cleanup function
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
</script>
<footer class="footer-section position-relative overflow-hidden  py-5">
  <!-- Animated Elements -->
  <div class="footer-shape"></div>
  
  <div class="container">
    <div class="row g-5">
      <!-- Brand Column -->
      <div class="col-lg-4">
        <div class="footer-brand">
          <h2 class="text-white mb-3 hover-rotate-3d">HA</h2>
          <div class="d-flex gap-3">
            <a href="#" class="social-icon">
              <i class="fab fa-github fa-lg"></i>
            </a>
            <a href="#" class="social-icon">
              <i class="fab fa-linkedin fa-lg"></i>
            </a>
            <a href="#" class="social-icon">
              <i class="fab fa-codepen fa-lg"></i>
            </a>
          </div>
        </div>
      </div>

      <!-- Skills Progress -->
      <div class="col-lg-4">
        <div class="skill-radial-progress">
          <div class="radial-progress" data-progress="95">
            <span class="progress-text">Design</span>
          </div>
          <div class="radial-progress" data-progress="85">
            <span class="progress-text">Development</span>
          </div>
        </div>
      </div>
<div class="back-to-top" class:show={showBackToTop}>
  <a href="#" on:click|preventDefault={scrollToTop} class="text-white">
    <i class="fas fa-arrow-up"></i>
  </a>
</div>
      <!-- Contact Form -->
      <!-- <div class="col-lg-4">
        <div class="contact-card hover-3d-transform">
          <h5 class="text-white mb-4">Let's Connect</h5>
          <form class="footer-form">
            <input type="email" class="form-control bg-transparent mb-3" placeholder="Your Email">
            <textarea class="form-control bg-transparent mb-3" rows="2" placeholder="Message"></textarea>
            <button class="btn btn-outline-light w-100">Send Quantum Message</button>
          </form>
        </div>
      </div> -->
       <div class="col-lg-4">
        <iframe
scrolling="no"
style="width:100%!important;height:220px;border:1px #ccc solid !important"
src="https://buttondown.com/hidayat?as_embed=true"
></iframe><br /><br />
    </div>
    </div>
   

    <!-- Copyright with Floating Effect -->
    <div class="row mt-5">
      <div class="col-12">
        <div class="copyright-text text-center">
          <p class="text-muted mb-0 hover-float">
            © 2024 Hidayat Ali • Crafted with <span class="text-danger">♥</span> & <span class="text-primary">Coffee</span>
          </p>
        </div>
      </div>
    </div>
  </div>

  <!-- Back to Top -->
  <div class="back-to-top">
    <a href="#" class="text-white">
      <i class="fas fa-arrow-up"></i>
    </a>
  </div>
</footer>

<style>
/* .footer-section {
  --primary-color: #2563eb;
  --secondary-color: #1e40af;
  --accent-color: #c44900;
  background: linear-gradient(160deg, #0f172a 0%, #1e293b 100%);
} */
.footer-section{
    background-color: var(--main-bg);
}
.footer-shape {
  position: absolute;
  width: 400px;
  height: 400px;
  background: rgba(37, 99, 235, 0.05);
  border-radius: 50%;
  top: -50px;
  left: -50px;
  animation: shape-float 25s infinite linear;
}

@keyframes shape-float {
  0%, 100% { transform: translate(0, 0) rotate(0deg); }
  25% { transform: translate(50px, 50px) rotate(90deg); }
  50% { transform: translate(-30px, 80px) rotate(180deg); }
  75% { transform: translate(40px, -30px) rotate(270deg); }
}

.social-icon {
  width: 45px;
  height: 45px;
  border: 2px solid var(--primary-color);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
}

.social-icon:hover {
  background: var(--primary-color);
  transform: translateY(-5px) rotate(15deg);
  box-shadow: 0 10px 20px rgba(37, 99, 235, 0.3);
}

.radial-progress {
  width: 100px;
  height: 100px;
  position: relative;
  margin: 1rem;
}

.radial-progress::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 3px solid rgba(255,255,255,0.1);
}

.radial-progress::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 3px solid var(--primary-color);
  border-top-color: transparent;
  transform: rotate(calc(360deg * (var(--progress)/100)));
  transition: transform 1s ease;
}

.progress-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 0.9rem;
  text-align: center;
}

.hover-3d-transform {
  transition: transform 0.4s ease;
  position: relative;
}

.hover-3d-transform:hover {
  transform: perspective(1000px) rotateX(5deg) rotateY(-5deg) translateZ(20px);
}

.back-to-top {
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 40px;
  height: 40px;
  background: var(--primary-color);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: all 0.3s ease;
}

/* .back-to-top.show {
  opacity: 1;
} */

.hover-float {
  transition: transform 0.3s ease;
}

.hover-float:hover {
  transform: translateY(-3px);
}

@media (max-width: 991px) {
  .footer-shape {
    display: none;
  }
  
  .radial-progress {
    width: 80px;
    height: 80px;
  }
}
</style>

