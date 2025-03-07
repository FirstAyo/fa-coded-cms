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
  title: "FA-Coded Portfolio",
  description:
    "Showcasing the best Responsive websites built with latest Web Technologies ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${postFont.className} antialiased`}
      >
        <section className="max-w-[1440px] mx-auto shadow-2xl">
          <Header />
          {children}
          <Footer />
        </section>
      </body>
    </html>
  );
}
