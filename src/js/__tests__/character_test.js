const main = require('../main');

test('Name validation', () => {
  expect(() => new main.Character('InvalidNameString', 'Bowman', 100, 1, 25, 25)).toThrowError('Invalid input!');
  expect(() => new main.Character('S', 'Bowman', 100, 1, 25, 25)).toThrowError('Invalid input!');
  expect(() => new main.Character(1, 'Bowman', 100, 1, 25, 25)).toThrowError('Invalid input!');
  const validChar = new main.Character('ValidName', 'Bowman', 100, 1, 25, 25);
  expect(validChar).toEqual({
    name: 'ValidName',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  });
});

test('Type validation', () => {
  expect(() => new main.Character('ValidName', 'InvalidType', 100, 1, 25, 25)).toThrowError('Invalid input!');
});
