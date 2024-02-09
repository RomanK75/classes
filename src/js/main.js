export default class Character {
  constructor(name, type) {
    const listOfCharacters = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
    if (typeof name !== 'string'
        || name.length < 2
        || name.length > 10) {
      throw new Error('Name must be a string between 2 and 10 characters long!');
    } else if (listOfCharacters.includes(type) === false) {
      throw new Error('Invalid type of character!');
    } else {
      this.name = name;
      this.type = type;
      this.health = 100;
      this.level = 1;
      this.attack = undefined;
      this.defence = undefined;
    }
  }
}
