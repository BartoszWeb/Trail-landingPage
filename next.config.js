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
    experimental: { optimizeCss: true },
};

module.exports = nextConfig;