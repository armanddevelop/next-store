import { Description, Hero, MainProducts } from "app/Components";
import { DESCRIPTION_URL_IMAGE } from "../../public/images/dataImages";

const descriptionResouces = {
  title: "Description",
  description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius eos
          asperiores harum nisi quibusdam sequi, laborum commodi magni, tempore
          culpa id voluptate fuga, tenetur ipsum amet eligendi veniam eum
          laboriosam.`,
  blurUrl: DESCRIPTION_URL_IMAGE,
};
export default function Home(): JSX.Element {
  return (
    <main>
      <Hero />
      <Description
        pathImg="/images/description.jpeg"
        textImg="products-description"
        title={descriptionResouces.title}
        description={descriptionResouces.description}
        placeholder="blur"
        blurUrl={descriptionResouces.blurUrl}
      />
      <MainProducts />
    </main>
  );
}
