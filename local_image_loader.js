export default function localImageLoader({ src, width, quality }) {
    return `/china-podcast-tiny-web/${src}?w=${width}&q=${quality || 75}`
}