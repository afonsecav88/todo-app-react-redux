import { ListItemTask } from './ListItemTask';
import { Task } from '../../interfaces/interfaces';
import { useSelectorAndDispatch } from '../../hooks/useSelectorAndDispatch';

export const ListTask = () => {
  const { tasks } = useSelectorAndDispatch();

  return (
    <>
      <ul className="list-group mt-3">
        {tasks.map((item: Task) => (
          <li key={item.id} className="list-group-item d-flex">
            <ListItemTask item={item} />
          </li>
        ))}
      </ul>
    </>
  );
};
