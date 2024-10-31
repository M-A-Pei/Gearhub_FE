import ProductCard from "../components/productCard";
import { useEffect, useMemo, useState } from "react";
import api from "../api/api";

export default function Index() {
    const [products, setProducts] = useState<object[]>([])

    async function getProducts() {
        const x = await api.get('/product')
        setProducts([...x.data])
    }

    useEffect(() => {
        getProducts()
    }, [])

    useMemo(() => {
        console.log("products", products)
    }, [products])

    return (
        <>
            <div className="text-center mt-4 row">
                <div className="col-lg-5 m-auto">
                    <h1>Welcome to GearHub</h1>
                    <small>we sell the finest equipment in all the lands!</small>
                </div>
            </div>
            <div className="row">
                <div className="d-flex col-lg-12 flex-wrap justify-content-center">
                    {
                        products.map((product: any) => (
                            <ProductCard
                                title={product.name}
                                price={product.price}
                                description={product.description}
                                image={product.image}
                            />
                        ))
                    }
                </div>
            </div>
        </>
    )
}
