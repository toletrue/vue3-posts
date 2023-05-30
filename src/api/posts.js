import { posts } from '.';

export function getPosts(params) {
	// return posts;
	return posts.get('/', { params });
}

export function getPostById(id) {
	// return posts.find(item => item.id === id);
	return posts.get(`/${id}`);
}

export function createPost(data) {
	return posts.post('/', data);
}

export function updatePost(id, data) {
	return posts.put(`/${id}`, data);
}

export function deletePost(id) {
	return posts.delete(`/${id}`);
}
