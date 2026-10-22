
# MDN Learn tasks for js fundamentals: task instructions

## jsinfo tasks --------------------------------------------------------------------

- jsinfo's chapter "LANG: 2. JS Fundamentals":
  - Read the chapter, alongside the teacher's comments published.
  - Try every proposed task in jsinfo at the end of the articles,
    without looking at the solution.
    - Don't answer only in your head: **write down your answer** (in a
      paper or in a text file). Some are very short, but others are longer:
      avoid the temptation of doing it lightly only in your head: write
      down.
    - Then, compare your answer with the proposed solution.
    - You can ask any doubt you may have then (in class or in the
      forums).
    - If you don't have time, skip tasks and you may try them in the future
      for real as a refreshment.
      - It is better not doing at all a task for the moment than reading it
        and inmediately the solution.
- You don't deliver anything to the teacher in this section.




## MDN Learn tasks _________________________________________________________

The following are some tasks extracted from the "MDN Learn" course on JS
fundamentals.

- Try hard to do them for yourself, in exam's conditions.
- If there is something in the task description that you don't understand or
  that does not fit, ask for it.
- If you need something for resolving the task that has not been addressed
  until now in the jsinfo guides and had to look elsewhere for it (e.g. in
  next jsinfo chapters or in Google):
  - *You must comment in your code that you had to do it, and you source*.
  - You may comment this at the forum (with spoiler alert if needed to
    warn others that you are providing a solution).



### math1.html --------------------------------------------------------------------

In this task you will have to create four numeric values, then add
the first two together, then subtract the fourth from the third, then
multiply the two secondary results together to get a result that has to
be 48.

Finally, you will need to write a test that proves that this value is an
even number.

You will add your code only in the specified place of a provided
template (see below), and your code will follow these steps:

1. Create four variables that contain numbers. Call the variables
   something sensible.
2. Add the first two variables together and store the result in another
   variable.
3. Subtract the fourth variable from the third and store the result in
   another variable.
4. Multiply the results from the last two steps together, storing the
   result in a variable called `finalResult`. The product should be 48.
   If it isn't, you'll have to adjust some of the initial input values.
   Use your logic so that you are not trying numbers randomly.
5. Finally, write a calculation that checks whether `finalResult` is an
   even number. Store the result in a variable called `evenOddResult`.

For implementing this task, create a file

`math1.html`

starting with the following template:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8"/>
    <title>math1</title>
  </head>
  <body>
  </body>
  <script>
    let finalResult;
    let evenOddResult;

    // Add your code here
    //{{-------------------------------------------------------



    //}}-------------------------------------------------------
    // Don't edit the code below here!

    const body = document.querySelector('body');
    const para1 = document.createElement('p');
    const finalResultCheck = finalResult === 48 ?
      `Yes, well done!` : `No, it is ${ finalResult }`;
    para1.textContent = `Is the finalResult 48? ${ finalResultCheck }`;
    const para2 = document.createElement('p');
    const evenOddResultCheck = evenOddResult === 0 ?
      'The final result is even!' : 'The final result is odd. Hrm.'
    para2.textContent = evenOddResultCheck;
    body.appendChild(para1);
    body.appendChild(para2);
  </script>
</html>
```

Insert your code at the specified place.

As you can see and test, the provided template code at the end prints
some text that confirms or denies that your inserted code is obtaining
the expected result.

When your implementation is correct, the printed text will be:

```txt
Is the finalResult 48? Yes, well done!

The final result is even!
```

Note: for sure you can do an incorrect implementation that also shows this
message. The message is a necessary but not sufficient condition for
correctness.




### math2.html --------------------------------------------------------------------

You are provided with two calculations with the results stored in the
variables `result` and `result2`.

You need to take the calculations, multiply them, and format the result
to two decimal places.

You have to follow these steps in your code:

1. Multiply `result` and `result2` and assign the result back to
   `result` (use assignment shorthand).
2. Format `result` so that it has two decimal places and store it in a
   variable called `finalResult`.
3. Check the data type of `finalResult` using `typeof`. If it's a
   `string`, convert it to a `number` type and store the result in a
   variable called `finalNumber`.

To pass this test, `finalNumber` should have a result of `4633.33`.

For implementing this task, create a file

`math2.html`

starting with the following template where you insert your code at the
specified place:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8"/>
    <title>math3</title>
  </head>
  <body>
  </body>
  <script>
    let result = 7 + 13 / 9 + 7;
    let result2 = 100 / 2 * 6;

    // Add your code here
    //{{-------------------------------------------------------



    //}}-------------------------------------------------------
    // Don't edit the code below here!

    const body = document.querySelector('body');
    const para1 = document.createElement('p');
    para1.textContent = `Your finalResult is ${ finalResult }`;
    const para2 = document.createElement('p');
    const finalNumberCheck = isNaN(finalNumber) === false ?
      'finalNumber is a number type. Well done!'
      : `Ooops! finalNumber is not a number.`;
    para2.textContent = finalNumberCheck;
    body.appendChild(para1);
    body.appendChild(para2);
  </script>
</html>
```





## math3.html --------------------------------------------------------------------

We want you to write some tests.

There are three groups, each consisting of a statement and two
variables.

For each group, write a test that proves or disproves the statement made.

Store the results of those tests in variables called `weightComparison`,
`heightComparison`, and `pwdMatch`, respectively.

When implemented successfully, there will be 3 printed paragraphs
starting respectively with "False", "True", "False".

For implementing this task, create a file

`math3.html`

starting with the following template where you insert your code at the
specified place:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8"/>
    <title>math3</title>
  </head>
  <body>
  </body>
  <script>
    // Statement 1: The elephant weighs less than the mouse
    const eleWeight = 1000;
    const mouseWeight = 2;

    // Statement 2: The Ostrich is taller than the duck
    const ostrichHeight = 2;
    const duckHeight = 0.3;

    // Statement 3: The two passwords match
    const pwd1 = 'stromboli';
    const pwd2 = 'stROmBoLi';

    // Add your code here
    //{{-------------------------------------------------------



    //}}-------------------------------------------------------
    // Don't edit the code below here!

    const body = document.querySelector('body');
    const para1 = document.createElement('p');
    const para2 = document.createElement('p');
    const para3 = document.createElement('p');
    const weightTest = weightComparison ?
      'True — elephants do weigh less than mice!?'
      : 'False — of course an elephant is heavier than a mouse!';
    const heightTest = heightComparison ?
      'True — an ostrich is indeed taller than a duck!'
      : 'False — apparently a duck is taller than an ostrich!?';
    const pwdTest = pwdMatch ?
      'True — the passwords match.'
      : 'False — the passwords do not match; please check them';
    para1.textContent = weightTest;
    body.appendChild(para1);
    para2.textContent = heightTest;
    body.appendChild(para2);
    para3.textContent = pwdTest;
    body.appendChild(para3);
  </script>
</html>
```






## conditionals1.html --------------------------------------------------------------------

In this task you are provided with two variables:

- `season` — contains a string that says what the current season is.
- `response` — begins uninitialized, but is later used to store a
  response that will be printed to the output panel.

We want you to create a conditional that checks whether `season`
contains the string "summer", and if so assigns a string to `response`
that gives the user an appropriate message about the season. If not, it
should assign a generic string to `response` that tells the user we
don't know what season it is.

To finish off, you should then add another test that checks whether
`season` contains the string "winter", and again assigns an appropriate
string to `response`.

The printed expected result will depend on the contents of `season`
variable.

For implementing this task, create a file

`conditionals1.html`

starting with the following template where you insert your code at the
specified place:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8"/>
    <title>conditionals1</title>
  </head>
  <body>
  </body>
  <script>
    let season = 'summer';
    let response;

    // Add your code here
    //{{-------------------------------------------------------



    //}}-------------------------------------------------------
    // Don't edit the code below here!

    const body = document.querySelector('body');
    let para1 = document.createElement('p');
    para1.textContent = response;
    body.appendChild(para1);
  </script>
</html>
```







## conditionals2.html --------------------------------------------------------------------

For this task you are given three variables:

- `machineActive` — contains an indicator of whether the answer machine
  is switched on or not (`true`/`false`)
- `score` — Contains your score in an imaginary game. This score is fed
  into the answer machine, which provides a response to indicate how
  well you did.
- `response` — begins uninitialized, but is later used to store a
  response that will be printed to the output panel.

You need to create an `if...else` structure that checks whether the
machine is switched on and puts a message into the `response` variable
if it isn't, telling the user to switch the machine on.

Inside the first `if...else`, you need to nest another `if...else` that
puts appropriate messages into the `response` variable depending on what
the value of score is — if the machine is turned on. The different
conditional tests (and resulting responses) are as follows:

- Score of less than 0 or more than 100 — "This is not possible, an
  error has occurred."
- Score of 0 to 19 — "That was a terrible score — total fail!"
- Score of 20 to 39 — "You know some things, but it\\'s a pretty bad
  score. Needs improvement."
- Score of 40 to 69 — "You did a passable job, not bad!"
- Score of 70 to 89 — "That\\'s a great score, you really know your stuff."
- Score of 90 to 100 — "What an amazing score! Did you cheat? Are you
  for real?"

Try updating the live code below to recreate the finished example. After
you've entered your code, try changing `machineActive` to `true`, to see
if it works.

The printed expected result will depend on the contents of
`machineActive` and `score` variables.

For implementing this task, create a file

`conditionals2.html`

starting with the following template where you insert your code at the
specified place:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8"/>
    <title>conditionals2</title>
  </head>
  <body>
  </body>
  <script>
    let response;
    let score = 75;
    let machineActive = false;

    // Add your code here
    //{{-------------------------------------------------------



    //}}-------------------------------------------------------
    // Don't edit the code below here!

    const body = document.querySelector('body');
    let para1 = document.createElement('p');
    let para2 = document.createElement('p');
    para1.textContent = `Your score is ${ score }`;
    para2.textContent = response;
    body.appendChild(para1);
    body.appendChild(para2);
  </script>
</html>

```







## conditionals3.html --------------------------------------------------------------------

For this task you are given four variables:

- `machineActive` — contains an indicator of whether the login machine
  is switched on or not (`true`/`false`).
- `pwd` — Contains the user's login password.
- `machineResult` — begins uninitialized, but is later used to store a
  response that will be printed to the output panel, letting the user
  know whether the machine is switched on.
- `pwdResult` — begins uninitialized, but is later used to store a
  response that will be printed to the output panel, letting the user
  know whether their login attempt was successful.

We'd like you to create an `if...else` structure that checks whether the
machine is switched on and puts a message into the `machineResult`
variable telling the user whether it is on or off.

If the machine is on, we also want a second conditional to run that
checks whether the `pwd` is equal to `cheese`. If so, it should assign a
string to `pwdResult` telling the user they logged in successfully. If
not, it should assign a different string to `pwdResult` telling the user
their login attempt was not successful. We'd like you to do this in a
single line, using something that isn't an `if...else` structure.

The printed expected result will depend on the contents of
`machineActive` and `pwd` variables.

For implementing this task, create a file

`conditionals3.html`

starting with the following template where you insert your code at the
specified place:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8"/>
    <title>conditionals3</title>
  </head>
  <body>
  </body>
  <script>
    let machineActive = true;
    let pwd = "cheese";
    let machineResult;
    let pwdResult;

    // Add your code here
    //{{-------------------------------------------------------



    //}}-------------------------------------------------------
    // Don't edit the code below here!

    const body = document.querySelector("body");
    let para1 = document.createElement("p");
    let para2 = document.createElement("p");
    para1.textContent = machineResult;
    para2.textContent = pwdResult;
    body.appendChild(para1);
    body.appendChild(para2);
  </script>
</html>

```








## loops3.html -------------------------------------------------------------------------

In this task, you are provided with the following:

- `i` — starts off with a value of 500; intended to be used as an
  iterator.
- `text` — contains an initially empty string, which will be used to
  report the results.
- `isPrime()` — a function that, when passed a number, returns `true` if
  the number is a prime number, and `false` if not.

You need to use a loop to go through the numbers 2 to 500 backwards (1
is not counted as a prime number), and run the provided `isPrime()`
function on them. For each number that isn't a prime number, continue on
to the next loop iteration. For each one that is a prime number, add it
to the paragraph's `textContent` along with some kind of separator.

Do the loop three times using three different types of loop with equivalent
result (of showing the specified primes). There will be a newline separation
between the text printed by each loop.

The printed expected result will be a line of output for each loop, with the
numbers separated by your chosen separator.

For implementing this task, create a file

`loops3.html`

starting with the following template where you insert your code at the
specified place:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8"/>
    <title>loops3</title>
  </head>
  <body>
  </body>
  <script>
    let i = 500;
    let text = '';

    function isPrime(num) {
      for(let i = 2; i < num; i++) {
        if(num % i === 0) {
          return false;
        }
      }

      return true;
    }

    // Add your code here
    //{{-------------------------------------------------------



    //}}-------------------------------------------------------
    // Don't edit the code below here!

    const para = document.createElement('p');
    para.textContent = text;
    const body = document.querySelector('body');
    body.appendChild(para);
  </script>
</html>

```








## Deliver -----------------------------------------------------------------

- La estructura de carpetas/ficheros esperada es:

  ```text
  01-math/
    math*.html
  02-conditionals/
    conditionals*.html
  03-loops/
    loops*.html
  ```

- Pon lo que se te ha pedido producir con la estructura pedida
  **directamente bajo la raíz** de un fichero ZIP llamado:

  `task-id.first-surname.name.zip`

  - Donde:
    - `task-id` es el ID corto de la tarea
    - `first-surname` es tu primer apellido
    - `name` es tu nombre
  - Usa solo standard ASCII (no tildes ni eñes), lowercase (minúsculas)
    y kebab-case (guiones en vez de espacios para nombres o apellidos
    compuestos).
  - P.ej.: para la tarea

    `dwec1p2`

    y el alumno

    `José Luís  NÚÑEZ DE BALBOA  GARCÍA`,

    se tendrá este nombre de fichero (sin acentos, ni eñes, ni espacios, ni
    mayúsculas, pero con ciertos puntos y, en este caso, guiones en ciertos
    lugares):

    `dwec1p2.nunez-de-balboa.jose-luis.zip`

- Pon **solo** los ficheros/carpetas que se han pedido. Si tienes que
  comentar o añadir algo extra:
  - Preferentemente: comenta internamente en los ficheros que sean de
    código (usando comentarios de código).
  - Si no es suficiente, puedes usar un

    `readme.md` (todo minúsculas, en inglés y con esa extensión)

    **en la raíz del ZIP**, y mencionar ahí cualquier cosa extra que
    quieras y/o ficheros/carpetas que no sean los solicitados.

- Entrega el ZIP de la manera indicada por el profesor (típicamente,
  entrega en tarea del aula virtual).

## Marking

| Points | Exercise |
| ------ | -------- |
| 1 | math1 |
| 1 | math2 |
| 1 | math3 |
| 1 | conditionals1 |
| 3 | conditionals2 |
| 1.5 | conditionals3 |
| 1.5 | loops3 |
| -5 (up to) | incorrect file formats and/or file names and/or structure |
| **10** | **Total** |



































