import Link from "next/link";
import styles from "./Header.module.sass";
export const Header = (): JSX.Element => {
  return (
    <header>
      <nav>
        <ul className={styles.header__list}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/store">Store</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
