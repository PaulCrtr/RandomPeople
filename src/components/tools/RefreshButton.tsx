import { Button } from "@chakra-ui/button";
import Icon from "@chakra-ui/icon";
import { BiRefresh } from "react-icons/bi";

type RefreshButtonProps = {
  getUsers: () => void;
};

const RefreshButton = ({ getUsers }: RefreshButtonProps) => {
  return (
    <Button colorScheme="teal" onClick={getUsers} shadow="lg">
      <Icon w="10" h="10" as={BiRefresh} />
    </Button>
  );
};

export default RefreshButton;
