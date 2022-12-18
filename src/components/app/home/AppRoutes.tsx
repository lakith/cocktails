import { ReactElement } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Home } from './Home';

export function AppRoutes(): ReactElement {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}
