/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  isReactServerLayer: true, 
  images: {
    domains: ['dummyimage.com', 'example.com'], // Add the domains you want to allow here
  },
};

export default nextConfig;
