abstract class StreetFighter {
  constructor() {}

  move() {}
  fight() {
    console.log(`${this.getName()} attacks with ${this.getSpecialAttack()}`);
  }

  abstract getSpecialAttack(): string;
  abstract getName(): string;
}

class Ryu extends StreetFighter {
  getSpecialAttack(): string {
    return "Haduken";
  }
  getName(): string {
    return "Ryu";
  }
}

class Nash extends StreetFighter {
  getSpecialAttack(): string {
    return "Sonic Boom";
  }
  getName(): string {
    return "Nash";
  }
}

const p1 = new Ryu();
const p2 = new Nash();

p1.fight();
p2.fight();
