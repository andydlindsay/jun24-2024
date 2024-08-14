// import test from 'node:test';
import { calcStatus, compWinFunction } from '../helpers'

describe('announceResult function', () => {
  let fakeState;

  beforeEach(() => {
    fakeState = {
      compSelection: null,
      playerSelection: null,
      status: 'Waiting',
      cheating: false
    };
  });
  
  test('returns "Won" if player is "Axe" and comp is "Tree"', () => {
    fakeState.playerSelection = 'Axe';
    fakeState.compSelection = 'Tree';
    expect(calcStatus(fakeState.playerSelection, fakeState.compSelection)).toBe('Won');
  });

  test('returns "Tied" if player is "Axe" and comp is "Axe"', () => {
    fakeState.playerSelection = 'Axe';
    fakeState.compSelection = 'Axe';
    expect(calcStatus(fakeState.playerSelection, fakeState.compSelection)).toBe('Tied');
  });

  test('returns "Lost" if player is "Axe" and comp is "Moai"', () => {
    fakeState.playerSelection = 'Axe';
    fakeState.compSelection = 'Moai';
    expect(calcStatus(fakeState.playerSelection, fakeState.compSelection)).toBe('Lost');
  });

  test('returns "Waiting" if nothing is passed in', () => {
    expect(calcStatus()).toBe('Waiting');
  });
});

describe('compWinFunction function', () => {

  test('returns the winning value if isCheating is true', () => {
    const isCheating = true;
    const playerSelection = 'Axe';

    const actual = compWinFunction(isCheating, playerSelection);
    const expected = 'Moai';

    expect(actual).toBe(expected);
  });

  test('returns a valid choice if isCheating is false', () => {
    const isCheating = false;
    const playerSelection = 'Axe';

    const actual = compWinFunction(isCheating, playerSelection);
    const options = ['Moai', 'Axe', 'Tree'];

    // expect(options.includes(actual)).toBe(true);
    expect(options).toContain(actual);
  });

});
