import "./globals.css";
import { Belanosima, DM_Sans, Montserrat, Inter, Poppins} from "next/font/google";
import Navbar from "./(navbar)/navbar";
import Footer from "./(footer)/footer";


const Belanosima = Belanosima({
  variable: "--Belanosima",
  subsets: ["latin"],
});

const DM_Sans = DM_Sans({
  variable: "--DMSans",
  subsets: ["latin"],
});

const Montserrat = Montserrat({
  variable: "--Montserrat",
  subsets: ["latin"],
});

const Inter = Inter({
  variable: "--Inter",
  subsets: ["latin"],
});

const Poppins = Poppins({
  variable: "--Poppins",
  subsets: ["latin"],
});

export const metadata = {
  title: "GMT Developers website",
  description: "GMTDevs builds fast, responsive websites for businesses and personal brands. Boost your online presence with expert web development in Nigeria.",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${Poppins.variable} ${Inter.variable} ${Montserrat.variable} ${DM_Sans.variable} ${Belanosima.variable}`}>
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
