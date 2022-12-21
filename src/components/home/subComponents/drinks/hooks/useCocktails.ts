import { useQuery } from 'react-query';

import { axiosInstance } from '../../../../../axiosinstance';
import { queryKeys } from '../../../../../react-query/queryKeys';
import type { Drinks } from '../../../../../types/types';

async function getCocktails(): Promise<Drinks> {
  const { data } = await axiosInstance.get('/filter.php', {
    params: { c: 'Cocktail' },
  });
  return data;
}

export function useCocktails(): Drinks {
  const fallback = null;
  const { data = fallback } = useQuery(queryKeys.cocktails, getCocktails);
  return data;
}
