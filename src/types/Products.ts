interface IImages {
  id: number;
  alt: null;
  position: number;
  product_id: number;
  created_at: string;
  updated_at: string;
  admin_graphql_api_id: string;
  width: number;
  height: number;
  src: string;
  variant_ids: Array<any>;
}
interface IProduct {
  id: number;
  title: string;
  body_html: string;
  vendor: string;
  product_type: string;
  created_at: string;
  handle: string;
  updated_at: string;
  published_at: string;
  template_suffix: null;
  publihed_scope: string;
  tags: string;
  status: "active" | "inactive";
  admin_graphql_api_id: string;
  variants: Array<any>;
  options: Array<any>;
  images: Array<IImages>;
  image: {
    id: number;
    alt: null | string;
    position: number;
    product_id: number;
    created_at: string;
    updated_at: string;
    admin_graphql_api_id: string;
    width: number;
    height: number;
    src: string;
    variant_ids: number[];
  };
}

export type Products = {
  products: IProduct[];
};
