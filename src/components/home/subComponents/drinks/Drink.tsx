import { ReactElement } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import type { Drink as DrinkType } from '../../../../types/types';
import { CardItem } from '../../../common/CardItem';

interface DrinkProps {
  drinkData: DrinkType;
}

export function Drink({ drinkData }: DrinkProps): ReactElement {
  const navigate = useNavigate();

  const onClicknavigation = (id: number): void => {
    navigate(`/${id}`);
  };

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
