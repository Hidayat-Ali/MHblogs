<script>
  export let data;
  const { posts, error } = data;
</script>

<svelte:head>
  <title>All Blogs | Hidayat Ali Mir</title>
</svelte:head>

<section class="all-Blogs py-5 mt-2">
  <h1 class="heading1 text-center">All Blogs</h1>

  {#if error}
    <p class="error">{error}</p>
  {:else if posts.length > 0}
    <div class="blogs-grid">
      {#each posts as post (post.slug)}
        <div class="post-card" data-aos="fade-up">
          <div class="post-image">
            {#if post.featuredImage}
              <img src={post.featuredImage} alt={post.title} loading="lazy" />
            {/if}
          </div>
          <div class="post-content">
            <h2 class="post-title">{post.title}</h2>
            <p class="excerpt">{@html post.excerpt}</p>
            <p class="date"><b>📅</b> {post.date}</p>
            <a href={`/blog/${post.slug}`} class="read-more">Read more →</a>
          </div>
        </div>
      {/each}
    </div>
  {:else}
    <p class="text-center">Sorry, no posts available.</p>
  {/if}
</section>

<style>
/* 🌌 Section background with gradient + blend */
.all-Blogs {
  padding-top: 6rem !important;
  min-height: 100vh;
  background: 
    linear-gradient(
      to bottom right,
      #0f172a,
      #1e293b,
      rgba(255, 255, 255, 0.12)
    ),
    url("https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=80")
      no-repeat center center / cover;
  background-blend-mode: overlay;
  backdrop-filter: blur(6px);
  padding: 3rem 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  transition: background 0.4s ease;
}

/* ✨ Heading */
.heading1 {
  color: var(--Accent-color);
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 2rem;
  position: relative;
  text-align: center;
}

.heading1::after {
  content: "";
  position: absolute;
  width: 80px;
  height: 3px;
  background: var(--Accent-color);
  bottom: -8px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 10px;
}

/* 🧩 Blog grid */
.blogs-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.8rem;
  width: 100%;
  max-width: 1200px;
}

/* 💎 Glassmorphism card */
.post-card {
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 20px;
  overflow: hidden;
  backdrop-filter: blur(12px);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
}

.post-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.4);
}

/* 🖼️ Image styling */
.post-image img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  transition: transform 0.4s ease;
  border-bottom: 1px solid rgba(255, 255, 255, 0.15);
}

.post-card:hover img {
  transform: scale(1.05);
}

/* 📜 Content area */
.post-content {
  padding: 1.5rem;
  color: var(--body-text-color);
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.post-title {
  font-size: 1.5rem;
  margin-bottom: 0.8rem;
  color: var(--Accent-color);
}

.excerpt {
  color: var(--body-text-color);
  opacity: 0.9;
  line-height: 1.6;
  margin-bottom: 1rem;
  flex-grow: 1;
}

.date {
  font-size: 0.9rem;
  opacity: 0.8;
  margin-bottom: 1.2rem;
}

/* 🔗 Read more button */
.read-more {
  display: inline-block;
  padding: 0.6rem 1.2rem;
  border-radius: 30px;
  background-color: var(--Accent-color);
  color: #fff;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
}

.read-more:hover {
  background-color: #fff;
  color: var(--Accent-color);
  transform: scale(1.05);
}

/* 📱 Mobile responsiveness */
@media (max-width: 992px) {
  .blogs-grid {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
  }

  .post-image img {
    height: 180px;
  }
}

@media (max-width: 768px) {
  .heading1 {
    font-size: 2rem;
  }

  .post-content {
    padding: 1rem;
  }

  .post-title {
    font-size: 1.3rem;
  }

  .post-image img {
    height: 160px;
  }

  .read-more {
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {
  .blogs-grid {
    gap: 1rem;
  }

  .post-image img {
    height: 140px;
  }

  .post-title {
    font-size: 1.1rem;
  }
}
</style>
