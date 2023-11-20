import type { NextPage } from "next";
import Layout from "../../components/layout";
import Item from "../../components/item";
import useSWR from "swr";
import { Product, Sale } from "@prisma/client";
import { ProductWithFavs } from "pages";
import ProductList from "@components/product-list";

const Sold: NextPage = () => {
  return (
    <Layout title="판매내역" canGoBack>
      <div className="flex flex-col space-y-5 pb-10  divide-y">
        <ProductList kind="sales" />
      </div>
    </Layout>
  );
};

export default Sold;
