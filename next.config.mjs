/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: "/chinese-podcasts-dataset",
    assetPrefix: "/chinese-podcasts-dataset/",
    images: {
        loader:'custom',
        loaderFile: './local_image_loader.js',
    },

};

export default nextConfig;
