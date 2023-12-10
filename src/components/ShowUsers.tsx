import { useGetUsers } from '../hooks/useGetUsers';
import { getUsers } from '../store/slices/user/thunks';

export const ShowUsers = () => {
  const { isLoading, usersData, users, dispatch } = useGetUsers();

  return (
    <>
      <h1>Loading: {isLoading ? 'True' : 'False'}</h1>

      <table className="table bg-light ">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">Avatar</th>
          </tr>
        </thead>
        {usersData.data.map((user) => (
          <tbody key={user.id}>
            <tr>
              <td>{user.id}</td>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td>{user.email}</td>
              <td>
                <img src={user.avatar}></img>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
      <button onClick={() => dispatch(getUsers(users.page))}>Next Page</button>
    </>
  );
};
