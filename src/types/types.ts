export interface Id {
  idDrink: number;
}

export interface Drink extends Id {
  strDrink: string;
  strDrinkThumb: string;
}

export interface Drinks {
  drinks: Drink[];
}
