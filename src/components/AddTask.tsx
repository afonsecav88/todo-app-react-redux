import { useAddTask } from '../hooks/useAddTask';
import { useUpdateLocalStorage } from '../hooks/useUpdateLocalStorage';

export const AddTask = () => {
  const { handleOnChange, handleAddTask, text } = useAddTask();
  useUpdateLocalStorage();
  return (
    <>
      <label className="mb-2" htmlFor="insert_task">
        Insertar tarea:
      </label>
      <br />
      <input
        className="form-control mb-2"
        type="text"
        id="insert_task"
        placeholder="Agregar tarea"
        name="description"
        value={text}
        onChange={(event) => handleOnChange(event)}
      />
      <button
        onClick={() => handleAddTask()}
        type="submit"
        className="mb-2 btn btn-success btn-sm float-end "
      >
        Agregar Tarea
      </button>
    </>
  );
};
