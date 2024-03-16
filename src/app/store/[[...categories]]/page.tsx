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
  console.log("esto vale props ", props?.searchParams.id);
  return <h1>Dynamic Route {categories}</h1>;
};

export default Category;
