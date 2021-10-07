import { useMediaQuery, Flex, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isLargerThan480] = useMediaQuery("(min-width: 480px)");

  return (
    <Flex alignItems="center" p="3" maxWidth="100vw" shadow="lg">
      {isLargerThan480 && (
        <Link to="/">
          <Heading size="md" mr="10">
            RandomPeople
          </Heading>
        </Link>
      )}
      <Link to="/">
        <Heading size="sm" mr="5">
          Home
        </Heading>
      </Link>
      <Link to="/followings">
        <Heading size="sm">Followings</Heading>
      </Link>
    </Flex>
  );
};

export default Navbar;
