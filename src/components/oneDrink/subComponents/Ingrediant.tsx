import {
  Box,
  Button,
  Collapse,
  Image,
  ListIcon,
  ListItem,
  useDisclosure,
} from '@chakra-ui/react';
import { ReactElement } from 'react';
import { IoWineSharp } from 'react-icons/io5';

interface IngrediantProps {
  ingrediantName: string;
  imageUrl: string;
  altText: string;
}

export function Ingrediant({
  ingrediantName,
  imageUrl,
  altText,
}: IngrediantProps): ReactElement {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <ListItem>
      <ListIcon as={IoWineSharp} color="brand.100" />
      <Button onClick={onToggle}>{ingrediantName}</Button>
      <Collapse in={isOpen} animateOpacity>
        <Box width="150px">
          <Image src={imageUrl} alt={altText} height="100px" width="100px" />
        </Box>
      </Collapse>
    </ListItem>
  );
}
