import { Image, Box, Icon, Flex } from "@chakra-ui/react";
import { BsGenderFemale, BsGenderMale } from "react-icons/bs";

type UserCardHeaderProps = {
  age: number;
  gender: string;
  picture: string;
};

const UserCardHeader = ({ age, gender, picture }: UserCardHeaderProps) => {
  return (
    <>
      <Flex
        backgroundColor="appBlue"
        height="85px"
        borderTopRadius="10px"
        justifyContent="space-between"
        pr="5"
        pl="5"
        pt="4"
        color="appWhiteSecondary"
      >
        <Box fontStyle="italic" fontSize="3xl" fontWeight="bold">
          {age}
        </Box>
        <Icon
          w="9"
          h="9"
          as={gender === "male" ? BsGenderMale : BsGenderFemale}
          mt="2"
        />
      </Flex>
      <Box
        position="relative"
        top="-55"
        left="65px"
        width="170px"
        borderRadius="50%"
        boxShadow="0 0 0 10px var(--chakra-colors-appWhiteSecondary),
              inset 0 0 0 10px var(--chakra-colors-appWhiteSecondary),
              inset 0 0 0 10px var(--chakra-colors-appWhiteSecondary),
              inset 0 0 0 10px var(--chakra-colors-appWhiteSecondary),
              inset 0 0 0 10px var(--chakra-colors-appWhiteSecondary)"
      >
        <Image
          src={picture}
          alt="profile picture"
          borderRadius="50%"
          width="100%"
          height="100%"
        />
      </Box>
    </>
  );
};

export default UserCardHeader;
