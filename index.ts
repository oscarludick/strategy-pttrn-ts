/**
 * The strategy pattern defines a family of algorithms, encapsulates each one,
 * and makes them interchangeable. Strategy lets the algorithm vary independently
 * from the clients that use it.
 *
 *
 * Take the parts that vary and encapsulate them, so later you can alter or extend the parts
 * that vary without affecting those that do not.
 */
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
