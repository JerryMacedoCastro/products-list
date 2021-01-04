import React from "react";
import { useParams } from "react-router-dom";
import api from "../services/Api";
import Head from "./Head";
import styles from "./Product.module.css";

const Product = () => {
  const [product, setProduct] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);
  const { id } = useParams();

  React.useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await api.get(`produto/${id}`);
        setProduct(response.data);
      } catch (erro) {
        setError({ error: erro.message });
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <p> Loading... </p>;
  if (error) return <p>{error}</p>;
  if (product === null) return null;
  return (
    <dection className={`${styles.produto} animeLeft`}>
      <Head title={product.nome} description={product.descricao} />
      {product.fotos.map((item) => (
        <img key={item.titulo} alt={item.titulo} src={item.src} />
      ))}
      <div>
        <h1>{product.nome}</h1>
        <span className={styles.preco}>R$ {product.preco}</span>
        <p className={styles.descricao}>{product.descricao}</p>
      </div>
    </dection>
  );
};

export default Product;
