import ProductCard from "../components/productCard";
import { useEffect, useMemo, useState } from "react";
import api from "../api/api";
import { useLocation, useParams } from "react-router-dom";

export default function Search() {
    const [products, setProducts] = useState<object[]>([]);
    const { search } = useParams();
    const location = useLocation();

    async function getProducts() {
        const x = await api.get(`/product/bySearch/${search}`);
        setProducts([...x.data]);
    }

    useEffect(() => {
        getProducts();
    }, [location])

    useMemo(() => {
        console.log("products", products)
    }, [products])

    return (
        <>
            <div className="text-center mt-4 row">
                <div className="col-lg-5 m-auto">
                    <h1>search results for {search}</h1>
                </div>
            </div>
            <div className="row">
                <div className="d-flex col-lg-12 flex-wrap justify-content-center">
                    {
                        products.length === 0 ?
                            <h2>no products named {search}</h2>
                            :
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
            </div >
        </>
    )
}