import { error } from '@sveltejs/kit';

const data = {
	validateemail: {
		title: "Verifikasi Email Berhasil!",
		description: "Email kamu telah berhasil diverifikasi. Sekarang, kamu bisa melanjutkan ke aplikasi dan menikmati layanan kami.",
		illustration: "/illustration_flow_success.png"
	},
	validateemailExpired: {
		title: "Link Verifikasi Telah Kedaluwarsa",
		description: "Jika kamu belum melakukan verifikasi, silakan ulangi proses pendaftaran atau pembaruan data.",
		illustration: "/illustration_flow_session_berakhir.png"
	},
	changepassword: {
		title: "Ubah Password",
		description: "Ubah password untuk menjaga keamanan akun kamu.",
		illustration: "/illustration_akun_dikunci.png"
	},
	validatevideocall: {
		title: "Verifikasi Data Diri Berhasil! 🎉",
		description: "Sekarang, kamu bisa melanjutkan proses registrasi untuk mulai menikmati berbagai fitur di Tring!",
		illustration: "/illustration_flow_success.png"
	}
};

interface PostModel {
	title: string;
	description: string;
	illustration: string;
}

interface LoadResult {
	post: PostModel;
	deeplinkUrl: string;
}

export function load({ params, url }): LoadResult {
	const { slug } = params;
	const state = url.searchParams.get("state") ?? "";

	const queryString = url.searchParams.toString();
	const deeplinkUrl = `dash://${slug}${queryString ? `?${queryString}` : ""}`;

	let post: PostModel | null = null;

	if (slug === "validateemail") {
		post = ["errorOCR", "errorLiveness"].includes(state)
			? data.validateemailExpired
			: data.validateemail;
	} else if (slug === "changepassword") {
		post = data.changepassword
	} else if (slug === "validatevideocall") {
		post = data.validatevideocall
	}

	if (!post) {
		throw error(404, "Halaman tidak ditemukan");
	}

	return { post, deeplinkUrl };
}
