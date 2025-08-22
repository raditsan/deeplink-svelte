interface PostModel {
	title: string;
	description: string;
	illustration: string;
	button: string;
}

interface LoadResult {
	post: PostModel;
	deeplinkUrl: string;
}

export type { PostModel, LoadResult };