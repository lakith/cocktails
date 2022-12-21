import { ReactElement } from 'react';
import { Link } from 'react-router-dom';

import type { Drink as DrinkType } from '../../../../types/types';
import { CardItem } from '../../../common/CardItem';

interface DrinkProps {
  drinkData: DrinkType;
}

export function Drink({ drinkData }: DrinkProps): ReactElement {
  return (
    <Link to={`/${drinkData.idDrink}`}>
      <CardItem
        itemName={drinkData.strDrink}
        imageURL={drinkData.strDrinkThumb}
        cardContents={null}
      />
    </Link>
  );
}
