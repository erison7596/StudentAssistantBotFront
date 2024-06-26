import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ChatBot",
  description: "Chatbot built with Rasa and React",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <link rel="icon" href="/icon.png" />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
