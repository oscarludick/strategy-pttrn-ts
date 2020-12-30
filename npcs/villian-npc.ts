import { AttackWithMagic } from "../algorithms/attack-with-magic";
import { DefenseWithSword } from "../algorithms/defense-with-sword";
import { CommonNPC } from "./common-npc";

export class VillianNPC extends CommonNPC {
  attackBehavior: IAttackBehavior;
  defendBehavior: IDefenseBehavior;

  constructor(
    mAttackBehavior?: IAttackBehavior,
    mDefendBehavior?: IDefenseBehavior
  ) {
    super();
    this.attackBehavior = mAttackBehavior
      ? mAttackBehavior
      : new AttackWithMagic();
    this.defendBehavior = mDefendBehavior
      ? mDefendBehavior
      : new DefenseWithSword();
  }

  whatIam(): void {
    console.log("I am a villian");
  }
}
