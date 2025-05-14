import "./globals.css";
import Navbar from "./(navbar)/navbar";
import Footer from "./(footer)/footer";

export const metadata = {
  title: "GMT Developers website",
  description: "GMTDevs builds fast, responsive websites for businesses and personal brands. Boost your online presence with expert web development in Nigeria.",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
