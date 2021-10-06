import { Input } from "@chakra-ui/react";
import { Dispatch, SetStateAction } from "react";

type SearchBarProps = {
  setFilterValue: Dispatch<SetStateAction<string>>;
};

const SearchBar = ({ setFilterValue }: SearchBarProps) => {
  return (
    <Input
      onChange={(e) => setFilterValue(e.target.value)}
      placeholder="Search by name"
      size="lg"
      backgroundColor="appWhite"
      shadow="lg"
    />
  );
};

export default SearchBar;
