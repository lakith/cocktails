import {
  Center,
  Container,
  Input,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import { ReactElement, useState } from 'react';
import { BiSearchAlt } from 'react-icons/bi';

import { Drinks } from '../../types/types';
import useDebounce from './hooks/useDebounce';
import { useSearchCocktail } from './hooks/useSearchCocktail';

interface SearchBoxProps {
  setIsSearch: (isSearch: boolean) => void;
  setSearchTeams: (drinks: Drinks) => void;
}

export default function SearchBox({
  setIsSearch,
  setSearchTeams,
}: SearchBoxProps): ReactElement {
  const [search, setSearch] = useState('');
  const debouncedSearchTerm = useDebounce(search, 200);
  useSearchCocktail(debouncedSearchTerm, setSearchTeams);

  return (
    <Container maxW={['1280px']} py={['30px']}>
      <Center>
        <InputGroup width="80%">
          <Input
            type="search"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setIsSearch(true);
            }}
            placeholder="Enter your Favourite Cocktail here"
            width="80%"
          />
          <InputRightElement>
            <BiSearchAlt color="white.100" size={20} />
          </InputRightElement>
        </InputGroup>
      </Center>
    </Container>
  );
}
