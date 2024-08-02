// import { Raleway } from "next/font/google";
import localFont from 'next/font/local'
import "./globals.css";
import Navbar from './components/navbar';
import Footer from './components/footer';


// const raleway = Raleway({ subsets: ["latin"] });

//fichier de fonts local
const raleway2 = localFont({ src: "./assets/raleway-variablefont_wght-webfont.woff2" });


export const metadata = {
  title: "Nft Digit",
  description: "Landng Page NFT Digit",
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: './logo.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={raleway2.className}>
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
