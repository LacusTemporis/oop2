import Character from '../class/Character';

describe('Character class using object comparison', () => {
  describe('Constructor validation', () => {
    test('Correctly initializes a character with valid parameters', () => {
      const hero = new Character('Hero', 'Bowman');
      const expectedHero = {
        name: 'Hero',
        type: 'Bowman',
        health: 100,
        level: 1,
        attack: 0,
        defence: 0
      };

      expect(JSON.parse(JSON.stringify(hero))).toEqual(expectedHero);
    });

    test('Throws an error for invalid name length', () => {
      expect(() => new Character('', 'Bowman')).toThrow('Имя должно содержать от 2 до 10 символов');
      expect(() => new Character('VeryLongNameIndeed', 'Bowman')).toThrow('Имя должно содержать от 2 до 10 символов');
    });

    test('Throws an error for invalid type', () => {
      expect(() => new Character('Hero', 'InvalidType')).toThrow('Некорректный тип персонажа');
    });
  });

  describe('levelUp functionality', () => {
    test('Correctly levels up a character', () => {
      const hero = new Character('Hero', 'Bowman');
      hero.attack = 10;
      hero.defence = 10;
      hero.levelUp();

      const expectedHeroAfterLevelUp = {
        ...JSON.parse(JSON.stringify(hero)),
        level: 2,
        attack: 12,
        defence: 12,
        health: 100
      };

      expect(JSON.parse(JSON.stringify(hero))).toEqual(expectedHeroAfterLevelUp);
    });

    test('Throws an error when trying to level up a dead character', () => {
      const hero = new Character('Hero', 'Bowman');
      hero.health = 0;

      expect(() => hero.levelUp()).toThrow('Нельзя повысить уровень умершего персонажа');
    });
  });

  describe('damage functionality', () => {
    test('Correctly applies damage to a character', () => {
      const hero = new Character('Hero', 'Bowman');
      hero.attack = 10;
      hero.defence = 10;
      const damage = 20;
      hero.damage(damage);

      const expectedHealth = 100 - damage * (1 - hero.defence / 100);

      expect(hero.health).toBeCloseTo(expectedHealth);
    });

    test('Does not let health drop below 0', () => {
      const hero = new Character('Hero', 'Bowman');
      hero.damage(1000);

      expect(hero.health).toBe(0);
    });
  });

  describe('Character class using object comparison - Additional tests for full coverage', () => {
    describe('damage functionality with dead character', () => {
      test('Applying damage to a character with 0 health does not change health', () => {
        const character = new Character('Hero', 'Bowman');
        character.health = 0; 
        character.damage(50);
  
        expect(character.health).toBe(0);
      });
    });
  });
});