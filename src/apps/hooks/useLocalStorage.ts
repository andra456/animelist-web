import { useCallback } from 'react';

const useLocalStorage = () => {
  const setItem = (key: string, value: object | string): void => {
    const data = typeof value === 'object' ? JSON.stringify(value) : value;
    localStorage.setItem(key, data);
  };

  const getItem = useCallback((key: string, defaultData: any): any => {
    const data: any = localStorage.getItem(key);
    if (data) {
      try {
        return JSON.parse(data);
      } catch {
        return data || defaultData;
      }
    }
    return defaultData;
  }, []);

  const removeItem = useCallback((key: string): void => {
    localStorage.removeItem(key);
  }, []);

  return {
    setItem,
    getItem,
    removeItem,
  };
};

export default useLocalStorage;
