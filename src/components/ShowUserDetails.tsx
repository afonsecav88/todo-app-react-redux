import { useGetUsers } from '../hooks/useGetUsers';

export const ShowUserDetails = () => {
  const { usersData } = useGetUsers();

  return (
    <>
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
    </>
  );
};
