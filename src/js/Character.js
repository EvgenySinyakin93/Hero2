export default class Character {
  constructor(name, type) {
    if (name.length < 2 || name.length > 10) {
      throw new Error(
        "Длина имени персонажа не корректна.Выберите имя от 2 до 10 символов"
      );
    }

    const types = [
      "Bowerman",
      "Swordsman",
      "Magician",
      "Daemon",
      "Undead",
      "Zombie",
    ];
    if (!types.includes(type)) {
      throw new Error("Персонаж не существует");
    }

    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
  }

  levelUp() {
    if (this.health >= 0) {
      this.level += 1;
      this.attack *= 1.2;
      this.defence *= 1.2;
      this.health = 100;
    } else {
      throw new Error("Нельзя повысить левел умершего");
    }
  }

  damage(points) {
    if (this.health >= 0) {
      const damage = points * (1 - this.defence / 100);
      this.health -= damage;
    }
  }
}
