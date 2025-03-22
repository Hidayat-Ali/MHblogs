import { getPost } from '$lib/Api/wordpress';

/**
 * @type {import('./$types').PageServerLoad}
 */
let isLoading = true;
export async function load({ params }) {
	let post = {};
	try {
		post = await getPost(params.slug);
		if (post) {
			isLoading = false;
		}
	} catch (error) {
		console.error(error);
		isLoading = false;
	}

	return { post, isLoading };
}
