import "./globals.css";
import { Belanosima, DM_Sans, Inter, Montserrat, Poppins } from "next/font/google";
import Navbar from "./(navbar)/navbar";
import Footer from "./(footer)/footer";


const belanosima = Belanosima({
  variable: "--Belanosima",
  subsets: ["latin"],
  weight: ["400", "600", "700"]
});

const dM_Sans = DM_Sans({
  variable: "--DMSans",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--Montserrat",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--Inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--Poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"]
});

export const metadata = {
  title: "GMT Developers website",
  description: "GMTDevs builds fast, responsive websites for businesses and personal brands. Boost your online presence with expert web development in Nigeria.",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable} ${montserrat.variable} ${dM_Sans.variable} ${belanosima.variable}`}>
      <head>
        {/*Google tag (gtag.js) */}
        <script async src={`https://www.googletagmanager.com/gtag/js?id=G-DCET6HD4LW`}></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-DCET6HD4LW');
            `,
          }}
        />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
