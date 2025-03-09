<script>
   import { fade } from 'svelte/transition';
   import Navbar from '$lib/components/Navbar.svelte';
   import '../css/app.css'
   import Footer from '$lib/components/Footer.svelte';
</script>

<Navbar />

<div out:fade={{ duration: 300 }} in:fade={{ duration: 300 }}>
  <slot />
</div>
<Footer/>