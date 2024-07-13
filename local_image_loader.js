export default function localImageLoader({ src, width, quality }) {
    return `/china-podcast-tiny-web/images/${src}?w=${width}&q=${quality || 75}`
}