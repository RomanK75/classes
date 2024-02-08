const main = require('../main');

test('Bowman class test', () => {
  const bowman = new main.Bowman('Bowman', 100, 1);
  expect(bowman).toEqual({
    name: 'Bowman',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  });
});
test('Bowman class test', () => {
  const bowman = new main.Bowman('Bowman', 100, 1);
  expect(bowman).toEqual({
    name: 'Bowman',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  });
});
test('Bowman class test', () => {
  const bowman = new main.Bowman('Bowman', 100, 1);
  expect(bowman).toEqual({
    name: 'Bowman',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  });
});
test('Swordsman class test', () => {
  const swordsman = new main.Swordsman('Swordsman', 100, 1);
  expect(swordsman).toEqual({
    name: 'Swordsman',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  });
});
test('Magician class test', () => {
  const magician = new main.Magician('Magician', 100, 1);
  expect(magician).toEqual({
    name: 'Magician',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  });
});
test('Undead class test', () => {
  const undead = new main.Undead('Undead', 100, 1);
  expect(undead).toEqual({
    name: 'Undead',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  });
});
test('Zombie class test', () => {
  const zombie = new main.Zombie('Zombie', 100, 1);
  expect(zombie).toEqual({
    name: 'Zombie',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  });
});
test('Daemon class test', () => {
  const magician = new main.Daemon('Daemon', 100, 1);
  expect(magician).toEqual({
    name: 'Daemon',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  });
});
