import "./globals.css";


export const metadata = {
  title: "Chinese Podcasts Dataset - 中文播客语音数据集",
  description: "推进普通话自然语音生成技术",
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh">
      <body>{children}</body>
    </html>
  );
}
