<script>
    export let data;
    let {post} =data;
</script>
<article>
<section>
{#if data.post}
    <div class="post-container mt-5 py-5 px-5">
        <h1 class="h2 headding">{ @html post.title}</h1>
        {#if post.featured_image}
        <img class="image-responsive" src={post.featured_image} alt="">    
        {/if}
        <div class="justify-content content">
        <div class="post-content">
            {@html post.content}
        </div>
</div>
    </div>
{:else}
    <p>Loading...</p>
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