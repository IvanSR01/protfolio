/** @type {import('next').NextConfig} */
const nextConfig = {
	env: {
		MAIL_USER: process.env.MAIL_USER,
		MAIL_PASS: process.env.MAIL_PASS,
		MAIL_EMAIL_ADDRESS: process.env.MAIL_EMAIL_ADDRESS
	},
};

export default nextConfig;

