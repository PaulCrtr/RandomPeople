import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import UserList from "./components/userList/UserList";
import { Spinner, Flex } from "@chakra-ui/react";
import useFetchUsers from "./api/useFetchUsers";

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
      {loading ? (
        <Spinner size="xl" margin="auto" />
      ) : (
        <UserList users={users!} />
      )}
      <Footer />
    </Flex>
  );
};

export default App;
