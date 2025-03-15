<script>
  import { onMount } from 'svelte';
  
  let showBackToTop = false;
 const email = "your-email@example.com";

    // Function to handle the button click
    function handleClick() {
        window.location.href = `mailto:${email}`;
    }
  onMount(() => {
    const handleScroll = () => {
      showBackToTop = window.scrollY > 500;
    };

    window.addEventListener('scroll', handleScroll);
    
    // Cleanup function
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
</script>
<footer class="footer-section position-relative overflow-hidden  py-5">

  
  <div class="container">
    <div class="row g-5">
      <!-- Brand Column -->
      <div class="col-lg-4">
        <div class="footer-brand">
          <h2 class="mb-3 hover-rotate-3d footer-text">HA</h2>
          
        </div>
      </div>

      <!-- Skills Progress -->
      <div class="col-lg-4">
        <div class="h4 footer-text">Quick Links</div>
        <div class="d-flex gap-3 py-5">
            <a href="#" class="social-icon">
              <i class="fab fa-github fa-lg"></i>
            </a>
            <a href="#" class="social-icon">
              <i class="fab fa-linkedin fa-lg"></i>
            </a>
            <a href="#" class="social-icon">
              <i class="fab fa-codepen fa-lg"></i>
            </a>
          </div>
      </div>
      <div class="back-to-top" class:show={showBackToTop}>
        <a href="#" on:click|preventDefault={scrollToTop} class="text-white">
          <i class="fas fa-arrow-up"></i>
        </a>
      </div>
      <!-- Contact Form -->
      <div class="col-lg-4">
<button class="contact-button" on:click={handleClick}>
        <span>Contact Me</span>
        <div class="icon">
            <!-- Email Icon -->
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <path fill="none" d="M0 0h24v24H0z"/>
                <path fill="currentColor" d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm17 4.238l-7.928 7.1L4 7.216V19h16V7.238zM4.511 5l7.55 6.662L19.502 5H4.511z"/>
            </svg>
        </div>
    </button>
          
        </div>
 
     
    </div>
   

    <!-- Copyright with Floating Effect -->
    <div class="row mt-5">
      <div class="col-12">
        <div class="copyright-text text-center">
          <p class="text-muted mb-0 hover-float">
            © 2024 Hidayat Ali • developed with <span class="text-danger">♥</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Back to Top -->
  <div class="back-to-top">
    <a href="#" class="text-white">
      <i class="fas fa-arrow-up"></i>
    </a>
  </div>
</footer>

<style>

.footer-section{
    background-color: var(--main-bg);
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


.back-to-top {
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 40px;
  height: 40px;
  background: var(--secondary-color);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: all 0.3s ease;
}

.back-to-top.show {
  opacity: 1;
}
.footer-text{
  color: var(--body-text-color);
}

.contact-button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 15px 30px;
        font-size: 18px;
        font-weight: bold;
        color: #fff;
        background: var(--primary-color);
        border: none;
        border-radius: 50px;
        cursor: pointer;
        text-decoration: none;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        transition: all 0.3s ease;
        position: relative;
        overflow: hidden;
    }

    /* Button Hover Effect */
    .contact-button:hover {
        background: linear-gradient(135deg, #2575fc, #6a11cb);
        box-shadow: 0 6px 8px rgba(0, 0, 0, 0.2);
        transform: translateY(-2px);
    }

    /* Button Active Effect */
    .contact-button:active {
        transform: translateY(0);
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    /* Button Icon */
    .contact-button .icon {
        margin-left: 10px;
        transition: transform 0.3s ease;
    }

    /* Button Icon Animation on Hover */
    .contact-button:hover .icon {
        transform: translateX(5px);
    }

    /* Responsive Design */
    @media (max-width: 768px) {
        .contact-button {
            padding: 12px 24px;
            font-size: 16px;
        }
    }

</style>

