import { useSelectorAndDispatch } from '../hooks/useSelectorAndDispatch';

export const Header = () => {
  const { tasks } = useSelectorAndDispatch();
  return (
    <>
      <h4></h4>
      <h1 className="m-4">
        Lista de tareas
        <span className="top-0 start-100 translate-middle badge rounded-pill bg-success m-4 ">
          {tasks.length}
          <span className="visually-hidden">unread messages</span>
        </span>
      </h1>
      <hr />
    </>
  );
};
