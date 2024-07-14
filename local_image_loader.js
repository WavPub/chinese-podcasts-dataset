export default function localImageLoader({ src, width, quality }) {
    return `/china-podcast-datasets/images/${src}?w=${width}&q=${quality || 75}`
}