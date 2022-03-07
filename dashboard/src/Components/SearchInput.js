import React from "react";
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { FiSearch } from "react-icons/fi";

function SearchInput() {
  return (
    <div>
         <input
            placeholder="Search"
            name="Search"
            id="Search"
            className="h-11 md:w-56 rounded-xl border-2 border-gray-500 p-4"
          />
    </div>
  );
}

export default SearchInput;
