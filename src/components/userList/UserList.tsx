import { Spinner, Grid } from "@chakra-ui/react";
import useHandleUsers from "../../hooks/useHandleUsers";
import Tools from "../tools/Tools";
import UserCard from "./UserCard";

const UserList = () => {
  const { users, loading, sort, getUsers, filterValue, setFilterValue } =
    useHandleUsers();

  return (
    <>
      <Tools sort={sort} getUsers={getUsers} setFilterValue={setFilterValue} />
      {loading ? (
        <Spinner size="xl" margin="auto" />
      ) : (
        <Grid
          templateColumns={[
            "repeat(1, 1fr)",
            "repeat(1, 1fr)",
            "repeat(2, 1fr)",
            "repeat(4, 1fr)",
          ]}
          gap={["30px", "30px", "50px", "40px"]}
          width={["300px", "300px", "650px", "1320px"]}
          alignSelf="center"
          minHeight="100vh"
        >
          {users
            ?.filter((user) =>
              user.name.first
                .toLowerCase()
                .startsWith(filterValue.toLowerCase())
            )
            .map((user, i) => (
              <UserCard key={i} user={user} />
            ))}
        </Grid>
      )}
    </>
  );
};

export default UserList;
