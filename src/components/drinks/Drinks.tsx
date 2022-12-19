import { Box, Container, Flex, Heading } from '@chakra-ui/react';
import { ReactElement } from 'react';

import { Drinks as DrinkType } from '../../types/types';
import { Drink } from './Drink';

interface DrinkProps {
  cocktails: DrinkType;
  ordinaryDrinks: DrinkType;
}

function displayDrinks(
  drinkType: DrinkType,
  drinkDescription: string
): ReactElement {
  return (
    <Flex flexDir="column" justifyContent="space-between">
      <Heading mt={10} textAlign="center" paddingBottom={['30px']}>
        {drinkDescription}
      </Heading>
      <Flex
        flexDir="row"
        width="100%"
        py={['30px']}
        justifyContent="space-between"
        flexWrap="wrap"
        flexBasis="33%"
      >
        {drinkType &&
          drinkType.drinks.slice(0, 6).map((cocktail) => (
            <Box key={cocktail.idDrink}>
              <Drink drinkData={cocktail} />
            </Box>
          ))}
      </Flex>
    </Flex>
  );
}

export function Drinks({
  cocktails = null,
  ordinaryDrinks = null,
}: DrinkProps): ReactElement {
  let cocktailView = null;
  if (cocktails && cocktails.drinks) {
    cocktailView = displayDrinks(cocktails, 'Top Cocktails');
  }
  let ordinaryDrinkView = null;
  if (ordinaryDrinks && ordinaryDrinks.drinks) {
    ordinaryDrinkView = displayDrinks(ordinaryDrinks, 'Top Mocktails');
  }

  return (
    <Container maxW={['1280px']} py={['30px']}>
      <Flex flexDir="column" justifyContent="space-between" width="100%">
        {cocktailView}
        {ordinaryDrinkView}
      </Flex>
    </Container>
  );
}
