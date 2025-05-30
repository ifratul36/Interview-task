import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    async redirects() {
    return [
      {
        source: "/user-profile", // Example: Redirect /user-profile to /profile
        destination: "/profile",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
