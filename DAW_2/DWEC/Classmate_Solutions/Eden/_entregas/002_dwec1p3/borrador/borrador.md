

Tarea entrega "dwec1p3".

Título: Refactoring and unit testing of MDN Conditionals 2 task


# Deliver -------------------------------------------------------------------------------

The file structure at the end of this task is:

```text
ut-refactor/
  .git/
  conditionals2.html
  scripts/get-response/
    main.js
    uts.js
    uts.html
```

- Put that folder **directly under the root** of a ZIP file and deliver it.
- Same indications that for previous tasks. In summary, the file name
  has this pattern:

  `dwec1p3.first-surname.name.zip`

- Put **only** the requested files. Comment internally or add a readme.md in
  the root for more.




# ENUNCIADO ______________________________________________________________________


## Prerequisites ---------------------------------------------------------------------

- You are supposed to:
  - Have read in jsinfo LANG2 (JS fundamentals) and LANG5.4 (on arrays).
  - Have at least tried the previous task regarding some MDN Learn tasks, at least the MDN Conditionals 2 task _________ HECHO




## Task overview -------------------------------------------------------------------

- During this task, we are also practicing here git usage with good practices (atomic commits and conventional commit messages, completely guided in this task).

- We are refactoring in several ways *the MDN Conditionals 2 task done earlier* and providing some automatic Unit Testing for it, in  incremental steps. We also will fix in case we find some bugs in it (spoiler: we should find some if we look deep enough).

- Normally, we do the UT before refactoring (precisely in order to regression test the refactoring). But in our case the starting point does not permit easily an external UT.


- So we are performing these steps:

    1) A first refactoring of the code to be tested, just to be able to implement more easily the UTs: 

    	1. Our first refactoring will be to *wrap* the significant code *in a function* and place it at an *external JS*, that can be loaded both by the "normal code" that uses it, and also by the code that tests it as UT.

    2) Then we will implement the UT, starting with only *3 simple cases* with *manual verification* of the output.    
    
    3) Then we will implement *autoverification* of these 3 cases (compare in each case against an expected result and warn when it does not match).

    4) Then we will extend the UT to *more cases*, changing (refactoring) our UT implementation if needed to make it more "expandable".
    
    5) Then we will *fix* as much *bugs* as possible of the tested code.

    6) Then we will *refactor* the tested code in different ways.

    7) The we will also *rollback* the last change, in order to practice rollbacks when we are using git.



- IMPORTANT: check at the end the final overal structure expected for the files of this task. -> se refiere al formato de la entrega. 




####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
#





# EJERCICIO 1: feat: initial from original contitionals2 (#1) ----------------------------------------

- Create a directory for the "root" of this task (the place where your content will be): `ut-refactor/`

    - Dado que quiere que creemos un repositorio, voy a crearlo en "C:\Users\eden\repositorios" que es donde los creo siempre. 

        - ya he creado la carpeta "ut-refactor" dentro de esa ruta. __________________________________ HECHO


- Initialize it with Git (branch "main").

    - Click derecho dentro de "ut-refactor" -> "Mostrar más opciones" -> "Open GitBash here".

    ```bash
    git init -b main
        # "-b" es para crear una rama inicial e indicar su nombre. 

    ```

    - Lo marco cuando lo haya hecho. __________________________________________________________________ HECHO


- Copy your file `02-conditionals/conditionals2.html` from the previous task to that root of this task: `conditionals2.html`

    - Lo marco cuando lo haya hecho. __________________________________________________________________ HECHO


- *Important*: edit the file: In the `<title>` tag, and place at the begining:   `first-surname.name`

    - With your first name and surname (following the conventions we use for delivering the tasks) and followed by a space. Resulting title will be something like: `nunez-de-balboa.jose-luis Conditionals: Task 2`

    - Lo marco cuando lo haya hecho. __________________________________________________________________ HECHO


```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8" />
    <title>perez.eden Conditionals: Task 2</title>
</head>

<body>
</body>

<script>
    let response;
    let score = 75;
    let machineActive = false;   

    // Add your code here
    //{{-------------------------------------------------------
    machineActive = true;

    if (machineActive) {
        if (score < 0 || score > 100) {
            response = "This is not possible, an error has occurred.";
        } else if (score <= 19) {
            response = "That was a terrible score — total fail!";
        } else if (score <= 39) {
            response = "You know some things, but it\\'s a pretty bad score. Needs improvement.";
        } else if (score <= 69) {
            response = "You did a passable job, not bad!";
        } else if (score <= 89) {
            response = "That\\'s a great score, you really know your stuff.";
        } else if (score <= 100) {
            response = "What an amazing score! Did you cheat? Are you for real?";
        }
    } else {
        response = "The machine is switched off. Please switch it on.";
    }

    //}}-------------------------------------------------------
    // Don't edit the code below here!

    const body = document.querySelector('body');
    let para1 = document.createElement('p');
    let para2 = document.createElement('p');
    para1.textContent = `Your score is ${score}`;
    para2.textContent = response;
    body.appendChild(para1);
    body.appendChild(para2);
</script>

</html>

```


- *Commit* with the title of this step. In this case:

    *"feat: initial from original conditionals2 (#1)"*

    - We are using here for the commit message titles following "Conventional Commits". And also we are adding at the end the "issue number", for easy correlation. The "issues" in this case are the "step number" of this exercise. In real software, they can be GitHub issue numbers (or a similar concept in other kind of software for managing application development).

    - Al hacer el push desde VS Code te pregunta si quieres publicar la rama. 

        - Esto te permite saltarte el paso de tener que crear el respositorio en la web de GitHub y vincularlo (se crea de forma automática).

            - Solo asegurate de que cuando te pregunte VS Code selecciones la opción de crearlo en "public" y no en "private". 


    - Lo marco cuando lo haya hecho. __________________________________________________________________ HECHO









####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
#



# EJERCICIO 2: refactor: move code to function and external file (#2) -----------------------------------------

- Create a *file* `scripts/get-response/main.js` that contains the declaration of a function: `getResponse()`

    - that function gets two parameters:

        - The score.

        - Whether the machine is active or not.

    - Ya he creado la función (consulta el archivo main.js para ver el código de la función que he creado). ______________ HECHO



- Inside its body, *move* from `conditionals2.html` the *code* that generates the response *message* (by checking the machine status and the
  score).

    - Ya he completado el código de la función. _____________________________________________ HECHO



- Since we've removed that code from inside `conditionals2.html`, go to that file and modify it so that it works again:

    - Before the script element, load the external script so that the `getResponse()` function is *available in the global scope*.

    - El archivo main.js se carga mediante la etiqueta <script src="scripts/get-response/main.js"></script>, que se encuentra antes del script principal de conditionals2.html. De esta forma, el navegador ejecuta primero el archivo externo, donde se declara la función getResponse(), y esta queda disponible en el ámbito global para que el script principal pueda llamarla posteriormente.

    - Lo marco aquí cuando lo haya hecho. _____________________________________________________ HECHO



- Now, *call that function* in the right place to obtain the response that will be later used in the place where we can't touch the code.

    - Lo marco aquí cuando lo haya hecho. _____________________________________________________ HECHO



- Test that it works as before refactoring (with the example values of score and machine status).

    - Abro conditionals2.html en el navegador.

    - Con estos valores:

        ```js
        let score = 75;
        let machineActive = true;

        ```

    - Debería ver:

        Your score is 75
        That's a great score, you really know your stuff.

    - Efectivamente, muestra la salida esperada al abrirlo con el navegador. 


    - Lo marco aquí cuando lo haya hecho. _____________________________________________________ HECHO



- *Commit* with the title of this step: `refactor: move code to function and external file (#2)`




- Código de *conditionals2.html*: ----------------------------------------------------------------------------

```html

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8" />
    <title>perez.eden Conditionals: Task 2</title>
    <script src="scripts/get-response/main.js"></script>
</head>

<body>
</body>

<script>
    let response;
    let score = 75;
    let machineActive = false;   

    // Add your code here
    //{{-------------------------------------------------------
    machineActive = true;

    if (machineActive) {
        if (score < 0 || score > 100) {
            response = "This is not possible, an error has occurred.";
        } else if (score <= 19) {
            response = "That was a terrible score — total fail!";
        } else if (score <= 39) {
            response = "You know some things, but it\\'s a pretty bad score. Needs improvement.";
        } else if (score <= 69) {
            response = "You did a passable job, not bad!";
        } else if (score <= 89) {
            response = "That\\'s a great score, you really know your stuff.";
        } else if (score <= 100) {
            response = "What an amazing score! Did you cheat? Are you for real?";
        }
    } else {
        response = "The machine is switched off. Please switch it on.";
    }
    response = getResponse(score, machineActive);

    
    //}}-------------------------------------------------------
    // Don't edit the code below here!

    const body = document.querySelector('body');
    let para1 = document.createElement('p');
    let para2 = document.createElement('p');
    para1.textContent = `Your score is ${score}`;
    para2.textContent = response;
    body.appendChild(para1);
    body.appendChild(para2);
</script>

</html>

```



- Código de *main.js*: ---------------------------------------------------------------------------------------

```js
function getResponse(score, machineActive) {
    let response;

    if (machineActive) {
        if (score < 0 || score > 100) {
            response = "This is not possible, an error has occurred.";
        } else if (score <= 19) {
            response = "That was a terrible score — total fail!";
        } else if (score <= 39) {
            response = "You know some things, but it's a pretty bad score. Needs improvement.";
        } else if (score <= 69) {
            response = "You did a passable job, not bad!";
        } else if (score <= 89) {
            response = "That's a great score, you really know your stuff.";
        } else if (score <= 100) {
            response = "What an amazing score! Did you cheat? Are you for real?";
        }
    } else {
        response = "The machine is switched off. Please switch it on.";
    }

    return response;
}

```




####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
#





# EJERCICIO 3: test: first 3 UT's with manual verification (#3) ------------------------------------------------------

## PROCEDIMIENTO -------------------------------------------------------------------------------------

- Now we are going to prepare the UT for `getResponse()`: since it is in an external file now, we can create a separate .html that loads it, and does the UT on it (and we leave the original .html unaffected by our UT).


- Under `scripts/get-response/`, create these two files:
  
    - A file `uts.js`: For the momment, leave its body empty.
  
    - A file `uts.html`:

        - Start with a minimalistic HTML template generated by Emmet, with title *"first-surname.name UT: getResponse()"* (using your first surname and name as previously indicated).

            - Por "Emmet" se refiere a las plantillas que te ofrece VS Code cuando escribes ! al inicio de un HTML en blanco. 

        - In its body, it loads the two external files for `get-response` (using relative routes): `main.js` then `ut.js`.

    
    - Test that `uts.html` works for now as expected (has no errors).


    - Lo marco aquí cuando lo haya hecho. _____________________________________________________ HECHO




- Let's implement the UT's, starting with only 3:

    - It will perform a series of *UT*'s and show info on the *console* regarding the obtained result for each one.

        - UT = Unit Test = test unitario. 


    - Each UT consists in *calling* the function `getResponse()` with some *parameter values*, and showing somehow if it worked as expected.


    - The output should be a *log* with something like this (explanation below):

    ```text
    | testNum | score | machineActive | expectedResponse | response |
    |-|-|-|-|-|
    | 1 | 75 | false | Please switch the machine on. | Please switch the machine on. |
    | 2 | 75 | true | That's a great score, you really know your stuff. | That's a great score, you really know your stuff. |
    | 3 | 150 | true | This is not possible, an error has occurred. | This is not possible, an error has occurred. |

    ```

- That is, a table with 5 fields (columns):

    - It *logs* two static first lines acting as a legend (*table header*) for the different fields that will have the lines below (five fields).
    
    - In each line, ` | ` *delimits* the different fields.

    - It then logs the *result* of each test, one test *per line* (3 in total in the example).

    - *Important:* even if some lines may wrap when displayed because they are long, there are only 3 lines of tests. And before, 2 lines for the table header. So you have to generate *exactly 5 lines* of text, all of them starting with a ` | `.
    
        - In each line, it shows these 5 fields:

        - The test number for quick reference (starts with 1, then increases for each test).

        - The two particular input parameter values used for "stimulating" that test.

        - The expectend response (output) for that test.

        - The actual response (output) for that test.

    - Note: if in a hurry, sometimes it is enough with the actual output, but if we show also the expected output, it makes easier to visually verify by comparison (not having to think each time)... Besides, there are times where the expected output is in fact not clear (ambiguous requirements), and the UT expected result "fixes" (and documents) an expected behaviour in those cases.

    - Note: We've chosen the previous format since it is readable, and also it is a typical way of doing tables in Mardkown. You could copy paste the console output to a text file and easily render it.

    | testNum | score | machineActive | expectedResponse | response |
    |-|-|-|-|-|
    | 1 | 75 | false | Please switch the machine on. | Please switch the machine on. |
    | 2 | 75 | true | That's a great score, you really know your stuff. | That's a great score, you really know your stuff. |
    | 3 | 150 | true | This is not possible, an error has occurred. | This is not possible, an error has occurred. |


- The *"manual verification"*, consists in visually *checking* that for each test, the "expected result" and "actual result" are *the same*.

- For the momment, we are just doing these 3 particular tests shown.

- Now for example, imagine that the implementation of `getResponse()`:

    - Has forgotten to use the parameter that indicates if the machine is active.

    - Has forgotten to check for values exceeding 100.




- In this case, with the previous 3 tests applied to that implementation, we should get this test:

  ```text
  | testNum | score | machineActive | expectedResponse | response |
  |-|-|-|-|-|
  | 1 | 75 | false | Please switch the machine on. | That's a great score, you really know your stuff. |
  | 2 | 75 | true | That's a great score, you really know your stuff. | That's a great score, you really know your stuff. |
  | 3 | 150 | true | This is not possible, an error has occurred. | What an amazing score! Did you cheat? Are you for real? |
  ```



- Load the `uts.html`, and *verify* if *the 3 tests* pass or not.

    - We are testing your current implementation of `getResponse()` "as is" and your new implementation of `uts.js` (in order to be sure that it is showing an output as specified).
    
    - *Don't fix* for now the `getResponse()` code inside `scripts/get-response/main.js` *if it fails*.

    - Abre uts.html con el navegador y pulsa F12 para ver la consola. 

    - Da los resultados esperados, solo que uno de los mensajes de salida no tiene el texto exacto que pide este nuevo enunciado (al haberlo escrito en conditionals2.html en la entrega anterior cuando todavía no teníamos estas instrucciones). 

    - Lo marco aquí cuando lo haya hecho. _____________________________________________________ HECHO





- *Commit* with the title of this step: `test: first 3 UT's with manual verification (#3)`



- *If you already found some bug* on your implementation, **after** that commit do an **independent** *commit* with title:

    `fix: pass UT number X (#3.1)`

    (with "X" being the number of test that you fixed, if more failed, do independent commits for each fix: #3.2, ...)

    - Perfecto, tras esta corrección los mensajes coinciden por completo. 

    - Lo marco aquí cuando lo haya hecho. _____________________________________________________ HECHO





- Código de conditionals2.html: ------------------------------------------------------------------------------

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>perez.eden UT: getResponse()</title>
</head>
<body>
    <script src="main.js"></script>
    <script src="uts.js"></script>
</body>
</html>

```




- Código de uts.js: -------------------------------------------------------------------------------------------

```js
console.log("| testNum | score | machineActive | expectedResponse | response |");
console.log("|-|-|-|-|-|");

let response;

response = getResponse(75, false);
console.log("| 1 | 75 | false | Please switch the machine on. | " + response + " |");

response = getResponse(75, true);
console.log("| 2 | 75 | true | That's a great score, you really know your stuff. | " + response + " |");

response = getResponse(150, true);
console.log("| 3 | 150 | true | This is not possible, an error has occurred. | " + response + " |");

```








####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
#




# EJERCICIO 4: test: first 3 UT's with autoverification (#4) -----------------------------------------------

- Manually verifying the outputs of the tests does not generally scale well to lot's of tests or to repeat tests often (even if the tests are executed automatically for us).

- But we are programmers! Let's verify automatically that the expected output is the actual output.

- Change your code so that the *output table* is something like this, *adding* a field *and* making *two* of them *conditional*:

    ```text
    | testNum | Pass/Fail | score | machineActive | [expectedResponse] | [response] |
    |-|-|-|-|-|-|
    | 1 | Pass | 75 | false |
    | 2 | Pass | 75 | true |
    | 3 | Pass | 150 | true |

    Fails: 0
    ```

- That is:
    - The header has a *new field* in the second place that indicates if the test *passes/fails*.

    - Note: we place this field near the left (reading direction), since it summarizes the most important information for that test.

    - **Warning**: the second line has also an *extra* `|-|` for this extra field.

    - For each test:
        - *If* the expected response (output) *matches* exactly the actual one, the second field will be *"Pass"*.

        - *If not*, it will be *"Fail"*.

        - The *expectedResponse* and *response* are *ommited when* it *passes* (reduce visual clutter). They are shown when the test fails, to show the problem and helping on debugging.

    - Finally, after all the tests, and after a blank line, we log as *summary* the number of failed tests:

        - String *"Fails: "*, followed by that number (0 in this example).



- Again, imagine that the implementation of `getResponse()`:

    - Has forgotten to use the parameter that indicates if the machine is active.

    - Has forgotten to check for values exceeding 100.

    In this case, with the previous 3 tests applied to that implementation, we should get this console output:

  ```text
  | testNum | Pass/Fail | score | machineActive | [expectedResponse] | [response] |
  |-|-|-|-|-|-|
  | 1 | Fail | 75 | false | Please switch the machine on. | That's a great score, you really know your stuff. |
  | 2 | Pass | 75 | true
  | 3 | Fail | 150 | true | This is not possible, an error has occurred. | What an amazing score! Did you cheat? Are you for real? |

  Fails: 2
  ```

- Load the `uts.html`:
    - Verify that the log output is as expected (all Pass, Fails: 0).

    - Temporarily change `getResponse()` to simulate errors (e.g.: at the return of the function, return always "hello"), to double check that your UT code works as expected also when the tests fail. Rollback then your `getResponse()` code as it was (Fails: 0).



- Da la salida esperada: 

    | testNum | Pass/Fail | score | machineActive | [expectedResponse] | [response] |
    |-|-|-|-|-|-|
    | 1 | Pass | 75 | false |
    | 2 | Pass | 75 | true
    | 3 | Pass | 150 | true
    
    Fails: 0

    - Por ello lo marco aquí como hecho. _____________________________________________________ HECHO


- Ahora debería modificarlo para que genere errores, pero voy justo de tiempo, lo obvio por ahora. 

    - Lo marcaré aquí cuando lo haya hecho. _____________________________________________________


- *Commit* with the title of this step: `test: first 3 UT's with autoverification (#4)`

    - Ya lo he hecho. _____________________________________________________________________ HECHO




## Código de *uts.js* ---------------------------------------------------------------------------------

```js

console.log("| testNum | Pass/Fail | score | machineActive | [expectedResponse] | [response] |");
console.log("|-|-|-|-|-|-|");

let fails = 0;
let response;
let expectedResponse;
let testResult;

response = getResponse(75, false);
expectedResponse = "Please switch the machine on.";

if (response === expectedResponse) {
    testResult = "Pass";
} else {
    testResult = "Fail";
    fails++;
}

if (testResult === "Pass") {
    console.log("| 1 | " + testResult + " | 75 | false |");
} else {
    console.log("| 1 | " + testResult + " | 75 | false | " + expectedResponse + " | " + response + " |");
}

response = getResponse(75, true);
expectedResponse = "That's a great score, you really know your stuff.";

if (response === expectedResponse) {
    testResult = "Pass";
} else {
    testResult = "Fail";
    fails++;
}

if (testResult === "Pass") {
    console.log("| 2 | " + testResult + " | 75 | true");
} else {
    console.log("| 2 | " + testResult + " | 75 | true | " + expectedResponse + " | " + response + " |");
}

response = getResponse(150, true);
expectedResponse = "This is not possible, an error has occurred.";

if (response === expectedResponse) {
    testResult = "Pass";
} else {
    testResult = "Fail";
    fails++;
}

if (testResult === "Pass") {
    console.log("| 3 | " + testResult + " | 150 | true");
} else {
    console.log("| 3 | " + testResult + " | 150 | true | " + expectedResponse + " | " + response + " |");
}

console.log("");
console.log("Fails: " + fails);


```





####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
#





# EJERCICIO 5: test: complete autoverified UT's. Fails: X (#5) -----------------------------------------

## Refactorizar los 3 tests -----------------------------------------------------------------------------------

- Al inicio del enunciado se me da la siguiente indicación: 

    - Now that you are increasing the number of tests, do not hesitate to *refactor* your `uts()` implementation so that it is more mantainable:      
        
        1. reduce repeated code (using functions, variables, arrays, loops, etc, when pertinent). 
        
        2. If you are doing so (because now you realize that your #4 implementation could and should be improved for expandability), you can do an intermediate commit with still only the 3 UT's, but refactored for expansion. It will be titled:

        `"test: first 3 UT's with autoverification, more expandable (#4.1)"`


- Voy a usar arrays para eliminar el código repetitivo (hay código de las comprobaciones de los tests que se repite). 

    - Puedo usar arrays porque el capítulo de arrays ya nos lo mandó leer (así que ya está entre las herramientas que estamos autorizados a utilizar). 


- Aclaraciones sobre el código de uts.js elaborado: ------------------------------------------------------------------------------

    - Basicamente se trata de coger las 3 UT's y separarlas por columnas: 1 array para cada columna. -> es decir: agrupar los datos ya existentes en forma de arrays para así poder recorrerlos en bucle for y reducir el código boilerplate (=código repetido). 

        - Si respeto el orden de valores, luego, con un bucle for podré ir sacando los valores para ir montándolo en la salida por pantalla. 

        - Si lo comparas con la versión anterior de uts.js el código es mucho más agradable de mirar: es mucho más claro, se entiende en seguida que hace cada cosa. 

            - En la versión anterior el código tenía un montón de if else (idénticos pero repetidos). 
            
            - En la versión actual solo hay 2 if-else. La clave está en que estos 2 if-else están dentro del for que va tomando los valores de los arrays y realizando las comprobaciones. 





- Código de *uts.js* elaborado: ------------------------------------------------------------------------------


```js

console.log("| testNum | Pass/Fail | score | machineActive | [expectedResponse] | [response] |");
console.log("|-|-|-|-|-|-|");

let scores = [75, 75, 150];

let machineStates = [false, true, true];

let expectedResponses = [
    "Please switch the machine on.",
    "That's a great score, you really know your stuff.",
    "This is not possible, an error has occurred."
];

let fails = 0;
let response;
let expectedResponse;
let testResult;

for (let i = 0; i < scores.length; i++) {
    response = getResponse(scores[i], machineStates[i]);
    expectedResponse = expectedResponses[i];

    if (response === expectedResponse) {
        testResult = "Pass";
    } else {
        testResult = "Fail";
        fails++;
    }

    if (testResult === "Pass") {
        console.log("| " + (i + 1) + " | " + testResult + " | " + scores[i] + " | " + machineStates[i] + " |");
    } else {
        console.log("| " + (i + 1) + " | " + testResult + " | " + scores[i] + " | " + machineStates[i] + " | " + expectedResponse + " | " + response + " |");
    }
}

console.log("");
console.log("Fails: " + fails);

```



- Lo abro en el navegador para comprobar que funciona (tecla F12 para ver la consola). 

    - Lo indico aquí cuando lo haya hecho. ____________________________________________________________ HECHO.



- Recuerda: el commit debe ser este: 

    - Now that you are increasing the number of tests, do not hesitate to *refactor* your `uts()` implementation so that it is more mantainable:      
            
        1. reduce repeated code (using functions, variables, arrays, loops, etc, when pertinent). 
        
        2. If you are doing so (because now you realize that your #4 implementation could and should be improved for expandability), you can do an intermediate commit with still only the 3 UT's, but refactored for expansion. It will be titled:

        `"test: first 3 UT's with autoverification, more expandable (#4.1)"`


    - Lo indico aquí cuando lo haya hecho. ____________________________________________________________ HECHO



    





## Valores que quiero testear ------------------------------------------------------------------

- Recuerda que los rangos son estos: 

    1. score < 0 || score > 100

    2. score <= 19

    3. score <= 39

    4. score <= 69

    5. score <= 89

    6. score <= 100



- Recuerda que estos son los mensajes que deben salir en función del score:

    - Inside the first `if...else`, you need to *nest another* `if...else` that puts *appropriate messages* into the `response` variable depending on what the value of score is — if the machine is turned on. The different conditional tests (and resulting *responses*) are as follows:

        - Score of less than 0 or more than 100 — *"This is not possible, an error has occurred."*

        - Score of 0 to 19 — *"That was a terrible score — total fail!"*

        - Score of 20 to 39 — *"You know some things, but it\\'s a pretty bad score. Needs improvement."*

        - Score of 40 to 69 — *"You did a passable job, not bad!"*

        - Score of 70 to 89 — *"That\\'s a great score, you really know your stuff."*

        - Score of 90 to 100 — *"What an amazing score! Did you cheat? Are you for real?"*




Caso  score       machineActive  Qué compruebo
----  ----------  -------------  ----------------------------------
1     75          false          Máquina apagada
2     75          true           Rango 70–89
3     150         true           Puntuación superior a 100
4     -1          true           Puntuación inferior a 0
5     0           true           Límite inferior del rango 0-19
6     19          true           Límite superior del rango 0-19 
7     20          true           Inicio del rango 20-39
8     39          true           Límite superior del rango 20-39
9     40          true           Inicio del rango 40-69
10    69          true           Límite superior del rango 40-69
11    70          true           Inicio del rango 70–89
12    89          true           Límite superior del rango 70–89
13    90          true           Inicio del rango 90-100
14    100         true           Límite del rango 90-100
15    101         true           Primer valor superior a 100






### "crazy programmer" --------------------------------------------------------------------------

- El enunciado nos pide imaginar que cualquier programador podría llamar a la función ("called by any crazy programmer"), conviene probar entradas como null, cadenas de texto o valores decimales. 

    - Así podremos descubrir si la función gestiona correctamente datos que no sean puntuaciones enteras habituales.

    - Pego aquí el extracto del enunciado en el que se pide eso: 

        - When *designing* the *test use cases*, imagine in a first phase that the score (input parameter for the function), in production is obtained directly from the user from a *call* to the *function* `prompt()`). 

            - On the other hand, the *state* of the *machine* is known (obtained) from *inside our code*.

            - Then, you can reduce your assumptions, and imagine that it can be *called by any crazy programmer* (possibly yourself in two weeks in the middle of the night after 24h without sleeping and 2 weeks of intense work).

                - Lo que quiere decir con esto es que probemos valores raros (strings y demás valores sin sentido que puedan ser introducidos por un "crazy programmer").


- Atendiendo a eso hay que actualizar la tabla de valores que quiero testear teniendo en cuenta lo del "crazy programmer". 




Caso  score       machineActive  Qué compruebo
----  ----------  -------------  ----------------------------------
1     75          false          Máquina apagada
2     75          true           Rango 70–89
3     150         true           Puntuación superior a 100
4     -1          true           Puntuación inferior a 0
5     0           true           Límite inferior del rango 0-19
6     19          true           Límite superior del rango 0-19
7     20          true           Inicio del rango 20-39
8     39          true           Límite superior del rango 20-39
9     40          true           Inicio del rango 40-69
10    69          true           Límite superior del rango 40-69
11    70          true           Inicio del rango 70-89
12    89          true           Límite superior del rango 70-89
13    90          true           Inicio del rango 90-100
14    100         true           Límite del rango 90-100
15    101         true           Primer valor superior a 100
16    "75"        true           Cadena de texto con una puntuación numérica
17    "hola"      true           Cadena de texto que no representa un número
18    NaN         true           Valor numérico no válido
19    undefined   true           Valor no definido
20    null        true           Valor nulo
21    true        true           Valor booleano en lugar de una puntuación
22    75.5        true           Puntuación decimal


- Nota: los casos 16–22 son los valores adicionales del "crazy programmer". Los resultados que esperamos para ellos son hipótesis que comprobaremos con los tests; si alguno falla, no corregiremos main.js hasta el ejercicio 6.








## Aclaración sobre los valores esperados de los casos de "crazy programmer" ----------------------------------------

JavaScript realiza conversiones de tipos al comparar determinados valores.

- Por ejemplo:
    - *null* <= 19 devuelve true.
        - En js es equivalente a *0* <= 19.

    - *true* <= 19 también devuelve true.
        - En las comparaciones numéricas, JavaScript convierte los valores booleanos así:
            - true = *1*
            - false = *0*

    - *"hola"* <= 19 devuelve false.
        - Aquí el valor es una cadena de texto. JavaScript intenta convertirla a un número para realizar la comparación. Pero "hola" no representa un número válido. Su conversión numérica produce *NaN* (Not a Number).
            - ¿Y pq *NaN* <= 19 da false? 
                - NaN representa un resultado que no es un número válido. Una particularidad de JavaScript es que las comparaciones numéricas con NaN devuelven false, tanto si intentamos comprobar si es menor como si es mayor.

    - *NaN* <= 19 devuelve false.
        - NaN representa un resultado que no es un número válido. Una particularidad de JavaScript es que las comparaciones numéricas con NaN devuelven *false*, tanto si intentamos comprobar si es menor como si es mayor.

    - *undefined* <= 19 devuelve false.
        - En una comparación numérica, JavaScript convierte undefined en NaN.
            - *NaN* representa un resultado que no es un número válido. Una particularidad de JavaScript es que las comparaciones numéricas con NaN devuelven false, tanto si intentamos comprobar si es menor como si es mayor.


Por eso los dos primeros valores numéricos disfrazados de tipos distintos (null y true) entran en el primer intervalo, mientras que los otros tres no llegan a ninguna condición (*dan false en todas las comparaciones y por lo tanto no llegan a ninguna condición*) y la variable response permanece en undefined.








## ENUNCIADO CON ANOTACIONES ---------------------------------------------------------------------------------

- Now that we have made 3 unit tests (less than nothing), let's make *more UT's*: we try to cover as much as possible the different cases we may have.

- Now that you are increasing the number of tests, do not hesitate to *refactor* your `uts()` implementation so that it is more mantainable:      
    
    1. reduce repeated code (using functions, variables, arrays, loops, etc, when pertinent). 
    
    2. If you are doing so (because now you realize that your #4 implementation could and should be improved for expandability), you can do an intermediate commit with still only the 3 UT's, but refactored for expansion. It will be titled:

    `"test: first 3 UT's with autoverification, more expandable (#4.1)"`


- When *designing* the *test use cases*, imagine in a first phase that the score (input parameter for the function), in production is obtained directly from the user from a *call* to the *function* `prompt()`). 

    - On the other hand, the *state* of the *machine* is known (obtained) from *inside our code*.

    - Then, you can reduce your assumptions, and imagine that it can be *called by any crazy programmer* (possibly yourself in two weeks in the middle of the night after 24h without sleeping and 2 weeks of intense work).

        - Lo que quiere decir con esto es que probemos valores raros (strings y demás valores sin sentido que puedan ser introducidos por un "crazy programmer").


- *Do not fix here any bug*, this is a separate step.


- Note: *if NONE of your UT's fail*, *think twice before commiting !!!!!!!!!!!!!!!!!* if you thought enough your UT's.


- Commit with the title of this step, substituting "X" with the number of fails:

    `test: complete autoverified UT's. Fails: ... (#5)`



- Ya he realizado todos los pasos del enunciado de este ejercicio. _____________________________________________ HECHO








## BORRADOR DEL FINAL DEL EJ 5 (de *uts.js*) ------------------------------------------------------------------------------

```js
console.log("| testNum | Pass/Fail | score | machineActive | [expectedResponse] | [response] |");
console.log("|-|-|-|-|-|-|");

let scores = [
    75, 75, 150, -1, 0,
    19, 20, 39, 40, 69,
    70, 89, 90, 100, 101,
    "75", "hola", NaN, undefined, null, true, 75.5
];

let machineStates = [
    false, true, true, true, true,
    true, true, true, true, true,
    true, true, true, true, true,
    true, true, true, true, true, true, true
];

let expectedResponses = [
    "Please switch the machine on.",
    "That's a great score, you really know your stuff.",
    "This is not possible, an error has occurred.",
    "This is not possible, an error has occurred.",
    "That was a terrible score — total fail!",
    "That was a terrible score — total fail!",
    "You know some things, but it's a pretty bad score. Needs improvement.",
    "You know some things, but it's a pretty bad score. Needs improvement.",
    "You did a passable job, not bad!",
    "You did a passable job, not bad!",
    "That's a great score, you really know your stuff.",
    "That's a great score, you really know your stuff.",
    "What an amazing score! Did you cheat? Are you for real?",
    "What an amazing score! Did you cheat? Are you for real?",
    "This is not possible, an error has occurred.",
    "That's a great score, you really know your stuff.",
    "This is not possible, an error has occurred.",
    "This is not possible, an error has occurred.",
    "This is not possible, an error has occurred.",
    "This is not possible, an error has occurred.",
    "This is not possible, an error has occurred.",
    "That's a great score, you really know your stuff."
];

let fails = 0;
let response;
let expectedResponse;
let testResult;

for (let i = 0; i < scores.length; i++) {
    response = getResponse(scores[i], machineStates[i]);
    expectedResponse = expectedResponses[i];

    if (response === expectedResponse) {
        testResult = "Pass";
    } else {
        testResult = "Fail";
        fails++;
    }

    if (testResult === "Pass") {
        console.log("| " + (i + 1) + " | " + testResult + " | " + scores[i] + " | " + machineStates[i] + " |");
    } else {
        console.log("| " + (i + 1) + " | " + testResult + " | " + scores[i] + " | " + machineStates[i] + " | " + expectedResponse + " | " + response + " |");
    }
}

console.log("");
console.log("Fails: " + fails);


```


- Ahora *compruebo* que el código funciona usando el *navegador*. 

    - *"Do not fix here any bug*, this is a separate step."

    - "*if NONE of your UT's fail*, *think twice before commiting !!!!!!!!!!!!!!!!!* if you thought enough your UT's."

    - La salida es coherente con el objetivo del ejercicio 5: ampliar las pruebas para descubrir posibles errores, sin corregir todavía ninguno en main.js. La salida obtenida ha sido esta: 

        | testNum | Pass/Fail | score | machineActive | [expectedResponse] | [response] |
        uts.js:2 |-|-|-|-|-|-|
        uts.js:60 | 1 | Pass | 75 | false |
        uts.js:60 | 2 | Pass | 75 | true |
        uts.js:60 | 3 | Pass | 150 | true |
        uts.js:60 | 4 | Pass | -1 | true |
        uts.js:60 | 5 | Pass | 0 | true |
        uts.js:60 | 6 | Pass | 19 | true |
        uts.js:60 | 7 | Pass | 20 | true |
        uts.js:60 | 8 | Pass | 39 | true |
        uts.js:60 | 9 | Pass | 40 | true |
        uts.js:60 | 10 | Pass | 69 | true |
        uts.js:60 | 11 | Pass | 70 | true |
        uts.js:60 | 12 | Pass | 89 | true |
        uts.js:60 | 13 | Pass | 90 | true |
        uts.js:60 | 14 | Pass | 100 | true |
        uts.js:60 | 15 | Pass | 101 | true |
        uts.js:60 | 16 | Pass | 75 | true |
        uts.js:62 | 17 | Fail | hola | true | This is not possible, an error has occurred. | undefined |
        uts.js:62 | 18 | Fail | NaN | true | This is not possible, an error has occurred. | undefined |
        uts.js:62 | 19 | Fail | undefined | true | This is not possible, an error has occurred. | undefined |
        uts.js:62 | 20 | Fail | null | true | This is not possible, an error has occurred. | That was a terrible score — total fail! |
        uts.js:62 | 21 | Fail | true | true | This is not possible, an error has occurred. | That was a terrible score — total fail! |
        uts.js:60 | 22 | Pass | 75.5 | true |
        uts.js:66 
        uts.js:67 Fails: 5


    - Lo indico aquí cuando lo haya hecho. __________________________________________________ HECHO


- Ahora toca hacer el commit. 

    - Commit with the title of this step, substituting "X" with the number of fails:

        test: complete autoverified UT's. Fails: ... (#5)

        - Como hay *5 fails* en mi salida el commit que me corresponde es este: 

            `test: complete autoverified UT's. Fails: 5 (#5)`

    - Lo indico aquí cuando lo haya hecho. ____________________________________________________ HECHO











####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
#







# EJERCICIO 6: fix: pass UT number X (#6)" ---------------------------------------------------------------

- In the probable case that some UT fail in the previous step, we are now fixin them, *in separate commits !!!!!* (conventional commits advice for atomic commits).

- When fixing, do *a fix at a time !!!!!!!!!!!!!!*, and commit independently with messages:

  `fix: pass UT number ... (#6....)` -> indicas la UT que estás resolviendo en ese commit (recuerda que tus UTs están numeradas) (en mi código el número de posición en el array coincide con el número de UT).

  "fix: pass UT number ... (#6.2)"

  ...


- Note: *if a given fix is fixing more than one UT case at once*, instead of for example "number 8", you specify in the title for example `"number 8, 10 and 11"`.


- If "all is already perfect" in your code (ehem, I should see first your UT battery), skip this step.




## fix del UT-17 (score = "hola") ---------------------------------------------------------------------------

### ¿Qué está pasando? ---------------------------------------------------------------------

La UT 17 llama a la función con estos argumentos:

    getResponse("hola", true);


```js
function getResponse(score, machineActive) {
    let response;

    if (machineActive) {
        if (score < 0 || score > 100) {
            response = "This is not possible, an error has occurred.";
        } else if (score <= 19) {
            response = "That was a terrible score — total fail!";
        } else if (score <= 39) {
            response = "You know some things, but it's a pretty bad score. Needs improvement.";
        } else if (score <= 69) {
            response = "You did a passable job, not bad!";
        } else if (score <= 89) {
            response = "That's a great score, you really know your stuff.";
        } else if (score <= 100) {
            response = "What an amazing score! Did you cheat? Are you for real?";
        }
    } else {
        response = "Please switch the machine on.";
    }

    return response;
}

```


- *"hola"* <= 19 devuelve false.
    - Aquí el valor es una cadena de texto. JavaScript intenta convertirla a un número para realizar la comparación. Pero "hola" no representa un número válido. Su conversión numérica produce *NaN* (Not a Number).
        - ¿Y pq *NaN* <= 19 da false? 
            - NaN representa un resultado que no es un número válido. Una particularidad de JavaScript es que las comparaciones numéricas con NaN devuelven false, tanto si intentamos comprobar si es menor como si es mayor.

    - El resultado es que no se cumple ninguna de las condiciones entonces el valor de la variable *"response"* permanece en su valor inicial (=undefined).

        - Sin embargo, la respuesta esperada es:  "This is not possible, an error has occurred."



### Cómo resolverlo ---------------------------------------------------------------------

Lo resuelvo mediante isNaN(...).

```js
if (isNaN(score)) {
    response = "This is not possible, an error has occurred.";
}

```


El código de main.js quedaría así: 

```js
function getResponse(score, machineActive) {
    let response;

    if (machineActive) {
        if (isNaN(score)) {   // isNaN() comprueba si un valor no se puede convertir en un número válido. Recurso consultado para resolver la UT 17: https://www.w3schools.com/jsref/jsref_isnan.asp
            response = "This is not possible, an error has occurred.";
        } else if (score < 0 || score > 100) {
            response = "This is not possible, an error has occurred.";
        } else if (score <= 19) {
            response = "That was a terrible score — total fail!";
        } else if (score <= 39) {
            response = "You know some things, but it's a pretty bad score. Needs improvement.";
        } else if (score <= 69) {
            response = "You did a passable job, not bad!";
        } else if (score <= 89) {
            response = "That's a great score, you really know your stuff.";
        } else if (score <= 100) {
            response = "What an amazing score! Did you cheat? Are you for real?";
        }
    } else {
        response = "Please switch the machine on.";
    }

    return response;
}

```




### Recuerda hacer el commit antes de pasar a la siguiente ---------------------------------------------------------------------

- El formato para estos commit de fixes es este: 

    fix: pass UT number ... (#6....)

- Así que mi commit será este:

    `fix: pass UTs number 17, 18 and 19 (#6.2)`

        - Es #6.2 porque hubo un commit anterior de una solución subóptima que he decidido sustituir. 

- Lo indico aquí cuando lo haya hecho. _________________________________________________________ HECHO







## fix del UT-18 (score = NaN) ---------------------------------------------------------------------------


### ¿Qué está pasando? ---------------------------------------------------------------------

La UT 18 llama a la función con estos argumentos:

    getResponse(NaN, true);

```js
function getResponse(score, machineActive) {
    let response;

    if (machineActive) {
        if (score < 0 || score > 100) {
            response = "This is not possible, an error has occurred.";
        } else if (score <= 19) {
            response = "That was a terrible score — total fail!";
        } else if (score <= 39) {
            response = "You know some things, but it's a pretty bad score. Needs improvement.";
        } else if (score <= 69) {
            response = "You did a passable job, not bad!";
        } else if (score <= 89) {
            response = "That's a great score, you really know your stuff.";
        } else if (score <= 100) {
            response = "What an amazing score! Did you cheat? Are you for real?";
        }
    } else {
        response = "Please switch the machine on.";
    }

    return response;
}

```


- *NaN* <= 19 devuelve false.
    - NaN representa un resultado que no es un número válido. Una particularidad de JavaScript es que las comparaciones numéricas con NaN devuelven *false*, tanto si intentamos comprobar si es menor como si es mayor.


- Por ello ninguna condición de tu función se cumple. En consecuencia, response sigue siendo *"undefined"*.

    - Sin embargo, la respuesta esperada es:  "This is not possible, an error has occurred."





### Cómo resolverlo ---------------------------------------------------------------------

Ya lo he resuelto al resolver la UT 17. 





### Recuerda hacer el commit antes de pasar a la siguiente ----------------------------------------------------

Ya lo he resuelto al resolver la UT 17. 





## fix del UT-19 (score = undefined) ---------------------------------------------------------------------------



### ¿Qué está pasando? -----------------------------------------------------------------------------------------

La UT 19 llama a la función con estos argumentos:

    getResponse(undefined, true);

```js
function getResponse(score, machineActive) {
    let response;

    if (machineActive) {
        if (score < 0 || score > 100) {
            response = "This is not possible, an error has occurred.";
        } else if (score <= 19) {
            response = "That was a terrible score — total fail!";
        } else if (score <= 39) {
            response = "You know some things, but it's a pretty bad score. Needs improvement.";
        } else if (score <= 69) {
            response = "You did a passable job, not bad!";
        } else if (score <= 89) {
            response = "That's a great score, you really know your stuff.";
        } else if (score <= 100) {
            response = "What an amazing score! Did you cheat? Are you for real?";
        }
    } else {
        response = "Please switch the machine on.";
    }

    return response;
}

```


- *undefined* <= 19 devuelve false.
    - En una comparación numérica, JavaScript convierte undefined en NaN.
        - *NaN* representa un resultado que no es un número válido. Una particularidad de JavaScript es que las comparaciones numéricas con NaN devuelven *false*, tanto si intentamos comprobar si es menor como si es mayor.



- Por ello ninguna condición de tu función se cumple. En consecuencia, response sigue siendo *"undefined"*.

    - Sin embargo, la respuesta esperada es:  "This is not possible, an error has occurred."






### Cómo resolverlo -----------------------------------------------------------------------------------------

Ya lo he resuelto al resolver la UT 17. 






### Recuerda hacer el commit antes de pasar a la siguiente -----------------------------------------------------

Ya lo he resuelto al resolver la UT 17. 







## fix del UT-20 (score = null) ---------------------------------------------------------------------------

### ¿Qué está pasando? ---------------------------------------------------------------------

La UT 20 llama a la función con estos argumentos:

    getResponse(null, true);

```js
function getResponse(score, machineActive) {
    let response;

    if (machineActive) {
        if (score < 0 || score > 100) {
            response = "This is not possible, an error has occurred.";
        } else if (score <= 19) {
            response = "That was a terrible score — total fail!";
        } else if (score <= 39) {
            response = "You know some things, but it's a pretty bad score. Needs improvement.";
        } else if (score <= 69) {
            response = "You did a passable job, not bad!";
        } else if (score <= 89) {
            response = "That's a great score, you really know your stuff.";
        } else if (score <= 100) {
            response = "What an amazing score! Did you cheat? Are you for real?";
        }
    } else {
        response = "Please switch the machine on.";
    }

    return response;
}

```

- *null* <= 19 devuelve true.
    - Porque en js es equivalente a *0* <= 19.


- Por ello la condición del primer else if se cumple y el valor asignado a response es: "That was a terrible score — total fail!"

    - Sin embargo, la respuesta esperada es:  "This is not possible, an error has occurred."




### Cómo resolverlo ---------------------------------------------------------------------

Mediante if (score === null):

```js
if (score === null) {
            response = "This is not possible, an error has occurred.";
}

```

El código de main.js quedaría así: 

```js

function getResponse(score, machineActive) {
    let response;

    if (machineActive) {
        if (isNaN(score)) {  // isNaN() comprueba si un valor no se puede convertir en un número válido. Recurso consultado para resolver la UT 17: https://www.w3schools.com/jsref/jsref_isnan.asp        
            response = "This is not possible, an error has occurred.";
        } else if (score === null) {
            response = "This is not possible, an error has occurred.";
        } else if (score < 0 || score > 100) {
            response = "This is not possible, an error has occurred.";
        } else if (score <= 19) {
            response = "That was a terrible score — total fail!";
        } else if (score <= 39) {
            response = "You know some things, but it's a pretty bad score. Needs improvement.";
        } else if (score <= 69) {
            response = "You did a passable job, not bad!";
        } else if (score <= 89) {
            response = "That's a great score, you really know your stuff.";
        } else if (score <= 100) {
            response = "What an amazing score! Did you cheat? Are you for real?";
        }
    } else {
        response = "Please switch the machine on.";
    }

    return response;
}

```

- Ya he comprobado en el navegador que esto resuelve SOLO la UT 20. _________________________________________ HECHO




### Recuerda hacer el commit antes de pasar a la siguiente ---------------------------------------------------

- El formato para estos commit de fixes es este: 

    fix: pass UT number ... (#6....)

- Así que mi commit será este:

    `fix: pass UT number 20 (#6.3)`


- Lo indico aquí cuando lo haya hecho. _________________________________________________________ HECHO






## fix del UT-21 (score = true) ---------------------------------------------------------------------------

### ¿Qué está pasando? ---------------------------------------------------------------------

La UT 21 llama a la función con estos argumentos:

    getResponse(true, true);

```js
function getResponse(score, machineActive) {
    let response;

    if (machineActive) {
        if (score < 0 || score > 100) {
            response = "This is not possible, an error has occurred.";
        } else if (score <= 19) {
            response = "That was a terrible score — total fail!";
        } else if (score <= 39) {
            response = "You know some things, but it's a pretty bad score. Needs improvement.";
        } else if (score <= 69) {
            response = "You did a passable job, not bad!";
        } else if (score <= 89) {
            response = "That's a great score, you really know your stuff.";
        } else if (score <= 100) {
            response = "What an amazing score! Did you cheat? Are you for real?";
        }
    } else {
        response = "Please switch the machine on.";
    }

    return response;
}

```

- *true* <= 19 devuelve true.
    - En las comparaciones numéricas, JavaScript convierte los valores booleanos así:
        - true = *1*
        - false = *0*


- Por ello la condición del primer else if se cumple y el valor asignado a response es: "That was a terrible score — total fail!"

    - Sin embargo, la respuesta esperada es:  "This is not possible, an error has occurred."






### Cómo resolverlo ---------------------------------------------------------------------

Con if (score === true).

El código que añado es este: 

```js
if (score === true) {
    response = "This is not possible, an error has occurred.";
}

```

Entonces main.js quedaría así: 

```js
function getResponse(score, machineActive) {
    let response;

    if (machineActive) {
        if (score === true) {
            response = "This is not possible, an error has occurred.";
        } else if (score === null) {
            response = "This is not possible, an error has occurred.";
        } else if (isNaN(score)) { // isNaN() comprueba si un valor no se puede convertir en un número válido. Recurso consultado para resolver las UT 17, 18 y 19: https://www.w3schools.com/jsref/jsref_isnan.asp
            response = "This is not possible, an error has occurred.";
        } else if (score < 0 || score > 100) {
            response = "This is not possible, an error has occurred.";
        } else if (score <= 19) {
            response = "That was a terrible score — total fail!";
        } else if (score <= 39) {
            response = "You know some things, but it's a pretty bad score. Needs improvement.";
        } else if (score <= 69) {
            response = "You did a passable job, not bad!";
        } else if (score <= 89) {
            response = "That's a great score, you really know your stuff.";
        } else if (score <= 100) {
            response = "What an amazing score! Did you cheat? Are you for real?";
        }
    } else {
        response = "Please switch the machine on.";
    }

    return response;
}

```


- Ya he comprobado en el navegador que efectivamente esto resuelve la UT 21. _________________________________ HECHO

    - Ya no hay ningún fail. 





### Recuerda hacer el commit antes de pasar a la siguiente  -------------------------------------------------

- El formato para estos commit de fixes es este: 

    fix: pass UT number ... (#6....)

- Así que mi commit será este:

    `fix: pass UT number 21 (#6.4)`


- Lo indico aquí cuando lo haya hecho. _________________________________________________________ HECHO







####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
#




# EJERCICIO 7: refactor: use ternary for score in getResponse (#7) ------------------------------------------------

- Now that we have done this work for a complete UT battery, let's further benefit from it. Imagine that you want to refactor the `getResponse()` implementation so that it uses ternary operators *when checking the score*, instead of a chain of if/elseifs.

- Check with `uts.html` that you are not breaking anything.

- Commit with the title of this step.

    `refactor: use ternary for score in getResponse (#7)`


## Teoria previa -----------------------------------------------------------------

- Un operador ternario permite elegir entre dos resultados según una condición:

    *_ condition ? valueIfTrue : valueIfFalse; _*

- La clave de este ejercicio es esta: los operadores ternarios sí que se pueden anidar. 




## Código elaborado de *main.js* -------------------------------------------------

```js
function getResponse(score, machineActive) {
    let response;

    if (machineActive) {
        if (score === true) {
            response = "This is not possible, an error has occurred.";
        } else if (score === null) {
            response = "This is not possible, an error has occurred.";
        } else if (isNaN(score)) { // isNaN() comprueba si un valor no se puede convertir en un número válido. Recurso consultado para resolver las UT 17, 18 y 19: https://www.w3schools.com/jsref/jsref_isnan.asp
            response = "This is not possible, an error has occurred.";
        } else {
            response = score < 0 || score > 100
                ? "This is not possible, an error has occurred."
                : score <= 19
                    ? "That was a terrible score — total fail!"
                    : score <= 39
                        ? "You know some things, but it's a pretty bad score. Needs improvement."
                        : score <= 69
                            ? "You did a passable job, not bad!"
                            : score <= 89
                                ? "That's a great score, you really know your stuff."
                                : "What an amazing score! Did you cheat? Are you for real?";
        }
    } else {
        response = "Please switch the machine on.";
    }

    return response;
}

```

- Ya he comprobado usando el navegador que esta refactorización no haya afectado al funcionamiento. ______________ HECHO. 






## Recuerda hacer el commit ------------------------------------------

- Commit with the title of this step.

    `refactor: use ternary for score in getResponse (#7)`

- Lo indico cuando lo haya hecho. ______________________________________________________ HECHO





####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
#




# EJERCICIO 8: refactor: getResponse as a single expression (#8) --------------------------------------------------

## Enunciado -------------------------------------------------------------------------

- We go a step further and use also *ternary* for *checking the machine state*. 

    - The *body* of the `getResponse()` function will be a *single "return"* statement, that has a unique (complex) expression that expands to the expected response (by using combined ternaries).

- Note: it is not clear that this refactoring or the previous are always a good practice for readability. But since we have our UT battery, we can have fun and refactor, play, explore, with the safety net of the regression testing.

- Commit with the title of this step.

    `refactor: getResponse as a single expression (#8)`




## Teoria previa -----------------------------------------------------------------

- Un operador ternario permite elegir entre dos resultados según una condición:

    *_ condition ? valueIfTrue : valueIfFalse; _*

- La clave de este ejercicio es esta: los operadores ternarios sí que se pueden anidar. 





## Código elaborado de *main.js* -------------------------------------------------

- La clave es: al sustituir el if(machineActive) todo el código queda dentro de un operador ternario ya que ese if agrupaba todo lo demás posterior de chequeo del score. 

```js
function getResponse(score, machineActive) {
    return machineActive
        ? (
            score === true || score === null || isNaN(score) || score < 0 || score > 100
                ? "This is not possible, an error has occurred."
                : score <= 19
                    ? "That was a terrible score — total fail!"
                    : score <= 39
                        ? "You know some things, but it's a pretty bad score. Needs improvement."
                        : score <= 69
                            ? "You did a passable job, not bad!"
                            : score <= 89
                                ? "That's a great score, you really know your stuff."
                                : "What an amazing score! Did you cheat? Are you for real?"
        )
        : "Please switch the machine on.";
}

```

- Para enteder este código tienes que ver que "return machineActive" en realidad son dos cosas distintas aunque estén en una misma línea:

    1. return -> es una instrucción independiente que *devolverá el resultado de todos los operadores ternarios anidados*. 

    2. machineActive -> es la condición del 1r operador ternario. 


- Ya he comprobado con el navegador que este refactor no altera el funcionamiento. ____________________ HECHO



## Recuerda hacer el commit -----------------------------------------------------

- Commit with the title of this step.

    `refactor: getResponse as a single expression (#8)`





####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
#






# EJERCICIO 9: refactor: use switch for score in getResponse (#9) -----------------------------------------

## Enunciado --------------------------------------------------------------

- Starting back from code of step #6 or #7, substitute the chain of conditions that *ckeck* the *score* value *with* a `switch` statement...

- Note: Don't be surprised if you don't imagine how to do this. It's normal. After giving it a thought, don't hesitate to Google for some "inspiration" for doing this implementation. It requires a hacky use of `switch()`, that for sure is a **really bad** practice. But, hey! We are having fun here, with our safety net. Our bad implementation is encapsulated in a function... if it passes our test battery, it is at least doing its job.

- Commit with the title of this step.

    `refactor: use switch for score in getResponse (#9)`





## Código elaborado de *main.js* --------------------------------------------------------------

- La clave aquí es entender que este es un uso chapucero de switch porque *en lugar de indicarle una variable en base al valor de la cual* se determinan los casos, simplemente le dices "true". 

```js
function getResponse(score, machineActive) {
    let response;

    if (machineActive) {
        switch (true) {
            case score === true:
                response = "This is not possible, an error has occurred.";
                break;
            case score === null:
                response = "This is not possible, an error has occurred.";
                break;
            case isNaN(score): // isNaN() comprueba si un valor no se puede convertir en un número válido. Recurso consultado: https://www.w3schools.com/jsref/jsref_isnan.asp
                response = "This is not possible, an error has occurred.";
                break;
            case score < 0 || score > 100:
                response = "This is not possible, an error has occurred.";
                break;
            case score <= 19:
                response = "That was a terrible score — total fail!";
                break;
            case score <= 39:
                response = "You know some things, but it's a pretty bad score. Needs improvement.";
                break;
            case score <= 69:
                response = "You did a passable job, not bad!";
                break;
            case score <= 89:
                response = "That's a great score, you really know your stuff.";
                break;
            default:
                response = "What an amazing score! Did you cheat? Are you for real?";
        }
    } else {
        response = "Please switch the machine on.";
    }

    return response;
}


```


- Ya he comprobado con el navegador que este refactor no altera el funcionamiento. _________________________ HECHO





## Acuérdate de hacer el commit --------------------------------------------------------------

- Commit with the title of this step.

    `refactor: use switch for score in getResponse (#9)`

- Ya lo he hecho. ___________________________________________________________________________________ HECHO




####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
#





# EJERCICIO 10: revert: "refactor: use switch for score in getResponse (#9)" (#10) ------------------------------

## Enunciado --------------------------------------------------------------

- We don't want to leave this ugly hacked switch as our last code for future generations, so we decide to revert (rollback) to the previous code. Do it.

- *Commit* with the title of this step.

    `revert: "refactor: use switch for score in getResponse (#9)" (#10)`

    - Note: when reverting, since it may be quirurgical of a single commit in the past, we usually mention in the title the title and/or hash of the reverted particular commit, and not the global status to where we are going (since the previous commit to that reverted one may be unrelated to it).



## Procedimiento --------------------------------------------------------------

```bash

# Nota: abrir Git Bash dentro de la carpeta del repositorio es una buena opción. Así evito las particularidades de las comillas en PowerShell y puedo trabajar con una sintaxis más habitual para Git.
    # Me he visto obligado a ello ya que las dobles comillas necesarias en uno de los pasos daban muchos errores. 

# 1º.- click derecho dentro de la carpeta ut-refactor en el explorador de archivos de windows -> "Mostrar más opciones" -> "Open Git Bash here".

# 2º.- Segundo paso: 
git revert --no-commit HEAD

# 3º.- Tercer paso: aquí es cuando abandoné la terminal de VS Code y me pasé a GitBash para esquivar el error generado por las dobles comillas en powershell. 
git revert --continue


# 4º.- Cuarto paso: 
    # Escribe gg sin pulsar Enter. -> así Vim te lleva a la primera línea. 

# 5º.- Quinto paso:
    # Pulsa dd para borrar esa línea completa.

# 6º.- Sexto paso:
    # Pulsa i para entrar en modo edición.

# 7º.- Séptimo paso: 
    # Escribe el texto del commit: 
revert: "refactor: use switch for score in getResponse (#9)" (#10)

# 8º.- Octavo paso: 
    # Pulsa Esc para salir del modo edición. 

# 9º.- Noveno paso:
    # Escribe :wq y pulsa Enter para guardar el mensaje y finalizar el commit.

# 10º.- Décimo paso:
    # Ves a la pestaña sources de VS Code y comprueba que el último commit que todavía no ha sido pusheado tiene el texto deseado (título del commit).

# 11º.- Décimo primer paso: 
    # Haz el Push. 

# 12º.- Décimo segundo paso: 
    # Abre main.js y comprueba que efectivamente se trata de la versión anterior al paso "#9". 

```


- Ya lo he hecho y he comprobado que ahora efectivamente main.js es la versión anterior al paso "#9". _________ HECHO








# Deliver ________________________________________________________________________________________

The file structure at the end of this task is:

```text
ut-refactor/
  .git/
  conditionals2.html
  scripts/get-response/
    main.js
    uts.js
    uts.html
```

- Put that folder **directly under the root** of a ZIP file and deliver it.
- Same indications that for previous tasks. In summary, the file name
  has this pattern:

  `dwec1p3.first-surname.name.zip`

  `dwec1p3.perez.eden.zip`

- Put **only** the requested files. Comment internally or add a readme.md in
  the root for more.







