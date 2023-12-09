import { Task } from '../interfaces/interfaces';
import { useEditTask } from '../hooks/useEditTask';
import { useUpdateLocalStorage } from '../hooks/useUpdateLocalStorage';

type ListTaskProps = {
  item: Task;
};

export const ListItemTask = ({ item }: ListTaskProps) => {
  useUpdateLocalStorage();

  const {
    isEdit,
    valueDescription,
    handleDeleteTask,
    handleEditTask,
    handleSetIsEdit,
    handleOnChange,
  } = useEditTask(item);

  return (
    <>
      <input
        type="text"
        name="description"
        disabled={isEdit}
        value={valueDescription}
        onChange={(event) => handleOnChange(event)}
        className={`d-flex me-2 ${isEdit ? 'input-disable' : ''}`}
      />
      <button
        onClick={() => handleDeleteTask()}
        className="btn btn-danger btn-sm ms-1 me-2"
      >
        Eliminar
      </button>

      <button
        onClick={() => handleSetIsEdit()}
        className={`btn btn-primary btn-sm display-6  ${
          !isEdit ? 'button-disable' : ''
        }`}
      >
        Editar
      </button>

      <button
        onClick={() => handleEditTask()}
        className={`btn btn-outline-success  btn-sm  ${
          isEdit ? 'button-disable' : ''
        }`}
      >
        Guardar Cambios
      </button>
    </>
  );
};
