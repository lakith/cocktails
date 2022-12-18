import { ReactElement } from 'react';

import type { Drink as DrinkType } from '../../types/types';
import { CardItem } from '../common/CardItem';

interface DrinkProps {
  drinkData: DrinkType;
}

export function Drink({ drinkData }: DrinkProps): ReactElement {
  return (
    <CardItem
      itemName={drinkData.strDrink}
      imageURL={drinkData.strDrinkThumb}
      cardContents={null}
    />
  );
}
