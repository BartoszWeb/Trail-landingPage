const { BLOG_URL } = process.env;

/** @type {import("next").NextConfig} */
require("dotenv").config();

const nextConfig = {
    reactStrictMode: true,
    env: {
        mongodb_username: "TrailUsers",
        mongodb_password: "IE4e4yFN6tm0e2y0",
        mongodb_clusterName: "trailusers",
        mongodb_dataBase: "TrailUsers",
    },
    async rewrites() {
        return [
            {
                source: "/:path*",
                destination: `/:path*`,
            },
            {
                source: "/blog",
                destination: `${BLOG_URL}/blog`,
            },
            {
                source: "/blog/:path*",
                destination: `${BLOG_URL}/blog/:path*`,
            },
        ];
    },
};

module.exports = nextConfig;