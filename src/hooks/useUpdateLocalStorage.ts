import { useEffect } from 'react';
import { useSelectorAndDispatch } from './useSelectorAndDispatch';

export const useUpdateLocalStorage = () => {
  const { tasks } = useSelectorAndDispatch();

  useEffect(() => {
    localStorage.setItem('Tasks', JSON.stringify(tasks));
  }, [tasks]);
};
