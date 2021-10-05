import { Grid } from "@chakra-ui/layout";
import { User } from "../../types/user";
import UserCard from "./UserCard";

type UserListProps = { users?: User[] };

const UserList = ({ users }: UserListProps) => {
  return (
    <Grid templateColumns="repeat(5, 1fr)" gap="6">
      {users?.map((user, i) => (
        <UserCard key={i} user={user} />
      ))}
    </Grid>
  );
};

export default UserList;
