# Strategy Pattern

The following text was obtained from the book [Head First Desing Patterns](https://www.amazon.com/-/es/Eric-Freeman/dp/0596007124).

### Design principles used in Stragegy pattern

* Identify the aspects of your application that vary and separate them from what stays the same.
* Program to an interface, not an implementation.
* Favor composition over inheritance.

### The strategy pattern

Take what varies and "encapsulate" it so it won't affect the rest of your code. It will result on fewer unintended consequences from code changes and more flexibility in your systems. If you have got some aspect on your code that is changing, say with every new requierement, then you know you have got a behavior that needs to be pulled out and separated from all the stuff that doesn't change.

One of the desing principles says "Program to an interface" but really means "Program to a supertype", we can rephrase as _"the declaration type of the variables should be a supertype, usually an abstract class or interface, so that the objects assigned to those variables can be of any concrate implementation of the supertype, wich means the class declaring them doesn´t have to know about the actual object types."_

Creating systems using composition gives you a lot more flexibility. Not only does it let you encapsulate a family of algorithms into their own set of classes, but it also lets you **change behavior in runtime** as long the object you are composing with implements the correct behavior interface.

### In resume

Take the parts that vary and encapsulate them, so later you can alter or extend the parts that vary without affecting those that do not.

The strategy pattern defines a family of algorithms, encapsulates each one, and makes them interchangeable. Strategy lets the algorithm vary independently from the clients that use it.

### The Hero/Villian NPC Example

![Hero/Villian example](example-strategy-pattern.png)

The HeroNPC extends from the abstract class CommonNPC.

```ts
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
```

The CommonNPC is composing IAttackBehavior and IDefenseBehavior

```ts
export abstract class CommonNPC {
  abstract attackBehavior: IAttackBehavior;
  abstract defendBehavior: IDefenseBehavior;

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
```

Encapsulating the behaviors/algorithms

```ts
export class AttackWithMagic implements IAttackBehavior {
  attack(): void {
    console.log("Attack with magic");
  }
}
```

The result

```ts
const hero: CommonNPC = new HeroNPC();
hero.whatIam();
hero.performAttack();
hero.performDefense();

const villian: CommonNPC = new VillianNPC();
villian.whatIam();
villian.performAttack();
villian.performDefense();
```

```bash
I am a hero
Attack with sword
Defend with shield

I am a villian
Attack with magic
Defend with sword
```
