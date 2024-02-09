import Character from '../main';

test('Name validation', () => {
  expect(() => new Character('InvalidNameString', 'Bowman')).toThrowError('Name must be a string between 2 and 10 characters long!');
  expect(() => new Character('S', 'Daemon')).toThrowError('Name must be a string between 2 and 10 characters long!');
  expect(() => new Character(1, 'Bowman')).toThrowError('Name must be a string between 2 and 10 characters long!');
  const validChar = new Character('ValidName', 'Bowman');
  expect(validChar).toEqual({
    name: 'ValidName',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: undefined,
    defence: undefined,
  });
});

test('Type validation', () => {
  expect(() => new Character('ValidName', 'UnknownType')).toThrowError('Invalid type of character!');
});
