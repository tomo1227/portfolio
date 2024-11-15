import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["tomomon.jp", "tomomon-blog.pages.dev"],
    // remotePatterns: [
    //   {
    //     protocol: "https",
    //     hostname: "tomomon-blog.pages.dev",
    //     port: "",
    //     pathname: "/static/assets/img/ogp/ogp.png",
    //   },
    //   {
    //     protocol: "https",
    //     hostname: "tomomon-blog.pages.dev",
    //     port: "",
    //     pathname: "/static/assets/favicon.ico",
    //   },
    // ],
  },
};

export default nextConfig;
