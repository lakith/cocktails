import { Box, Flex, Text } from '@chakra-ui/react';
import { Select } from 'chakra-react-select';
import { ReactElement, useState } from 'react';

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

  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedGlassTypes, setSelectedGlassTypes] = useState<string[]>([]);
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);

  const onCategoryChange = (changedCategories: string[]): void => {
    setSelectedCategories(changedCategories);
  };

  const onGlassTypeChange = (changedGlassType: string[]): void => {
    setSelectedGlassTypes(changedGlassType);
  };

  const onIngrediantChange = (changedIngrediants: string[]): void => {
    setSelectedIngredients(changedIngrediants);
  };

  return (
    <Flex flexDir="column" justifyContent="space-between">
      <Flex
        flexDir={['column', 'column', 'column', 'row']}
        width="100%"
        py={['30px']}
        justifyContent="space-between"
        flexBasis={['100%', '100%', '100%', '33%']}
      >
        <Box width="100%" px={10}>
          <Text textTransform="uppercase" py="10px" px="5px" fontWeight="bold">
            Filter By Category
          </Text>
          <Select
            isMulti
            name="colors"
            options={categoriesForSelect}
            placeholder="Select categories to filter"
            variant="filled"
            onChange={(changedCategories) =>
              onCategoryChange(
                changedCategories.map((category) => category.value)
              )
            }
            chakraStyles={{
              dropdownIndicator: () => ({
                display: 'none',
              }),
            }}
            focusBorderColor="brand.100"
          />
        </Box>
        <Box width="100%" px={10}>
          <Text textTransform="uppercase" py="10px" px="5px" fontWeight="bold">
            Filter By Glass Type
          </Text>
          <Select
            isMulti
            name="colors"
            options={glassTypesForSelect}
            placeholder="Select glass type to filter"
            variant="filled"
            onChange={(changedGlasses) =>
              onGlassTypeChange(changedGlasses.map((glass) => glass.value))
            }
            chakraStyles={{
              dropdownIndicator: () => ({
                display: 'none',
              }),
            }}
            focusBorderColor="brand.100"
          />
        </Box>
        <Box width="100%" px={10}>
          <Text textTransform="uppercase" py="10px" px="5px" fontWeight="bold">
            Filter By ingredient
          </Text>
          <Select
            isMulti
            name="colors"
            options={ingredientsForSelect}
            placeholder="Select ingredients to filter"
            variant="filled"
            onChange={(changedIngredients) =>
              onIngrediantChange(
                changedIngredients.map((ingredient) => ingredient.value)
              )
            }
            chakraStyles={{
              dropdownIndicator: () => ({
                display: 'none',
              }),
            }}
            focusBorderColor="brand.100"
          />
        </Box>
      </Flex>
    </Flex>
  );
}
