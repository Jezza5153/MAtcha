import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/story",
        destination: "/verhaal",
        permanent: true,
      },
      {
        source: "/products",
        destination: "/#producten",
        permanent: true,
      },
      {
        source: "/products/ceremonial-matcha",
        destination: "/producten/ceremoniele-matcha",
        permanent: true,
      },
      {
        source: "/products/everyday-matcha",
        destination: "/producten/dagelijkse-matcha",
        permanent: true,
      },
      {
        source: "/products/starter-kit",
        destination: "/producten/starterkit",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
