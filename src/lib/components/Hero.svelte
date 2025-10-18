<section class="hero d-flex align-items-center position-relative overflow-hidden">
  <div class="container">
    <div class="row align-items-center">
      <!-- Text Content -->
      <div class="col-md-7 order-md-1 order-2">
        <div class="hero-content">
          <h6 class="text-primary mb-3">Hi, I'm</h6>
          <h1 class="display-3 fw-bold mb-4 gradient-text">Hidayat Ali</h1>
          <h2 class="h3 mb-4 text-creative">
            Creative <span class="text-primary">Full-Stack Developer</span>
          </h2>
          
          <div class="about-me mb-5">
            <p class="lead">
              Building digital experiences that combine innovation with solid engineering. Specializing in modern web technologies and user-centric design principles.
            </p>
          </div>

          <!-- Call to Action -->
          <div class="d-flex flex-wrap gap-3 align-items-center justify-content-center justify-content-md-start">
            <a href="#contact" class="btn download-cv btn-lg px-5 py-3">
              Download CV <i class="fas fa-download ms-2"></i>
            </a>
            
            <!-- Social Links -->
           <div class="d-flex gap-3 py-2">
            <a href="https://github.com/Hidayat-Ali" class="social-icon" aria-label="hidayat github">
              <i class="fab fa-github fa-lg"></i>
            </a>
            <a href="https://www.linkedin.com/in/hidayat-ali-mir-7806271b7/" class="social-icon" aria-label="hidayat linkedin">
              <i class="fab fa-linkedin fa-lg"></i>
            </a>
            <a href="https://x.com/HidayatAlimir1" class="social-icon" aria-label="hidayat twitter">
              <i class="fab fa-twitter fa-lg"></i>
            </a>
          </div>
            </div>
          </div>
     
      </div>

      <!-- Image Section -->
      <div class="col-md-5 order-md-2 order-1 mb-md-0 mb-5">
        <div class="hero-image-wrapper position-relative mx-auto">
          <!-- Floating Gradient -->
          <div class="floating-gradient"></div>

          <!-- Main Hero Image -->
          <div class="hero-main-image mb-3">
            <img src="/abc.png" alt="Hidayat ali mir" class="img-fluid rounded-circle shadow" loading="lazy">
          </div>
        </div>

        <!-- Tech Stack Badges -->
        <div class="tech-stack-badge d-flex flex-wrap justify-content-center gap-2 mt-3">
          <span class="badge badge-icon">JavaScript</span>
          <span class="badge badge-icon1">Python</span>
          <span class="badge badge-icon">C#</span>
          <span class="badge badge-icon1">PHP</span>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
/* 🌌 Hero Section Base */
.hero {
  min-height: 100vh;
  background: var(--main-bg);
  padding: 4rem 0;
  position: relative;
}

/* ✨ Gradient Text */
.gradient-text {
  background: linear-gradient(45deg, var(--primary-color), var(--secondary-color));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

/* 💫 Hero Image Wrapper */
.hero-image-wrapper {
  max-width: 400px;
  margin: 0 auto;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Floating Gradient Behind Image */
.floating-gradient {
  position: absolute;
  width: 250px;
  height: 250px;
  border-radius: 50%;
  background: radial-gradient(circle at center, var(--primary-color), var(--secondary-color) 70%);
  filter: blur(80px);
  z-index: 1;
  animation: float 6s ease-in-out infinite alternate;
}

/* Hero Main Image */
.hero-main-image {
  position: relative;
  z-index: 2;
  padding: 15px;
  border-radius: 50%;
  overflow: hidden;
  transition: transform 0.6s ease;
}

.hero-main-image img {
  width: 250px;
  height: 250px;
  object-fit: cover;
  border: 4px solid var(--soft-color);
  box-shadow: 0 30px 50px -15px rgba(0,0,0,0.3);
  border-radius: 50%;
}

.hero-main-image:hover img {
  transform: scale(1.07) rotate(-1deg);
}

/* Call to Action Button */
.download-cv {
  background-color: var(--secondary-color);
  color: #fff;
  font-weight: 600;
  transition: all 0.3s ease;
}

.download-cv:hover {
  transform: translateY(-3px) scale(1.05);
  box-shadow: 0 8px 25px rgba(0,0,0,0.25);
}

/* Social Icons */
.social-icon {
  width: 50px;
  height: 50px;
  border: 2px solid var(--primary-color);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--body-text-color);
  font-size: 1.2rem;
  transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
}

.social-icon:hover {
  background: var(--primary-color);
  transform: translateY(-5px) rotate(15deg) scale(1.1);
  box-shadow: 0 10px 25px rgba(37, 99, 235, 0.35);
  color: #fff;
}

/* Tech Stack Badges */
.tech-stack-badge {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
}

.badge-icon, .badge-icon1 {
  padding: 0.5rem 1rem;
  border-radius: 30px;
  font-weight: 600;
  color: #fff;
  transition: all 0.3s ease;
}

.badge-icon {
  background: var(--Accent-color);
}

.badge-icon1 {
  background: var(--secondary-color);
}

.badge-icon:hover, .badge-icon1:hover {
  transform: scale(1.1);
  box-shadow: 0 5px 20px rgba(0,0,0,0.2);
}

/* Animations */
@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0px); }
}

/* Typography & Lead Paragraph */
.lead {
  color: var(--body-text-color);
  font-size: clamp(1rem, 2vw, 1.25rem);
  line-height: 1.6;
  margin-bottom: 1.5rem !important;
}

.text-creative {
  color: var(--body-text-color);
}

/* Responsive */
@media (max-width: 991.98px) {
  .hero {
    padding-top: 6rem;
    padding-bottom: 4rem;
  }
  .hero-content {
    text-align: center;
  }
  .hero-main-image img {
    width: 200px;
    height: 200px;
  }
  .display-3 {
    font-size: 2.5rem;
  }
}

@media (max-width: 767.98px) {
  .display-3 {
    font-size: 2.2rem;
  }
  .text-creative {
    font-size: 1.4rem;
  }
  .hero-main-image img {
    width: 180px;
    height: 180px;
  }
}
</style>
