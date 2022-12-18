import { Container, Flex, Stack } from '@chakra-ui/react';
import { ReactElement } from 'react';

import { Drinks } from '../drinks/Drinks';

export function Home(): ReactElement {
  return (
    <Flex w="100%" flexDir="column" alignItems="flex-start">
      <Drinks />
    </Flex>
  );
}
