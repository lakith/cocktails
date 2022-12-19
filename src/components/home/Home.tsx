import { Container, Flex, Stack } from '@chakra-ui/react';
import { ReactElement, useState } from 'react';

import { Drinks as DrinkType } from '../../types/types';
import { Drinks } from '../drinks/Drinks';
import { useCocktails } from '../drinks/hooks/useCocktails';
import { useOrdinaryDrinks } from '../drinks/hooks/useOrdinaryDrinks';
import SearchBox from '../search/SearchBox';

export function Home(): ReactElement {
  const [isSearching, setIsSearch] = useState(false);
  const [searchTerms, setSearchTerms] = useState<DrinkType>(null);

  const cocktails = useCocktails();
  const ordinaryDrinks = useOrdinaryDrinks();

  return (
    <Flex w="100%" flexDir="column" alignItems="flex-start">
      <SearchBox setIsSearch={setIsSearch} setSearchTeams={setSearchTerms} />
      <Drinks
        cocktails={isSearching ? searchTerms || cocktails : cocktails}
        ordinaryDrinks={ordinaryDrinks}
      />
    </Flex>
  );
}
