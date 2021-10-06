import { useMediaQuery, Flex, Heading } from "@chakra-ui/react";

const Navbar = () => {
  const [isLargerThan480] = useMediaQuery("(min-width: 480px)");

  return (
    <Flex alignItems="center" p="3" maxWidth="100vw" shadow="lg">
      {isLargerThan480 && (
        <Heading size="md" mr="10">
          RandomPeople
        </Heading>
      )}
      <Heading size="sm" mr="5">
        Home
      </Heading>
      <Heading size="sm">Followings</Heading>
    </Flex>
  );
};

export default Navbar;
