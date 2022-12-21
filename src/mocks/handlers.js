import { rest } from 'msw';

import {
  mockCocktailIdData,
  mockMargarita,
  mockOrdinaryDrinks,
} from './mockData';

export const handlers = [
  rest.get(
    'https://www.thecocktaildb.com/api/json/v1/1/filter.php',
    (req, res, ctx) => {
      const filterType = req.url.searchParams('c');
      if (filterType === 'Cocktail') {
        res(ctx.json(mockCocktailIdData));
      } else if (filterType === 'Ordinary_Drink') {
        res(ctx.json(mockOrdinaryDrinks));
      } else {
        res(ctx.json([]));
      }
    }
  ),
  rest.get(
    'https://www.thecocktaildb.com/api/json/v1/1/search.php',
    (req, res, ctx) => {
      const drink = req.url.searchParams('s');
      if (drink === 'margarita') {
        res(ctx.json(mockMargarita));
      } else {
        res(ctx.json([]));
      }
    }
  ),
  rest.get(
    'https://www.thecocktaildb.com/api/json/v1/1/lookup.php',
    (req, res, ctx) => {
      const id = req.url.searchParams('i');
      if (id === '11007') {
        res(ctx.json(mockCocktailIdData));
      }
    }
  ),
];
