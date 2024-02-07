import React from 'react';
import { render } from '@testing-library/react';
import Todo from './Todo';

test('renders without crashing', () => {
  render(<Todo task="Test todo" id="1" removeTodo={() => {}} toggleComplete={() => {}} updateTask={() => {}} />);
});