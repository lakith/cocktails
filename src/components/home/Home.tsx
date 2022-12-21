import { Flex } from '@chakra-ui/react';
import { ReactElement, useState } from 'react';

import { queryKeys } from '../../react-query/queryKeys';
import { Drinks as DrinkType } from '../../types/types';
import { Drinks } from './subComponents/drinks/Drinks';
import { useDrinks } from './subComponents/drinks/hooks/useDrinks';
import { Hero } from './subComponents/hero/Hero';
import SearchBox from './subComponents/search/SearchBox';

export function Home(): ReactElement {
  const [isSearching, setIsSearch] = useState(false);
  const [searchTerms, setSearchTerms] = useState<DrinkType>(null);

  const cocktails = useDrinks(queryKeys.cocktails);
  const ordinaryDrinks = useDrinks(queryKeys.ordinary_drinks);

  const categories: string[] = [];
  const glassTypes: string[] = [];
  const ingredients: string[] = [];

  if (
    isSearching &&
    searchTerms &&
    searchTerms.drinks &&
    searchTerms.drinks.length
  ) {
    searchTerms.drinks.forEach((drink) => {
      if (!categories.includes(drink.strCategory)) {
        categories.push(drink.strCategory);
      }
      if (!glassTypes.includes(drink.strGlass)) {
        glassTypes.push(drink.strGlass);
      }
      if (drink.strIngredient1 && !ingredients.includes(drink.strIngredient1)) {
        ingredients.push(drink.strIngredient1);
      }
      if (drink.strIngredient2 && !ingredients.includes(drink.strIngredient2)) {
        ingredients.push(drink.strIngredient2);
      }
      if (drink.strIngredient3 && !ingredients.includes(drink.strIngredient3)) {
        ingredients.push(drink.strIngredient3);
      }
      if (drink.strIngredient4 && !ingredients.includes(drink.strIngredient4)) {
        ingredients.push(drink.strIngredient4);
      }
      if (drink.strIngredient5 && !ingredients.includes(drink.strIngredient5)) {
        ingredients.push(drink.strIngredient5);
      }
      if (drink.strIngredient6 && !ingredients.includes(drink.strIngredient6)) {
        ingredients.push(drink.strIngredient6);
      }
    });
  }

  return (
    <Flex w="100%" flexDir="column" alignItems="flex-start">
      <Hero />
      <SearchBox
        setIsSearch={setIsSearch}
        setSearchTeams={setSearchTerms}
        categories={categories}
        glassTypes={glassTypes}
        ingredients={ingredients}
      />
      <Drinks
        cocktails={isSearching ? searchTerms || cocktails : cocktails}
        ordinaryDrinks={ordinaryDrinks}
      />
    </Flex>
  );
}
