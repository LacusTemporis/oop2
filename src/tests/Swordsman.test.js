import Swordsman from '../class/Swordsman';

describe('Swordsman class', () => {
    test('Correct initialization', () => {
      const name = 'kolya';
      const swordsman = new Swordsman(name);
  
      const expected = {
        name: 'kolya',
        type: 'Swordsman',
        health: 100,
        level: 1,
        attack: 40,
        defence: 10,
      };
  
      const actual = {
        name: swordsman.name,
        type: swordsman.type,
        health: swordsman.health,
        level: swordsman.level,
        attack: swordsman.attack,
        defence: swordsman.defence,
      };
  
      expect(actual).toEqual(expected);
    });
  });