import Character from './Character';

describe('Character', () => {
    test('should throw an error for incorrect name length', () => {
      expect(() => new Character('A', 'Bowman')).toThrow('Имя должно содержать от 2 до 10 символов');
      expect(() => new Character('VeryLongName', 'Bowman')).toThrow('Имя должно содержать от 2 до 10 символов');
    });
  
    test('should throw an error for incorrect character type', () => {
      expect(() => new Character('Archer', 'InvalidType')).toThrow('Некорректный тип персонажа');
    });
  
    test('levelUp should increase level and stats, and restore health', () => {
      const character = new Character('Hero', 'Bowman');
      character.attack = 10;
      character.defence = 10;
      character.levelUp();
  
      expect(character.level).toBe(2);
      expect(character.attack).toBe(12);
      expect(character.defence).toBe(12);
      expect(character.health).toBe(100);
    });
  
    test('levelUp should throw an error if the character is dead', () => {
      const character = new Character('Hero', 'Bowman');
      character.health = 0;
  
      expect(() => character.levelUp()).toThrow('Нельзя повысить уровень умершего персонажа');
    });
  
    test('damage should decrease health', () => {
      const character = new Character('Hero', 'Bowman');
      character.attack = 10;
      character.defence = 10;
      character.damage(10);
  
      expect(character.health).toBeLessThan(100);
    });
  
    test('damage should not decrease health below 0', () => {
      const character = new Character('Hero', 'Bowman');
      character.attack = 10;
      character.defence = 10;
      character.damage(200);
  
      expect(character.health).toBe(0);
    });
  
    test('damage should not affect a dead character', () => {
      const character = new Character('Hero', 'Bowman');
      character.health = 0;
      character.damage(10);
  
      expect(character.health).toBe(0);
    });
  });