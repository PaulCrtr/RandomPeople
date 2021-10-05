import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import { Flex } from "@chakra-ui/layout";

const App = () => {
  return (
    <Flex
      direction="column"
      minHeight="100vh"
      backgroundColor="appWhite"
      color="appBlack"
    >
      <Navbar />
      <Header />
      <Footer />
    </Flex>
  );
};

export default App;
