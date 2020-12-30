export abstract class CommonNPC {
  abstract attackBehavior: IAttackBehavior;
  abstract defendBehavior: IDefendBehavior;

  constructor() {}

  abstract whatIam(): void;

  /**All NPC can talk */
  talk(message: string) {
    console.log(message);
  }

  performAttack() {
    this.attackBehavior.attack();
  }

  performDefense() {
    this.defendBehavior.defend();
  }
}
