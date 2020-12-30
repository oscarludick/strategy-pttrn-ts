import { AttackWithMagic } from "../algorithms/attack-with-magic";
import { DefendWithSword } from "../algorithms/defend-with-sword";
import { CommonNPC } from "./common-npc";

export class VillianNPC extends CommonNPC {
  attackBehavior: IAttackBehavior;
  defendBehavior: IDefendBehavior;

  constructor(
    mAttackBehavior?: IAttackBehavior,
    mDefendBehavior?: IDefendBehavior
  ) {
    super();
    this.attackBehavior = mAttackBehavior
      ? mAttackBehavior
      : new AttackWithMagic();
    this.defendBehavior = mDefendBehavior
      ? mDefendBehavior
      : new DefendWithSword();
  }

  whatIam(): void {
    console.log("I am a villian");
  }
}
