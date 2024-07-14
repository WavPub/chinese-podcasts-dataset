export default function localImageLoader({ src, width, quality }) {
    return `/chinese-podcasts-dataset/images/${src}?w=${width}&q=${quality || 75}`
}