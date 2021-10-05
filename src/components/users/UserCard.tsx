import { Box } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";
import { User } from "../../types/user";

type UserCardProps = { user: User };

const UserCard = ({ user }: UserCardProps) => {
  return (
    <Box backgroundColor="appBlack">
      <Image
        src={user.picture.large}
        alt="profile picture"
        borderRadius="50%"
      />
    </Box>
  );
};

export default UserCard;
