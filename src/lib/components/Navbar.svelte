<script>
  import { onMount } from 'svelte';
  import { gsap } from 'gsap';

let isOpen = false;
  let isDarkMode = false;

  // Toggle mobile menu
  const toggleMenu = () => {
    isOpen = !isOpen;
    animateMenu();
  };

  // Toggle theme with localStorage
  const toggleTheme = () => {
    isDarkMode = !isDarkMode;
    updateThemeClass();
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  };

  // Update theme class on document element
  const updateThemeClass = () => {
    document.documentElement.classList.toggle('dark', isDarkMode);
  };

  // Enhanced menu animation
  const animateMenu = () => {
    const mobileMenu = document.querySelector('.navbar-collapse');
    const navItems = document.querySelectorAll('.nav-item');
    
    if (!mobileMenu) return;

    if (isOpen) {
      gsap.fromTo(mobileMenu,
        { opacity: 0, y: -20, display: 'none' },
        {
          opacity: 1,
          y: 0,
          display: 'block',
          duration: 0.5,
          ease: 'power2.out',
          onComplete: () => {
            gsap.fromTo(navItems, 
              { opacity: 0, y: -15, scale: 0.8, rotation: -3 },
              {
                opacity: 1,
                y: 0,
                scale: 1,
                rotation: 0,
                duration: 0.4,
                stagger: 0.15,
                ease: 'elastic.out(1.2, 0.3)'
              }
            );
          }
        }
      );
    } else {
      gsap.to(navItems, {
        opacity: 0,
        y: -15,
        scale: 0.8,
        rotation: 3,
        duration: 0.3,
        stagger: -0.1,
        ease: 'power2.in',
        onComplete: () => {
          gsap.to(mobileMenu, {
            opacity: 0,
            y: -20,
            duration: 0.3,
            ease: 'power2.out',
            onComplete: () => {
              mobileMenu.style.display = 'none';
            }
          });
        }
      });
    }
  };

  // Initialize theme and animations
  onMount(() => {
    // Load saved theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      isDarkMode = savedTheme === 'dark';
      updateThemeClass(); // Initialize theme class on mount
    }

    // Page load animations
    gsap.from('.navbar-nav .nav-item', {
      opacity: 0,
      y: -20,
      stagger: 0.2,
      duration: 0.4,
      delay: 0.3,
      ease: 'power2.out',
    });

    // Hover animations
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('mouseenter', () => gsap.to(link, { y: -5, duration: 0.2 }));
      link.addEventListener('mouseleave', () => gsap.to(link, { y: 0, duration: 0.2 }));
    });
  });
</script>

<nav class="navbar navbar-expand-lg shadow-sm fixed-top">
  <div class="container">
    <a class="navbar-brand" href="/">(H) Blogs</a>

    <button
      class="navbar-toggler"
      type="button"
      on:click={toggleMenu}
      aria-expanded={isOpen}
      aria-label="Toggle navigation"
    >
      {#if isOpen}
        <span class="close-icon">×</span>
      {:else}
        <span class="menu-icon">☰</span>
      {/if}
    </button>

    <div class="navbar-collapse {isOpen ? 'show' : ''}">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item"><a class="nav-link" href="/">Home</a></li>
        <li class="nav-item"><a class="nav-link" href="/about">About</a></li>
        <li class="nav-item"><a class="nav-link" href="/blog">Blogs</a></li>
        <!-- <li class="nav-item"><a class="nav-link" href="/contact">Contact</a></li> -->
      </ul>

      <button class="btn btn-link nav-link theme-btn" on:click={toggleTheme}>
        {#if isDarkMode}
          <span>☀️</span>
        {:else}
          <span> 🌙 </span>
        {/if}
      </button>
    </div>
  </div>
</nav>

<style>
  
  .navbar {
    background: var(--main-bg);
    box-shadow: var(--nav-shadow);
    z-index: 1000;
  }

  .navbar-collapse {
    display: none;
  }

  .navbar-collapse.show {
    display: block;
  }

  .nav-link {
    position: relative;
    padding: 0.5rem 1rem;
    color: var(--body-text-color);
    transition: all 0.3s ease;
  }

  .nav-link:hover {
    color: var(--body-text-color);
  }

  .nav-link::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 2px;
    transition: width 0.3s ease;
  }

  .nav-link:hover::after {
    width: 100%;
  }

  .theme-btn, .navbar-toggler {
    outline: none !important;
    box-shadow: none !important;
    transition: transform 0.2s ease;
  }

  .theme-btn:hover {
    transform: scale(1.1);
  }

  @media (max-width: 991.98px) {
    .navbar-collapse {
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      background: var(--main-bg);
      padding: 1rem;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      z-index: 1000;
    }

    :global(.dark) .navbar-collapse {
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
    }

    .navbar-toggler {
      font-size: 1.5rem;
      padding: 0.5rem;
    }

    .close-icon {
      font-size: 1.8rem;
      line-height: 1;
      color: var(--body-text-color);
    }
.menu-icon{
      color: var(--body-text-color);
}
  }
</style>