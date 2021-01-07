import { CommonNPC } from "./npcs/common-npc";
import { HeroNPC } from "./npcs/hero-npc";
import { VillianNPC } from "./npcs/villian-npc";

const hero: CommonNPC = new HeroNPC();
hero.whatIam();
hero.performAttack();
hero.performDefense();

const villian: CommonNPC = new VillianNPC();
villian.whatIam();
villian.performAttack();
villian.performDefense();
