import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

test('We start with 5 inputs', () => {
  const { container } = render(<App />);
  const inputs = container.querySelectorAll('input');
  expect(inputs).toHaveLength(5);
});

test('The initial value is AA in all inputs', () => {
  const { container } = render(<App />);
  const inputs = container.querySelectorAll('input');
  for (let i=0; i < 5; i++) {
    const input = inputs[i];
    expect(input.value).toEqual('AA');
  }
});

test('We can change the text in the first box, and everyone else will change', () => {
  const { container } = render(<App />);
  const inputs = container.querySelectorAll('input');
  const firstBox = inputs[0];
  
  // Change the text in a React way
  fireEvent.change(firstBox, { target: { value: 'hello' } });

  for (let i=0; i < 5; i++) {
    const input = inputs[i];
    expect(input.value).toEqual('hello');
  }
});

test('We can change the text in the third box, and everyone else will change', () => {
  const { container } = render(<App />);
  const inputs = container.querySelectorAll('input');
  const firstBox = inputs[2];
  
  // Change the text in a React way
  fireEvent.change(firstBox, { target: { value: 'hello' } });

  for (let i=0; i < 5; i++) {
    const input = inputs[i];
    expect(input.value).toEqual('hello');
  }
});
