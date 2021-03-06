import { AttackWithSword } from "./behaviors/attack-behavior/attack-with-sword";
import { DefenseWithShield } from "./behaviors/defense-behavior/defense-with-shield";
import { CommonNPC } from "./common-npc";

export class HeroNPC extends CommonNPC {
  attackBehavior: IAttackBehavior;
  defendBehavior: IDefenseBehavior;

  constructor(
    mAttackBehavior?: IAttackBehavior,
    mDefendBehavior?: IDefenseBehavior
  ) {
    super();
    this.attackBehavior = mAttackBehavior
      ? mAttackBehavior
      : new AttackWithSword();
    this.defendBehavior = mDefendBehavior
      ? mDefendBehavior
      : new DefenseWithShield();
  }

  whatIam(): void {
    console.log("I am a hero");
  }
}
