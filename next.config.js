/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: ['codetheweb.blog'],
		//formats: ['image/avif', 'image/webp'],
	},

}

module.exports = nextConfig
