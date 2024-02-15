import Bowman from '../class/Bowman';

describe('Bowman class', () => {
    test('Correct initialization', () => {
      const name = 'Robin';
      const bowman = new Bowman(name);
  
      const expected = {
        name: 'Robin',
        type: 'Bowman',
        health: 100,
        level: 1,
        attack: 25,
        defence: 25,
      };
  
      const actual = {
        name: bowman.name,
        type: bowman.type,
        health: bowman.health,
        level: bowman.level,
        attack: bowman.attack,
        defence: bowman.defence,
      };
  
      expect(actual).toEqual(expected);
    });
  });

  
  
