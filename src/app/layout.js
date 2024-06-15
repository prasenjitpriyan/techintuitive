import { Inter } from "next/font/google";
import "../assets/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "TechIntuitive",
  description:
    "A blog that simplifies complex technology concepts for everyone.",
  author: "Prasenjit Das",
  keywords: "techintuitive, tech intuitively, tech blog, blog",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
