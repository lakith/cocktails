import {
  Box,
  Card,
  CardBody,
  Center,
  Heading,
  Image,
  Stack,
} from '@chakra-ui/react';
import { ReactElement, ReactNode } from 'react';

interface CardProps {
  itemName: string;
  imageURL: string;
  cardContents: ReactNode;
}
export function CardItem({
  itemName,
  imageURL,
  cardContents,
}: CardProps): ReactElement {
  return (
    <Card variant="filled">
      <CardBody maxW="sm">
        <Image src={imageURL} alt={itemName} borderRadius="sm" />
        <Stack mt="6" spacing="3">
          <Center>
            <Heading as="h3" size="sm">
              {itemName}
            </Heading>
          </Center>
        </Stack>
        {cardContents}
      </CardBody>
    </Card>
  );
}
