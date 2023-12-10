import { useState, ChangeEvent } from 'react';
import { useNotifications } from '../useNotifications';
import { useSelectorAndDispatch } from '../useSelectorAndDispatch';
import { addTask } from '../../store/slices/todo/todoSlice';

export const useAddTask = () => {
  const { dispatch } = useSelectorAndDispatch();
  const [text, setText] = useState<string>('');
  const { taskAdd } = useNotifications();

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const handleAddTask = () => {
    if (text.length === 0) return;
    dispatch(addTask(text));
    taskAdd();
    setText('');
  };

  return { handleOnChange, handleAddTask, text };
};
