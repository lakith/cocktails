import { Container, Flex, Heading, Progress, Stack } from '@chakra-ui/react';
import { ReactElement } from 'react';
import { useParams } from 'react-router-dom';

import { useOneDrink } from './hooks/useOneDrink';
import { DrinkDescription } from './subComponents/DrinkDescription';
import { DrinkImage } from './subComponents/DrinkImage';
import { Ingrediants } from './subComponents/Ingrediants';

export function OneDrink(): ReactElement {
  const { drinkId } = useParams();
  const drinkdetails = useOneDrink(drinkId);

  return (
    <Flex w="100%" flexDir="column" alignItems="flex-start">
      <Container maxW={['1280px']} py={['30px']}>
        {drinkdetails ? (
          <>
            <Heading as="h2" size="2xl" textTransform="uppercase" py="20px">
              {drinkdetails.drinks[0].strDrink}
            </Heading>
            <Stack
              direction={['column', 'row']}
              spacing="100px"
              marginTop="40px"
            >
              <DrinkImage
                imageURL={drinkdetails.drinks[0].strDrinkThumb}
                altText={drinkdetails.drinks[0].strDrink}
              />
              <Ingrediants
                ingrediantList={[
                  drinkdetails.drinks[0].strIngredient1,
                  drinkdetails.drinks[0].strIngredient2,
                  drinkdetails.drinks[0].strIngredient3,
                  drinkdetails.drinks[0].strIngredient4,
                  drinkdetails.drinks[0].strIngredient5,
                  drinkdetails.drinks[0].strIngredient6,
                ]}
              />
            </Stack>
            <DrinkDescription
              strAlcoholic={drinkdetails.drinks[0].strAlcoholic}
              strGlass={drinkdetails.drinks[0].strGlass}
              strInstructions={drinkdetails.drinks[0].strInstructions}
              strTags={drinkdetails.drinks[0].strTags}
            />
          </>
        ) : (
          <Progress size="md" isIndeterminate />
        )}
      </Container>
    </Flex>
  );
}
