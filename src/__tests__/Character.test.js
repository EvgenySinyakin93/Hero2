import Bowerman from "../js/Bowerman.js";
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

test("Checking Level умершего", () => {
  expect(() => {
    const bowerman = new Bowerman("Bowerman");
    bowerman.health = -15;
    bowerman.levelUp();
  }).toThrow("Нельзя повысить левел умершего"); 
});


test("Checking damage", () => {
  const bowerman = new Bowerman("Bowerman");
  bowerman.damage(10);
  expect(bowerman.health).toBe(92.5);
});

test("Checking damage health is 0", () => {
  const bowerman = new Bowerman("Bowerman");
  bowerman.damage(140);
  expect(bowerman.health).toBe(-5);
});