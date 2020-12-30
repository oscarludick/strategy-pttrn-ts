import { AttackWithSword } from "../algorithms/attack-with-sword";
import { DefendWithShield } from "../algorithms/defend-with-shield";
import { CommonNPC } from "./common-npc";

export class HeroNPC extends CommonNPC {
  attackBehavior: IAttackBehavior;
  defendBehavior: IDefendBehavior;

  constructor(
    mAttackBehavior?: IAttackBehavior,
    mDefendBehavior?: IDefendBehavior
  ) {
    super();
    this.attackBehavior = mAttackBehavior
      ? mAttackBehavior
      : new AttackWithSword();
    this.defendBehavior = mDefendBehavior
      ? mDefendBehavior
      : new DefendWithShield();
  }

  whatIam(): void {
    console.log("I am a hero");
  }
}
