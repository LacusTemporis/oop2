import Daemon from '../class/Daemon';

describe('Daemon class', () => {
    test('Correct initialization', () => {
      const name = 'Petr';
      const daemon = new Daemon(name);
  
      const expected = {
        name: 'Petr',
        type: 'Daemon',
        health: 100,
        level: 1,
        attack: 10,
        defence: 40,
      };
  
      const actual = {
        name: daemon.name,
        type: daemon.type,
        health: daemon.health,
        level: daemon.level,
        attack: daemon.attack,
        defence: daemon.defence,
      };
  
      expect(actual).toEqual(expected);
    });
  });