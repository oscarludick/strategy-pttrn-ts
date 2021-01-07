# Strategy Pattern

The following text was obtained from the book [Head First Desing Patterns](https://www.amazon.com/-/es/Eric-Freeman/dp/0596007124).

### Desing principles used in Stragegy pattern

* Identify the aspects of your application that vary and separate them from what stays the same.
* Program to an interface, not an implementation.
* Favor composition over inheritance.

### The strategy pattern

Take what varies and "encapsulate" it so it won't affect the rest of your code. It will result on fewer unintended consequences from code changes and more flexibility in your systems. If you have got some aspect on your code that is changing, say with every new requierement, then you know you have got a behavior that needs to be pulled out and separated from all the stuff that doesn't change.
>
One of the desing principles says "Program to an interface" but really means "Program to a supertype", we can rephrase as "the declaration type of the variables should be a supertype, usually an abstract class or interface, so that th objects assigned to those variables can be of any concrate implementation of the supertype, wich means the class declaring them doesn´t have to know about the actual object types."
>
Creating systems using compisition gives you a lot more flexibility. Not only does it let you encapsulate a family of algorithms into their own set of classes, but it also lets you **change behaviorin runtime** as long the object you are composing with implements the correct behavior interface.

### In resume

Take the parts that vary and encapsulate them, so later you can alter or extend the parts
that vary without affecting those that do not.

*_The strategy pattern defines a family of algorithms, encapsulates each one,
and makes them interchangeable. Strategy lets the algorithm vary independently
from the clients that use it._*

### The Hero/Villian NPC Example

![Hero/Villian example](example-strategy-pattern.png)

