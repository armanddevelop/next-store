import { Montserrat } from "next/font/google";
import { Header, Footer } from "app/Components";
import "app/sass/globals.sass";

const monserratFont = Montserrat({
  weight: ["100", "300", "500", "700"],
  style: "normal",
  subsets: ["latin-ext"],
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={monserratFont.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
