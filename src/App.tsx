import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import UserList from "./components/userList/UserList";
import { Flex } from "@chakra-ui/react";

const App = () => {
  return (
    <Flex
      direction="column"
      minHeight="140vh"
      backgroundColor="appWhite"
      color="appBlack"
    >
      <Navbar />
      <Header />
      <UserList />
      <Footer />
    </Flex>
  );
};

export default App;
