import { useQuery } from 'react-query';

import { axiosInstance } from '../../../axiosinstance';
import { queryKeys } from '../../../react-query/queryKeys';
import { Drinks } from '../../../types/types';

async function getOrdinaryDrinks(): Promise<Drinks> {
  const { data } = await axiosInstance.get('/filter.php', {
    params: { c: 'Ordinary_Drink' },
  });
  return data;
}

export function useOrdinaryDrinks(): Drinks {
  const fallback = null;
  const { data = fallback } = useQuery(
    queryKeys.ordinary_drinks,
    getOrdinaryDrinks
  );
  return data;
}
