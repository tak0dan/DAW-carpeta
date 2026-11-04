# jsinfo LANG 4: Objects: the basics (comments)

## "4.1 Objects"

[...]

Usually, the figure brackets `{...}` are used. That declaration is called an *object literal*.

> [!t] t: Objects are 1st class citizens. Their properties are dynamic.
>
> These are key differences with Java:
>
> - Objects 1st class citizens: they don't need to have a rigid class
>   defined beforehand so that they are instantiated from it. We have e.g.
>   the `{}` literal notation to instantiate them as we please, ad hoc.
>   In fact, it's classes that are 2nd class citizens in JS (they are an
>   ES6/ES2015 addition to the language).
> - Dynamic properties: not only objects can be created on the fly with literal
>   notation, but as we will see next, we can add/remove properties from
>   them at any time (also valid for objects instantiated from "rigid"
>   classes).
>   This is quite powerful... As always: if you use it, do it responsably
>   (® Uncle Ben).
> - Remember that when doing simple `{}` literal notation (with
>   something inside the `{}`, this is internally doing a "new": a new
>   (and different) Object (non-primitive type) is instantiated.

### "Literals and properties"

[...]

### "Square brackets"

[...]

> [!t] t: JS objects are sort of assotiative arrays
>
> The bracket notation shows this. Objects can be seen as arrays that instead
> of having as index with a positive increasing integer, they have as indexes
> arbitrary strings (more flexible, but without in principle an clearly
> established order). That "string index" is the property name that we see
> in the dot notation, but we then can use the objects with the bracked
> notation as sort of arrays.
>
> [**Assotiative arrays**](https://en.wikipedia.org/wiki/Associative_array)
> are typically very at hand on most modern "script-like" programming
> languages. And for sure are available in other languages with a
> library. They are also known, depending on context, as **map**, **dictionary**,
> sometimes **hashes** or **hashtables** (due to one of their typical
> efficient internal implementation).
>
> Note: Even if objects in JS can be (ab)used to serve as an easy way of having
> assotiative arrays stores, JS has a native object class `Map` serving
> better that purpose (for different reasons not detailed here, that
> will be addressed when covering `Map` in jsinfo LANG5.7).

#### "Computed properties"

> [!t] t: ES6/ES2015 addition

We can use square brackets in an object literal, when creating an object. That's called *computed properties*.

For instance:

```js run
let fruit = prompt("Which fruit to buy?", "apple");

let bag = {
  [fruit]: 5, // the name of the property is taken from the variable fruit
};

alert( bag.apple ); // 5 if fruit="apple"
```

> [!t] t: `[ ]` meaning is context dependent (as with many things)
>
> - These square brackets there are not the definition of an array!
> - When used in an object literal notation in the place of a property
>   name, they have this special meaning: computed property.
> - They are "sort of" retrieving an element of an (assotiative) array:
>   in the example, it is retrieving (or setting in this case) a value
>   for the `bag[fruit]` property if we used bracked notation... Only
>   that the `[fruit]` is not glued to `bag`, but inside the `{}`.

The meaning of a computed property is simple: `[fruit]` means that the property name should be taken from `fruit`.

> [!t] t: So, computed means here computed *name*, not computed *value*

So, if a visitor enters `"apple"`, `bag` will become `{apple: 5}`.

Essentially, that works the same as:
```js run
let fruit = prompt("Which fruit to buy?", "apple");
let bag = {};

// take property name from the fruit variable
bag[fruit] = 5;
```

...But looks nicer.

> [!t] t: And more advantages besides being "nicer":
>
> - It allows to specify many at once in a compact way: all inside the
>   `{}`, without repeating the keyword `bag`.
> - It allows doing this in the same expression and at the same time
>   that any other normal property declaration, instead of requiring
>   a separate expression for the assignment.

We can use more complex expressions inside square brackets:

```js
let fruit = 'apple';
let bag = {
  [fruit + 'Computers']: 5 // bag.appleComputers = 5
};
```

> [!t] t: Any expression is valid there (and they can be veeery complex)

Square brackets are much more powerful than dot notation. They allow any property names and variables. But they are also more cumbersome to write.

So most of the time, when property names are known and simple, the dot is used. And if we need something more complex, then we switch to square brackets.

> [!t] t: We may not need them, but others may use them: need at least to know them.

### "Property value shorthand"

> [!t] t: ES6/ES2015 addition

[...]

### "Property names limitations"

[...]

### "Property existence test, "in" operator"

[...]

Please note that on the left side of `in` there must be a *property name*. That's usually a quoted string.

If we omit quotes, that means a variable should contain the actual name to be tested. For instance:

```js run
let user = { age: 30 };

let key = "age";
alert( key in user ); // true, property "age" exists
```

> [!t] t: In general, the left side of `in` can be any expression resulting in a string

[...]

Situations like this happen very rarely, because `undefined` should not be explicitly assigned. We mostly use `null` for "unknown" or "empty" values. So the `in` operator is an exotic guest in the code.

> [!t] t: Unless dealing with other's code not following these good practices

### "The "for..in" loop"

To walk over all keys of an object, there exists a special form of the loop: `for..in`. This is a completely different thing from the `for(;;)` construct that we studied before.

The syntax:

```js
for (key in object) {
  // executes the body for each key among object properties
}
```

For instance, let's output all properties of `user`:

```js run
let user = {
  name: "John",
  age: 30,
  isAdmin: true
};

for (let key in user) {
  // keys
  alert( key );  // name, age, isAdmin
  // values for the keys
  alert( user[key] ); // John, 30, true
}
```

> [!t] t: And this `in` is completely different than the `in` operator
>
> - `in` operator seen before is used inside expressions: its expression
>   returns a true or false.
> - `in` of `for...in` is used as special keyword in the context of the
>   guard of a for: it is not a single expression evaluating to true or
>   false, but instead defines an iteration of the defined properties
>   of the object: on each iteration, it **assigns** to `key` the next
>   property that would have made, after that assignment, that
>   `key in object` expression returns true. OK, it is somehow related,
>   but in one case (`in` operator) it is an expression that **checks**
>   `key`, and in the other case (`for...in`) it is something that
>   **assigns** (may times) things to `key`.

Note that all "for" constructs allow us to declare the looping variable inside the loop, like `let key` here.

Also, we could use another variable name here instead of `key`. For instance, `"for (let prop in obj)"` is also widely used.

> [!t] t: Warning: for arrays, don't use "for..in"
>
> - Use instead "for..of" or "normal for".
> - See the reason for this in LANG5.4

#### "Ordered like an object"

[...]

Now it works as intended.

> [!t] t: We may not want to rely much on this creation order to avoid surprises.
>
> - But maybe others will rely on this in code not made by us...

> [!t] t: Object details in console/debugger sort properties alphabetically
>
> Worth noting that in the console/debugger (FF and Chrome at least) when
> showing an object:
>
> - The properties are shown in creation order. But may have an ellipsis
>   at the end if they are too long for one line.
> - When deploying details with the arrow to see one per line (and maybe also
>   see what is hidden by the ellipses), they are seen in alphabetical order.
>
> You can verify this with a simple test in the console:
>
> `let o = { b: 7, a: 8 }; o;`
>
> Then have a look the order of what is shown: it is **not** the creation order.

### "Summary"

[...]

## "4.2 Object references and copying"

One of the fundamental differences of objects versus primitives is that objects are stored and copied "by reference", whereas primitive values: strings, numbers, booleans, etc -- are always copied "as a whole value".

> [!t] t: We had to make a spoiler alert on this, since it is a pervasive aspect.

[...]

### "Comparison by reference"

[...]

### "Cloning and merging, Object.assign"

So, copying an object variable creates one more reference to the same object.

But what if we need to duplicate an object?

We can create a new object and replicate the structure of the existing one, by iterating over its properties and copying them on the primitive level.

> [!t] t: As indicated later, we assume for now objects with only primitive properties.

[...]

#### "structuredClone"

> [!t] t: ES2019 addition!

The call `structuredClone(object)` clones the `object` with all nested properties.

[...]

To handle such complex cases we may need to use a combination of cloning methods, write custom code or, to not reinvent the wheel, take an existing implementation, for instance [_.cloneDeep(obj)](https://lodash.com/docs#cloneDeep) from the JavaScript library [lodash](https://lodash.com).

> [!t] t: Deep equality check.
>
> The same that we've covered here a "deep cloning" (recursive cloning),
> there are times where we may need a "deep equality check" (recursive
> equality check"), when the "normal shallow equality" is not enough.
>
> [JS deep equality (in byby.dev)](https://byby.dev/js-deep-equality) covers
> different ways of achieving this.

### "Summary"

[...]

## "4.3 Garbage collection"

Memory management in JavaScript is performed automatically and invisibly to us. We create primitives, objects, functions... All that takes memory.

What happens when something is not needed any more? How does the JavaScript engine discover it and clean it up?

> [!t] t: This is the JS garbage collector. Java and others have it, others don't (C/C++).

> [!t] t: Skip to the summary if short of time.

### "Reachability"

[...]

### "A simple example"

[...]

### "Interlinked objects"

[...]

### "Unreachable island"

[...]

### "Internal algorithms"

[...]

### "Summary"

[...]

## "4.4 Object methods, "this""

[...]

### "Method examples"

[...]

```js run
let user = {
  // ...
};

// first, declare
function sayHi() {
  alert("Hello!");
}

// then add as a method
user.sayHi = sayHi;

user.sayHi(); // Hello!
```

> [!t] t: Method is a particular case of property
>
> We have seen with these examples that in JS methods are just like other
> properties, only that they happen to point to a function. And functions
> are in JS first class citizens, in fact they are a subtype of Objects
> (non primitive). They are treated by reference, as seen in the examples.

```smart header="Object-oriented programming"
When we write our code using objects to represent entities, that's called [object-oriented programming](https://en.wikipedia.org/wiki/Object-oriented_programming), in short: "OOP".

OOP is a big thing, an interesting science of its own. How to choose the right entities? How to organize the interaction between them? That's architecture, and there are great books on that topic, like "Design Patterns: Elements of Reusable Object-Oriented Software" by E. Gamma, R. Helm, R. Johnson, J. Vissides or "Object-Oriented Analysis and Design with Applications" by G. Booch, and more.
```

> [!t] t: Design Patterns are easily a must for real life OOP
>
> - However in this course, we will do quite "light" OOP

#### "Method shorthand"

> [!t] t: ES6/ES2015 addition

There exists a shorter syntax for methods in an object literal:

[...]

### ""this" in methods"

[...]

If we used `this.name` instead of `user.name` inside the `alert`, then the code would work.

> [!t] t: So far, this "this" is like the one in Java (and others). But...

### ""this" is not bound"

> [!t] t: ... Welcome to the jungle! "this" is one of the hard aspects in JS.

In JavaScript, keyword `this` behaves unlike most other programming languages. It can be used in any function, even if it's not a method of an object.

There's no syntax error in the following example:

```js
function sayHi() {
  alert( this.name );
}
```

The value of `this` is evaluated during the run-time, depending on the context.

> [!t] t: And not only in this example.
>
> Go back and re-read when "this" was presented. They said:
>
> > The value of `this` is the object "before dot", the one used to call the
> > method.
>
> Look at the following example they gave, with this sentence in mind and the
> fact that this is "evaluated during the run-time, depending on the context":
>
> ```js
> let user = {
>   name: "John",
>   age: 30,
>   sayHi() {
>     // "this" is the "current object"
>     alert(this.name);
>   }
> };
> user.sayHi(); // John
> ```
>
> And now, we look at the same thing with an example where the "this" has
> not been declared/used inside a function declared "inside the declaration
> of the object".

For instance, here the same function is assigned to two different objects and has different "this" in the calls:

```js run
let user = { name: "John" };
let admin = { name: "Admin" };

function sayHi() {
  alert( this.name );
}

// use the same function in two objects
user.f = sayHi;
admin.f = sayHi;

// these calls have different this
// "this" inside the function is the object "before the dot"
user.f(); // John  (this == user)
admin.f(); // Admin  (this == admin)

admin['f'](); // Admin (dot or square brackets access the method – doesn't matter)
```

The rule is simple: if `obj.f()` is called, then `this` is `obj` during the call of `f`. So it's either `user` or `admin` in the example above.

> [!t] t: And this is what they mean with "`this` is not bound".

[...]

Here our position is not to judge whether this language design decision is good or bad. We'll understand how to work with it, how to get benefits and avoid problems.

> [!t] t: Again: power and responsability (® Uncle Ben).

### "Arrow functions have no "this""

Arrow functions are special: they don't have their "own" `this`. If we reference `this` from such a function, it's taken from the outer "normal" function.

For instance, here `arrow()` uses `this` from the outer `user.sayHi()` method:

```js run
let user = {
  firstName: "Ilya",
  sayHi() {
    let arrow = () => alert(this.firstName);
    arrow();
  }
};

user.sayHi(); // Ilya
```

> [!t] t: "outer normal function":
>
> - As seen in statically in **source code** in the declaration, and not
>   anymore in runtime in the method/function usage.
> - The `this` of the "outer normal function" reference itself isn't generally
>   seen statically in the declaration, but as we now know, is bound in
>   runtime upon function calling. The example shows that: `this` becomes
>   `user` inside sayHi() in the example because it is called as `user.sayHi()`.
>   **Then**, the arrow functions will take that `this` "as is" without
>   thinking more.
> - If outer are arrow functions, skip them until finding a non-arrow one.
>   - What if not normal one found all the way?

> [!t] t: Don't use arrow functions for methods themselves (if they use `this`)
>
> I.e.: You can instead of this:
>
> ```js
> user = {
>   sayHi: function() {
>     alert("Hello");
>   }
> };
> ```
>
> Do this if you please so:
>
> ```js
> user = {
>   sayHi: () => {
>     alert("Hello");
>   }
> };
> ```
>
> (except for the fact that the function shorthand is prefered as stated above
> in this article).
>
> But if inside that method `this` was needed, then the calling of this method
> would not work as expected!
>
> The example we are given in jsinfo use arrow function **inside** a method,
> not for **defining** the method itself (which is not normally a good idea).

That's a special feature of arrow functions, it's useful when we actually do not want to have a separate `this`, but rather to take it from the outer context. Later in the chapter <info:arrow-functions> we'll go more deeply into arrow functions.

> [!t] t: Arrow functions are mostly equal to normal anonymous function expressions...
>
> ... except when there is a `this` inside their code. Remember that.

### "Summary"

- Functions that are stored in object properties are called "methods".
- Methods allow objects to "act" like `object.doSomething()`.
- Methods can reference the object as `this`.

The value of `this` is defined at run-time.
- When a function is declared, it may use `this`, but that `this` has no value until the function is called.
- A function can be copied between objects.
- When a function is called in the "method" syntax: `object.method()`, the value of `this` during the call is `object`.

> [!t] t: "a function can be copied between objects".
>
> I'm not sure of what this refers to of this article. In any case, we've
> seen that functions are not "deep copied" when assigned, but just
> reference copied (they work as Objects, non-primitive).

Please note that arrow functions are special: they have no `this`. When `this` is accessed inside an arrow function, it is taken from outside.

## "4.5 Constructor, operator "new""

The regular `{...}` syntax allows us to create one object. But often we need to create many similar objects, like multiple users or menu items and so on.

That can be done using constructor functions and the `"new"` operator.

> [!t] t: Factory functions
>
> - Before entering this (constructor functions and `new` operator), there
>   is another way of generating objects from a function.
> - This is what is called a "factory function" (or factory method, if it is
>   a method): it creates inside its code a new object and returns it to the
>   caller.
> - The simple example that we will see in this article for a constructor of a
>   "user" object could be instead with a factory something like this:
>
>   ```js
>   function createUser(name) {
>     return {
>       name: name,
>       // Or more simply in this case:
>       //   name,
>       isAdmin: false
>     }
>   }
>   let user = createUser("Jack");
>   ```
>
> - The internal implementation of the factory can be with a literal
>   notation as in this simple example, or with whatever the implementer
>   decides (e.g. with `new` on some constructor). The key is that
>   **externally** the caller does not use new with this interface for
>   creating objects (and does not need to know anything about `new` operator).
> - Some libraries/API's provide their functionality as factories (e.g.
>   `document.createElement()`). Others, as constructors to be used with `new`.
>   And others, provide both ways.
> - Note that an initial capital is not used on factories. The name may help
>   the user by suggesting that something new is created inside for
>   returning it... but we cannot count on this always.
> - Note: in Java, the equivalent of this is a
>   ["static factory method"](https://www.baeldung.com/java-constructors-vs-static-factory-methods).

### "Constructor function"

[...]

So `let user = new User("Jack")` gives the same result as:

```js
let user = {
  name: "Jack",
  isAdmin: false
};
```

> [!t] t: Yet another behaviour of `this` dependent on the way of calling a function.
>
> - To be added to what we already learned about `this`. This one use is
>   similar also to Java (only that the syntaxo for defining a
>   constructor is slightly differnent).

Now if we want to create other users, we can call `new User("Ann")`, `new User("Alice")` and so on. Much shorter than using literals every time, and also easy to read.

That's the main purpose of constructors -- to implement reusable object creation code.

> [!t] t: Although this can also be achieved, as seen above, with factory functions.

Let's note once again -- technically, any function (except arrow functions, as they don't have `this`) can be used as a constructor. It can be run with `new`, and it will execute the algorithm above. The "capital letter first" is a common agreement, to make it clear that a function is to be run with `new`.

> [!t] t: Classes are not needed in JS.
>
> - Note that, contrary to Java, in JS we can define and use constructor
>   functions to instantiate objects without having to create/define a class.
> - The usage of these constructor functions is with `new`, similar to the
>   usage of a constructor of a class in Java.
> - We'll see later in the course that in ES6/ES2015 they introduced the
>   possibility to define explicity classes with a syntax quite similar to Java
>   (as an alternative of defining constructor functions like the one we are
>   seeing here).

[...]

### "Constructor mode test: new.target"

[...]

This approach is sometimes used in libraries to make the syntax more flexible. So that people may call the function with or without `new`, and it still works.

> [!t] t: This function thus can be used as constructor or as factory.

Probably not a good thing to use everywhere though, because omitting `new` makes it a bit less obvious what's going on. With `new` we all know that the new object is being created.

> [!t] t: But many API's only provide factories (ideally, with non capital initial letter).

### "Return from constructors"

[...]

Omitting parentheses here is not considered a "good style", but the syntax is permitted by specification.

> [!t] t: Only can omit them when no parameters are used. And even there, it's confusing.

### "Methods in constructor"

[...]


```js run
function User(name) {
  this.name = name;

  this.sayHi = function() {
    alert( "My name is: " + this.name );
  };
}

let john = new User("John");

john.sayHi(); // My name is: John

john = {
   name: "John",
   sayHi: function() { ... }
}
```

> [!t] t: The "method shorthand" we saw for litteral notation cannot be used here.

To create complex objects, there's a more advanced syntax, [classes](info:classes), that we'll cover later.

> [!t] t: To create complex objects... but can also be perfecly used to create simple ones.

### "Summary"

- Constructor functions or, briefly, constructors, are regular functions, but there's a common agreement to name them with capital letter first.
- Constructor functions should only be called using `new`. Such a call implies a creation of empty `this` at the start and returning the populated one at the end.

We can use constructor functions to make multiple similar objects.

> [!t] t: And we can also use factories for that matter.

[...]

## "4.6 Optional chaining '?.'"

[recent browser="new"]

> [!t] t: ES2020 addition

The optional chaining `?.` is a safe way to access nested object properties, even if an intermediate property doesn't exist.

> [!t] t: Skip to summary if you are in a hurry.
>
> - You may decide to not learn and use the optional chaining, but others may
>   use it. Have a look to the summary at least to know the basics in case
>   you see them in other's code (it's quite simple to understand).

### "The "non-existing property" problem"

[...]

### "Optional chaining"

[...]

### "Short-circuiting"

[...]

### "Other variants: ?.(), ?.[]"

[...]

### "Summary"

[...]

## "4.7 Symbol type"

> [!t] t: ES6/2015 addition

By specification, only two primitive types may serve as object property keys:

- string type, or
- symbol type.

Otherwise, if one uses another type, such as number, it's autoconverted to string. So that `obj[1]` is the same as `obj["1"]`, and `obj[true]` is the same as `obj["true"]`.

Until now we've been using only strings.

Now let's explore symbols, see what they can do for us.

### "Symbols"

[...]

> [!t] t: Is it worth understanding theSymbols topic in JS?
>
> - They are quite weird at the beginning. But, with a little effort (this
>   article), you can understand them.
> - Because without understanding them, some future explanations in the course
>   (where Symbols are involved) become almost unintelligible.
> - It is worth understanding them and that's why I'm even adding some comments
>   for better understanding. But if you don't (or if you skip this article),
>   you will more or less survive in JS (although sometimes with pain, due to
>   your knowledge gap).

### ""Hidden" properties"

Symbols allow us to create "hidden" properties of an object, that no other part of code can accidentally access or overwrite.

For instance, if we're working with `user` objects, that belong to a third-party code. We'd like to add identifiers to them.

Let's use a symbol key for it:

```js run
let user = { // belongs to another code
  name: "John"
};

let id = Symbol("id");

user[id] = 1;

alert( user[id] ); // we can access the data using the symbol as the key
```

What's the benefit of using `Symbol("id")` over a string `"id"`?

As `user` objects belong to another codebase, it's unsafe to add fields to them, since we might affect pre-defined behavior in that other codebase. However, symbols cannot be accessed accidentally. The third-party code won't be aware of newly defined symbols, so it's safe to add symbols to the `user` objects.

Also, imagine that another script wants to have its own identifier inside `user`, for its own purposes.

Then that script can create its own `Symbol("id")`, like this:

```js
// ...
let id = Symbol("id");

user[id] = "Their id value";
```

There will be no conflict between our and their identifiers, because symbols are always different, even if they have the same name.

...But if we used a string `"id"` instead of a symbol for the same purpose, then there *would* be a conflict:

```js
let user = { name: "John" };

// Our script uses "id" property
user.id = "Our id value";

// ...Another script also wants "id" for its purposes...

user.id = "Their id value"
// Boom! overwritten by another script!
```

> [!t] t: Maybe clearer if using bracket notation
>
> - `user.id = 1` or the equivalent `user["id"] = 1`. Note the quotes in
>   the second one: it is completely different than `user[id] = 1` when
>   we have previously generated the variable `id` with `id = Symbol()`.
>   Remember that in dot notation, `user.id`, that `id` is not the name
>   of a variable of the "scope" outside the object... It is the name of
>   a property, but cannot be accessed outside the object (outside the
>   dot notation).

> [!t] t: Symbol is obviously generated unique also if in the same code
>
> ```js
> let id2 = Symbol("id"); // Unique
> const o = {};
> o[id2] = 1;
> o[id2]; // 1
> // Dont change the symbol!
> id2 = Symbol("id"); // Unique, and different from the previous..
> o[id2]; // undefined
> // We've lost the possility of retrieving the previous property
> // (except perhaps if using advanced methods covered later in this article,
> // but it's better not to loose stuff accidentally)
>
> // However, we can preserve (copy) the obtained value of the symbol as
> // much as we want:
> const id3 = id2;
> o[id2] = 2;
> o[id3]; // 2
> ```

> [!t] t: What if we don't have symbols available (e.g. like happened in ES5)?
>
> - Symbols generate a reference ensured unique. Can we do something similar
>   without Symbol?
> - We know from "LANG4.2 Objects reference and copying" that objects
>   are non-primitives. When one instantiates a new object (using `new` or
>   object literal `{ }`), it creates a unique reference:
>
>   ```js
>   const str1 = "yes", str2 = "yes";
>   str1 === str2; // true, they are primitives, they are the same.
>   const o1 = { str: "yes" }, o2 = { str: "yes"};
>   o1.str === o2.str; // true, these properties are also primitives.
>   o1 === o2; // false, the objects themselves are independent living
>              // instances. It just turns out that they were made
>              // similarly and they have (currently) the exact current
>              // content, but this cannot be verified just by this
>              // simple equality check.
>   // What if we use that unique reference (identifier) as the "key" of
>   // an object using the bracket notation? Will we have something
>   // similar to the behaviour of the Symbols?
>   const o3 = {};
>   o3[o1] = 8; // We place a value on the assotiative array, in that
>               // unique "place". This does not give error...
>   o3[o1]; // 8: ... and we can retrieve it later.
>   o3[o2] = 9; // We place a different value on the assotiative array,
>               // in a different place (right?)...
>   o3[o2]; // 9: ... and we can retrieve it later. Looks good, but...
>   o3[o1]; // 9: ... What?! It has changed the other place too! Why?
>   ```
>
> - So using an object as as the property name of another object (in
>   bracket notation) is clearly not a good idea (not at all similar of
>   using Symbol). Why?
> - The introduction of this article warned us:
>
>   > By specification, only two primitive types may serve as object property
>   > keys: string type, or symbol type. Otherwise, if one uses another type,
>   > such as number, it’s autoconverted to string.
>
> - It said "such as number", but it is not limited to numbers. In fact, in
>   "LANG4.1 Objects" already said it before:
>
>   > In short, there are no limitations on property names. They can be
>   > any strings or symbols (a special type for identifiers, to be
>   > covered later). **Other types are automatically converted to strings.**
>
> - And we have used in the example objects as property names... No error,
>   seen but they are casted to a string. What happens when we cast an object
>   to a string (explicitly or implicitly)? We will see this in next section
>   "LANG4.8 Object to primitive conversion", but let's have a preview here.
>   By default all objects casted to string produce the same fixed string:
>
>   ```js
>   // (we continue the previous code)
>   // Explicit casting to string:
>   String(o1); // "[object Object]"
>   String(o2); // "[object Object]"
>   String(o1) === String(o2); // true: all objects by default
>                              // cast to the same particular
>                              // string: "[object Object]"
>   // This also happens when implicit casting to string. E.g.:
>   o1 + " " + o2; // "[object Object] [object Object]"
>   // Or... When using an object as a property name:
>   o3[o1] = 8; // o1 implicitly casted to "[object Object]" string!
>   o3[o2] = 9; // Also!
>   // Equivalent property name:
>   o3["[object Object]"] = 10;
>   // All of them "point" to the same place:
>   o3["[object Object]"]; // 10
>   o3[o1]; // 10
>   o3[o2]; // 10
>   ```
>
> - We can however "simulate" a symbol by generating a random
>   string (or a random number casted to a string) that is big enough
>   to make the possibility of collision negligible.
>
>   ```js
>   // (we continue the previous code)
>   const pseudoSym1 = Math.random();
>   o3[pseudoSym1] = 11; // pseudeSym1 number implicitly casted to a string
>   o3[pseudoSym1]; // 11
>   // Or we can build pseudo-symbols longer (more robust: odds of
>   // collision reduced exponentially):
>   let pseudoSym2 = "";
>   // Concatenate 5 randoms:
>   for (let i=0; i <= 5; i++) {
>     pseudoSym2 += Math.random();
>   }
>   o3[pseudoSym2] = 12;
>   o3[pseudoSym2]; // 12
>   // Concatenate 5 randoms:
>   for (let i=0; i <= 5; i++) {
>     pseudoSym2 += Math.random();
>   }
>   o3[pseudoSym2] = 12;
>   o3[pseudoSym2]; // 12
>   ```
>
> - And we could polyfill the `Symbol()` function when not available
>   with something like this... This is not exactly equivalent of the
>   native ES6/ES2015 `Symbol()`, because when code is executed in the
>   **same engine** (in the same particular browser for example),
>   even if the different parts of the code were loades from different
>   places authored by different persons, all the code is under the
>   same "controller" (engine) when executed, and this engine can ensure
>   uniqueness in its scope.
> - In any case, the generation of "universal unique ids" (that can be
>   unique outside of the process and of the machine) is frequently done
>   by generating random identifiers long enough to make negligible the
>   possibility of collision. For example the standard
>   [UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier)
>   works like this.

> [!t] t: Symbol used as property name vs private property
>
> - We've seen that symbols can be used for defining object properties without
>   risk of colliding with others and that remain quite "hidden"...
> - They remain sort of "private" to our code. But they are not the concept of
>   "private property" that is used in Object Oriented Programming: for example,
>   these properties defined with a Symbol as property name are directly
>   accesible without problem from outside of the object: you just need to
>   "know" (have stored) the symbol value to do this. A "private property" only
>   can be accesed from inside of the methods of an object (even if its our own
>   code).
> - As we will see in "LANG 9.4 Private and protected properties and methods",
>   JS has also native support for private properties (although only as
>   recently as ES2022), and it doesn't have support for protected properties
>   (altough the programmers use a popular convention in the property names for
>   "indicating" that they "should be" protected, but this is not enforced
>   by the language).

#### "Symbols in an object literal"

If we want to use a symbol in an object literal `{...}`, we need square brackets around it.

> [!t] t: That is: to use a computed property.

Like this:

```js
let id = Symbol("id");

let user = {
  name: "John",
  [id]: 123 // not "id": 123
};
```
That's because we need the value from the variable `id` as the key, not the string "id".

#### "Symbols are skipped by for..in"

[...]

### "Global symbols"

[...]

In JavaScript, as we can see, that's true for global symbols.

> [!t] t: Global symbols allow generating unique identifiers
>
> - And they can be referenced by different uncorrelated parts of the
>   code by using the same string name (intended collision, in this case).
> - But, if they don't avoid collision, what is the advantage of a global
>   symbol with respect of just using a plain string? There is an
>   [answer to that question in StackOverflow](https://stackoverflow.com/questions/51488519/what-advantage-of-using-symbol-forstring-instead-the-plain-string#51488640).
>   For example:
>
>   - Properties assigned with Symbol are more "hidden" (do not appear as easily
>     when asking the object for its entries, for example in a `for..in`).
>   - They don't collide with strings: if we know that the other code doesn't
>     use Global Symbols but uses strings, our Global Symbols are at least all
>     of them in a different "space": we have at least 2 spaces that don't
>     collide.
>   - They don't autoconvert automatically to strings (we've seen this at the
>     beginning of this article), so when used incorrectly we get more easily
>     an explicit error (instead of a silent error).

#### "Symbol.keyFor"

[...]

That said, all symbols have the `description` property.

For instance:

```js run
let globalSymbol = Symbol.for("name");
let localSymbol = Symbol("name");

alert( Symbol.keyFor(globalSymbol) ); // name, global symbol
alert( Symbol.keyFor(localSymbol) ); // undefined, not global

alert( localSymbol.description ); // name
```

> [!t] t: And also: `globalSymbol.description; // name`
>
> - In short: all `Symbols` have a `Symbols.description` property, but only
>   the global ones (created with `Symbol.for()`) have a `Symbol.keyFor()`

### "System symbols"

[...]

### "Summary"

[...]

Technically, symbols are not 100% hidden. There is a built-in method [Object.getOwnPropertySymbols(obj)](mdn:js/Object/getOwnPropertySymbols) that allows us to get all symbols. Also there is a method named [Reflect.ownKeys(obj)](mdn:js/Reflect/ownKeys) that returns *all* keys of an object including symbolic ones. But most libraries, built-in functions and syntax constructs don't use these methods.

> [!t] t: So Symbol used as property name just hides/protects it from "casual/accidental" view

## "4.8 Object to primitive conversion"

[...]

### "Conversion rules"

In the chapter <info:type-conversions> we've seen the rules for numeric, string and boolean conversions of primitives. But we left a gap for objects. Now, as we know about methods and symbols it becomes possible to fill it.

1. There's no conversion to boolean. All objects are `true` in a boolean context, as simple as that. There exist only numeric and string conversions.
2. The numeric conversion happens when we subtract objects or apply mathematical functions. For instance, `Date` objects (to be covered in the chapter <info:date>) can be subtracted, and the result of `date1 - date2` is the time difference between two dates.
3. As for the string conversion -- it usually happens when we output an object with `alert(obj)` and in similar contexts.

> [!t] t: "Similar contexts"
>
> - E.g. if we use `+` to concatenate to a string or we expand inside a
>   template litteral. We often also do this e.g. in `console.log()`.
> - Also when manipulating the DOM of a web page, the element contents is
>   finally rendered as text, as a string.
> - ...

We can implement string and numeric conversion by ourselves, using special object methods.

Now let's get into technical details, because it's the only way to cover the topic in-depth.

> [!t] t: Skip the rest of this article up to the Summary with my comments..
>
> - It is not straightforward at all and not clear if its worth it at this
>   stage.
> - Just know that you are missing some understanding related to this topic.
>   You can come back here when you encounter problems related to this.
> - Note: understanding the rest of the article has a prerequisite of
>   understanding the previous article regarding Symbols.

### "Hints"

[...]

### "Symbol.toPrimitive"

[...]

### "toString/valueOf"

[...]

#### "A conversion can return any primitive type"

[...]

### "Further conversions"

[...]

### Summary

The object-to-primitive conversion is called automatically by many built-in functions and operators that expect a primitive as a value.

> [!t] t: Skip from here in the summary...

[...]

> [!t] t: ... Up to here.

In practice, it's often enough to implement only `obj.toString()` as a "catch-all" method for string conversions that should return a "human-readable" representation of an object, for logging or debugging purposes.

> [!t] t: Quick example
>
> - Since we skipped the gory details, we see an example of this "in practice"
>
>   ```js
>   let user = {
>     name: "John",
>     surname: "Smith",
>     age: 32,
>   };
>
>   alert(user); // "[object Object]"
>   console.log(user); // In this case, in the browser console, we see the whole
>                      // object, and even we can interatively expand/collapse its
>                      // properties
>   // But if doing something that casts to string:
>   console.log("User is: " + user); // "User is: [object Object]"
>
>   // Although if we use separate arguments, console.log still shows the whole
>   // object, interatively manipulable:
>   console.log("User is: ", user); // "User is: " and then the whole object.
>
>   // We can provide a toString() method to user (we are doing this now a
>   // posteriori, or could have done it above, during the object initial
>   // construction):
>   user.toString = function() {
>     return `${this.surname}, ${this.name} (aged ${this.age})`;
>   }
>   user.toString();   // "Smith, John (aged 32)"
>   // That method will since now be called upon casting to string:
>
>   alert(user);       // "Smith, John (aged 32)"
>   console.log(user); // "Smith, John (aged 32)"
>   console.log("User is: " + user); // "User is: Smith, John (aged 32)"
>   ```
>
> - For sure, it may not be worth doing this for a single object... But when we
>   do constructors and/or classes, it may be more worth providing this method:
>   deciding a way in wich the information of the object will be displayed
>   easily, by default when casted to string.

