import { AddTask } from './components/AddTask';
import { Header } from './components/Header';
import { ListTask } from './components/ListTask';
import { useNotifications } from './hooks/useNotifications';
//Add to redux
import { store } from './store/store';
import { Provider } from 'react-redux';

export const TodoApp = () => {
  const { ToastContainer } = useNotifications();
  return (
    <Provider store={store}>
      <Header />
      <div className="col d-flex gap-2 justify-content-around flex-wrap">
        <div className="row-md-8">
          <ListTask />
        </div>
        <div className="row-md-4">
          <AddTask />
        </div>
      </div>
      <ToastContainer autoClose={1800} />
    </Provider>
  );
};
