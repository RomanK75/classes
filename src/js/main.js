const listOfCharacters = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

class Character {
  constructor(name, type, health = 100, level = 1, attack, defence) {
    if (typeof name !== 'string'
        || listOfCharacters.includes(type) === false
        || name.length < 2
        || name.length > 10) {
      throw new Error('Invalid input!');
    } else {
      this.name = name;
      this.type = type;
      this.health = health;
      this.level = level;
      this.attack = attack;
      this.defence = defence;
    }
  }
}

class Bowman extends Character {
  constructor(name, health, level, attack = 25, defence = 25) {
    super(name, 'Bowman', health, level, attack, defence);
  }
}
class Swordsman extends Character {
  constructor(name, health, level, attack = 40, defence = 10) {
    super(name, 'Swordsman', health, level, attack, defence);
  }
}
class Magician extends Character {
  constructor(name, health, level, attack = 10, defence = 40) {
    super(name, 'Magician', health, level, attack, defence);
  }
}
class Undead extends Character {
  constructor(name, health, level, attack = 25, defence = 25) {
    super(name, 'Undead', health, level, attack, defence);
  }
}
class Zombie extends Character {
  constructor(name, health, level, attack = 40, defence = 10) {
    super(name, 'Zombie', health, level, attack, defence);
  }
}
class Daemon extends Character {
  constructor(name, health, level, attack = 10, defence = 40) {
    super(name, 'Daemon', health, level, attack, defence);
  }
}

module.exports = {
  Character,
  Bowman,
  Swordsman,
  Magician,
  Undead,
  Zombie,
  Daemon,
};
