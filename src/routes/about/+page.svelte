<script>
  import { onMount } from 'svelte';
  import { fade, fly } from 'svelte/transition';

  onMount(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
  });
</script>

<section class="about-page">
  <!-- Bismillah Header -->
  <div class="bismillah-header" in:fade={{ delay: 300 }}>
    <h1 class="bismillah">﷽</h1>
  </div>

  <!-- Greeting Section -->
  <div class="greeting-section animate-on-scroll" in:fly={{ y: 50 }}>
    <div class="container">
      <div class="greeting-content">
        <div class="profile-image">
          <img src="/abc.png" alt="Hidayat Ali" class="img-fluid rounded-circle shadow" />
        </div>
        <div>
          <img src="/salam.png" alt="">
          <h2 class="greeting-text">ٱلسَّلَامُ عَلَيْكُمْ</h2>
        </div>
        
      </div>
    </div>
  </div>

  <!-- Story Section -->
  <div class="story-section">
    <div class="container">
      <div class="story-card animate-on-scroll" in:fly={{ y: 50 }}>
        <p class="lead">
          In the name of Allah, the Most Gracious, the Most Merciful.
        </p>
        <p class="story-text">
          My journey began in a small town where I first discovered my passion for technology. From building my first website in high school to developing complex applications, every step has been a testament to Allah's guidance and blessings. <span class="arabic-text">الحمداللہ</span>, I’ve had the opportunity to work on projects that not only challenge me but also make a positive impact.
        </p>
        <p class="story-text">
          I believe in the power of code to solve real-world problems. Whether it’s creating seamless user experiences or optimizing backend systems, I strive to deliver excellence in everything I do. Along the way, I’ve learned that success isn’t just about technical skills but also about perseverance, humility, and gratitude.
        </p>
        <p class="story-text">
          Today, I’m proud to say that I’ve worked with clients from around the world, delivering solutions that exceed expectations. <span class="arabic-text">الحمداللہ</span>, every project has been a stepping stone in my journey, and I’m excited to see where this path leads next.
        </p>
      </div>
    </div>
  </div>
</section>

<style>


  .about-page {
    background: var(--main-bg);
    min-height: 100vh;
    padding: 4rem 0;
  }

  .bismillah-header {
    text-align: center;
    margin-bottom: 3rem;
  }

  .bismillah {
    font-size: 3rem;
    color: var(--primary-color);
    font-family: 'Amiri', serif;
  }

  .greeting-section {
    padding: 2rem 0;
    text-align: center;
  }

  .greeting-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
  }

  .profile-image {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    overflow: hidden;
    border: 4px solid var(--primary-color);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  }

  .profile-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .greeting-text {
    font-size: 2.5rem;
    color: var(--Accent-color);
    font-family: 'Amiri', serif;
    animation: greeting-animation 2s infinite alternate;
  }

  @keyframes greeting-animation {
    0% { transform: translateY(0); }
    100% { transform: translateY(-10px); }
  }

  .story-section {
    padding: 2rem 0;
  }

  .story-card {
    background: var(--surface-bg);
    border-radius: 15px;
    padding: 2rem;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    max-width: 800px;
    margin: 0 auto;
  }


  .lead {
    font-size: 1.5rem;
    color: var(--secondary-color);
    text-align: center;
    margin-bottom: 2rem;
  }

  .story-text {
    font-size: 1.1rem;
    line-height: 1.8;
    color: var(--body-text-color);
    margin-bottom: 1.5rem;
  }

  .arabic-text {
    font-family: 'Amiri', serif;
    font-size: 1.5rem;
    color: var(--Accent-color);
  }

  @media (max-width: 768px) {
    .bismillah {
      font-size: 2rem;
    }

    .greeting-text {
      font-size: 2rem;
    }

    .lead {
      font-size: 1.2rem;
    }

    .story-text {
      font-size: 1rem;
    }
  }
</style>