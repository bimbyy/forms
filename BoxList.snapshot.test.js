import React from 'react';
import { render } from '@testing-library/react';
import BoxList from './BoxList';

test('matches snapshot', () => {
  const { asFragment } = render(<BoxList />);
  expect(asFragment()).toMatchSnapshot();
});