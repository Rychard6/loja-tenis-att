import React, { useState, useEffect } from 'react';
import { MdLocationPin } from "react-icons/md";
import api from '../../API/api';
import { Link, Routes, useParams } from "react-router-dom";
import Detalhes from '../pages/detalhes';

export default function Corpo() {
    const [products, setProducts] = useState([]);

    const params = useParams()

    useEffect(() => {
        async function fetchProducts() {
            try {
                const fetchedProducts = params.type == "all"? await api.getProducts() : await api.getProducts(params.type);
                setProducts(fetchedProducts);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        }

        fetchProducts();
    }, [params.type]);





    return products.length? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 m-8">
            {products.map((product, index) => (
                <Link to={`/produto/${product.id}`} key={index} className="mt-4 sm:mt-40 shadow-md rounded-lg hover:bg-pink-300 hover:text-black cursor-pointer">
                    <img src={product.url[0]} alt={product.nome} className="w-full h-96 object-cover mb-2 border-none rounded-t-lg" />
                    <div className='flex items-center justify-center'>
                        <h2 className="text-white text-lg font-semibold mb-2">{product.nome}</h2>
                    </div>
                    <div className='flex items-center justify-center'>
                        <MdLocationPin className='text-white'/>
                        <p className="text-white">{product.cidade}</p>
                    </div>
                </Link>
            ))}
        </div>
    ): <p>carregando</p>
}
