import React from 'react';
import { render } from '@testing-library/react';
import { Panel } from '../..';

test('renders button', () => {
  const { getByText } = render(<Panel title={'test panel'} />);
  const panel = getByText(/test panel/i);
  expect(panel).toBeInTheDocument();
});
