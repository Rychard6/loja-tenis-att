import React from 'react';
import { MdLocationPin } from "react-icons/md";

export default function Corpo() {
    // Mock data for products
    const products = [
        {
            name: 'tenis',
            image: '../imagens/tenis.jpg',
            location: 'ceilandia'
        },
        {
            name: 'Product 2',
            image: 'tenis',
            location: '$29.99'
        },
        {
            name: 'Product 1',
            image: 'image-url-1.jpg',
            location: '$19.99'
        },
        {
            name: 'Product 1',
            image: 'image-url-1.jpg',
            location: '$19.99'
        },
        // ... add more products
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 p-8">
            {products.map((product, index) => (
                <div key={index} className="bg-white p-4 shadow-md rounded-md">
                    <img src={product.image} alt={product.name} className="w-full h-60 object-cover mb-2" />
                    <div className='flex items-center justify-center'>
                        <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
                    </div>
                    <div className='flex items-center justify-center'>
                        <MdLocationPin />
                        <p className="text-gray-600">{product.location}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
