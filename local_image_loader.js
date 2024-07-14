export default function localImageLoader({ src, width, quality }) {
    return `/chinese-podcast-dataset/images/${src}?w=${width}&q=${quality || 75}`
}