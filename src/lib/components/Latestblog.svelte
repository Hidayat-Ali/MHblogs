<script>
  import { onMount } from 'svelte';

  onMount(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    }, { threshold: 0.1 });

    const blogCards = document.querySelectorAll('.blog-card');
    blogCards.forEach(card => observer.observe(card));

    return () => {
      blogCards.forEach(card => observer.unobserve(card));
      observer.disconnect();
    };
  });
</script>

<section class="blog-section py-5 position-relative overflow-hidden">
  <div class="container">
    <div class="row mb-5">
      <div class="col-12 text-center">
        <h2 class="display-5 fw-bold mb-3 headding">Latest Insights</h2>
        <p class="lead headding">Exploring modern web development trends</p>
      </div>
    </div>

    <div class="row g-4 blog-container">
      <!-- Blog Post 1 -->
      <div class="col-md-6 col-lg-4 blog-card">
        <div class="card h-100 border-0 shadow-hover">
          <div class="card-img-top overflow-hidden position-relative">
            <img src="static/blog-bg.jpeg" class="img-fluid zoom-effect" alt="Blog Post">
            <div class="badge-overlay">
              <span class="badge badge-title">Web Development</span>
              <span class="badge badge-date">15 May 2024</span>
            </div>
          </div>
          <div class="card-body">
            <h5 class="card-title">Modern CSS Techniques 2024</h5>
            <p class="card-text">Discover the latest CSS features revolutionizing frontend development...</p>
            <a href="abc.com" class="stretched-link read-more">
              Read Article
              <i class="bi bi-arrow-right-circle ms-2"></i>
            </a>
          </div>
          <div class="card-footer bg-transparent border-0">
            <div class="d-flex justify-content-between text-muted small">
              <span>8 min read</span>
              <span>245 views</span>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-lg-4 blog-card">
        <div class="card h-100 border-0 shadow-hover">
          <div class="card-img-top overflow-hidden position-relative">
            <img src="static/blog-bg.jpeg" class="img-fluid zoom-effect" alt="Blog Post">
            <div class="badge-overlay">
              <span class="badge bg-primary">Web Development</span>
              <span class="badge bg-secondary">15 May 2024</span>
            </div>
          </div>
          <div class="card-body">
            <h5 class="card-title">Modern CSS Techniques 2024</h5>
            <p class="card-text">Discover the latest CSS features revolutionizing frontend development...</p>
            <a href="abc.com" class="stretched-link read-more">
              Read Article
              <i class="bi bi-arrow-right-circle ms-2"></i>
            </a>
          </div>
          <div class="card-footer bg-transparent border-0">
            <div class="d-flex justify-content-between text-muted small">
              <span>8 min read</span>
              <span>245 views</span>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-lg-4 blog-card">
        <div class="card h-100 border-0 shadow-hover">
          <div class="card-img-top overflow-hidden position-relative">
            <img src="static/blog-bg.jpeg" class="img-fluid zoom-effect" alt="Blog Post">
            <div class="badge-overlay">
              <span class="badge bg-primary">Web Development</span>
              <span class="badge bg-secondary">15 May 2024</span>
            </div>
          </div>
          <div class="card-body">
            <h5 class="card-title">Modern CSS Techniques 2024</h5>
            <p class="card-text">Discover the latest CSS features revolutionizing frontend development...</p>
            <a href="abc.com" class="stretched-link read-more">
              Read Article
              <i class="bi bi-arrow-right-circle ms-2"></i>
            </a>
          </div>
          <div class="card-footer bg-transparent border-0">
            <div class="d-flex justify-content-between text-muted small">
              <span>8 min read</span>
              <span>245 views</span>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-lg-4 blog-card">
        <div class="card h-100 border-0 shadow-hover">
          <div class="card-img-top overflow-hidden position-relative">
            <img src="static/blog-bg.jpeg" class="img-fluid zoom-effect" alt="Blog Post">
            <div class="badge-overlay">
              <span class="badge bg-primary">Web Development</span>
              <span class="badge bg-secondary">15 May 2024</span>
            </div>
          </div>
          <div class="card-body">
            <h5 class="card-title">Modern CSS Techniques 2024</h5>
            <p class="card-text">Discover the latest CSS features revolutionizing frontend development...</p>
            <a href="abc.com" class="stretched-link read-more">
              Read Article
              <i class="bi bi-arrow-right-circle ms-2"></i>
            </a>
          </div>
          <div class="card-footer bg-transparent border-0">
            <div class="d-flex justify-content-between text-muted small">
              <span>8 min read</span>
              <span>245 views</span>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-lg-4 blog-card">
        <div class="card h-100 border-0 shadow-hover">
          <div class="card-img-top overflow-hidden position-relative">
            <img src="static/blog-bg.jpeg" class="img-fluid zoom-effect" alt="Blog Post">
            <div class="badge-overlay">
              <span class="badge bg-primary">Web Development</span>
              <span class="badge bg-secondary">15 May 2024</span>
            </div>
          </div>
          <div class="card-body">
            <h5 class="card-title">Modern CSS Techniques 2024</h5>
            <p class="card-text">Discover the latest CSS features revolutionizing frontend development...</p>
            <a href="abc.com" class="stretched-link read-more">
              Read Article
              <i class="bi bi-arrow-right-circle ms-2"></i>
            </a>
          </div>
          <div class="card-footer bg-transparent border-0">
            <div class="d-flex justify-content-between text-muted small">
              <span>8 min read</span>
              <span>245 views</span>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-lg-4 blog-card">
        <div class="card h-100 border-0 shadow-hover">
          <div class="card-img-top overflow-hidden position-relative">
            <img src="static/blog-bg.jpeg" class="img-fluid zoom-effect" alt="Blog Post">
            <div class="badge-overlay">
              <span class="badge bg-primary">Web Development</span>
              <span class="badge bg-secondary">15 May 2024</span>
            </div>
          </div>
          <div class="card-body">
            <h5 class="card-title">Modern CSS Techniques 2024</h5>
            <p class="card-text">Discover the latest CSS features revolutionizing frontend development...</p>
            <a href="abc.com" class="stretched-link read-more">
              Read Article
              <i class="bi bi-arrow-right-circle ms-2"></i>
            </a>
          </div>
          <div class="card-footer bg-transparent border-0">
            <div class="d-flex justify-content-between text-muted small">
              <span>8 min read</span>
              <span>245 views</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row mt-5">
      <div class="col-12 text-center">
        <a href="abc.com" class="btn btn-outline view-all-posts px-5 py-3">
          View All Posts
          <i class="bi bi-arrow-up-right-circle ms-2"></i>
        </a>
      </div>
    </div>
  </div>

  <!-- Animated Background Elements -->
  <div class="blog-deco blog-deco-1"></div>
  <div class="blog-deco blog-deco-2"></div>
</section>
<style>
.headding{
  color: var(--body-text-color);
  }
.blog-section {
  /* background: linear-gradient(15deg, #f8fafc 0%, #ffffff 100%); */
  background-color: var(--bg-main);
}

.blog-card {

  transform: translateY(30px);
  transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
}

/* .blog-card.in-view {
  opacity: 1;
  transform: translateY(0);
} */

.shadow-hover {
  transition: all 0.4s ease;
  border-radius: 15px;
  overflow: hidden;
  position: relative;
}
.badge-title{
  background-color: var(--Accent-color);
}
.badge-date{
background-color: var(--surface-bg);
color: var(--body-text-color);
}
.shadow-hover{
  background-color: var(--surface-bg);
}
.shadow-hover::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 15px;
  border: 2px solid transparent;

  -webkit-mask: 
     linear-gradient(#fff 0 0) padding-box, 
     linear-gradient(#fff 0 0);
  mask: 
     linear-gradient(#fff 0 0) padding-box, 
     linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  opacity: 0;
  transition: opacity 0.3s ease;
}
.card-title,.card-title{
  color: var(--body-text-color);
}
.shadow-hover:hover {
  transform: translateY(-10px);
  box-shadow: 0 25px 50px -12px rgba(37, 99, 235, 0.25);
}
.view-all-posts{
  background-color: var(--secondary-color);
  color: var(--body-text-color);
}

.shadow-hover:hover::before {
  opacity: 1;
  
}

.zoom-effect {
  transition: transform 0.8s cubic-bezier(0.23, 1, 0.32, 1);
}

.shadow-hover:hover .zoom-effect {
  transform: scale(1.1);
}

.badge-overlay {
  position: absolute;
  top: 15px;
  left: 15px;
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.read-more {
  display: inline-flex;
  align-items: center;
  color: #2563eb;
  text-decoration: none;
  transition: all 0.3s ease;
}

.read-more i {
  transition: transform 0.3s ease;
}

.read-more:hover i {
  transform: translateX(5px);
}

.blog-deco {
  position: absolute;
  background: linear-gradient(45deg, rgba(37, 99, 235, 0.1), transparent);
  filter: blur(50px);
  z-index: 0;
}

.blog-deco-1 {
  width: 300px;
  height: 300px;
  top: -150px;
  right: -150px;
  animation: deco-float 25s infinite linear;
}

.blog-deco-2 {
  width: 250px;
  height: 250px;
  bottom: -100px;
  left: -100px;
  animation: deco-float 30s infinite linear reverse;
}

@keyframes deco-float {
  0% { transform: translate(0, 0) rotate(0deg); }
  25% { transform: translate(-50px, 50px) rotate(90deg); }
  50% { transform: translate(30px, 80px) rotate(180deg); }
  75% { transform: translate(-40px, -30px) rotate(270deg); }
  100% { transform: translate(0, 0) rotate(360deg); }
}

@media (max-width: 768px) {
  .blog-section {
    padding: 4rem 0;
  }
  
  .display-5 {
    font-size: 2rem;
  }
  
  .blog-card {
    margin-bottom: 2rem;
  }
}
</style>