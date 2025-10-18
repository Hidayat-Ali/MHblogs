<script>
  import { onMount } from 'svelte';
  import { gsap } from 'gsap';

  let isOpen = false;
  let isDarkMode = false;

  const toggleMenu = () => {
    isOpen = !isOpen;
    animateMenu();
  };

  const toggleTheme = () => {
    isDarkMode = !isDarkMode;
    updateThemeClass();
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  };

  const updateThemeClass = () => {
    document.documentElement.classList.toggle('dark', isDarkMode);
  };

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

  onMount(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      isDarkMode = savedTheme === 'dark';
      updateThemeClass();
    }

    gsap.from('.navbar-nav .nav-item', {
      opacity: 0,
      y: -20,
      stagger: 0.2,
      duration: 0.4,
      delay: 0.3,
      ease: 'power2.out',
    });

    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('mouseenter', () => gsap.to(link, { y: -3, scale: 1.05, duration: 0.2 }));
      link.addEventListener('mouseleave', () => gsap.to(link, { y: 0, scale: 1, duration: 0.2 }));
    });
  });
</script>

<nav class="navbar navbar-expand-lg fixed-top">
  <div class="container">
    <a class="navbar-brand" href="/">(H) Blogs</a>

    <button class="navbar-toggler" type="button" on:click={toggleMenu} aria-expanded={isOpen} aria-label="Toggle navigation">
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
        <li class="nav-item"><a class="nav-link" href="/projects">Projects</a></li>
      </ul>

      <button class="btn nav-link theme-btn" on:click={toggleTheme}>
        {#if isDarkMode} ☀️ {:else} 🌙 {/if}
      </button>
    </div>
  </div>
</nav>

<style>
/* Navbar Base */
.navbar {
  background: var(--main-bg);
  padding: 1rem 2rem;
  z-index: 1000;
  transition: background 0.3s ease;
}
.navbar .navbar-brand {
  font-weight: 800;
  font-size: 1.8rem;
  color: var(--Accent-color);
  transition: transform 0.5s ease;
}
.navbar .navbar-brand:hover {
  transform: scale(1.1) rotateY(10deg);
}

/* Navbar Links */
.nav-link {
  color: var(--body-text-color);
  position: relative;
  padding: 0.5rem 1rem;
  font-weight: 500;
  transition: all 0.3s ease;
}
.nav-link::after {
  content: '';
  position: absolute;
  bottom: -3px;
  left: 0;
  width: 0%;
  height: 2px;
  background: var(--Accent-color);
  transition: width 0.3s ease;
}
.nav-link:hover::after {
  width: 100%;
}

/* Theme Button */
.theme-btn {
  cursor: pointer;
  font-size: 1.2rem;
  margin-left: 1rem;
  background: none;
  border: none;
  color: var(--body-text-color);
  transition: transform 0.3s ease, color 0.3s ease;
}
.theme-btn:hover {
  transform: scale(1.2);
  color: var(--Accent-color);
}

/* Navbar Toggler */
.navbar-toggler {
  font-size: 1.5rem;
  border: none;
  background: none;
  color: var(--body-text-color);
  cursor: pointer;
  transition: transform 0.3s ease;
}
.navbar-toggler:hover {
  transform: scale(1.1);
}
.close-icon, .menu-icon {
  font-size: 1.8rem;
}

/* Mobile Menu */
.navbar-collapse {
  display: none;
  transition: all 0.4s ease;
}
.navbar-collapse.show {
  display: block;
  background: var(--main-bg);
  padding: 1rem 1.5rem;
  border-radius: 12px;
  margin-top: 0.5rem;
}

/* Responsive */
@media(max-width:991.98px){
  .navbar-collapse {
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    width: 90%;
    box-shadow: 0 10px 25px rgba(0,0,0,0.1);
  }
  .nav-link { text-align: center; }
  .theme-btn { margin: 1rem auto 0; display: block; }
  .navbar-nav { flex-direction: column; gap: 0.5rem; }
}
</style>
