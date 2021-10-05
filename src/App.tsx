import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import { Flex } from "@chakra-ui/layout";
import useFetchUsers from "./api/useFetchUsers";
import UserList from "./components/users/UserList";

const App = () => {
  const { users, loading, error } = useFetchUsers();

  return (
    <Flex
      direction="column"
      minHeight="100vh"
      backgroundColor="appWhite"
      color="appBlack"
    >
      <Navbar />
      <Header />
      <UserList users={users!} />
      <Footer />
    </Flex>
  );
};

export default App;
