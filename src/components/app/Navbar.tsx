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
    <Link
      as={RouterLink}
      px={2}
      py={1}
      rounded="md"
      _hover={{
        textDecoration: 'none',
        color: 'olive.500',
      }}
      to={to}
    >
      {children}
    </Link>
  );
}

export function Navbar(): ReactElement {
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  // @ts-ignore
  // @ts-ignore
  // @ts-ignore
  // @ts-ignore
  return (
    <Box bg="brand.100">
      <Container maxW={['1280px']}>
        <Flex h={16} alignItems="center" justify="space-between">
          <HStack alignItems="center">
            <NavLink to="/">
              <Icon w={12} h={12} color="#fff" as={FaCocktail} />
            </NavLink>
            <Heading as="h1" fontStyle="italic" color="#fff">
              Cocktail Finder
            </Heading>
          </HStack>
          <Spacer />
          {isDesktop ? (
            <Box width="25%">
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <BiSearchAlt color="#fff" />
                </InputLeftElement>
                <Input
                  color="#fff"
                  _placeholder={{ color: '#fff' }}
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
