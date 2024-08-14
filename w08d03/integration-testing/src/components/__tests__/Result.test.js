import React from 'react';
import { render, getByTestId, fireEvent } from '@testing-library/react';
import Result from '../Result';
// import test from 'node:test';

test('shows appropriate message when the status is "Waiting"', () => {
  const fakeState = {
    compSelection: null,
    playerSelection: null,
    status: 'Waiting',
    cheating: false
  };
  
  const { container } = render(<Result status={fakeState.status} />);
  expect(getByTestId(container, 'result_footer')).toHaveTextContent('Waiting for your choice!');
});

test('can display high scores after making an AJAX request', () => {
  // render the Result component
  const {getByTestId, findByText} = render(<Result status="Waiting" />);

  // find the fetch high scores button
  const highScoresButton = getByTestId('high-scores');

  // click on the fetch high scores button
  fireEvent.click(highScoresButton);

  // check to see if our fake data is in the DOM
  return findByText('carol', { exact: false });
});
