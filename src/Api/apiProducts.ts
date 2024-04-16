import { Products } from "app/types/Products";

export const getProducts = async (): Promise<Products> => {
  try {
    const response = await fetch(
      `${process.env.SHOPIFY_HOST_NAME}/admin/api/2023-10/products.json`,
      {
        headers: new Headers({
          "X-Shopify-Access-Token": process.env.ACCESS_TOKEN_API_SHOPIFY || "",
        }),
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("[getProductsError]: ", error);
    return {
      products: [],
    };
  }
};
