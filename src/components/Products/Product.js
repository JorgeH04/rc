import React from "react";
import ProductList from "./ProductsList";
import { ProductContext } from "../../context/products";
import Loading from "../Loading";

export default function FeaturedProducts() {
  const { loading, featured } = React.useContext(ProductContext);
  if (loading) {
    return <Loading />;
  }
  return <ProductList title="featured products" products={featured} />;
}
