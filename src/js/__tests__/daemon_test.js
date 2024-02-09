import Daemon from '../class/Daemon.js';

test('Daemon class test', () => {
  const daemon = new Daemon('TestName');
  expect(daemon).toEqual({
    name: 'TestName',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  });
});
