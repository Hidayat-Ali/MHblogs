const WORDPRESS_URL = "https://public-api.wordpress.com/rest/v1.1/sites/hidayat734.wordpress.com";
async function getAllPosts() {
  try {
    const response = await fetch(`${WORDPRESS_URL}/posts?status=publish`);
    return await response.json();
  } catch (error) {
    console.error("Some error ocuured");
    return [];
  }
}
async function getPost(slug) {
  try {
    const response = await fetch(`${WORDPRESS_URL}/posts/slug:${slug}`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error while fetching the post!", error);
    return null;
  }
}

export { WORDPRESS_URL as W, getPost as a, getAllPosts as g };
//# sourceMappingURL=wordpress-UVGJd0qi.js.map
