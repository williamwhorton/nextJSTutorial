import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
    allowedDevOrigins: ["192.168.50.147"],
    experimental: {
        ppr: 'incremental'
    }
};

export default nextConfig;
