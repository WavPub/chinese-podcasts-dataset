import "./globals.css";


export const metadata = {
  title: "China Podcast Tiny Datasets",
  description: "推进普通话自然语音生成技术",
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh">
      <body>{children}</body>
    </html>
  );
}
