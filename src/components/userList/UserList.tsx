import { Grid } from "@chakra-ui/layout";
import { User } from "../../types/user";
import UserCard from "./UserCard";

type UserListProps = { users?: User[] };

const UserList = ({ users }: UserListProps) => {
  return (
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
    >
      {users?.map((user, i) => (
        <UserCard key={i} user={user} />
      ))}
    </Grid>
  );
};

export default UserList;
