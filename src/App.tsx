import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import { Flex } from "@chakra-ui/react";
import Home from "./pages/Home";
import Followings from "./pages/Followings";

const App = () => {
  return (
    <Router>
      <Flex
        direction="column"
        minHeight="140vh"
        backgroundColor="appWhite"
        color="appBlack"
      >
        <Navbar />
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/followings">
            <Followings />
          </Route>
        </Switch>
        <Footer />
      </Flex>
    </Router>
  );
};

export default App;
