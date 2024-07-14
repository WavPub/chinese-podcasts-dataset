/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: "/china-podcast-datasets",
    assetPrefix: "/china-podcast-datasets/",
    images: {
        loader:'custom',
        loaderFile: './local_image_loader.js',
    },

};

export default nextConfig;
