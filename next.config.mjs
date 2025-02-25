/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'img.freepik.com',
            },
            {
                protocol: 'https',
                hostname: 'qkmcjatwmysmyyugfqro.supabase.co',
            },
            {
                protocol: 'https',
                hostname: 'img.clerk.com',
            },
        ],
    },
}

export default nextConfig
