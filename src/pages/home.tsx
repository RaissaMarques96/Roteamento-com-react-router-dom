import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

type Products = {
    id: number,
    name: string,
    image: string,
    price: number
}

const Home = () => {
    const [products, setProducts] = useState<Products[]>([])

    useEffect(() => {
         fetch("http://localhost:3333/products").then((data) => data.json().then((products) => setProducts(products))
        )
    }, [])

    return (
        <div>
            {products.map((product) => (
                <Link to= {`detail/${product.id}`} style={{ display:'flex', gap: 10, textDecoration:'none', background: 'violet', marginBottom: 10}}>
                    <h2>{product.id}</h2>
                    <h2>{product.name}</h2>
                </Link>
                
              
                
            ))}
        </div>
    );
}
export default Home