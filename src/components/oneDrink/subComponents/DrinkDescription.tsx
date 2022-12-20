import { Box, Heading, HStack, Tag, Text, VStack } from '@chakra-ui/react';
import { ReactElement } from 'react';

interface DrinkDescriptionProps {
  strAlcoholic: string;
  strGlass: string;
  strInstructions: string;
  strTags: string;
}

export function DrinkDescription({
  strAlcoholic,
  strGlass,
  strInstructions,
  strTags,
}: DrinkDescriptionProps): ReactElement {
  return (
    <VStack>
      <Box>
        <Heading as="h3" size="lg" paddingBottom="30px" marginTop="-20px">
          About
        </Heading>
        <Text size="lg" fontWeight="400" paddingBottom="30px">
          {strInstructions}
        </Text>
        <Box>
          <Text fontWeight="bold" paddingBottom="20px">
            Tags
          </Text>
          <HStack spacing={2} paddingBottom="20px">
            {strTags &&
              strTags.split(',').map((tag) => <Tag key={tag}>{tag}</Tag>)}
          </HStack>
          <Box display="flex" py="10px">
            <Text textTransform="uppercase" fontWeight="bold">
              Glass Type:{' '}
            </Text>
            <Text px="30px">{strGlass}</Text>
          </Box>
          <Box display="flex" py="10px">
            <Text textTransform="uppercase" fontWeight="bold">
              Is Alcoholic:{' '}
            </Text>
            <Text px="20px">{strAlcoholic === 'Alcoholic' ? 'Yes' : 'No'}</Text>
          </Box>
        </Box>
      </Box>
    </VStack>
  );
}
