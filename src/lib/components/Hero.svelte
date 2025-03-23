<section class="hero d-flex align-items-center position-relative overflow-hidden">
  <div class="container">
    <div class="row align-items-center">
      <!-- Text Content -->
      <div class="col-md-7 order-md-1 order-2">
        <div class="hero-content">
          <h6 class="text-primary mb-3">Hi, I'm</h6>
          <h1 class="display-3 fw-bold mb-4 gradient-text">Hidayat Ali</h1>
          <h2 class="h3 mb-4 text-creative">Creative <span class="text-primary">Full-Stack Developer</span></h2>
          
          <div class="about-me mb-5">
            <p class="lead">Building digital experiences that combine innovation with solid engineering. Specializing in modern web technologies and user-centric design principles.</p>
          </div>

          <!-- Call to Action -->
          <div class="d-flex flex-wrap gap-3 align-items-center">
            <a href="#contact" class="btn download-cv btn-lg px-5 py-3">
              Download CV <i class="fas fa-download ms-2"></i>
            </a>
            
            <!-- Social Links -->
           <div class="d-flex gap-3 py-5">
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
        <div class="hero-image-wrapper position-relative">
          <!-- Image -->
          <div class="hero-main-image mb-3">
            <img src="/abc.png" alt="Hidayat ali mir" class="img-fluid rounded-circle shadow" loading="lazy">
          </div>
          <div class="hero-image-bg"></div>
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
  .hero {
  background: var(--main-bg);
}

.gradient-text {
  background: linear-gradient(45deg, var(--primary-color), var(--secondary-color));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.hero-image-wrapper {
  max-width: 400px;
  margin: 0 auto;
}

.badge-icon {
  background-color: var(--Accent-color);
}



.hero-main-image {
  position: relative;
  z-index: 2;
  padding: 15px;
}

.hero-main-image img {
  border: 3px solid var(--soft-color);
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

.download-cv {
  background-color: var(--secondary-color);
  color: white
}

.hero-image-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, var(--primary-color), var(--secondary-color));
  border-radius: 50%;
  z-index: 1;
  animation: float 6s ease-in-out infinite;
}

.lead {
  color: var(--body-text-color);
}
.social-icon {
  width: 45px;
  height: 45px;
  border: 2px solid var(--primary-color);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--body-text-color);
  transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
}

.social-icon:hover {
  background: var(--primary-color);
  transform: translateY(-5px) rotate(15deg);
  box-shadow: 0 10px 20px rgba(37, 99, 235, 0.3);
  color: white;
}
.text-creative {
  color: var(--body-text-color);
}

.tech-stack-badge {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  margin-top: 20px; /* Space between image and badges */
  position: static; /* Remove absolute positioning */
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}

@keyframes shape-move {
  0% { transform: translate(0) rotate(0deg); }
  25% { transform: translate(50px, 50px) rotate(90deg); }
  50% { transform: translate(-30px, 80px) rotate(180deg); }
  75% { transform: translate(40px, -30px) rotate(270deg); }
}

.badge-icon1 {
  background-color: var(--secondary-color);
}

@media (max-width: 991.98px) {
  .hero {
    padding-top: 20rem;
    height: auto;
    min-height: 100vh;
  }

  .display-3 {
    font-size: 2.5rem;
  }

  .hero-image-wrapper {
    max-width: 300px;
  }
}

.hero {
  min-height: 100vh;
  height: auto;
  padding: 2rem 0;
}

.about-me {
  max-width: 600px;
}

.lead {
  font-size: clamp(1rem, 2vw, 1.25rem);
  line-height: 1.6;
  margin-bottom: 1.5rem !important;
}

@media (max-width: 991.98px) {
  .hero {
    padding-top: 6rem;
    padding-bottom: 4rem;
  }

  .lead {
    font-size: 1.1rem;
  }

  .hero-content {
    text-align: center;
  }

  .d-flex.flex-wrap {
    justify-content: center;
  }
}

@media (max-width: 767.98px) {
  .display-3 {
    font-size: 2.2rem !important;
  }

  .text-creative {
    font-size: 1.4rem;
  }

}

</style>
