import { useEffect } from "react";
import useUserStore from "../store/users";
import UserCard from "../components/UserCard";
const UserList = () => {
  const { users, getUsers, isLoading, hasErrors } = useUserStore();

  useEffect(() => {
    getUsers();
  }, []);

  if (isLoading) return <>loading</>;
  if (hasErrors) {
    console.error(hasErrors);
    return <> something went wrong</>;
  }

  return (
    <div>
      <h1 style={{
        textAlign:"center"
      }}>UserList</h1>
      <div style={{
        display:"grid",
        gridTemplateColumns:'auto auto'
      }}>
        {users.map((user) => (
          <UserCard key={user?.id} {...user} />
        ))}
      </div>
    </div>
  );
};

export default UserList;
