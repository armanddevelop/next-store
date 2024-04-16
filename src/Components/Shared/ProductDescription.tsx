import Image from "next/image";

interface IProductDescriptionProps {
  id: number;
  title: string;
  imgSrc: string;
}

export const ProductDescription = ({
  id,
  title,
  imgSrc,
}: IProductDescriptionProps) => {
  return (
    <article key={id}>
      <p>{title}</p>
      <Image src={imgSrc} fill alt={title} loading="eager" />
    </article>
  );
};
