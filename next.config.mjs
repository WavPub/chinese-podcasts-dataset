/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: "/china-podcast-tiny-web",
    assetPrefix: "/china-podcast-tiny-web/",
    images: {
        loader:'custom',
        loaderFile: './local_image_loader.js',
    },

};

export default nextConfig;
