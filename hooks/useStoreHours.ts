import { useState, useEffect } from 'react';
import { OPERATING_HOURS } from '../constants';

export const useStoreHours = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const checkStatus = () => {
      const now = new Date();
      const currentHour = now.getHours();
      
      const { morning, afternoon } = OPERATING_HOURS;

      const inMorning = currentHour >= morning.start && currentHour < morning.end;
      const inAfternoon = currentHour >= afternoon.start && currentHour < afternoon.end;

      setIsOpen(inMorning || inAfternoon);
    };

    checkStatus();
    const interval = setInterval(checkStatus, 60000); // Check every minute

    return () => clearInterval(interval);
  }, []);

  return { isOpen };
};
