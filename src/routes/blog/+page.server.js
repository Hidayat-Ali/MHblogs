import { getAllPosts as getPosts } from '$lib/Api/wordpress';

/**
 * @type {import('./$types').PageServerLoad}
 */
export async function load() {
	try {
		// Fetch posts from the WordPress API
		const response = await getPosts();
		// console.log(response); // Debugging: Log the raw response

		// Ensure the response contains a `posts` array
		const posts = response.posts || [];

		// Transform WordPress data to clean format
		const formattedPosts = posts.map((post) => ({
			id: post.ID,
			title: post.title,
			// excerpt: post.excerpt.replace(/<\/?[^>]+(>|$)/g, ''), // Strip HTML tags
			excerpt: post.excerpt,
			slug: post.slug,
			date: new Date(post.date).toLocaleDateString('en-US', {
				year: 'numeric',
				month: 'long',
				day: 'numeric'
			}),
			featuredImage: post.featured_image || null
		}));

		// Return the formatted posts to the Svelte component
		return {
			posts: formattedPosts
		};
	} catch (error) {
		console.error('Failed to load posts:', error);
		return {
			posts: [],
			error: 'Failed to load blog posts. Please try again later.'
		};
	}
}
