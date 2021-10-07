import { Spinner } from "@chakra-ui/react";
import useHandleUsers from "../hooks/useHandleUsers";
import Tools from "../components/tools/Tools";
import UserCard from "../components/user/UserCard";
import UsersContainer from "../components/user/UsersContainer";

const Home = () => {
  const { users, loading, sort, getUsers, filterValue, setFilterValue } =
    useHandleUsers();

  return (
    <>
      <Tools sort={sort} getUsers={getUsers} setFilterValue={setFilterValue} />
      {loading ? (
        <Spinner size="xl" margin="auto" />
      ) : (
        <UsersContainer
          childrens={users
            ?.filter((user) =>
              `${user.name.first} ${user.name.last}`
                .toLowerCase()
                .startsWith(filterValue.toLowerCase())
            )
            .map((user, i) => (
              <UserCard key={i} user={user} />
            ))}
        />
      )}
    </>
  );
};

export default Home;
