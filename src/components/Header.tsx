import { Flex, Heading } from "@chakra-ui/layout";
import overlayHome from "../assets/img/overlayRandomPeopleV1.png";

const Header = () => {
  return (
    <Flex
      w="100vw"
      h={["150", "200", "250", "280"]}
      backgroundImage={`url(${overlayHome})`}
      backgroundSize="cover"
      backgroundPosition="center"
      bgRepeat="no-repeat"
      alignItems="center"
      justifyContent="center"
    >
      <Flex color="appWhite" direction="column" alignItems="center">
        <Heading mb="5" textAlign="center">
          Get Random People
        </Heading>
        <Heading size="md" textAlign="center">
          All randomly generated profiles were picked from the Randomuser API
        </Heading>
      </Flex>
    </Flex>
  );
};

export default Header;
