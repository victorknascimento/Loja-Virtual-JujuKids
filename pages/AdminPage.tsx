
import React from 'react';
import { Link } from 'react-router-dom';

const AdminPage = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-fuchsia-700 mb-6">Painel do Administrador</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link to="/admin/products" className="block p-6 bg-pink-100 rounded-lg text-center hover:bg-pink-200 transition-colors">
          <h2 className="text-xl font-bold text-pink-800">Gerenciar Produtos</h2>
          <p className="text-pink-700 mt-2">Adicione, edite ou remova produtos da loja.</p>
        </Link>
        <Link to="/admin/orders" className="block p-6 bg-purple-100 rounded-lg text-center hover:bg-purple-200 transition-colors">
          <h2 className="text-xl font-bold text-purple-800">Ver Pedidos</h2>
          <p className="text-purple-700 mt-2">Visualize todos os pedidos realizados pelos clientes.</p>
        </Link>
        <Link to="/admin/users" className="block p-6 bg-orange-100 rounded-lg text-center hover:bg-orange-200 transition-colors">
          <h2 className="text-xl font-bold text-orange-800">Ver Usuários</h2>
          <p className="text-orange-700 mt-2">Liste todos os clientes cadastrados na plataforma.</p>
        </Link>
      </div>
    </div>
  );
};

export default AdminPage;
