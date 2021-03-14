import Counter from '../Counter';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

test('header renders with correct text', () => {
  const { getByTestId } = render(<Counter />);
  const headerEl = getByTestId('header');

  expect(headerEl.textContent).toBe('My Counter');
});

test('counter initially starts with text of 0', () => {
  const { getByTestId } = render(<Counter />);
  const counterEl = getByTestId('counter');

  expect(counterEl.textContent).toBe('0');
});

test('input contains initial value of 1', () => {
  const { getByTestId } = render(<Counter />);
  const inputEl = getByTestId('input');

  expect(inputEl.value).toBe('1');
});

test('add button renders with +', () => {
  const { getByTestId } = render(<Counter />);
  const addButton = getByTestId('add-button');

  expect(addButton.textContent).toBe('+');
});

test('subtract button renders with -', () => {
  const { getByTestId } = render(<Counter />);
  const subtractButton = getByTestId('subtract-button');

  expect(subtractButton.textContent).toBe('-');
});

test('change value of input works correctly', () => {
  const { getByTestId } = render(<Counter />);
  const inputEl = getByTestId('input');

  expect(inputEl.value).toBe('1');

  fireEvent.change(inputEl, {
    target: { value: '5' },
  });

  expect(inputEl.value).toBe('5');
});

test('click on plus button adds 1 to counter', () => {
  const { getByTestId } = render(<Counter />);
  const buttonEl = getByTestId('add-button');
  const counterEl = getByTestId('counter');

  fireEvent.click(buttonEl);

  expect(counterEl.textContent).toBe('1');
});

test('click on subtract button adds -1 to counter', () => {
  const { getByTestId } = render(<Counter />);
  const buttonEl = getByTestId('subtract-button');
  const counterEl = getByTestId('counter');

  fireEvent.click(buttonEl);

  expect(counterEl.textContent).toBe('-1');
});

test('changing input value then clicking on add button works correctly', () => {
  const { getByTestId } = render(<Counter />);
  const buttonEl = getByTestId('add-button');
  const counterEl = getByTestId('counter');
  const inputEl = getByTestId('input');

  fireEvent.change(inputEl, {
    target: { value: '5' },
  });

  fireEvent.click(buttonEl);

  expect(counterEl.textContent).toBe('5');
});

test('changing input value then clicking on subtract button works correctly', () => {
  const { getByTestId } = render(<Counter />);
  const buttonEl = getByTestId('subtract-button');
  const counterEl = getByTestId('counter');
  const inputEl = getByTestId('input');

  fireEvent.change(inputEl, {
    target: { value: '5' },
  });

  fireEvent.click(buttonEl);

  expect(counterEl.textContent).toBe('-5');
});

test('adding and then subtracting leads to the correct counter number', () => {
  const { getByTestId } = render(<Counter />);
  const subtractButtonEl = getByTestId('subtract-button');
  const addButtonEl = getByTestId('add-button');
  const counterEl = getByTestId('counter');
  const inputEl = getByTestId('input');

  fireEvent.change(inputEl, {
    target: { value: '10' },
  });

  for (let i = 0; i < 4; i++) {
    fireEvent.click(addButtonEl);
  }

  for (let i = 0; i < 2; i++) {
    fireEvent.click(subtractButtonEl);
  }

  expect(counterEl.textContent).toBe('20');

  for (let i = 0; i < 2; i++) {
    fireEvent.click(addButtonEl);
  }

  for (let i = 0; i < 3; i++) {
    fireEvent.click(subtractButtonEl);
  }

  expect(counterEl.textContent).toBe('10');
});

test('counter color changes', () => {
  const { getByTestId } = render(<Counter />);
  const counterEl = getByTestId('counter');
  const inputEl = getByTestId('input');
  const subtractButtonEl = getByTestId('subtract-button');
  const addButtonEl = getByTestId('add-button');

  expect(counterEl).toHaveStyle('color: black');

  fireEvent.change(inputEl, {
    target: { value: '100' },
  });

  fireEvent.click(addButtonEl);
  expect(counterEl).toHaveStyle('color: green');

  for (let i = 0; i < 2; i++) {
    fireEvent.click(subtractButtonEl);
  }
  expect(counterEl).toHaveStyle('color: red');

  fireEvent.click(addButtonEl);
  expect(counterEl).toHaveStyle('color: black');
});
