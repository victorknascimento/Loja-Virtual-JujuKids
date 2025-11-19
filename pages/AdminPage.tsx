import React from 'react';
import { Link } from 'react-router-dom';

export const AdminPage: React.FC = () => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Painel do Administrador</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Link to="/admin/products" className="block p-6 bg-gray-100 rounded-lg text-center hover:bg-gray-200 transition-colors">
                    <h2 className="text-xl font-bold text-gray-800">Gerenciar Produtos</h2>
                    <p className="text-gray-700 mt-2">Adicione, edite ou remova produtos da loja.</p>
                </Link>
                <Link to="/admin/orders" className="block p-6 bg-yellow-100 rounded-lg text-center hover:bg-yellow-200 transition-colors">
                    <h2 className="text-xl font-bold text-yellow-800">Ver Pedidos</h2>
                    <p className="text-yellow-700 mt-2">Visualize todos os pedidos realizados pelos clientes.</p>
                </Link>
                <Link to="/admin/users" className="block p-6 bg-red-100 rounded-lg text-center hover:bg-red-200 transition-colors">
                    <h2 className="text-xl font-bold text-red-800">Ver Usuários</h2>
                    <p className="text-red-700 mt-2">Liste todos os clientes cadastrados na plataforma.</p>
                </Link>
            </div>
        </div>
    );
};