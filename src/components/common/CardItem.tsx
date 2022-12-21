import { Card, CardBody, Center, Image, Stack, Text } from '@chakra-ui/react';
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
    <Card variant="outline" borderColor="#ebebeb">
      <CardBody maxW="sm">
        <Image
          src={imageURL}
          alt={itemName}
          borderRadius="lg"
          width="300px"
          height="300px"
        />
        <Stack mt="6" spacing="3">
          <Center>
            <Text size="md" fontWeight="600" color="black.200">
              {itemName}
            </Text>
          </Center>
        </Stack>
        {cardContents}
      </CardBody>
    </Card>
  );
}
