// import { Raleway } from "next/font/google";
import localFont from 'next/font/local'
import "./globals.css";
import Navbar from './components/navbar';

// const raleway = Raleway({ subsets: ["latin"] });

//fichier de fonts local
const raleway2 = localFont({ src: "./assets/raleway-variablefont_wght-webfont.woff2" });


export const metadata = {
  title: "Nft Digit",
  description: "Notre landin pge pour présenter notre technologie qui est la NFT.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={raleway2.className}>
        <Navbar/>
        {children}
        </body>
    </html>
  );
}
