import {
  Box,
  Container,
  Flex,
  Heading,
  HStack,
  Icon,
  Link,
  Spacer,
  Text,
  useBreakpointValue,
  VStack,
} from '@chakra-ui/react';
import { ReactElement, ReactNode } from 'react';
import { FaCocktail, FaWineBottle } from 'react-icons/fa';
import { Link as RouterLink } from 'react-router-dom';

function NavLink({ to, children }: { to: string; children: ReactNode }) {
  return (
    <Link as={RouterLink} px={2} py={1} rounded="md" to={to}>
      {children}
    </Link>
  );
}

export function Navbar(): ReactElement {
  const isDesktop = useBreakpointValue({ base: false, lg: true });

  return (
    <Box bg="brand.100">
      <Container maxW={['1280px']}>
        <Flex h={120} alignItems="center" justify="space-between">
          <HStack alignItems="center">
            <NavLink to="/">
              <Icon w={20} h={20} color="white.100" as={FaCocktail} />
            </NavLink>
            <Heading
              as="h1"
              fontStyle="italic"
              color="white.100"
              textTransform="uppercase"
              marginTop="10px !important"
            >
              Cocktail Finder
            </Heading>
          </HStack>
          <Spacer />
          {isDesktop ? (
            <VStack>
              <Box>
                <Text
                  variant="outline"
                  fontSize="xl"
                  fontWeight="900"
                  color="white.100"
                  textTransform="uppercase"
                >
                  Greatest Cocktails Of All Time!
                </Text>
              </Box>
              <Box>
                <HStack>
                  <Icon w={5} h={5} color="white.100" as={FaWineBottle} />
                  <Icon w={5} h={5} color="white.100" as={FaWineBottle} />
                  <Icon w={5} h={5} color="white.100" as={FaWineBottle} />
                </HStack>
              </Box>
            </VStack>
          ) : null}
        </Flex>
      </Container>
    </Box>
  );
}
