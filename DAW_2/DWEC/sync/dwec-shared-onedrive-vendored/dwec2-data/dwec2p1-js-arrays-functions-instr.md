# Excercises for arrays inplace and not inplace

- Create a folder

  `arrays-functions/`

  under git, and inside just a

  `main.js`

  with what is asked for in the sections of this task.
- IMPORTANT: for the implementation of the functions required,
  **don't use array methods of jsinfo LANG5.5**. Only
  `pop/push/shift/unshift` methods, and the `lengh` property are
  allowed.
- When implementing, prepare also auto-verified UT's for each function
  (even if minimal), that should be executed. For them you can use the
  jsinfo LANG5.5 methods as you please.
- Commits should follow conventional commits.
- At least the first commit for each section contains the proposed
  section title (with maybe more words if needed, before the section
  number).
- If further commits are related to a given section, they should
  have at the end the section number with an increasing counter
  for that section. E.g.: `(#3)`, then `(#3.1)`, then `(#3.2)`, ...
- You can develop in the order you please, but the order of the requested
  functions in the file will be the one of these instructions.

## Implement insertInArray() (#1)

`insertInArray(arrayIn, indexThatIsBefore, arrayOrPrimitiveToInsert)`

Returns the modified array that inserts the last parameter into the first
array, at the index after the second parameter. When inserting an array,
it inserts it flat (its elements side by side with the elements of the
other array).

Assume that the types are the ones expected, and that the arrays are
flat.

Usage/examples:

```js
let arrayOut = insertInArray([ true, "hi", 4, "yes", null, 8 ], 3, "bye");
// arrayOut contains: [ true, "hi", 4, "yes", "bye", null, 8 ]

let arrayOut2 =
 insertInArray([ true, "hi", 4, "yes", null, 8 ], 3, ["bye", 3]);
// arrayOut2 contains: [ true, "hi", 4, "yes", "bye", 3, null, 8 ]
```

## Implement insertInArrayInPlace() (#2)

`insertInArrayInPlace(/* same */)`

Same, but modifies the input array in place, and does not return anything.

Usage/example:

```js
let arrayInOut = [ 8, 9 ];
insertInArrayInPlace(arrInOut, 0, "hi");
// arrayInOut contains: [ 8, "hi", 9 ]
```

## Implement cleanArrayInPlace() (#3)

`cleanArrayInPlace(arrayIn);`

Removes the entries of the input array that have value null or undefined
or "empty" entries (sparse arrays).

Does not asume array of primitives, but does not work recursively.

Usage/example:

```js
let arrayInOut2 =
 [ 3, , , , 4, undefined, 5, null, { a: 6 }, [ 7, 8, null, 9 ], 10 ];
cleanArrayInPlace(arrayInOut2);
// arrayInOut2 contains: [ 3, 4, 5, { a: 6 }, [ 7, 8, null, 9 ], 10 ]
```

## Implement insertInArray2() (#4)

Like insertInArray(), but using LANG5.5 array methods.

Don't forget to UT regression.

## Implement insertInArrayInPlace2() (#5)

Like `insertInArrayInPlace()`, but using LANG5.5 array methods.

Don't forget to UT regression.

## Implement cleanArrayInPlace2() (#6)

Like `cleanArrayInPlace()`, but using LANG5.5 array methods.

Dont forget to UT regression.

## Deliver

The file structure at the end of this task is:

```text
arrays-functions/
  .git/
  main.js
```

- Put that folder **directly under the root** of a ZIP file and deliver it.
- Same indications that for task `dwec1p1`. In summary, the file name is:

  `dwec2p1.first-surname.name.zip`

- Put **only** the requested files. Comment internally or add a readme.md in
  the root for more.

