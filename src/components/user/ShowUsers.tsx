import { useGetUsers } from '../../hooks/user/useGetUsers';
import { getUsers } from '../../store/slices/user/thunks';
import { NotUserShow } from './NotUserShow';
import { ShowUserDetails } from './ShowUserDetails';

export const ShowUsers = () => {
  const { usersData, users, dispatch } = useGetUsers();
  const { page } = usersData;

  return (
    <div className="col ms-4 mb-4  ">
      <div className="d-flex mb-2 justify-content-between ">
        <h3>Datos de los usuarios </h3>
        <button
          className={`btn btn-success text-white ms-3 ${
            page >= 3 && 'button-disable'
          } `}
          onClick={() => dispatch(getUsers(users.page))}
        >
          Next page of users
        </button>
      </div>

      <div className="d-flex align-content-center justify-content-center">
        {page < 3 ? <ShowUserDetails /> : <NotUserShow />}
      </div>
    </div>
  );
};
