/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: "/chinese-podcast-dataset",
    assetPrefix: "/chinese-podcast-dataset/",
    images: {
        loader:'custom',
        loaderFile: './local_image_loader.js',
    },

};

export default nextConfig;
