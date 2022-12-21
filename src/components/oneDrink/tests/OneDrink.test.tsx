import { screen } from '@testing-library/react';

import { renderWithQueryClient } from '../../../test-utils';
import { OneDrink } from '../OneDrink';

test('renders response from query', async () => {
  renderWithQueryClient(<OneDrink />);

  const drinkTitle = await screen.findByRole('heading', {
    name: /Margarita/i,
  });

  expect(drinkTitle).toHaveLength(1);
});
