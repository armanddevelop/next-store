import { Description, Hero, MainProducts } from "app/Components";

export default function Home(): JSX.Element {
  return (
    <main>
      <Hero />
      <Description />
      <MainProducts />
    </main>
  );
}
