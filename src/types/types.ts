export interface Id {
  idDrink: number;
}

export interface Drink extends Id {
  strDrink: string;
  strDrinkThumb?: string;
  strCategory?: string;
  strAlcoholic?: string;
  strGlass?: string;
  strInstructions?: string;
  strIngredient1?: string;
  strIngredient2?: string;
  strIngredient3?: string;
  strIngredient4?: string;
  strIngredient5?: string;
  strIngredient6?: string;
}

export interface FilterType {
  label: string;
  value: string;
}

export interface Drinks {
  drinks: Drink[];
}
