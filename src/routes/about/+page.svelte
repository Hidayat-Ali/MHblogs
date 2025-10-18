<script>
  import { aboutData } from '../../Data/about';
  import { fade, fly } from 'svelte/transition';
  import { onMount } from 'svelte';

  onMount(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, { threshold: 0.2 });

    document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
  });
</script>

<svelte:head>
  <meta name="description" content="About Hidayat Ali — Software Engineer & AI Enthusiast" />
  <meta property="og:title" content="About — Hidayat Ali" />
  <meta property="og:description" content="Software Engineer passionate about AI, Web Development, and Technology." />
</svelte:head>

<section class="about-wrapper">
  <div class="container">
    <!-- Header -->
    <div class="intro-section animate-on-scroll" in:fade={{ delay: 200 }}>
      <h1 class="title">About Me</h1>
      <p class="subtitle">Building impactful solutions with code, creativity, and continuous learning.</p>
    </div>

    <!-- Profile Card -->
    <div class="profile animate-on-scroll" in:fly={{ y: 50 }}>
      <img src="/abc.png" alt="Hidayat Ali" class="profile-img" loading="lazy" />
      <div class="profile-info">
        <h2 class="name">Hidayat Ali</h2>
        <p class="role">Software Engineer | Passionate AI Learner</p>
        <p class="desc">
          I’m an engineer driven by curiosity and the love for technology. From crafting frontend interfaces to exploring 
          the depths of AI and machine learning, my journey is about building intelligent, scalable, and meaningful systems 
          that can make a difference.
        </p>
      </div>
    </div>

    <!-- Education Section -->
    <div class="card-section animate-on-scroll" in:fly={{ y: 50 }}>
      <h2 class="section-title">🎓 Education</h2>
      <div class="grid">
        {#each aboutData.education as edu}
          <div class="card">
            <h3>{edu.title}</h3>
            <p class="result">{edu.result}</p>
          </div>
        {/each}
      </div>
    </div>

    <!-- Experience Section -->
    <div class="card-section animate-on-scroll" in:fly={{ y: 50 }}>
      <h2 class="section-title">💼 Experience</h2>
      <div class="grid">
        {#each aboutData.experience as exp}
          <div class="card">
            <h3>{exp.role}</h3>
            <p class="company">{exp.company}</p>
            <span class="duration">{exp.duration}</span>
          </div>
        {/each}
      </div>
    </div>

    <!-- Passion Section -->
    <div class="passion animate-on-scroll" in:fly={{ y: 50 }}>
      <h2 class="section-title">🚀 Passion for AI</h2>
      <p class="passion-text">
        I’m deeply passionate about Artificial Intelligence — from <b>Computer Vision</b> and <b>Machine Learning</b> to 
        <b>Generative AI</b> and <b>Natural Language Processing</b>. I love experimenting with AI tools, exploring 
        real-world applications, and continuously learning how AI can redefine innovation.
      </p>
    </div>
  </div>
</section>

<style>
  .about-wrapper {
    background: var(--main-bg);
    color: var(--body-text-color);
    min-height: 100vh;
    padding: 3rem 1rem;
    padding-top: 6rem;
    transition: background 0.3s, color 0.3s;
  }

  .container {
    max-width: 1100px;
    margin: auto;
  }

  .intro-section {
    text-align: center;
    margin-bottom: 3rem;
  }

  .title {
    color: var(--primary-color);
    font-size: 2.8rem;
    font-weight: 700;
  }

  .subtitle {
    color: var(--secondary-color);
    font-size: 1.2rem;
    margin-top: 0.5rem;
  }

  /* Profile Card */
  .profile {
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--surface-bg);
    border-radius: 1.5rem;
    box-shadow: 0 10px 25px rgba(0,0,0,0.1);
    padding: 2rem;
    margin-bottom: 4rem;
    flex-wrap: wrap;
    gap: 2rem;
  }

  .profile-img {
    width: 160px;
    height: 160px;
    border-radius: 50%;
    object-fit: cover;
    border: 4px solid var(--Accent-color);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }

  .profile-info {
    max-width: 600px;
    text-align: center;
  }

  .name {
    font-size: 2rem;
    color: var(--primary-color);
  }

  .role {
    color: var(--Accent-color);
    font-weight: 600;
    margin-bottom: 0.8rem;
  }

  .desc {
    font-size: 1rem;
    line-height: 1.7;
    color: var(--body-text-color);
  }

  /* Cards */
  .card-section {
    margin-bottom: 4rem;
  }

  .section-title {
    color: var(--Accent-color);
    font-size: 1.9rem;
    text-align: center;
    margin-bottom: 1.5rem;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 1.5rem;
  }

  .card {
    background: var(--surface-bg);
    border-radius: 1rem;
    padding: 1.5rem;
    text-align: center;
    transition: transform 0.3s, box-shadow 0.3s;
    border: 1px solid var(--border-color, rgba(0, 0, 0, 0.1));
  }

  .card:hover {
    transform: translateY(-6px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
  }

  .card h3 {
    color: var(--primary-color);
    font-size: 1.3rem;
    margin-bottom: 0.5rem;
  }

  .card .result, .card .company {
    color: var(--body-text-color);
    font-size: 1rem;
  }

  .duration {
    display: block;
    margin-top: 0.5rem;
    color: var(--secondary-color);
    font-size: 0.9rem;
  }

  /* Passion */
  .passion {
    background: linear-gradient(145deg, var(--surface-bg), rgba(0, 0, 0, 0.05));
    border-radius: 1.5rem;
    padding: 2rem;
    box-shadow: 0 8px 25px rgba(0,0,0,0.08);
  }

  .passion-text {
    text-align: center;
    font-size: 1.1rem;
    line-height: 1.8;
    color: var(--body-text-color);
  }

  /* Mobile Responsive */
  @media (max-width: 768px) {
    .title { font-size: 2.2rem; }
    .profile { flex-direction: column; text-align: center; }
    .profile-info { text-align: center; }
    .profile-img { width: 130px; height: 130px; }
  }
</style>
