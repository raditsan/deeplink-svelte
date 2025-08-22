import type { PostModel } from '$lib/types/types';

export const posts: Record<string, PostModel> = {
	validateemail: {
		title: "Verifikasi Email Berhasil!",
		description: "Email kamu telah berhasil diverifikasi. Sekarang, kamu bisa melanjutkan ke aplikasi dan menikmati layanan kami.",
		illustration: "/illustration_flow_success.png",
		button: "Buka Aplikasi Tring!"
	},
	validateemailExpired: {
		title: "Link Verifikasi Telah Kedaluwarsa",
		description: "Jika kamu belum melakukan verifikasi, silakan ulangi proses pendaftaran atau pembaruan data.",
		illustration: "/illustration_flow_session_berakhir.png",
		button: "Buka Aplikasi Tring!"
	},
	changepassword: {
		title: "Ubah Password",
		description: "Ubah password untuk menjaga keamanan akun kamu.",
		illustration: "/illustration_akun_dikunci.png",
		button: "Buka Aplikasi Tring!"
	},
	validatevideocall: {
		title: "Verifikasi Data Diri Berhasil! 🎉",
		description: "Sekarang, kamu bisa melanjutkan proses registrasi untuk mulai menikmati berbagai fitur di Tring!",
		illustration: "/illustration_flow_success.png",
		button: "Buka Aplikasi Tring!"
	}
};