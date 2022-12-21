import { useQuery, useQueryClient } from 'react-query';

import { axiosInstance } from '../../../../../axiosinstance';
import { queryKeys } from '../../../../../react-query/queryKeys';
import { Drinks } from '../../../../../types/types';

// for when we need a query function for useQuery
async function getSearchTearms(searchKey: string): Promise<Drinks> {
  const { data } = await axiosInstance.get('/search.php', {
    params: { s: searchKey },
  });
  return data;
}

export function useSearchCocktail(debouncedSearchTerm: string): Drinks {
  const fallback = null;
  const { data = fallback } = useQuery(
    [queryKeys.cocktail_search, debouncedSearchTerm],
    () => getSearchTearms(debouncedSearchTerm)
  );

  return data;
}
