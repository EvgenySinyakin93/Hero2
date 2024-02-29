import Character from "../js/Character.js";

test("checking Bowerman", () => {
  const character = new Character("Hero", "Bowerman");
  const correctCharacter = {
    name: "Hero",
    type: "Bowerman",
    health: 100,
    level: 1,
  };
  expect(character).toEqual(correctCharacter);
});

test("Checking name", () => {
  expect(() => new Character("B", "Bowerman")).toThrow(
    "Длина имени персонажа не корректна.Выберите имя от 2 до 10 символов"
  );
  expect(() => new Character("BowermanVeryLength", "Bowerman")).toThrow(
    "Длина имени персонажа не корректна.Выберите имя от 2 до 10 символов"
  );
});

test("Checking Hero", () => {
  expect(() => new Character("NaN", "Hero")).toThrow("Персонаж не существует");
});

test("Checking Level", () => {
  const hero = new Character("Hero", "Bowerman");
  hero.attack = 10;
  hero.defence = 10;
  hero.health = 0;
  hero.levelUp();

  expect(() => hero.levelUp()).toThrow(
    "Нельзя повысить уровень умершего персонажа"
  );
});

test("Checking damage", () => {
  const hero = new Character("Hero", "Bowerman");
  hero.attack = 10;
  hero.defence = 10;
  const damage = 20;
  hero.damage(damage);

  const expectedHealth = 100 - damage * (1 - hero.defence / 100);

  expect(hero.health).toBeCloseTo(expectedHealth);
});
