<script>
  import { projects } from '../../Data/projects.js';
  import { fly, fade } from 'svelte/transition';
</script>

<section class="projects-section">
  <div class="container">
    <div class="header" in:fade={{ duration: 600 }}>
      <h1 class="title">🚀 Projects Showcase</h1>
      <p class="subtitle">A glimpse of my development journey and experiments with AI, Web, and APIs.</p>
    </div>

    <div class="projects-grid">
      {#each projects as project, i}
        <a
          href={project.link}
          target="_blank"
          class="project-card"
          style="background-image: url({project.image});"
          in:fly={{ y: 40, delay: 150 * i }}
        >
          <div class="overlay"></div>
          <div class="content">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <div class="tech-tags">
              {#each project.tech as tech}
                <span class="tag">{tech}</span>
              {/each}
            </div>
          </div>
        </a>
      {/each}
    </div>
  </div>
</section>

<style>
  .projects-section {
    background: var(--main-bg);
    color: var(--body-text-color);
    padding: 4rem 1rem;
    padding-top: 6rem;
    transition: background 0.3s ease, color 0.3s ease;
  }

  .container {
    max-width: 1200px;
    margin: auto;
  }

  .header {
    text-align: center;
    margin-bottom: 3rem;
  }

  .title {
    font-size: 2.5rem;
    color: var(--primary-color);
  }

  .subtitle {
    color: var(--secondary-color);
    font-size: 1.1rem;
    margin-top: 0.5rem;
  }

  /* --- Project Grid --- */
  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
  }

  .project-card {
    position: relative;
    height: 280px;
    border-radius: 1.5rem;
    overflow: hidden;
    text-decoration: none;
    color: inherit;
    display: flex;
    align-items: flex-end;
    background-size: cover;
    background-position: center;
    background-blend-mode: overlay;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
    transition: transform 0.4s ease, box-shadow 0.4s ease;
  }

  .project-card:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
  }

  .overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.2));
    mix-blend-mode: multiply;
    transition: opacity 0.3s;
  }

  .project-card:hover .overlay {
    opacity: 0.6;
  }

  .content {
    position: relative;
    padding: 1.5rem;
    z-index: 2;
  }

  .content h2 {
    font-size: 1.4rem;
    color: var(--Accent-color);
    margin-bottom: 0.5rem;
  }

  .content p {
    font-size: 0.95rem;
    color: var(--body-text-color);
    opacity: 0.9;
  }

  .tech-tags {
    margin-top: 0.8rem;
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .tag {
    background: var(--surface-bg);
    color: var(--primary-color);
    font-size: 0.75rem;
    padding: 0.3rem 0.6rem;
    border-radius: 0.6rem;
    border: 1px solid var(--border-color, rgba(255,255,255,0.2));
    backdrop-filter: blur(4px);
  }

  /* Responsive */
  @media (max-width: 768px) {
    .title {
      font-size: 2rem;
    }
    .project-card {
      height: 240px;
    }
    .content h2 {
      font-size: 1.2rem;
    }
  }
</style>
