import { ReactElement } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Home } from '../home/Home';
import { OneDrink } from '../oneDrink/OneDrink';

export function AppRoutes(): ReactElement {
  return (
    <Routes>
      <Route path="/:drinkId" element={<OneDrink />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
}
