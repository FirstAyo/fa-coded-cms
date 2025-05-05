import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const postFont = Poppins({ weight: "400", subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Facoded: Web Development Portfolio - React, Next.js & More",
    template: "%s | Facoded: Web Development Portfolio - React, Next.js & More",
  },
  description:
    "View my web development portfolio featuring projects built with React.js, Next.js, JavaScript, MySQL, NoSQL databases, WordPress, and modern front-end technologies.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${postFont.className} antialiased`}>
        <section className="max-w-[1440px] mx-auto shadow-2xl">
          <Header />
          {children}
          <Footer />
        </section>
      </body>
    </html>
  );
}
