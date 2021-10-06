import { Box, Button, Divider, Flex, Icon } from "@chakra-ui/react";
import { User } from "../../types/user";
import UserCardHeader from "./UserCardHeader";
import { FaUserPlus } from "react-icons/fa";
import { GrMap } from "react-icons/gr";
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";

type UserCardProps = { user: User };

const UserCard = ({ user }: UserCardProps) => {
  return (
    <Box
      backgroundColor="appWhiteSecondary"
      borderRadius="10px"
      height="430px"
      width="300px"
      shadow="xl"
    >
      <UserCardHeader
        gender={user.gender}
        birthday={user.dob.date}
        picture={user.picture.large}
      />
      <Flex direction="column" position="relative" top="-39">
        <Box fontSize="2xl" fontWeight="bold" alignSelf="center" mb="1">
          {user.name.first} {user.name.last}
        </Box>
        <Button
          colorScheme="blue"
          size="xs"
          rightIcon={<Icon as={FaUserPlus} />}
          alignSelf="center"
          mb="5"
        >
          Follow
        </Button>
        <Divider />
        <Box fontSize="lg" fontWeight="bold" m="2">
          <Icon as={GrMap} mr="3" />
          {user.location.city}
        </Box>
        <Divider />
        <Box fontSize="lg" fontWeight="bold" m="2">
          <Icon as={AiOutlinePhone} mr="3" />
          {user.phone}
        </Box>
        <Divider />

        <Box
          fontSize="lg"
          fontWeight="bold"
          m="2"
          textOverflow="ellipsis"
          overflow="hidden"
          whiteSpace="nowrap"
          width="280px"
        >
          <Icon as={AiOutlineMail} mr="3" />
          {user.email.replace("example", "mail")}
        </Box>
      </Flex>
    </Box>
  );
};

export default UserCard;
