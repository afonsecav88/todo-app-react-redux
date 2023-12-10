import { ChangeEvent, useState } from 'react';
import { Task } from '../../interfaces/interfaces';
import { useNotifications } from '../useNotifications';
import { useSelectorAndDispatch } from '../useSelectorAndDispatch';
import { deleteTask, editTask } from '../../store/slices/todo/todoSlice';

export const useEditTask = (item: Task) => {
  const { taskDeleted, taskEdited } = useNotifications();
  const { dispatch } = useSelectorAndDispatch();
  const [isEdit, setIsEdit] = useState(true);
  const [valueDescription, setValueDescription] = useState<string>(
    item.description
  );

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValueDescription(event.target.value);
  };

  const handleDeleteTask = () => {
    dispatch(deleteTask(item.id));
    taskDeleted();
  };

  const handleEditTask = () => {
    setIsEdit(true);
    const newItem = { ...item, description: valueDescription };
    dispatch(editTask(newItem));
    taskEdited();
  };

  const handleSetIsEdit = () => {
    setIsEdit(false);
  };

  return {
    isEdit,
    valueDescription,
    handleDeleteTask,
    handleEditTask,
    handleSetIsEdit,
    handleOnChange,
  };
};
