import Bowman from '../class/Bowman.js';

test('Bowman class test', () => {
  const bowman = new Bowman('TestName');
  expect(bowman).toEqual({
    name: 'TestName',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  });
});
