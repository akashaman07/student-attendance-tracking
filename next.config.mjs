/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'lh3.googleusercontent.com',
          // Optional: Specify pathname if you want to restrict to certain paths
          // pathname: '/specific/path/**',
        },
      ],
    },
  };
  
  export default nextConfig;
  