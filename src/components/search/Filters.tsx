import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { Select } from 'chakra-react-select';
import { ReactElement } from 'react';

interface FiltersProps {
  categories: string[];
  glassTypes: string[];
  ingredients: string[];
}

export function Filters({
  categories = [],
  glassTypes = [],
  ingredients = [],
}: FiltersProps): ReactElement {
  const categoriesForSelect = categories.map((category, index) => ({
    label: category,
    value: category,
  }));

  const glassTypesForSelect = glassTypes.map((glass, index) => ({
    label: glass,
    value: glass,
  }));

  const ingredientsForSelect = ingredients.map((ingrediant, index) => ({
    label: ingrediant,
    value: ingrediant,
  }));

  return (
    <Flex flexDir="column" justifyContent="space-between">
      <Heading mt={10} textAlign="center" paddingBottom={['30px']}>
        <Text>Filter your choices</Text>
      </Heading>
      <Flex
        flexDir="row"
        width="100%"
        py={['30px']}
        justifyContent="space-between"
        flexBasis="33%"
      >
        <Box width="100%" px={10}>
          <Select
            isMulti
            name="colors"
            options={categoriesForSelect}
            placeholder="Select categories to filter"
            variant="filled"
            onChange={(e) => console.log(e)}
            chakraStyles={{
              dropdownIndicator: () => ({
                display: 'none',
              }),
            }}
          />
        </Box>
        <Box width="100%" px={10}>
          <Select
            isMulti
            name="colors"
            options={glassTypesForSelect}
            placeholder="Select glass type to filter"
            variant="filled"
            onChange={(e) => console.log(e)}
            chakraStyles={{
              dropdownIndicator: () => ({
                display: 'none',
              }),
            }}
          />
        </Box>
        <Box width="100%" px={10}>
          <Select
            isMulti
            name="colors"
            options={ingredientsForSelect}
            placeholder="Select ingredients  to filter"
            variant="filled"
            onChange={(e) => console.log(e)}
            chakraStyles={{
              dropdownIndicator: () => ({
                display: 'none',
              }),
            }}
          />
        </Box>
      </Flex>
    </Flex>
  );
}
