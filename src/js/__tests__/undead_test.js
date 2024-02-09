import Undead from '../class/Undead.js';

test('Undead class test', () => {
  const undead = new Undead('TestName');
  expect(undead).toEqual({
    name: 'TestName',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  });
});
