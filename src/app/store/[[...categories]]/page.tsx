interface ICategoryProps {
  params: {
    categories: Array<string>;
  };
  searchParams?: string;
}

const Category = (props: ICategoryProps): JSX.Element => {
  const {
    params: { categories },
  } = props;

  return <h1>Dynamic Route {categories}</h1>;
};

export default Category;
