<script>
  import { onMount } from 'svelte';
  import { getLatestPosts } from '$lib/Api/wordpress';

  let posts = []; 
  let isLoading = true; 
  let error = null;

  onMount(async () => {
    try {
      posts = await getLatestPosts();
      console.log(posts)
    } catch (err) {
      error = err.message || 'Failed to fetch posts';
    } finally {
      isLoading = false;
    }
  });
</script>

<section class="blog-section py-5">
  <div class="container">
    <div class="row mb-5 text-center">
      <div class="col-12">
        <h2 class="display-5 fw-bold headding">Latest Insights</h2>
        <p class="lead headding">Exploring modern web development trends</p>
      </div>
    </div>

    <div class="row g-4">
      {#if isLoading}
        <div class="col-12 text-center"><p>Loading posts...</p></div>
      {:else if error}
        <div class="col-12 text-center"><p style="color: red;">Error: {error}</p></div>
      {:else if posts.posts.length > 0}
        {#each posts.posts as post}
          <div class="col-md-6 col-lg-4">
            <div class="card h-100 glass-card">
              <div class="card-img-top">
                <img src={post.featured_image_url || '/blog-bg.jpeg'} class="img-fluid zoom-effect" alt={post.title.rendered}>
                <div class="image-overlay">
                  <span class="badge badge-title">Web Development</span>
                  <span class="badge badge-date">{new Date(post.date).toLocaleDateString()}</span>
                </div>
              </div>
              <div class="card-body">
                <h5 class="card-title">{post.title.rendered}</h5>
                <div class="card-text">{@html post.excerpt.rendered}</div>
                <a href={`/blog/${post.slug}`} class="btn read-more">
                  Read Full Article <i class="bi bi-arrow-right-circle ms-2"></i>
                </a>
              </div>
              <div class="card-footer bg-transparent border-0 d-flex justify-content-between text-muted small">
                <span>8 min read</span>
                <span class="badge badge-author">By Ali</span>
              </div>
            </div>
          </div>
        {/each}
      {:else}
        <div class="col-12 text-center"><p>No posts found.</p></div>
      {/if}
    </div>

    <div class="row mt-5 text-center">
      <div class="col-12">
        <a href="/blog" class="btn view-all-posts px-5 py-3">
          View All Posts <i class="bi bi-arrow-up-right-circle ms-2"></i>
        </a>
      </div>
    </div>
  </div>
</section>

<style>
/* Headings */
.headding { color: var(--body-text-color); font-weight: 700; letter-spacing: 0.5px; text-transform: uppercase; }

/* Blog Section */
.blog-section { background-color: var(--main-bg); }

/* Glass Cards */
.glass-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(15px);
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 25px rgba(0,0,0,0.1);
  transition: all 0.4s ease;
}
.glass-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.2);
}

/* Image */
.card-img-top {
  position: relative;
  border-radius: 20px 20px 0 0;
  overflow: hidden;
}
.zoom-effect { transition: transform 0.4s ease; }
.glass-card:hover .zoom-effect { transform: scale(1.05); }

/* Overlay */
.image-overlay {
  position: absolute;
  top: 10px; left: 10px;
  display: flex; gap: 6px; flex-wrap: wrap;
}
.badge-title {
  background: linear-gradient(45deg, #2563EB, #3B82F6);
  color: #fff; font-weight: 600; padding: 0.35rem 0.8rem; border-radius: 30px; font-size: 0.75rem;
}
.badge-date {
  background-color: rgba(255,255,255,0.2); color: #fff; padding: 0.3rem 0.7rem; border-radius: 20px; font-size: 0.7rem;
}

/* Card Text */
.card-title { color: var(--Accent-color); font-weight: 700; margin-top: 0.5rem; }
.card-text { color: var(--body-text-color); opacity: 0.9; margin: 1rem 0; }

/* Read More Button */
.read-more {
  display: inline-flex; align-items: center; padding: 0.5rem 1rem; border-radius: 25px;
  color: #fff; text-decoration: none; background: var(--secondary-color);
  transition: all 0.3s ease;
}
.read-more:hover { transform: translateY(-2px) scale(1.05); box-shadow: 0 10px 20px rgba(0,0,0,0.25); }
.read-more i { transition: transform 0.3s ease; }
.read-more:hover i { transform: translateX(5px); }

/* Card Footer */
.badge-author {
  background: linear-gradient(45deg, #2563EB, #3B82F6);
  color: #fff; padding: 0.25rem 0.8rem; border-radius: 20px; font-size: 0.8rem;
}

/* View All Button */
.view-all-posts {
  background: linear-gradient(45deg, #3B82F6, #2563EB); color: #fff; border-radius: 30px;
  transition: all 0.3s ease;
}
.view-all-posts:hover { transform: translateY(-2px) scale(1.05); box-shadow: 0 10px 20px rgba(0,0,0,0.25); }

/* Responsive */
@media(max-width:768px){ .display-5{ font-size: 2rem; } }
</style>
