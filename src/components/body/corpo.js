import React from 'react';

export default function Corpo() {
    // Mock data for products
    const products = [
        {
            name: 'tenis',
            image: '../imagens/tenis.jpg',
            price: '$19.99'
        },
        {
            name: 'Product 2',
            image: 'tenis',
            price: '$29.99'
        },
        {
            name: 'Product 1',
            image: 'image-url-1.jpg',
            price: '$19.99'
        },
        {
            name: 'Product 2',
            image: 'image-url-2.jpg',
            price: '$29.99'
        },
        {
            name: 'tenis.jpg',
            image: '../imagens/tenis.jpg',
            price: '$19.99'
        },
        {
            name: 'Product 2',
            image: 'image-url-2.jpg',
            price: '$29.99'
        },
        {
            name: 'Product 1',
            image: 'image-url-1.jpg',
            price: '$19.99'
        },
        {
            name: 'Product 2',
            image: 'image-url-2.jpg',
            price: '$29.99'
        },
        {
            name: 'tenis.jpg',
            image: '../imagens/tenis.jpg',
            price: '$19.99'
        },
        {
            name: 'Product 2',
            image: 'image-url-2.jpg',
            price: '$29.99'
        },
        {
            name: 'Product 1',
            image: 'image-url-1.jpg',
            price: '$19.99'
        },
        {
            name: 'Product 2',
            image: 'image-url-2.jpg',
            price: '$29.99'
        },
        {
            name: 'tenis.jpg',
            image: '../imagens/tenis.jpg',
            price: '$19.99'
        },
        {
            name: 'Product 2',
            image: 'image-url-2.jpg',
            price: '$29.99'
        },
        {
            name: 'Product 1',
            image: 'image-url-1.jpg',
            price: '$19.99'
        },
        {
            name: 'Product 2',
            image: 'image-url-2.jpg',
            price: '$29.99'
        },
        // ... add more products
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 p-8">
            {products.map((product, index) => (
                <div key={index} className="bg-white p-4 shadow-md rounded-md">
                    <img src={product.image} alt={product.name} className="w-full h-60 object-cover mb-2" />
                    <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
                    <p className="text-gray-600">{product.price}</p>
                </div>
            ))}
        </div>
    );
}
