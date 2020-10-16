import React from 'react';
import { render } from '@testing-library/react';
import { Button } from '../../index';

test('renders button', () => {
  const { getByText } = render(<Button label={'test my button'} />);
  const button = getByText(/test my button/i);
  expect(button).toBeInTheDocument();
});
