import { useParams } from "react-router-dom";
import {useEffect, useState} from 'react'
import { Product } from "../dto/ProductDTO";
const Detail = () => {
  const [product, setProduct] = useState<Product>({} as Product)
  const { id } = useParams()
  useEffect(() => {
    fetch(`http://localhost:3333/products/${id}`).then((data) => data.json().then((product) => setProduct(product)))
  },[])
  return (
    <div>
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <h3>{ product.price?.toLocaleString("pt-BR", {style:"currency", currency:"BRL"})}</h3>
    </div>
  )
};

export default Detail;
