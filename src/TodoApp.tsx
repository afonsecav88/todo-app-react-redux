import { AddTask } from './components/todo/AddTask';
import { Header } from './components/todo/Header';
import { ListTask } from './components/todo/ListTask';
import { ShowUsers } from './components/user/ShowUsers';
import { useNotifications } from './hooks/useNotifications';
//Add to redux
import { store } from './store/store';
import { Provider } from 'react-redux';

export const TodoApp = () => {
  const { ToastContainer } = useNotifications();
  return (
    <Provider store={store}>
      <Header />
      <div className="col d-flex gap-4  ms-5 flex-wrap">
        <div className="row-md-8">
          <ListTask />
        </div>
        <div className="row-md-4">
          <AddTask />
        </div>
      </div>
      <div className="col d-flex gap-2 flex-wrap ms-5 mt-3 ">
        <div className="row-md-8">
          <ShowUsers />
        </div>
      </div>
      <ToastContainer autoClose={1800} />
    </Provider>
  );
};
