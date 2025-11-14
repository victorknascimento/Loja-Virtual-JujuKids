
import { useState, useEffect } from 'react';
import { OPERATING_HOURS } from '../constants';

export const useStoreHours = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const checkStoreStatus = () => {
      const now = new Date();
      const currentHour = now.getHours();

      const { morning, afternoon } = OPERATING_HOURS;

      const isMorningOpen = currentHour >= morning.start && currentHour < morning.end;
      const isAfternoonOpen = currentHour >= afternoon.start && currentHour < afternoon.end;

      setIsOpen(isMorningOpen || isAfternoonOpen);
    };

    checkStoreStatus();
    const interval = setInterval(checkStoreStatus, 60000); // Check every minute

    return () => clearInterval(interval);
  }, []);

  return { isOpen };
};
