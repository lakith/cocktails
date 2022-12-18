import {
  Box,
  Container,
  Flex,
  Heading,
  HStack,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  Spacer,
  useBreakpointValue,
} from '@chakra-ui/react';
import { ReactElement, ReactNode } from 'react';
import { BiSearchAlt } from 'react-icons/bi';
import { FaCocktail } from 'react-icons/fa';
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
        <Flex h={16} alignItems="center" justify="space-between">
          <HStack alignItems="center">
            <NavLink to="/">
              <Icon w={12} h={12} color="white.100" as={FaCocktail} />
            </NavLink>
            <Heading as="h1" fontStyle="italic" color="white.100">
              Cocktail Finder
            </Heading>
          </HStack>
          <Spacer />
          {isDesktop ? (
            <Box width="25%">
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <BiSearchAlt color="white.100" size={20} />
                </InputLeftElement>
                <Input
                  color="white.100"
                  _placeholder={{ color: 'white.100' }}
                  placeholder="Search your favourite cocktail"
                  variant="flushed"
                  px={5}
                  py={5}
                />
              </InputGroup>
            </Box>
          ) : null}
        </Flex>
      </Container>
    </Box>
  );
}
