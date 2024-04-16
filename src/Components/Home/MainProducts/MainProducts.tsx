import styles from "./MainProducts.module.sass";
import { getProducts } from "app/Api/apiProducts";
import { ProductDescription } from "app/Components/Shared/ProductDescription";
export const MainProducts = async () => {
  const { products } = await getProducts();
  return (
    <section className={styles.MainProducts}>
      <h3>New products Release!!!</h3>
      <div className={styles.MainProducts__grid}>
        {products.map(({ title, id, images }) => {
          const imgSrc = images[0].src;
          return (
            <ProductDescription
              title={title}
              id={id}
              imgSrc={imgSrc}
              key={id}
            />
          );
        })}
      </div>
    </section>
  );
};
