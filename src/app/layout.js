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
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
