import React from "react";
import Layout from "./layout";
import Item from "./item";
import useSWR from "swr";
import { ProductWithFavs } from "pages";

interface ProductListProps {
  kind: "favs" | "sales" | "purchases";
}

interface Record {
  id: number;
  product: ProductWithFavs;
}

interface ProductListResponse {
  [key: string]: Record[];
}

const ProductList = ({ kind }: ProductListProps) => {
  const { data } = useSWR<ProductListResponse>(`/api/users/me/${kind}`);
  return data ? (
    <>
      {data[kind].map((record) => (
        <Item
          id={record?.product.id}
          key={record?.id}
          title={record?.product?.name}
          price={record?.product?.price}
          comments={1}
          hearts={record?.product?._count?.favs}
        />
      ))}
    </>
  ) : null;
};

export default ProductList;
