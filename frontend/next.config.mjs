/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://flask:4000/api/:path*', // Proxy to python backend. Must use service name from compose.yml
      },
    ]
  },
  output: "standalone",                              // For docker
};

export default nextConfig;
