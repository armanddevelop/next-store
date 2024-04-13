"use client";
import classNames from "classnames/bind";
import { useState } from "react";
import Image from "next/image";
import styles from "./Description.module.sass";

interface IDescriptionProps {
  pathImg: string;
  textImg: string;
  description?: string;
  title?: string;
  placeholder?: "blur" | "empty" | `data:image/${string}` | undefined;
  blurUrl?: string;
}
export const Description = ({
  pathImg,
  textImg,
  description,
  title,
  placeholder,
  blurUrl,
}: IDescriptionProps): JSX.Element => {
  const [hasBorder, setHasBorder] = useState<boolean>(false);
  const cx = classNames.bind(styles);
  const buttonStyles = cx("Description__button", {
    "Description__button--border": hasBorder,
  });

  return (
    <section className={styles.Description}>
      <button className={buttonStyles} onClick={() => setHasBorder(!hasBorder)}>
        <div className={styles.Description__imageContainer}>
          <Image
            src={pathImg}
            alt={textImg}
            fill
            placeholder={placeholder}
            blurDataURL={blurUrl}
          />
        </div>
      </button>

      <div className={styles.Description__text}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </section>
  );
};
