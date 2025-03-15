import { getPost } from '$lib/Api/wordpress';
import { error } from '@sveltejs/kit';

/**
 * @type {import('./$types').PageServerLoad}
 */
export async function load({ params }) {
	console.log('This is slug:', params.slug);

	const post = await getPost(params.slug);

	if (!post) {
		console.error('Post not found for slug:', params.slug);
		throw error(404, 'Post not found');
	}

	return { post };
}
