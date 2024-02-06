import Bowman from '../class/Bowman';
import Swordsman from '../class/Swordsman';
import Magician from '../class/Magician';
import Undead from '../class/Undead';
import Zombie from '../class/Zombie';
import Daemon from '../class/Daemon';

describe('Character types initialization', () => {
  test.each([
    ['Bowman', Bowman, 25, 25],
    ['Swordsman', Swordsman, 40, 10],
    ['Magician', Magician, 10, 40],
    ['Undead', Undead, 25, 25],
    ['Zombie', Zombie, 40, 10],
    ['Daemon', Daemon, 10, 40],
  ])('%s initialization with correct attack and defence values', (type, ClassRef, expectedAttack, expectedDefence) => {
    const character = new ClassRef(type);
    expect(character.type).toBe(type);
    expect(character.attack).toBe(expectedAttack);
    expect(character.defence).toBe(expectedDefence);
  });
});