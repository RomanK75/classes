import Magician from '../class/Magician.js';

test('Magician class test', () => {
  const magician = new Magician('TestName');
  expect(magician).toEqual({
    name: 'TestName',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  });
});
