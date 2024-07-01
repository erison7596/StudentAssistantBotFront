import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ChatBot",
  description: "Chatbot built with Rasa and React",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <link rel="icon" href="/icon.png" />
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
