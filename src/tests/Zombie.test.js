import Zombie from '../class/Zombie';

describe('Zombie class', () => {
    test('Correct initialization', () => {
      const name = 'Artem';
      const zombie = new Zombie(name);
  
      const expected = {
        name: 'Artem',
        type: 'Zombie',
        health: 100,
        level: 1,
        attack: 40,
        defence: 10,
      };
  
      const actual = {
        name: zombie.name,
        type: zombie.type,
        health: zombie.health,
        level: zombie.level,
        attack: zombie.attack,
        defence: zombie.defence,
      };
  
      expect(actual).toEqual(expected);
    });
  });