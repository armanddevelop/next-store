import { Montserrat } from "next/font/google";
import { Header, Footer, Hero, Description } from "app/Components";
import "app/sass/globals.sass";
import { DESCRIPTION_URL_IMAGE } from "../../public/images/dataImages";

const monserratFont = Montserrat({
  weight: ["100", "300", "500", "700"],
  style: "normal",
  subsets: ["latin-ext"],
});
const descriptionResouces = {
  title: "Description",
  description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius eos
          asperiores harum nisi quibusdam sequi, laborum commodi magni, tempore
          culpa id voluptate fuga, tenetur ipsum amet eligendi veniam eum
          laboriosam.`,
  blurUrl: DESCRIPTION_URL_IMAGE,
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={monserratFont.className}>
        <Header />
        <Hero />
        <Description
          pathImg="/images/description.jpeg"
          textImg="products-description"
          title={descriptionResouces.title}
          description={descriptionResouces.description}
          placeholder="blur"
          blurUrl={descriptionResouces.blurUrl}
        />
        {children}
        <Footer />
      </body>
    </html>
  );
}
