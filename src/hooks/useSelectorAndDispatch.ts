import { RootState } from '../store/store';
import { useAppDispatch, useAppSelector } from './useConfigSelectorAndDispatch';

export const useSelectorAndDispatch = () => {
  const tasks = useAppSelector((state: RootState) => state.todo);
  const users = useAppSelector((state: RootState) => state.user);
  const dispatch = useAppDispatch();

  return {
    tasks,
    users,
    dispatch,
  };
};
