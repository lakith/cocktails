import { useQuery } from 'react-query';

import { axiosInstance } from '../../../../../axiosinstance';
import { queryKeys } from '../../../../../react-query/queryKeys';
import type { Drinks } from '../../../../../types/types';

async function getCocktails(quaryKey: string): Promise<Drinks> {
  const { data } = await axiosInstance.get('/filter.php', {
    params: {
      c: quaryKey === queryKeys.cocktails ? 'Cocktail' : 'Ordinary_Drink',
    },
  });
  return data;
}

export function useDrinks(quaryKey: string): Drinks {
  const fallback = null;
  const { data = fallback } = useQuery(quaryKey, () => getCocktails(quaryKey));
  return data;
}
