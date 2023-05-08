import { SearchIcon } from "@chakra-ui/icons";
import {
  Input,
  InputGroup,
  InputLeftAddon,
  Link,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Stack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Node } from "../dummyTypes/OntologyTypes";

/**
 * Searchbar taken from SDG-Ontology. Need data to fully implement search logic.
 */
interface SearchBarProps {
  limit?: number;
}

const SearchBar: React.FC<SearchBarProps> = ({ limit }: SearchBarProps) => {
  const [searchQuery, setSearchQuery] = useState("");

  const onChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const newSearchQuery = ev.target.value;
    setSearchQuery(newSearchQuery);
  };

  return (
    <Popover
      autoFocus={false}
    >
      <PopoverTrigger>
        <InputGroup size="sm" maxW="sm">
          <InputLeftAddon pointerEvents="none" bg="white">
            <SearchIcon color="gray.400" />
          </InputLeftAddon>
          <Input
            aria-label="Søk i bærekraftsontologien"
            value={searchQuery}
            onChange={onChange}
            variant="outline"
            bg="white"
            placeholder="Søk..."
          />
        </InputGroup>
      </PopoverTrigger>
      <PopoverContent
        border="none"
        boxShadow="xl"
        borderBottomRadius="lg"
        /*  matchWidth */
      >
      </PopoverContent>
    </Popover>
  );
};

SearchBar.defaultProps = {
  limit: undefined,
};

export default SearchBar;
