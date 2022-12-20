import { useQuery } from 'react-query';

import { axiosInstance } from '../../../axiosinstance';
import { queryKeys } from '../../../react-query/queryKeys';
import type { Drinks } from '../../../types/types';

async function getDrink(drinkId: string): Promise<Drinks> {
  const { data } = await axiosInstance.get('/lookup.php?', {
    params: { i: drinkId },
  });
  return data;
}

export function useOneDrink(drinkId: string): Drinks {
  const fallback = null;
  const { data = fallback } = useQuery([queryKeys.drinks, drinkId], () =>
    getDrink(drinkId)
  );
  return data;
}
