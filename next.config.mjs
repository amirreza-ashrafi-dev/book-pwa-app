/** @type {import('next').NextConfig} */
import nextPWA from "next-pwa";

const pwa = nextPWA({ dest: "public" });
const nextConfig = {};

export default pwa(nextConfig);
