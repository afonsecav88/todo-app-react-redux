import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';

export const useSelectorAndDispatch = () => {
  const tasks = useSelector((state: RootState) => state.todo);
  const dispatch = useDispatch();

  return {
    tasks,
    dispatch,
  };
};
