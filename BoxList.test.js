import React from 'react';
import { render } from '@testing-library/react';
import BoxList from './BoxList';

test('renders without crashing', () => {
  render(<BoxList />);
});