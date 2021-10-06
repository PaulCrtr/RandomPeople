import { Flex } from "@chakra-ui/layout";
import { Dispatch, SetStateAction } from "react";
import { UsersSort } from "../../types/user";
import RefreshButton from "./RefreshButton";
import SearchBar from "./SearchBar";
import SortByButtons from "./SortByButtons";

type ToolsProps = {
  sort: UsersSort;
  getUsers: () => void;
  setFilterValue: Dispatch<SetStateAction<string>>;
};

const Tools = ({ sort, getUsers, setFilterValue }: ToolsProps) => {
  return (
    <Flex
      justifyContent="space-around"
      alignItems="center"
      position="relative"
      top="-6"
      mb="5"
      direction={["column", "column", "row", "row"]}
    >
      <Flex w="25%" justifyContent="center" order={[1, 1, 0, 0]}>
        <SortByButtons sort={sort} />
      </Flex>
      <Flex
        w={["70%", "60%", "30%", "25%"]}
        justifyContent="center"
        mb={["4", "4", "0", "0"]}
      >
        <SearchBar setFilterValue={setFilterValue} />
      </Flex>
      <Flex w="25%" justifyContent="center" mb={["4", "4", "0", "0"]}>
        <RefreshButton getUsers={getUsers} />
      </Flex>
    </Flex>
  );
};

export default Tools;
