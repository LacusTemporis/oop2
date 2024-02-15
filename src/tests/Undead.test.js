import Undead from '../class/Undead';

describe('Undead class', () => {
    test('Correct initialization', () => {
      const name = 'Ivan';
      const undead = new Undead(name);
  
      const expected = {
        name: 'Ivan',
        type: 'Undead',
        health: 100,
        level: 1,
        attack: 25,
        defence: 25,
      };
  
      const actual = {
        name: undead.name,
        type: undead.type,
        health: undead.health,
        level: undead.level,
        attack: undead.attack,
        defence: undead.defence,
      };
  
      expect(actual).toEqual(expected);
    });
  });