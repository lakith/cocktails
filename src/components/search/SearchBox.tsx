import {
  Box,
  Button,
  Center,
  Container,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import { ReactElement, useEffect, useState } from 'react';
import { BiSearchAlt } from 'react-icons/bi';

import { Drinks } from '../../types/types';
import { Filters } from './Filters';
import useDebounce from './hooks/useDebounce';
import { useSearchCocktail } from './hooks/useSearchCocktail';

interface SearchBoxProps {
  setIsSearch: (isSearch: boolean) => void;
  setSearchTeams: (drinks: Drinks) => void;
  categories: string[];
  glassTypes: string[];
  ingredients: string[];
}

export default function SearchBox({
  setIsSearch,
  setSearchTeams,
  categories,
  glassTypes,
  ingredients,
}: SearchBoxProps): ReactElement {
  const [search, setSearch] = useState('');
  const debouncedSearchTerm = useDebounce(search, 200);
  const searchTerms = useSearchCocktail(debouncedSearchTerm);

  useEffect(() => {
    setSearchTeams(searchTerms);
  }, [searchTerms]);

  return (
    <Box width="100%" bgColor="#efedea">
      <Container maxW={['1280px']} py={['30px']}>
        <Center>
          <Heading
            as="h2"
            textTransform="uppercase"
            marginTop="70px"
            marginBottom="50px"
          >
            Find your favourite Cocktails Here
          </Heading>
        </Center>
        <Center>
          <InputGroup width="80%">
            <Input
              type="search"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setIsSearch(true);
              }}
              placeholder="Find Your Cocktail!"
              width="100%"
              size="lg"
              variant="filled"
              _placeholder={{ color: '#000', opacity: 0.4 }}
              borderColor="brand.100"
              focusBorderColor="purple.100"
            />
            <InputRightElement width="15%" height="50px" top="-1px" right="3px">
              <Button
                width="100%"
                bgColor="brand.100"
                color="#fff"
                _hover={{ bgColor: 'brand.100' }}
              >
                Search
              </Button>
            </InputRightElement>
          </InputGroup>
        </Center>
        <Filters
          categories={categories}
          glassTypes={glassTypes}
          ingredients={ingredients}
        />
      </Container>
    </Box>
  );
}
