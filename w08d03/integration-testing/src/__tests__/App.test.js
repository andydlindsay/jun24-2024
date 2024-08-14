// import test, { describe } from 'node:test';
import React from 'react';
import App from '../App';
import { render, fireEvent } from '@testing-library/react';

describe('tests for the App component', () => {

  test('can toggle the isCheating boolean by clicking on the robot head icon', () => {
    const {getByTestId} = render(<App />);

    const robotHeadIcon = getByTestId('robot-head-icon');

    fireEvent.click(robotHeadIcon);

    expect(robotHeadIcon).toHaveClass('cheating');

    fireEvent.click(robotHeadIcon);

    expect(robotHeadIcon).not.toHaveClass('cheating');
  });

});
