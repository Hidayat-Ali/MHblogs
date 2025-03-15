<script>
    export let data;
    const { posts, error } = data;
</script>

<section class=" all-Blogs py-5 mt-2 ">
    <h1 class="headding1 text-center">All Blogs</h1>
{#if error}
    <p class="error">{error}</p>
{:else if posts.length > 0}

          <div class="row justify-content-center">
    {#each posts as post}
        <div class="col-8 post1 mb-5">
            <h2 class="post-title">{post.title}</h2>
            {#if post.featuredImage}
                <img src={post.featuredImage} alt={post.title} width="200px" />
            {/if}
            <p class="post-content">{@html post.excerpt}</p>
            <p class="badge">
                <b>Published on:</b> {post.date}
            </p>
            <!-- <div class="post-stats">
                <span class="badge bg-secondary">
                    <i class="fas fa-comment"></i> {post.commentCount} Comments
                </span>
                <span class="badge bg-success">
                    <i class="fas fa-heart"></i> {post.likeCount} Likes
                </span>
                <span class="badge bg-info">
                    <i class="fas fa-eye"></i> {post.viewCount} Views
                </span>
            </div> -->
            <p>
                <a href={`/blog/${post.slug}`} class="badge bg-primary text-decoration-none">Read more</a>
            </p>
        </div>
    {/each}
</div>
                
                
      
{:else}
    <p> Sorry No posts available.</p>
{/if}
</section>



<style>
.all-Blogs{
    background-color: var(--main-bg);
}
.post1{
    background-color: var(--surface-bg);
}
.headding1{
        color: var(--Accent-color);
}
.post-title{
    color: var(--body-text-color);
}
.post-content{
  color: var(--body-text-color);  
}
.badge{
    background-color: var(--Accent-color);
}

</style>