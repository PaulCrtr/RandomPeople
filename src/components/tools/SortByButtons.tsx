import { Button } from "@chakra-ui/button";
import Icon from "@chakra-ui/icon";
import { Flex } from "@chakra-ui/layout";
import { UsersSort } from "../../types/user";
import { FaSort, FaSortUp } from "react-icons/fa";

type SortByButtonsProps = {
  sort: UsersSort;
};

const SortByButtons = ({ sort }: SortByButtonsProps) => {
  return (
    <Flex alignItems="center" shadow="lg">
      <Button
        borderRight="solid 1px Azure"
        borderRightRadius="0"
        colorScheme="teal"
        onClick={sort.byAge}
      >
        <Icon as={FaSortUp} />
        Age
      </Button>
      <Button borderRadius="0" colorScheme="teal" onClick={sort.byGender}>
        <Icon as={FaSort} />
        Gender
      </Button>
      <Button
        borderLeft="solid 1px Azure"
        borderLeftRadius="0"
        colorScheme="teal"
        onClick={sort.byABC}
      >
        <Icon as={FaSortUp} />
        ABC
      </Button>
    </Flex>
  );
};

export default SortByButtons;
