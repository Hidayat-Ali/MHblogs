export const WORDPRESS_URL = import.meta.env.VITE_WORDPRESS_URL;

export async function getAllPosts() {
	try {
		const response = await fetch(`${WORDPRESS_URL}/posts?status=publish`);
		return await response.json();
	} catch (error) {
		console.error('Some error ocuured');
		return [];
	}
}

export async function getPost(slug) {
	try {
		const response = await fetch(`${WORDPRESS_URL}/posts/slug:${slug}`);
		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`);
		}
		const data = await response.json();
		return data; // API returns an object, not an array
	} catch (error) {
		console.error('Error while fetching the post!', error);
		return null;
	}
}

export async function getLatestPosts() {
	try {
		const response = await fetch(`${WORDPRESS_URL}/posts?status=publish&number=10`);
		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`);
		}
		const data = await response.json();
		return data; // API returns an object, not an array
	} catch (error) {
		console.error('Error while fetching the post!', error);
		return null;
	}
}
