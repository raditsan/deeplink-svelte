import { error } from '@sveltejs/kit';
import type { LoadResult, PostModel } from '$lib';
import { posts } from '$lib';

const scheme = import.meta.env.VITE_SCHEME;

export function load({ params, url }): LoadResult {
	const { slug } = params;
	const state = url.searchParams.get("state") ?? "";

	const queryString = url.searchParams.toString();
	const deeplinkUrl = `${scheme}${slug}${queryString ? `?${queryString}` : ""}`;

	let post: PostModel | null = null;

	if (slug === "validateemail") {
		post = ["errorOCR", "errorLiveness"].includes(state)
			? posts.validateemailExpired
			: posts.validateemail;
	} else if (slug === "changepassword") {
		post = posts.changepassword
	} else if (slug === "validatevideocall") {
		post = posts.validatevideocall
	}

	if (!post) {
		throw error(404);
	}

	return { post, deeplinkUrl };
}
