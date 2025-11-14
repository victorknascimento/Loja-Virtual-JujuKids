
import React from 'react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
  isStoreOpen: boolean;
}

const ProductCard = ({ product, isStoreOpen }: ProductCardProps) => {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 flex flex-col">
      <img src={product.imageUrl} alt={product.name} className="w-full h-56 object-cover"/>
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-bold text-fuchsia-800">{product.name}</h3>
        <p className="text-gray-600 text-sm mt-1 flex-grow">{product.description}</p>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-xl font-bold text-pink-500">
            R$ {product.price.toFixed(2).replace('.', ',')}
          </span>
          <button
            onClick={() => addToCart(product)}
            disabled={!isStoreOpen}
            className="px-4 py-2 bg-orange-400 text-white font-semibold rounded-lg shadow-md hover:bg-orange-500 transition-colors duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            Adicionar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
