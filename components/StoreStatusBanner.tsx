
import React from 'react';
import { OPERATING_HOURS } from '../constants';

interface StoreStatusBannerProps {
  isOpen: boolean;
}

const StoreStatusBanner = ({ isOpen }: StoreStatusBannerProps) => {
  const { morning, afternoon } = OPERATING_HOURS;
  const hoursText = `Horário: ${String(morning.start).padStart(2, '0')}h-${morning.end}h e ${afternoon.start}h-${afternoon.end}h`;

  if (isOpen) {
    return (
      <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-6" role="alert">
        <p className="font-bold">Loja Aberta!</p>
        <p>Estamos prontos para receber seu pedido. {hoursText}</p>
      </div>
    );
  }

  return (
    <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6" role="alert">
      <p className="font-bold">Loja Fechada</p>
      <p>Nossos pedidos online estão encerrados por hoje. {hoursText}</p>
    </div>
  );
};

export default StoreStatusBanner;
