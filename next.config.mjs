/** @type {import('next').NextConfig} */
import withNextIntl from "next-intl/plugin";

const nextConfig = withNextIntl()({
    // Other Next.js configuration ...
    images: {
        remotePatterns: [{ hostname: "images.unsplash.com" }],
    },
});

export default nextConfig;
