<script>
  export let data;
  let { post, isLoading } = data;

  const goBack = () => {
    history.back(); // Goes back to the previous page
  };
</script>

<svelte:head>
  <title>{post?.title} - Hidayat Ali Mir</title>
  <meta name="description" content={post?.excerpt} />
  <meta property="og:title" content={post?.title} />
  <meta property="og:description" content={post?.excerpt} />
  <meta property="og:image" content={post?.featured_image} />
</svelte:head>

<article class="blog-page">
  {#if isLoading}
    <h1 class="loading">Loading...</h1>
  {:else if post}
    <section class="post-container">
      
      <!-- Integrated Back Button -->
      <button class="back-btn" on:click={goBack}>
        ← Back to Blogs
      </button>

      <h1 class="post-title">{@html post?.title}</h1>

      {#if post.featured_image}
        <div class="image-wrapper">
          <img
            class="featured-img"
            src={post.featured_image}
            alt={post.title}
            loading="lazy"
          />
        </div>
      {/if}

      <div class="post-meta">
        <p class="date">📅 Published on: <b>{post.date}</b></p>
      </div>

      <div class="post-content">
        {@html post.content}
      </div>
    </section>
  {:else}
    <p class="no-post">No post available for this {post.slug}</p>
  {/if}
</article>

<style>
.blog-page {
  min-height: 100vh;
  padding: 4rem 1rem 2rem; /* keep padding from top */
  display: flex;
  justify-content: center;
  align-items: flex-start;
  color: var(--body-text-color);
  background: transparent;
}

.post-container {
  max-width: 900px;
  width: 100%;
  background: transparent; /* no background, blends with page */
  border: none; /* remove any border */
  border-radius: 20px;
  backdrop-filter: none; /* remove glass effect if any */
  padding: 2.5rem 0; /* keep spacing inside */
  animation: fadeIn 0.8s ease;
}

/* Integrated Fancy Back Button */
.back-btn {
  display: inline-flex;
  align-items: center;
  padding: 0.6rem 1.2rem;
  background: var(--primary-color);
  color: #fff;
  font-weight: 600;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-bottom: 1.5rem;
}
.back-btn:hover {
  background: linear-gradient(135deg, #2575fc, #6a11cb);
  transform: translateY(-2px) scale(1.05);
}

/* Heading */
.post-title {
  font-size: 2.2rem;
  color: var(--Accent-color);
  text-align: center;
  margin-bottom: 1.8rem;
  line-height: 1.4;
  font-weight: 700;
  letter-spacing: 0.5px;
  position: relative;
}
.post-title::after {
  content: "";
  position: absolute;
  bottom: -10px;
  left: 50%;
  width: 100px;
  height: 3px;
  background-color: var(--Accent-color);
  transform: translateX(-50%);
  border-radius: 10px;
}

.image-wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 2rem 0;
  overflow: hidden;
  border-radius: 20px;
}
.featured-img {
  width: 100%;
  max-width: 800px;
  height: auto;
  object-fit: cover;
  transition: transform 0.6s ease;
  border-radius: 20px;
}
.image-wrapper:hover .featured-img {
  transform: scale(1.05);
}

.post-meta {
  text-align: center;
  font-size: 0.95rem;
  opacity: 0.85;
  margin-bottom: 2rem;
}

.post-content {
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--body-text-color);
  opacity: 0.95;
}
.post-content p {
  margin-bottom: 1.2rem;
}
.post-content img {
  max-width: 100%;
  border-radius: 10px;
  margin: 1.5rem 0;
}
.post-content h2,
.post-content h3 {
  color: var(--Accent-color);
  margin-top: 2rem;
  margin-bottom: 1rem;
}
.post-content a {
  color: var(--Accent-color);
  text-decoration: none;
  transition: color 0.3s ease;
}
.post-content a:hover {
  color: #fff;
}

.loading,
.no-post {
  text-align: center;
  color: var(--Accent-color);
  margin-top: 4rem;
  font-size: 1.5rem;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Responsive */
@media (max-width: 900px) {
  .post-container {
    padding: 1.5rem 0;
  }
  .post-title {
    font-size: 1.8rem;
  }
}

@media (max-width: 600px) {
  .featured-img {
    width: 100%;
  }
  .post-title {
    font-size: 1.6rem;
  }
  .post-content {
    font-size: 1rem;
  }
  .back-btn {
    width: 100%;
    text-align: center;
    font-size: 0.95rem;
    padding: 0.5rem 1rem;
  }
}
</style>
