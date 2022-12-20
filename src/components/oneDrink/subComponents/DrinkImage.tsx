import { Box, Heading, Image } from '@chakra-ui/react';
import { ReactElement } from 'react';

interface DrinkImageProps {
  imageURL: string;
  altText: string;
  drinkName: string;
}

export function DrinkImage({
  imageURL,
  altText,
  drinkName,
}: DrinkImageProps): ReactElement {
  return (
    <Box boxSize="xl">
      <Heading as="h2" size="2xl" textTransform="uppercase" py="20px">
        {drinkName}
      </Heading>
      <Image src={imageURL} alt={altText} />
    </Box>
  );
}
