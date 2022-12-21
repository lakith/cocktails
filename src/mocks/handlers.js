import { rest } from 'msw';

import {
  mockCocktailIdData,
  mockMargarita,
  mockOrdinaryDrinks,
} from './mockData';

export const handlers = [
  rest.get(
    'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail',
    (req, res, ctx) => res(ctx.json(mockCocktailIdData))
  ),
  rest.get(
    'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink',
    (req, res, ctx) => res(ctx.json(mockOrdinaryDrinks))
  ),
  rest.get(
    'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita',
    (req, res, ctx) => res(ctx.json(mockMargarita))
  ),
  rest.get(
    'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007',
    (req, res, ctx) => res(ctx.json(mockCocktailIdData))
  ),
];
