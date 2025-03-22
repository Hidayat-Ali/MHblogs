<script >
    export let data;
    
    let {post,isLoading} = data;
</script>
<svelte:head>
  <title>{post.title} - Hidayat Ali Mir</title>
  <meta name="description" content={post.excerpt} />
  <meta property="og:title" content={post.title} />
  <meta property="og:description" content={post.excerpt} />
  <meta property="og:image" content={post.featured_image} />
</svelte:head>
<article>
<section>
    {#if isLoading}
    <h1>Loading...</h1>
{:else if post}
    <div class="post-container mt-5 py-5 px-5">
        <h1 class="h2 headding">{ @html post?.title}</h1>
        {#if post.featured_image}
        <img class="image-responsive" src={post.featured_image}  loading="lazy" alt={post.title}>    
        {/if}
        <div class="justify-content content">
        <div class="post-content">
            {@html post.content}
        </div>
</div>
    </div>
{:else}
    <p>No post available for this {post.slug}</p>
{/if}
</section>
</article>
<style>
section{
    background-color: var(--main-bg);
}
.headding{
        color: var(--body-text-color);
}
.post-content{
    color: var(--body-text-color)

}
</style>