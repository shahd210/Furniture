import Topper from '../Topper/Topper'
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
export default function Product() {

    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        const getProduct = async () => {
            try {
                const res = await axios.get(`http://localhost:5000/products/${id}`);
                setProduct(res.data.product || res.data);
                setLoading(false);
            } catch (err) {
                console.error("Error:", err);
                setLoading(false);
            }
        };
        if (id) getProduct();
    }, [id]);

    
    if (loading) return <div className="text-center p-5 mt-5"><h3>Loading Product Details...</h3></div>;

    
    if (!product) return <div className="text-center p-5 mt-5"><h3>Product not found!</h3></div>;
    return (
        <>
            <Topper title={"product"} breadcrumb={"product"} />

            <div className="container p-5">
                <div className="row align-items-center">
                    <div className="col-md-6 shadow-sm p-3 bg-light rounded">
                        <img
                            src={`http://localhost:5000/${product.image.replace('\\', '/')}`}
                            className="img-fluid w-100"
                            alt={product.name}
                        />
                    </div>
                    <div className="col-md-6 px-5">
                        <h2 className="fw-bold" style={{ color: '#151875' }}>{product.name}</h2>
                        <p className="text-pink fw-bold fs-4">{product.price}</p>
                        <p className="text-muted">{product.description}</p>
                        <button className="btn text-white px-5 py-2" style={{ backgroundColor: '#fb2e86' }}>
                            Add To Cart
                        </button>
                    </div>
                </div>
            </div>

        </>

    )

}