import { Box, Heading, Image } from '@chakra-ui/react';
import { ReactElement } from 'react';

interface DrinkImageProps {
  imageURL: string;
  altText: string;
}

export function DrinkImage({
  imageURL,
  altText,
}: DrinkImageProps): ReactElement {
  return (
    <Box boxSize="xl">
      <Image src={imageURL} alt={altText} />
    </Box>
  );
}
