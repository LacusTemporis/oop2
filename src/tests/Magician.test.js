import Magician from '../class/Magician';

describe('Magician class', () => {
    test('Correct initialization', () => {
      const name = 'Denis';
      const magician = new Magician(name);
  
      const expected = {
        name: 'Denis',
        type: 'Magician',
        health: 100,
        level: 1,
        attack: 10,
        defence: 40,
      };
  
      const actual = {
        name: magician.name,
        type: magician.type,
        health: magician.health,
        level: magician.level,
        attack: magician.attack,
        defence: magician.defence,
      };
  
      expect(actual).toEqual(expected);
    });
  });