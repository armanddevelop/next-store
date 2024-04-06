import styles from "./Hero.module.sass";

export const Hero = (): JSX.Element => {
  return (
    <section className={styles.heroComponent}>
      <h1>Future Word</h1>
      <h2>Empowering Your Tomorrow, Today!!</h2>
    </section>
  );
};
