import React from "react";
import Head from "./Head";
import styles from "./Products.module.css";
import api from "../services/Api";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = React.useState(null);

  React.useEffect(() => {
    api.get("/produto").then((response) => {
      setProducts(response.data);
    });
  }, []);

  if (products === null) return null;
  return (
    <>
      <Head title="Products" description="List of available products" />
      <section className={`${styles.produtos} animeLeft`}>
        {products.map((product) => {
          return (
            <Link to={`product/${product.id}`} key={product.id}>
              <img alt={product.fotos[0].titulo} src={product.fotos[0].src} />
              <h1 className={styles.nome}>{product.nome}</h1>
            </Link>
          );
        })}
      </section>
    </>
  );
};

export default Products;
