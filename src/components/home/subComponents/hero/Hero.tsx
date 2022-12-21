import {
  Box,
  Heading,
  HStack,
  Image,
  useBreakpointValue,
  VStack,
} from '@chakra-ui/react';
import { ReactElement } from 'react';

import cocktailImage from '../../../../images/cocktail-main.webp';

export function Hero(): ReactElement {
  const isDesktop = useBreakpointValue({ base: false, lg: true });

  return (
    <Box width="100%" height={['auto', 'auto', 'auto', '657px']}>
      <HStack height="inherit">
        <Box
          width={isDesktop ? '50%' : '100%'}
          height="inherit"
          bg="#181818"
          py={['50px', '50px', '50px', 'auto']}
        >
          <VStack>
            <Box width="85%" marginTop="8%">
              <Heading
                as="h1"
                size={['3xl', '3xl', '3xl', '4xl']}
                lineHeight="5rem"
                textTransform="uppercase"
                color="#CDCDCD"
                fontWeight="bold"
              >
                Best Cocktails That You Can Whip Up Anytime !
              </Heading>
              <Heading
                size="md"
                marginTop="30px"
                color="brand.100"
                fontWeight="bold"
                lineHeight="2rem"
              >
                No matter which spirit you prefer, whether that be gin, vodka,
                whiskey, tequila, bourbon or something else, there is sure to be
                a classic cocktail on this list for you.
              </Heading>
            </Box>
          </VStack>
        </Box>
        {isDesktop ? (
          <Box width="50%" margin="0 !important">
            <Image
              zIndex={-1}
              src={cocktailImage}
              height="658px"
              alt="Cocktail Glass"
            />
          </Box>
        ) : null}
      </HStack>
    </Box>
  );
}
