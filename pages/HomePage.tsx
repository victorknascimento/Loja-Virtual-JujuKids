
import React from 'react';
import ProductCard from '../components/ProductCard';
import StoreStatusBanner from '../components/StoreStatusBanner';
import { useProducts } from '../context/ProductContext';
import { useStoreHours } from '../hooks/useStoreHours';

const HomePage = () => {
  const { products } = useProducts();
  const { isOpen } = useStoreHours();

  return (
    <div>
      <h1 className="text-3xl md:text-4xl font-bold text-center text-fuchsia-700 mb-2">Nossos Produtos</h1>
      <p className="text-center text-gray-600 mb-8">As melhores roupinhas para seus pequenos!</p>
      
      <StoreStatusBanner isOpen={isOpen} />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {products.map(product => (
          <ProductCard key={product.id} product={product} isStoreOpen={isOpen} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
