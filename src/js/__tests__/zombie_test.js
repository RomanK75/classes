import Zombie from '../class/Zombie.js';

test('Zombie class test', () => {
  const zombie = new Zombie('TestName');
  expect(zombie).toEqual({
    name: 'TestName',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  });
});
