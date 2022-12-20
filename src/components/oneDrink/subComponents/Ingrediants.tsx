import { Box, Heading, List } from '@chakra-ui/react';
import { ReactElement } from 'react';

import { Ingrediant } from './Ingrediant';

interface IngrediantsProps {
  ingrediantList: string[];
}

export function Ingrediants({
  ingrediantList,
}: IngrediantsProps): ReactElement {
  console.log('ingrediantList', ingrediantList);
  return (
    <Box width="100%" paddingTop="80px">
      <Heading as="h3" size="lg" paddingBottom="30px" textTransform="uppercase">
        Ingrediants
      </Heading>
      <List spacing={10}>
        {ingrediantList.map((ingrediant) => {
          if (ingrediant) {
            return (
              <Ingrediant
                key={ingrediant}
                ingrediantName={ingrediant}
                imageUrl="https://ceylonspirits.lk/wp-content/uploads/2020/12/Skyy-Vodka-1-Litre.png"
                altText="vodka"
              />
            );
          }
          return null;
        })}
      </List>
    </Box>
  );
}
