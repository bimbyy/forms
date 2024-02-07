import React from 'react';
import { render } from '@testing-library/react';
import Todo from './Todo';

test('matches snapshot', () => {
  const { asFragment } = render(<Todo task="Test todo" id="1" removeTodo={() => {}} toggleComplete={() => {}} updateTask={() => {}} />);
  expect(asFragment()).toMatchSnapshot();
});