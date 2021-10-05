import { Flex, Box, Heading, Divider, Link } from "@chakra-ui/layout";

const Footer = () => {
  return (
    <Box
      bgColor="appBlue"
      color="appWhite"
      p={["30px", "60px", "60px 100px 60px 100px", "60px 120px 60px 120px"]}
      marginTop="auto"
    >
      <Flex
        direction={["column", "column", "column", "row"]}
        justifyContent="space-between"
        alignItems={["start", "start", "start", "center"]}
        mb="50px"
      >
        <Heading size="lg" mb="2">
          RandomPeople
        </Heading>
        <Heading size="sm">
          All randomly generated profiles were picked from the Randomuser API.
        </Heading>
      </Flex>
      <Divider />
      <Flex
        direction={["column", "column", "row", "row"]}
        justifyContent="space-between"
        mt="3"
      >
        <Heading size="sm" mb="2">
          <Link isExternal href="https://github.com/PaulCrtr">
            Paul Cartier
          </Link>{" "}
          |{" "}
          <Link isExternal href="https://randomuser.me/">
            randomuser.me
          </Link>
        </Heading>
        <Heading size="sm">© 2021 RandomPeople. All rights reserved.</Heading>
      </Flex>
    </Box>
  );
};

export default Footer;
