


# ESTE SERÁ NUESTRO LIBRO DE TEXTO _________________________________________________________________

1) "Este es el libro de texto que usaremos en clase"

    1. Es el archivo *"jsinfo.en.html"* que encontrarás dentro de esa carpeta. 

    2. Realmente no es un libro convencional: es una web. 



## USAREMOS LA VERSIÓN EN INGLÉS ----------------------------------------------------------------

1) El libro ha sido traducido a muchos idiomas, pero el quiere que usemos la versión inglesa porque es el idioma en el que lo escriben los autores originales.

    1. Y por ello es la versión que menos cantidad de errores contiene (porque en las otras se suman los posibles errores de traducción o pérdida de matices al ser traducido).






## USAREMOS LA VERSIÓN OFFLINE QUE ÉL NOS HA DADO -----------------------------------------------------------

1) Dani (profe): "este año no he tenido tiempo de actualizar mis comentarios de acuerdo con la última versión del libro. Así que usaremos la versión offline del libro que yo os he pasado".

    1. Versión que nos ha pasado Dani -> es la *de septiembre de 2025*.

    2. Versión última online -> septiembre de 2026. 


2) ¿Pero si solo es un año de diferencia? ¿Tan distinto será? El caso es que el tiene comentarios que aluden a capítulos y subapartados completos, *en la última versión puede haber cambios en el número de capítulos y en los títulos* que hagan que sus comentarios ya no concuerden con la estructura del libro. 

    1. Por ello usamos la versión offline y listo. 



######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
#





# METODOLOGÍA DE USO ___________________________________________________________________________

1) Metodología de uso:

    1. Abres con el explorador de archivos la carpeta que contiene el archivo *"jsinfo.en.html"* (versión offline indicada por el profesor).

    2. Doble click en el archivo y tu navegador te lo abre.

        1. Esta es una versión offline (copia local).




## TRUCO PARA REALIZAR BÚSQUEDAS EN EL LIBRO --------------------------------------------------

1) Vete a la pagina donde esta toda su lista de contenidos

    1. *ctr + F* -> escribe la palabra clave

    2. Se te resalatará en todos los apartados en los que aparezca. 

    3. Esto es mucho mejor que usar el buscador de la propia web -> pq eso es un caos, te resalta todas las apariciones de la palabra en todos los temas y son demasiadas. 

        1. Este truco nos lo ha dado Dani en clase. 







# VIGENTE ________________________________________________________________________________________

1) Para juzgar si los capítulos que he copiado aquí son vigentes o no ten en cuenta lo siguiente: son capítulos extraídos de la versión offline del libro correspondiente a su publicación web de septiembre de 2025 (no 2026, sino 2025).










######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
#




# 1.- AN INTRODUCTION _________________________________________________________________________________________



## 1.1.- AN INTRODUCTION TO JavaScript ______________________________________________________________________

1) Este es uno de los apartados del libro offline que nos pasó Dani (profe). 

2) Let’s see what’s so special about JavaScript, what we can achieve with it, and what other technologies play well with it.



### WHAT IS JavaScript? -----------------------------------------------------------------------------

JavaScript was initially created to “make web pages *alive*”.

The programs in this language are called *scripts*. They *can be* written right *in* a web page’s *HTML* and run automatically as the page loads.

Scripts are provided and *executed as plain text*. *They don’t need* special preparation or *compilation to run*.

In this aspect, JavaScript is very different from another language called Java.


Today, JavaScript can *execute* not only in the *browser*, but also on the *server*, or actually on any device that has a special program called the *JavaScript engine*.

The *browser* has an embedded engine sometimes called a *“JavaScript virtual machine”*.

- Different *engines* have different *“codenames”*. For example:
    1. *V8* – in Chrome, Opera and Edge.
    2. *SpiderMonkey* – in Firefox.
    3. …There are other codenames like “Chakra” for IE, “JavaScriptCore”, “Nitro” and “SquirrelFish” for Safari, etc.
    4. The terms above are good to remember because they are used in developer articles on the internet. We’ll use them too. For instance, if “a feature X is supported by V8”, then it probably works in Chrome, Opera and Edge.



### WHY IS IT CALLED JavaScript? ----------------------------------------------------------------------

When JavaScript was created, it initially had another name: “LiveScript”. But Java was very popular at that time, so it was decided that positioning a new language as a “younger brother” of Java would help.

But as it evolved, JavaScript became a fully independent language with its *own specification* called *ECMAScript*, and now it has no relation to Java at all.




### HOW DO ENGINES WORK? -------------------------------------------------------------------------------

- Engines are complicated. But the basics are easy.

    1. The engine (embedded if it’s a browser) *reads* (*“parses”*) the script.
    
    2. Then it *converts* (*“compiles”*) the script to machine code.
    
    3. And then the machine code *runs*, pretty fast.


- The engine applies optimizations at each step of the process. It even watches the compiled script as it runs, analyzes the data that flows through it, and further optimizes the machine code based on that knowledge.





### WHAT CAN IN-BROWSER JavaScript DO? -----------------------------------------------------------------

Modern JavaScript is a *“safe”* programming language. It does *not* provide low-level access to *memory* or the *CPU*, because it was initially created for browsers which do not require it.

JavaScript’s *capabilities* greatly *depend* on the *environment* it’s running in. For instance, Node.js supports functions that allow JavaScript to read/write arbitrary files, perform network requests, etc.

In-browser JavaScript can do everything related to *webpage manipulation*, interaction with the *user*, and the *webserver*.

- For instance, in-browser JavaScript is able to:
    
    1. Add *new HTML* to the page, change the existing *content*, modify *styles*.
    
    2. *React* to *user* actions, run on mouse clicks, pointer movements, key presses.
    
    3. Send *requests* over the network to remote *servers*, download and *upload* files (so-called *AJAX* and *COMET* technologies).
    
    4. Get and set *cookies*, ask questions to the visitor, show messages.
    
    5. Remember the data on the client-side (*“local storage”*).





### WHAT CAN'T IN-BROWSER JavaScript DO? ----------------------------------------------------------------

- JavaScript’s abilities in the browser are limited to protect the *user’s safety*. The aim is to prevent an evil webpage from accessing private information or harming the user’s data.

- Examples of such *restrictions* include:

    1. JavaScript on a webpage may not *read/write* arbitrary *files* on the hard disk, copy them or *execute* programs. It has no direct access to OS (*operative system*) functions.

        - Modern browsers allow it to work with files, but the access is limited and only provided if the user does certain actions, like *“dropping” a file* into a browser window or selecting it via an <input> *tag*.

        - There are ways to interact with the *camera/microphone* and other devices, but they require a user’s explicit *permission*. So a JavaScript-enabled page may not sneakily enable a web-camera, observe the surroundings and send the information to the NSA.


    2. Different tabs/*windows* generally *do not know about each other*. *Sometimes* they do, for example when one window uses JavaScript to open the other one. But even in this case, JavaScript from one page may not access the other page if they come from different sites (from a different domain, protocol or port).

        - This is called the *“Same Origin Policy”*. To work around that, both pages must agree for data exchange and must contain special JavaScript code that handles it. We’ll cover that in the tutorial.

        - This limitation is, again, for the user’s safety. A page from http://anysite.com which a user has opened must not be able to access another browser tab with the URL http://gmail.com, for example, and steal information from there.


    3. JavaScript can easily communicate over the net to the server where the current page came from. But its ability to *receive data* from other *sites*/domains is crippled. Though possible, it *requires* explicit *agreement* (expressed in HTTP headers) from the remote side. Once again, that’s a safety limitation.



- Such *limitations do not exist* if JavaScript is used outside of the browser, for example on a *server*. Modern browsers also allow plugins/extensions which may ask for extended permissions.







### WHAT MAKES JavaScript UNIQUE? ------------------------------------------------------------------------------

- There are at least three great things about JavaScript:

    1. Full *integration* with *HTML*/CSS.

    2. Simple things are *done simply*.

    3. Supported by all major *browsers* and enabled by default.


- JavaScript is *the only* browser technology that combines these three things.

    - That’s what makes JavaScript unique. That’s why it’s the most widespread tool for *creating browser interfaces*.

- That said, JavaScript can be used to create servers, mobile applications, etc.







### LANGUAJES "OVER" JavaScript ------------------------------------------------------------------------------

- The *syntax* of JavaScript does not suit everyone’s needs. Different people *want different features*.

    - That’s to be expected, because projects and requirements are different for everyone.


So, recently a *plethora of new languages* appeared, which are *transpiled* (converted) *to JavaScript* before they run in the browser.


Modern tools make the transpilation very fast and transparent, actually allowing developers to code in another language and *auto-converting* it “under the hood”.


- Examples of such languages:

    1. *CoffeeScript* is “syntactic sugar” for JavaScript. It introduces shorter syntax, allowing us to write clearer and more precise code. Usually, Ruby devs like it.
    
    2. *TypeScript* is concentrated on adding “strict data typing” to simplify the development and support of complex systems. It is developed by Microsoft.
    
    3. *Flow* also adds data typing, but in a different way. Developed by Facebook.
    
    4. *Dart* is a standalone language that has its own engine that runs in non-browser environments (like mobile apps), but also can be transpiled to JavaScript. Developed by Google.
    
    5. *Brython* is a Python transpiler to JavaScript that enables the writing of applications in pure Python without JavaScript.
    
    6. *Kotlin* is a modern, concise and safe programming language that can target the browser or Node.


- There are more. Of course, even if we use one of these transpiled languages, we should also know JavaScript to really understand what we’re doing.

- De ahí el título de "languajes over JavaScript" -> lenguajes por encima de JavaScript que son después convertidos (transpiled) a JavaScript antes de ser ejecutados por el navegador. 





### SUMMARY --------------------------------------------------------------------------------------

- JavaScript was *initially* created as a *browser-only* language, but it is now used in many other environments as well.

- Today, JavaScript has a unique position as the *most widely-adopted browser language*, fully *integrated* with *HTML*/CSS.

- There are many languages that get “transpiled” to JavaScript and provide certain features. It is recommended to take a look at them, at least briefly, after mastering JavaScript.












######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
##







## 1.2.- MANUALS AND SPECIFICATIONS __________________________________________________________________

- This book is a tutorial. It aims to help you gradually learn the language. *But* once you’re familiar with the basics, *you’ll need other resources*.



### SPECIFICATION --------------------------------------------------------------------------------------

The *ECMA*-262 specification contains the most in-depth, detailed and formalized information about JavaScript. It *defines the language*.

But being that formalized, it’s difficult to understand at first. So if you need the *most trustworthy source* of information about the language details, the specification is the right place. But it’s not for everyday use.

A new specification version is released *every year*. Between these releases, the latest specification draft is at https://tc39.es/ecma262/.

To read about new bleeding-edge features, including those that are “almost standard” (so-called “stage 3”), see proposals at https://github.com/tc39/proposals.

Also, if you’re developing for the browser, then there are other specifications covered in the second part of the tutorial.






### MANUALS ------------------------------------------------------------------------------------------------

- *"MDN (Mozilla) JavaScript Reference"* is the *main manual* with examples and other information. 

    - It’s great to get in-depth information about individual language functions, methods etc.


    - You can find it at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference.


- Although, it’s often best to use an *internet search instead*. Just use “MDN [term]” in the query, e.g. https://google.com/search?q=MDN+parseInt to search for the parseInt function.






### COMPATIBILITY TABLES -----------------------------------------------------------------------------

JavaScript is a developing language, *new features* get added *regularly*.

- To see their support among browser-based and other engines, see:

    - https://caniuse.com – per-feature tables of support, e.g. to see which engines support modern cryptography functions: https://caniuse.com/#feat=cryptography.

    - https://kangax.github.io/compat-table – a table with language features and engines that support those or don’t support.


All these resources are useful in *real-life development*, as they contain valuable information about language details, their support, etc.


Please remember them (or this page) for the cases when you need *in-depth information about a particular feature*.











######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
##





## 1.3.- CODE EDITORS _______________________________________________________________________________

A code editor is the place where programmers spend most of their time.

- There are two main types of code editors: 
    - a. IDEs  
    - b. lightweight editors
    
- Many people use one tool of each type.




### IDE -----------------------------------------------------------------------------------------

The term IDE (*Integrated Development Environment*) refers to a powerful editor with many features that usually operates on a “whole project”. As the name suggests, *it’s not just an editor*, but a full-scale “development environment”.

An IDE loads the project (which can be many files), allows navigation between files, provides *autocompletion* based on the whole project (not just the open file), and integrates with a *version management system* (like git), a *testing* environment, and other “project-level” stuff.

- If you haven’t selected an IDE yet, consider the following options:

    1. Visual Studio Code (cross-platform, free).

    2. WebStorm (cross-platform, paid).


- For Windows, there’s also “Visual Studio”, not to be confused with “Visual Studio Code”. “Visual Studio” is a paid and mighty Windows-only editor, well-suited for the .NET platform. It’s also good at JavaScript. There’s also a free version Visual Studio Community.

- Many IDEs are paid, but have a trial period. *Their cost is usually negligible* compared to a qualified developer’s salary, so just choose the best one for you.




### LIGHTWEIGHT EDITORS ----------------------------------------------------------------------------

“Lightweight editors” are not as powerful as IDEs, but they’re *fast, elegant and simple*.

They are mainly used to open and *edit* a file *instantly*.

The main difference between a “lightweight editor” and an “IDE” is that an IDE works on a project-level, so it loads much more data on start, analyzes the project structure if needed and so on. A lightweight editor is much faster if we *need only one file*.

In practice, lightweight editors may have a lot of *plugins* including directory-level *syntax analyzers* and *autocompleters*, so there’s no strict border between a lightweight editor and an IDE.

- There are many options, for instance:

    1. Sublime Text (cross-platform, shareware).
    
    2. Notepad++ (Windows, free).
    
    3. Vim and Emacs are also cool if you know how to use them.






### LET'S NOT ARGUE -------------------------------------------------------------------------

The editors in the lists above are those that either I or my friends whom I consider good developers have been using for a long time and are happy with.

There are other great editors in our big world. Please choose the one you like the most.

The choice of an editor, like any other tool, is individual and depends on your projects, habits, and personal preferences.

- The author’s personal opinion:

    - I’d use Visual Studio Code *if I develop mostly frontend*.

    - Otherwise, if it’s mostly another language/platform and partially frontend, then consider other editors, such as XCode (Mac), Visual Studio (Windows) or Jetbrains family (Webstorm, PHPStorm, RubyMine etc, depending on the language).








######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
##





## 1.4.- DEVELOPER CONSOLE _____________________________________________________________________________

Code is prone to errors. You will quite likely make errors… Oh, what am I talking about? You are absolutely going to make errors, at least if you’re a human, not a robot.

But in the browser, users don’t see errors by default. So, if something goes wrong in the script, we won’t see what’s broken and can’t fix it.

*To see errors* and get a lot of other useful *information* about scripts, *“developer tools”* have been embedded in *browsers*.

Most developers lean towards *Chrome or Firefox* for development because those browsers have the *best developer tools*. Other browsers also provide developer tools, sometimes with special features, but are usually playing “catch-up” to Chrome or Firefox. So most developers have a “favorite” browser and switch to others if a problem is browser-specific.

Developer tools are potent; they have many features. To start, we’ll learn how to open them, look at errors, and run JavaScript commands.



### GOOGLE CHROME --------------------------------------------------------------------------------------------

Open the page *bug.html*.

There’s an error in the JavaScript code on it. It’s hidden from a regular visitor’s eyes, so let’s open developer tools to see it.

Press *F12* or, if you’re on Mac, then Cmd+Opt+J.

The developer tools will open on the *Console* tab by default.

It looks somewhat like this: [imagen presente en el libro web].

- The exact look of developer tools depends on your version of Chrome. It changes from time to time but should be similar.

    1. Here we can see the *red-colored* error *message*. In this case, the script contains an unknown “lalala” command.

    2. On the right, there is a clickable link to the source bug.html:12 with the line number where the error has occurred.


Below the error message, there is a *blue ">" symbol*. It marks a “command line” where we can type JavaScript commands. Press *Enter* to run them.

Now we can see errors, and that’s enough for a start. We’ll come back to developer tools later and cover debugging more in-depth in the *chapter "Debugging in the browser"*.


- Multi-line input

    - Usually, when we put a line of code into the console, and then press Enter, it executes.

    - To insert multiple lines, press Shift+Enter. This way one can enter long fragments of JavaScript code.






### FIREFOX, EDGE AND OTHERS ------------------------------------------------------------------------------

Most other browsers use *F12* to open developer tools.

The look & feel of them *is quite similar*. Once you know how to use one of these tools (you can start with Chrome), *you can easily switch to another*.







### SAFARI -------------------------------------------------------------------------------------------------

Safari (Mac browser, not supported by Windows/Linux) is a little bit special here. We need to enable the “Develop menu” first.

Open Settings and go to the “Advanced” pane. There’s a checkbox at the bottom: [imagen presente en el libro web].

Now *Cmd+Opt+C* can toggle the console. Also, note that the new top menu item named “Develop” has appeared. It has many commands and options.






### SUMMARY ----------------------------------------------------------------------------------------------

Developer tools allow us to see errors, run commands, examine variables, and much more.

They can be opened with F12 for most browsers on Windows. Chrome for Mac needs Cmd+Opt+J, Safari: Cmd+Opt+C (need to enable first).

Now we have the environment ready. In the next section, we’ll get down to JavaScript.





######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
#










# 2.- JAVA SCRIPT FUNDAMENTALS ________________________________________________________________________________


## 2.1.- HELLO, WORLD! ___________________________________________________________________________________

This part of the tutorial is about core JavaScript, the language itself.

But we need a *working environment* to run our scripts and, since this book is online, the *browser* is a good choice. We’ll keep the amount of browser-specific commands (like alert) to a minimum so that you don’t spend time on them if you plan to concentrate on another environment (like Node.js). We’ll focus on JavaScript in the browser in the next part of the tutorial.

So first, let’s see how we *attach a script to a webpage*. For server-side environments (like Node.js), you can execute the script with a command like "node my.js".



### THE "SCRIPT" TAG --------------------------------------------------------------------------------------

JavaScript programs can be *inserted* almost anywhere into an HTML document using the <script> tag.

For instance:

```html

<!-- The "script" tag -->

<!DOCTYPE HTML>
<html>

<body>

  <p>Before the script...</p>

  <script>    
    alert( 'Hello, world!' );
  </script>

  <p>...After the script.</p>

</body>

</html>

```

You can run the example by clicking the “Play” button in the right-top corner of the box above.

The <script> tag contains JavaScript code which is automatically executed when the browser processes the tag.






### MODERN MARKUP --------------------------------------------------------------------------------------------

- The <script> tag: 

    - has a few *attributes* that are rarely used nowadays but can still be found in *old code*:

        - The type attribute: <script type=…>

- The *old* HTML standard, *HTML4*, required a script to have a *type*. 

    - Usually it was type="text/javascript". It’s not required anymore. Also, the modern HTML standard totally changed the meaning of this attribute. Now, it can be used for JavaScript modules. But that’s an advanced topic, we’ll talk about modules in another part of the tutorial.

The language attribute: <script language=…>

This attribute was meant to show the language of the script. This attribute *no longer makes sense* because JavaScript is the *default* language. There is no need to use it.



#### Comments before and after scripts -------------------------------------------------------------------------

In really ancient books and guides, you may find comments inside <script> tags, like this:


```js
<script type="text/javascript"><!--
    ...
//--></script>

```

This trick isn’t used in modern JavaScript. These comments hide JavaScript code from old browsers that didn’t know how to process the <script> tag. Since browsers released in the last 15 years don’t have this issue, this kind of comment can help you identify really old code.





### EXTERNAL SCRIPTS -----------------------------------------------------------------------------------------

If we have a lot of JavaScript code, we can put it into a separate file.

Script files are attached to HTML with the src attribute:

```js

<script src="/path/to/script.js"></script>

```

Here, /path/to/script.js is an absolute path to the script from the site root. One can also provide a relative path from the current page. For instance, src="script.js", just like src="./script.js", would mean a file "script.js" in the current folder.

We can give a full URL as well. For instance:

```js

<script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js"></script>

```


To attach several scripts, use multiple tags:

<script src="/js/script1.js"></script>
<script src="/js/script2.js"></script>



- Please note: 

    As a rule, only the simplest scripts are put into HTML. More complex ones reside in separate files.

    The benefit of a separate file is that the browser will download it and store it in its cache.

    Other pages that reference the same script will take it from the cache instead of downloading it, so the file is actually downloaded only once.

    That reduces traffic and makes pages faster.



- Atention!: 

```js

// If src is set, the script content is ignored.

<script src="file.js">
  alert(1);               // the content is ignored, because src is set
</script>


// in that case we must choose either an external <script src="…"> or a regular <script> with code.

<script src="file.js"></script>
<script>
  alert(1);
</script>

```




### SUMMARY --------------------------------------------------------------------------------------------

- We can use a <script> tag to add JavaScript code to a page.

- The type and language attributes are not required.

- A script in an external file can be inserted with <script src="path/to/script.js"></script>.

There is much more to learn about browser scripts and their interaction with the webpage. But let’s keep in mind that this part of the tutorial is devoted to the JavaScript language, so we shouldn’t distract ourselves with browser-specific implementations of it. We’ll be using the browser as a way to run JavaScript, which is very convenient for online reading, but only one of many.




### EJERCICIOS -----------------------------------------------------------------------------------

#### EJ 1: Show an alert ---------------------------------------------------------------------------------------

Create a page that shows a message “I’m JavaScript!”.

Do it in a sandbox, or on your hard drive, doesn’t matter, just ensure that it works.


```js

<!DOCTYPE html>
<html>
<head>
    <title>JavaScript</title>
</head>

<body>                   
    <script>
        alert("I'm JavaScript!");
    </script>
</body>

</html>



```




#### EJ 2: Show an alert with an external script ---------------------------------------------------------------------------------------

Take the solution of the previous task Show an alert. Modify it by extracting the script content into an external file alert.js, residing in the same folder.

Open the page, ensure that the alert works.


```html

<!DOCTYPE html>
<html>
<head>
    <title>JavaScript</title>
</head>
<body>

    <script src="alert.js"></script>

</body>
</html>

```

```js

alert("I'm JavaScript!");

```









################################################################################################
################################################################################################
################################################################################################
################################################################################################
################################################################################################
################################################################################################
################################################################################################
################################################################################################
################################################################################################
################################################################################################
################################################################################################
################################################################################################
################################################################################################
################################################################################################
################################################################################################
################################################################################################
################################################################################################
################################################################################################
################################################################################################
################################################################################################
################################################################################################
################################################################################################
################################################################################################
################################################################################################
################################################################################################
################################################################################################
################################################################################################
################################################################################################
##



## 2.2.- CODE STRUCTURE ____________________________________________________________________________________


The first thing we’ll study is the building blocks of code.


### STATEMENTS -------------------------------------------------------------------------------------------

Statements are syntax constructs and commands that perform actions.

We’ve already seen a statement, alert('Hello, world!'), which shows the message “Hello, world!”.

We can have as many statements in our code as we want. Statements can be separated with a semicolon.

For example, here we split “Hello World” into two alerts:


```js
alert('Hello'); alert('World');

```

Usually, statements are written on separate lines to make the code more readable:

```js
alert('Hello');
alert('World');

```




### SEMICOLONS --------------------------------------------------------------------------------

Semicolon = punto y coma = ";"

A semicolon may be omitted in most cases when a line break exists.

This would also work:


```js

alert('Hello')  // A semicolon ";" may be omitted in most cases when a line break exists. 
alert('World')  // Here, JavaScript interprets the line break as an “implicit” semicolon.

```

Here, JavaScript interprets the line break as an “implicit” semicolon. This is called an automatic semicolon insertion.

In most cases, a newline implies a semicolon. But “in most cases” does not mean “always”!

There are cases when a newline does not mean a semicolon. For example:


```js
alert(3 +
1
+ 2);

```

The code outputs 6 because JavaScript does not insert semicolons here. It is intuitively obvious that if the line ends with a plus "+", then it is an “incomplete expression”, so a semicolon there would be incorrect. And in this case, that works as intended.


But there are situations where JavaScript “fails” to assume a semicolon where it is really needed.


IMPORTANT: *Errors which occur in such cases are quite hard to find !!!!!!!!!!!!!!!!!!!!!*.



#### Example of an error related with semicolons ------------------------------------------------

If you’re curious to see a concrete example of such an error, check this code out:


```js

alert("Hello");

[1, 2].forEach(alert);


```


No need to think about the meaning of the brackets [] and forEach yet. We’ll study them later. For now, just remember the result of running the code: it shows Hello, then 1, then 2.

Now let’s remove the semicolon after the alert:


```js

alert("Hello")

[1, 2].forEach(alert);


```


The difference compared to the code above is only one character: the semicolon at the end of the first line is gone.

If we run this code, only the first Hello shows (and there’s an error, you may need to open the console to see it). There are no numbers any more.

That’s because JavaScript does not assume a semicolon before square brackets [...]. So, the code in the last example is treated as a single statement.

Here’s how the engine sees it:


```js

alert("Hello")[1, 2].forEach(alert);

```

Looks weird, right? Such merging in this case is just wrong. We need to put a semicolon after alert for the code to work correctly.

This can happen in other situations also.



- CONCLUSIÓN: *We recommend putting semicolons between statements even if they are separated by newlines!!!!!!!!!!!*. 

    - This rule is widely adopted by the community. Let’s note once again – it is possible to leave out semicolons most of the time. But it’s safer – especially for a beginner – to use them.








### COMMENTS -----------------------------------------------------------------------------------------------

As time goes on, programs become more and more complex. It becomes necessary to add comments which describe what the code does and why.

Comments can be put into any place of a script. They don’t affect its execution because the engine simply ignores them.

*One-line comments* start with two forward slash characters `//`.

The rest of the line is a comment. It may occupy a full line of its own or follow a statement.

Like here:

```js

// This comment occupies a line of its own
alert('Hello');

alert('World'); // This comment follows the statement

```

*Multiline comments* start with a forward slash and an asterisk /* and end with an asterisk and a forward slash `*/`.

Like this:

```js
/* An example with two messages.
This is a multiline comment.
*/
alert('Hello');
alert('World');

```


The content of comments is ignored, so if we put code inside `/* … */`, it won’t execute.

Sometimes it can be handy to temporarily disable a part of code:


```js

/* Commenting out the code
alert('Hello');
*/
alert('World');

```


#### USE HOTKEYS! ------------------------------------------------------------------------------------------

In most editors, a line of code can be commented out by pressing the Ctrl+/ hotkey for a single-line comment and something like Ctrl+Shift+/ – for multiline comments (select a piece of code and press the hotkey). For Mac, try Cmd instead of Ctrl and Option instead of Shift.





#### NESTED COMMENTS ARE NOT SUPPORTED! -----------------------------------------------------------------------

There may not be /*...*/ inside another /*...*/.

Such code will die with an error:


Please, don’t hesitate to comment your code.

Comments increase the overall code footprint, but that’s not a problem at all. There are many tools which minify code before publishing to a production server. They remove comments, so they don’t appear in the working scripts. Therefore, comments do not have negative effects on production at all.

Later in the tutorial there will be a chapter Code quality that also explains how to write better comments.





#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
##





## 2.3.- THE MODERN MODE, "USE STRICT" _________________________________________________________________

For a long time, JavaScript evolved without compatibility issues. New features were added to the language while old functionality didn’t change.

That had the benefit of never breaking existing code. But the downside was that any mistake or an imperfect decision made by JavaScript’s creators got stuck in the language forever.

This was the case until 2009 when *ECMAScript* 5 (ES5) appeared. It added new features to the language and modified some of the existing ones. To keep the old code working, most such modifications are off by default. You need to explicitly *enable them* with a special directive: *"use strict"*.

The directive "use strict" looks like a string: "use strict" or 'use strict'. 

When it is located *at the top* of a script, the whole script works the “modern” way.

For example:

```js

"use strict";

// the following code works the modern way

```

Quite soon we’re going to learn functions (a way to group commands), so let’s note in advance that "use strict" can be put *at the beginning of a function*. Doing that enables strict mode in that function only. But usually people use it for the whole script.


- IMPORTANT: Ensure that “use strict” is at the top.

    - Please make sure that "use strict" is at the top of your scripts, otherwise strict mode may not be enabled.


Strict mode isn’t enabled here:


```js

alert("some code");
// "use strict" below is ignored--it must be at the top

"use strict";

// strict mode is not activated

```

Only comments may appear above "use strict".



- IMPORTANT: There’s no way to cancel use strict.

    - There is no directive like "no use strict" that reverts the engine to old behavior.

    - Once we enter strict mode, there’s no going back.




- Un ejemplo claro de use strict es que cuando tienes activado el use strict es que:

```js
// ya no vale declarar una variable así: 
a = 5;  // esto solo valdría si la variable ya la has declarado en una línea anterior. 

// sino que hay que hacer
let a = 5;

```


- Dani: "el modo estricto es una buena práctica, hay que usarlo".

    - Si no lo usas luego tu codigo lo usa alguien que si pone el modo estricto y puede que no funcione. 


- El modo estricto es implícito en cada vez más contextos. 




### Browser console --------------------------------------------------------------------------------

When you use a developer *console* (*browser*) to run code, please note that it *DOESN'T use strict mode by default*.

Sometimes, when use strict makes a difference, you’ll get incorrect results.

So, how to actually use strict in the console?

First, you can try to press *Shift+Enter* to input *multiple lines*, and put use *strict on top*, like this:

```js

'use strict'; <Shift+Enter for a newline>
//  ...your code
<Enter to run>

```


It works in most browsers, namely Firefox and Chrome.

If it doesn’t, e.g. in an old browser, there’s an ugly, but reliable way to ensure use strict. Put it inside this kind of wrapper:

```js

(function() {
  'use strict';

  // ...your code here...
})()

```





### Should we use strict mode? ----------------------------------------------------------------------

The question may sound obvious, but it’s not so.

One could recommend to start scripts with "use strict"… But you know what’s cool?

Modern JavaScript supports *“classes” and “modules”* – advanced language structures (we’ll surely get to them), that *enable use strict automatically*. So we don’t need to add the "use strict" directive, if we use them.

So, for now "use strict"; is a welcome guest at the top of your scripts. *Later*, when your code is all in classes and modules, *you may omit it*.

As of now, we’ve got to know about use strict in general.

In the next chapters, as we learn language features, we’ll see the differences between the strict and old modes. Luckily, there aren’t many and they actually make our lives better.

All examples in this tutorial assume strict mode unless (very rarely) specified otherwise.






#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
##





## 2.4.- VARIABLES _________________________________________________________________________________________

- Most of the time, a JavaScript application needs to work with information. Here are two examples:

    1. An online shop – the information might include goods being sold and a shopping cart.
    
    2. A chat application – the information might include users, messages, and much more.

*Variables* are used to *store* this *information*.





### A variable ---------------------------------------------------------------------------------------------

A variable is a *“named storage”* for data. We can use variables to store goodies, visitors, and other data.

To *create* a variable in JavaScript, use the *"let"* keyword.

The statement below creates (in other words: *declares*) a variable with the name “message”:


```js

let message;

```

Now, we can put some data into it by using the assignment operator *"="*:


```js

let message;

message = 'Hello'; // store the string 'Hello' in the variable named message

```

The string is now saved into the memory area associated with the variable. We can access it using the variable name:

```js
let message;
message = 'Hello!';

alert(message); // shows the variable content

```

To be concise, we can combine the variable *declaration and assignment* into a *single line*:

```js
let message = 'Hello!'; // define the variable and assign the value

alert(message); // Hello!

```

We can also declare multiple variables in one line:

```js
let user = 'John', age = 25, message = 'Hello';

```

That might seem shorter, but we don’t recommend it. For the sake of better readability, *please use a single line per variable*.

The multiline variant is a bit longer, but *easier to read*:

```js
let user = 'John';
let age = 25;
let message = 'Hello';

```

Some people also define multiple variables in this multiline style:

```js
let user = 'John',
  age = 25,
  message = 'Hello';

```

…Or even in the “comma-first” style:


```js
let user = 'John'
  , age = 25
  , message = 'Hello';

```

Technically, all these variants do the same thing. So, it’s a matter of personal taste and aesthetics.


- var in older scripts:

    - In older scripts, you may also find another keyword: var instead of let:

    ```js
    var message = 'Hello';

    ```

    - The var keyword is almost the same as let. It also declares a variable but in a slightly different, “old-school” way.

    - There are *subtle differences* between let and var, but they do not matter to us yet. We’ll cover them in detail in the chapter "The old "var"".





### A real-life analogy -----------------------------------------------------------------------------------

We can easily grasp the concept of a “variable” if we imagine it as a *“box” for data*, with a uniquely-named sticker on it.

For instance, the variable message can be imagined as a box labelled "message" with the value "Hello!" in it.

We can put any value in the box.

We can also change it as many times as we want:

```js
let message;

message = 'Hello!';

message = 'World!'; // value changed

alert(message);

```

When the value is changed, the old data is removed from the variable.


We can also declare two variables and copy data from one into the other.


```js

let hello = 'Hello world!';

let message;

// copy 'Hello world' from hello into message
message = hello;

// now two variables hold the same data
alert(hello); // Hello world!
alert(message); // Hello world!

```


- IMPORTANT: Declaring twice triggers an error. 

    - A variable should be declared only once.

    - A repeated declaration of the same variable is an error:


```js
let message = "This";

// repeated 'let' leads to an error
let message = "That"; // SyntaxError: 'message' has already been declared

```

So, we should declare a variable once and then refer to it without let.




- *Functional languages*:

    - It’s interesting to note that there exist so-called *pure functional programming languages*, such as Haskell, that *forbid changing variable values*.

    - In such languages, once the value is stored “in the box”, it’s there forever. If we need to store something else, the language forces us to create a new box (declare a new variable). We can’t reuse the old one.

    - Though it may seem a little odd at first sight, these languages are quite capable of serious development. More than that, there are areas like *parallel computations* where this limitation confers certain benefits.





### Variable naming -----------------------------------------------------------------------------------

- There are two limitations on variable names in JavaScript:

    1. The name must contain only letters, digits, or the symbols *"$"* and *"_"*.
    
    2. The *first* character must *not be a digit*.


Examples of valid names:

```js
let userName;
let test123;

```

When the name contains multiple words, *camelCase* is commonly used. That is: words go one after another, each word except first starting with a capital letter: myVeryLongName.

What’s interesting – the dollar sign '$' and the underscore '_' can also be used in names. They are regular symbols, just like letters, without any special meaning.

These names are valid:

```js
let $ = 1; // declared a variable with the name "$"
let _ = 2; // and now a variable with the name "_"

alert($ + _); // 3

```

Examples of incorrect variable names:

```js
// Examples of incorrect variable names:

let 1a; // cannot start with a digit

let my-name; // hyphens '-' aren't allowed in the name

```



- Case matters (*las mayúsculas importan*):

    - Variables named apple and APPLE are two different variables.


- *Non-Latin letters* are allowed, but not recommended

    - It is possible to use any language, including Cyrillic letters, Chinese logograms and so on.

    - Technically, there is no error here. Such names are allowed, but there *is an international convention to use English in variable names*. Even if we’re writing a small script, it may have a long life ahead. People from other countries may need to read it sometime.


```js
let имя = '...';
let 我 = '...';

```



- IMPORTANT: An assignment without use strict:

    - Normally, we need to *define a variable before using it*. But in the old times, it was technically possible to create a variable by a mere assignment of the value without using let. This still works now if we don’t put use strict in our scripts to maintain compatibility with old scripts.

    ```js 
    // note: no "use strict" in this example

    num = 5; // the variable "num" is created if it didn't exist

    alert(num); // 5

    ```

    - This is a bad practice and would cause an error in strict mode:

    ```js
    "use strict";

    num = 5; // error: num is not defined

    ```




### Constants --------------------------------------------------------------------------------------

To declare a constant (unchanging) variable, use *"const"* instead of let:

```js
const myBirthday = '18.04.1982';

```

Variables declared using const are called “constants”. *They cannot be reassigned*. An attempt to do so would cause an error:

```js
const myBirthday = '18.04.1982';

myBirthday = '01.01.2001'; // error, can't reassign the constant!

```

When a programmer is sure that a variable will never change, they can declare it with const to guarantee and *communicate that fact to everyone*.





### Uppercase constants ------------------------------------------------------------------------------

There is a widespread practice to use constants as aliases for *difficult-to-remember values that are known before execution*.

Such constants are named using capital letters and underscores.

For instance, let’s make constants for colors in so-called “web” (hexadecimal) format:


```js
const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";

// ...when we need to pick a color
let color = COLOR_ORANGE;
alert(color); // #FF7F00

```


- Benefits:
    - COLOR_ORANGE is *much easier to remember* than "#FF7F00".
    
    - It is much easier to mistype "#FF7F00" than COLOR_ORANGE.
    
    - When reading the code, COLOR_ORANGE is much more meaningful than #FF7F00.



When should we use capitals for a constant and when should we name it normally? Let’s make that clear.

Being a “constant” just means that a variable’s value never changes. But some constants are *known before execution* (like a hexadecimal value for red) and some constants are *calculated in run-time*, during the execution, but do not change after their initial assignment.

For instance:

```js
const pageLoadTime = /* time taken by a webpage to load */;

```

The value of pageLoadTime is *not known before the page load, so it’s named normally*. But it’s still a constant because it doesn’t change after the assignment.

In other words, capital-named constants are only used as aliases for “hard-coded” values.





### Name things right -------------------------------------------------------------------------

Talking about variables, there’s one more extremely important thing.

A *variable name* should have a clean, obvious meaning, *describing the data* that it stores.

Variable naming is one of the most important and complex skills in programming. A glance at variable names can reveal which code was written by a beginner versus an experienced developer.

In a real project, most of the time is spent modifying and extending an existing code base rather than writing something completely separate from scratch. When we return to some code after doing something else for a while, it’s much easier to find information that is *well-labelled*. Or, in other words, when the variables have good names.

Please spend time thinking about the right name for a variable before declaring it. Doing so will repay you handsomely.


- Some good-to-follow rules are:

    1. Use human-*readable* names like userName or shoppingCart.

    2. *Stay away from abbreviations* or short names like a, b, and c, unless you know what you’re doing.

    3. Make names maximally *descriptive* and *concise*. Examples of bad names are data and value. Such names say nothing. It’s only okay to use them if the context of the code makes it exceptionally obvious which data or value the variable is referencing.
    
    4. *Agree* on terms *within your team* and in your mind. If a site visitor is called a “user” then we should name related variables currentUser or newUser instead of currentVisitor or newManInTown.


Sounds simple? Indeed it is, but creating descriptive and concise variable names in practice is not. Go for it.




### Reuse or create? -----------------------------------------------------------------------------------

And the last note. There are some lazy programmers who, *instead of declaring new variables, tend to reuse existing ones*.

As a result, *their variables are like boxes into which people throw different things* without changing their stickers. What’s inside the box now? Who knows? We need to come closer and check.

Such programmers save a little bit on variable declaration but lose ten times more on debugging.

*An extra variable is good*, not evil.

Modern JavaScript minifiers and browsers optimize code well enough, so it won’t create performance issues. Using different variables for different values can even help the engine optimize your code.






### Summary ---------------------------------------------------------------------------------------

- We can declare variables to store data by using the var, let, or const keywords.

    1. let – is a modern variable declaration.
    
    2. var – is an old-school variable declaration. Normally we don’t use it at all, but we’ll cover subtle differences from let in the chapter The old "var", just in case you need them.
    
    3. const – is like let, but the value of the variable can’t be changed.
    

Variables should be named in a way that allows us to easily understand what’s inside them.







### EJERCICIOS --------------------------------------------------------------------------------------


[...................................................................................]

Tengo pendiente hacerlos, iba con prisa y lo he dejado para más tarde.








#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
##





## 2.5.- DATA TYPES _____________________________________________________________________________________

A value in JavaScript is always of a certain type. For example, a string or a number.

There are *eight* basic data *types* in JavaScript. Here, we’ll cover them in general and in the next chapters we’ll talk about each of them in detail.

We can put any type *in a variable*. For example, a variable can at one moment be a string and then store a number:

```js
// no error
let message = "hello";
message = 123456;

```


Programming languages that allow such things, such as JavaScript, are called *“dynamically typed”*, meaning that there exist data types, but variables are not bound to any of them.



### Number -------------------------------------------------------------------------

```js
let n = 123;
n = 12.345;

```

The *number type* represents both *integer and floating* point numbers.

There are many operations for numbers, e.g. multiplication *, division /, addition +, subtraction -, and so on.

Besides regular numbers, there are so-called “special numeric values” which also belong to this data type: Infinity, -Infinity and NaN.


1) *Infinity* represents the mathematical Infinity ∞. It is a special value that’s greater than any number.

    We can get it as a result of division by zero:


```js
alert( 1 / 0 ); // Infinity

```

    Or just reference it directly:


```js
alert( Infinity ); // Infinity

```



2) *NaN* (= "not a number")represents a computational error. It is a result of an incorrect or an undefined mathematical operation, for instance:

```js
alert( "not a number" / 2 ); // NaN, such division is erroneous

```

- NaN is sticky. Any *further mathematical operation on NaN returns NaN*:

```js
alert( NaN + 1 ); // NaN
alert( 3 * NaN ); // NaN
alert( "not a number" / 2 - 1 ); // NaN

```

- So, if there’s a NaN somewhere in a mathematical expression, it propagates to the whole result (there’s only one exception to that: NaN ** 0 is 1).


- Mathematical operations are safe:

    - Doing maths is “safe” in JavaScript. *We can do anything*: divide by zero, *treat non-numeric strings as numbers*, etc.

    - The script *will never stop with a fatal error* (“die”). At worst, we’ll get NaN as the result.

    

Special numeric values formally *belong to the “number” type*. Of course they are not numbers in the common sense of this word.

We’ll see more about working with numbers in the chapter Numbers.






### BigInt ------------------------------------------------------------------

In JavaScript, the “number” type cannot safely represent integer values *larger than (2^53)-1* (that’s 9007199254740991), or less than -(2^53)-1 for negatives.

To be really precise, the “number” type can store larger integers (up to 1.7976931348623157 * 10308), but outside of the safe integer range ±(253-1) there’ll be a precision error, because not all digits fit into the fixed 64-bit storage. So an “approximate” value may be stored.

For example, these two numbers (right above the safe range) are the same:

```js
console.log(9007199254740991 + 1); // 9007199254740992
console.log(9007199254740991 + 2); // 9007199254740992

```

So to say, all odd integers greater than (2^53-1) can’t be stored at all in the “number” type.

For most purposes ±(2^53-1) range is quite enough, but sometimes we need the entire range of really big integers, e.g. for cryptography or microsecond-precision timestamps.

BigInt type was recently added to the language to represent integers of arbitrary length.

*A BigInt value is created by appending n to the end of an integer*:


```js
// the "n" at the end means it's a BigInt
const bigInt = 1234567890123456789012345678901234567890n;

```

As BigInt numbers are *rarely needed*, we don’t cover them here, but devoted them a separate chapter BigInt. Read it when you need such big numbers.





### String ------------------------------------------------------------------

A string in JavaScript must be surrounded by *quotes*.

```js
let str = "Hello";
let str2 = 'Single quotes are ok too';
let phrase = `can embed another ${str}`;

```

- In JavaScript, there are 3 types of quotes.

    1. Double quotes: "Hello".

    2. Single quotes: 'Hello'.

    3. Backticks: `Hello`.


*Double and single quotes* are “simple” quotes. There’s *practically no difference* between them in JavaScript.

*Backticks* (`...`) are *“extended functionality”* quotes. They allow us to *embed variables* and expressions *into a string* by wrapping them in ${…}, for example:

```js
let name = "John";

// embed a variable
alert( `Hello, ${name}!` ); // Hello, John!

// embed an expression
alert( `the result is ${1 + 2}` ); // the result is 3

```


The expression *inside ${…}* is evaluated and the *result becomes a part of the string*. We can put anything in there: a variable like name or an arithmetical expression like 1 + 2 or something more complex.

Please note that this can only be done in backticks. Other quotes don’t have this embedding functionality!

```js
alert( "the result is ${1 + 2}" ); // the result is ${1 + 2} (double quotes do nothing)

```

We’ll cover strings more thoroughly in the chapter Strings.

- There is no character type.

    - In some languages, there is a special “character” type for a single character. For example, in the C language and in Java it is called *“char”*.

    - *In JavaScript, there is no such type*. There’s only one type: string. A string may consist of zero characters (be empty), one character or many of them.







### Boolean (logical type) --------------------------------------------------

The boolean type has only two values: *true and false*.

This type is commonly used to store *yes/no values*: true means “yes, correct”, and false means “no, incorrect”.

For instance:

```js
let nameFieldChecked = true; // yes, name field is checked
let ageFieldChecked = false; // no, age field is not checked

```

Boolean values also come as a *result of comparisons*:

```js
let isGreater = 4 > 1;

alert( isGreater ); // true (the comparison result is "yes")

```

We’ll cover booleans more deeply in the chapter Logical operators.






### The "null" value -------------------------------------------------------

The special null value does not belong to any of the types described above.

It forms a separate type of its own which contains only the *null value*:

```js
let age = null;

```

In JavaScript, null *IS NOT a “reference to a non-existing object” or a “null pointer”* like in some other languages.

*It’s just a special value* which represents “nothing”, “empty” or “value unknown”.

The code above states that age is unknown.






### The "undefined" value -------------------------------------------------

The special value *undefined* also stands apart. It makes a type of its own, just like null.

The meaning of undefined is *“value is not assigned”*.

*If a variable is declared, but not assigned*, then its value is undefined:

```js
let age;

alert(age); // shows "undefined"

```

Technically, it is possible to explicitly assign undefined to a variable:

```js
let age = 100;

// change the value to undefined
age = undefined;

alert(age); // "undefined"

```

…But we don’t recommend doing that. Normally, *one uses null to assign an “empty” or “unknown” value to a variable*, while *undefined is reserved as a default initial value* for unassigned things.






### Objects and Symbols ------------------------------------------------

The *object type* is special.

*All other types are called “primitive”* because their values can contain only a single thing (be it a string or a number or whatever). In contrast, *objects* are used to store *collections of data* and more complex entities.

Being that important, objects deserve a special treatment. We’ll deal with them later in the chapter Objects, after we learn more about primitives.

The *"symbol"* type is used to create *unique identifiers for objects*. We have to mention it here for the sake of completeness, but also postpone the details till we know objects.





### The typeof operator -------------------------------------------------

The *typeof* operator *returns the type* of the operand. It’s useful when we want to process values of different types differently or just want to do a quick check.

A call to typeof x returns a string with the type name:

```js
typeof undefined // "undefined"

typeof 0 // "number"

typeof 10n // "bigint"

typeof true // "boolean"

typeof "foo" // "string"

typeof Symbol("id") // "symbol"

typeof Math // "object"  (1)

typeof null // "object"  (2)

typeof alert // "function"  (3)

```

- The last three lines may need additional explanation:

    1. *Math* is a built-in *object* that provides *mathematical operations*. We will learn it in the chapter Numbers. Here, it serves just as an example of an object.

    2. The result of typeof null is "object". *That’s an officially recognized error in typeof*, coming from very early days of JavaScript and kept for compatibility. Definitely, *null is not an object*. It is a special value with a separate type of its own. The behavior of typeof is wrong here.

    3. The result of typeof alert is "function", because *alert is a function*. We’ll study functions in the next chapters where we’ll also see that there’s no special “function” type in JavaScript. Functions belong to the object type. But typeof treats them differently, returning "function". That also comes from the early days of JavaScript. Technically, such behavior isn’t correct, but can be convenient in practice.



- The *typeof(x) syntax*:

    - You may also come across another syntax: typeof(x). *It’s the same as typeof x*.

    - To put it clear: typeof *is an operator, not a function*. The parentheses here aren’t a part of typeof. It’s the kind of *parentheses* used for *mathematical grouping*.

    - Usually, such parentheses contain a mathematical expression, such as (2 + 2), but here they contain only one argument (x). Syntactically, they allow to avoid a space between the typeof operator and its argument, and some people like it.

    - Some people prefer typeof(x), although the *typeof x syntax is much more common*.







### Nota -----------------------------------------------------------------------------------------

- Castear una variable, cuyo valor es undefined, a String da como resultado el String "undefined". 









### Summary ------------------------------------------------------------------------------

There are 8 basic data types in JavaScript.

Seven primitive data types:
    number for numbers of any kind: integer or floating-point, integers are limited by ±(253-1).
    bigint for integer numbers of arbitrary length.
    string for strings. A string may have zero or more characters, there’s no separate single-character type.
    boolean for true/false.
    null for unknown values – a standalone type that has a single value null.
    undefined for unassigned values – a standalone type that has a single value undefined.
    symbol for unique identifiers.


And one non-primitive data type:
    object for more complex data structures.


The typeof operator allows us to see which type is stored in a variable.
    Usually used as typeof x, but typeof(x) is also possible.
    Returns a string with the name of the type, like "string".
    For null returns "object" – this is an error in the language, it’s not actually an object.
    

In the next chapters, we’ll concentrate on primitive values and once we’re familiar with them, we’ll move on to objects.





### Ejercicios ---------------------------------------------------------------------------------

What is the output of the script?

```js
let name = "Ilya";

alert( `hello ${1}` ); // ?

alert( `hello ${"name"}` ); // ?

alert( `hello ${name}` ); // ?


```






#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
##







## 2.6.- INTERACTION: ALERT, PROMPT, CONFIRM ______________________________________________________________________

As we’ll be using the *browser* as our *demo environment*, let’s see a couple of functions to interact with the user: alert, prompt and confirm.


### alert ----------------------------------------------------------------------------------------------------

This one we’ve seen already. It shows a *message* and *waits* for the user *to press “OK”*.

For example:

```js
alert("Hello");

```

The mini-window with the message is called a *"modal window"*. The word “modal” means that the visitor *can’t interact* with the rest of the page, press other buttons, etc, *until they have dealt with the window*. In this case – until they press “OK”.







### prompt --------------------------------------------------------------------------------------------------

- The function prompt accepts two arguments:

    1. *title* -> The text to show the visitor.

    2. *default* -> An optional second parameter, the initial value for the input field.


```js
result = prompt(title, [default]);

```

- It shows a modal window with:

    1. a text *message*
    
    2. an *input field* for the visitor 
    
    3. the buttons *OK/Cancel*.



- The *square brackets* in syntax [...]

    - The square brackets around default in the syntax above *denote that the parameter is optional*, not required.


The visitor can type something in the prompt input field and press OK. Then we get that text in the result. Or they can *cancel* the input by pressing Cancel or hitting the Esc key, then we *get null as the result*.


The call to prompt *returns the text from the input field* or null if the input was canceled.


For instance:

```js
let age = prompt('How old are you?', 100);

alert(`You are ${age} years old!`); // You are 100 years old!

```


- In IE: always supply a *default*:

    - The second parameter is optional, *but if we don’t supply it*, Internet Explorer *will insert the text "undefined"* into the prompt.

    - Run this code in Internet Explorer to see:

```js
let test = prompt("Test");

```

- So, for prompts to look good in IE, *we recommend always providing* the second argument (the "default" argument):


```js
let test = prompt("Test", ''); // <-- for IE

```




### confirm ---------------------------------------------------------------------------------

The syntax:

```js
result = confirm(question);

```

The function confirm shows a modal window with a *question* and two buttons: *OK and Cancel*.

The result is true if OK is pressed and false otherwise.

For example:

```js
let isBoss = confirm("Are you the boss?");

alert( isBoss ); // true if OK is pressed

```





### Summary -----------------------------------------------------------------------------------

- We covered 3 browser-specific functions to interact with visitors:

    1. alert -> shows a message.

    2. prompt -> shows a message asking the user to input text. It returns the text or, if Cancel button or Esc is clicked, null.

    3. confirm -> shows a message and waits for the user to press “OK” or “Cancel”. It returns true for OK and false for Cancel/Esc.


- All these methods are modal: they pause script execution and don’t allow the visitor to interact with the rest of the page until the window has been dismissed.


- There are two limitations shared by all the methods above:

    1. The exact location of the modal window is determined by the browser. Usually, it’s in the center.

    2. The exact look of the window also depends on the browser. We can’t modify it.


- That is the price for simplicity. There are other ways to show nicer windows and richer interaction with the visitor, but if “bells and whistles” do not matter much, these methods work just fine.






### Ejercicios -------------------------------------------------------------------------------------

Create a web-page that asks for a name and outputs it.








#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
##






## 2.7.- TYPE CONVERSIONS _____________________________________________________________________________________

Most of the time, operators and functions *automatically convert* the values given to them to the right type.

For example, "alert" automatically converts any value to a string to show it. Mathematical operations convert values to numbers.

There are also cases when we need to *explicitly convert* a value to the expected type.

- Not talking about objects yet:

    - In this chapter, we won’t cover objects. For now, we’ll just be talking about primitives.

    - Later, after we learn about objects, in the chapter Object to primitive conversion we’ll see how objects fit in.




### String conversion ----------------------------------------------------------------------

String conversion happens when we need the string form of a value.

For example, alert(value) does it to show the value.

We can also call the *String(value)* function to convert a value to a string:

```js
let value = true;
alert(typeof value); // boolean

value = String(value); // now value is a string "true"
alert(typeof value); // string

```

String conversion is mostly obvious. A *false becomes "false"*, *null becomes "null"*, etc.





### Numeric conversion ----------------------------------------------------------------

*Numeric conversion* in mathematical *functions* and expressions happens *automatically*.

For example, when division / is applied to non-numbers:

```js
alert( "6" / "2" ); // 3, strings are converted to numbers

```

We can use the *Number(value)* function to *explicitly convert* a value to a number:

```js
let str = "123";
alert(typeof str); // string

let num = Number(str); // becomes a number 123

alert(typeof num); // number

```


Explicit conversion is usually required *when* we read a value from a string-based source like a text form but *expect a number to be entered*.


If the string is not a valid number, the *result* of such a conversion is *NaN*. For instance:

```js
let age = Number("an arbitrary string instead of a number");

alert(age); // NaN, conversion failed

```


Numeric conversion rules:


Value               | Becomes
--------------------|---------------------------------------------------------------------------
*undefined*         | *NaN*
*null*              | *0*
*true and false*    | *1 and 0*
*string*            | *Whitespaces* (includes spaces, tabs \t, newlines \n etc.) from the start
                    | and end are *removed*. If the remaining string is *empty*, the result is *0*.
                    | Otherwise, the number is "read" from the string. An *error* gives *NaN*.



Examples:

```js
alert( Number("   123   ") ); // 123
alert( Number("123z") );      // NaN (error reading a number at "z")
alert( Number(true) );        // 1
alert( Number(false) );       // 0

```

Please note that null and undefined behave differently here: *null becomes zero* while *undefined becomes NaN*.

Most mathematical operators also perform such conversion, we’ll see that in the next chapter.




### Boolean conversion -------------------------------------------------------------

Boolean conversion is the simplest one.

It happens in logical operations (later we’ll meet condition tests and other similar things) but can also be performed explicitly with a call to Boolean(value).

- The conversion rule:

    - Values that are intuitively “empty”, like *0*, an *empty string*, *null*, *undefined*, and NaN, become *false*.

    - *Other values* become *true*.

For instance:

```js
alert( Boolean(1) ); // true
alert( Boolean(0) ); // false

alert( Boolean("hello") ); // true
alert( Boolean("") ); // false

```


- Please note: *the string with zero "0"* is *true*:

    - Some languages (namely PHP) treat "0" as false. But in JavaScript, *a non-empty string is always true*.

```js
alert( Boolean("0") ); // true
alert( Boolean(" ") ); // spaces, also true (any non-empty string is true)

```


- Recapitulando:

Value                                  | Becomes…
---------------------------------------|----------
0, null, undefined, NaN, ""            | false
any other value                        | true








### Summary ---------------------------------------------------------------------------------------

The three most widely used type conversions are to string, to number, and to boolean.

String Conversion – Occurs when we output something. Can be performed with String(value). The conversion to string is usually obvious for primitive values.

Numeric Conversion – Occurs in math operations. Can be performed with Number(value).

The conversion follows the rules:

Value             | Becomes
------------------|---------------------------------------------------------------------------
undefined         | NaN
null              | 0
true and false    | 1 and 0
string            | Whitespaces (includes spaces, tabs \t, newlines \n etc.) from the start
                  | and end are removed. If the remaining string is empty, the result is 0.
                  | Otherwise, the number is "read" from the string. An error gives NaN.


Boolean Conversion – Occurs in logical operations. Can be performed with Boolean(value).

Follows the rules:

Value                                  | Becomes…
---------------------------------------|----------
0, null, undefined, NaN, ""            | false
any other value                        | true



- Most of these rules are easy to understand and memorize. The notable exceptions where people usually make mistakes are:

    - undefined is NaN as a number, not 0.

    - "0" and space-only strings like " " are true as a boolean.


Objects aren’t covered here. We’ll return to them later in the chapter Object to primitive conversion that is devoted exclusively to objects after we learn more basic things about JavaScript.








#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
##







## 2.8.- BASIC OPERATORS, MATHS _____________________________________________________________________________

We know many operators from school. They are things like addition +, multiplication *, subtraction -, and so on.

In this chapter, we’ll start with simple operators, then concentrate on *JavaScript-specific aspects*, not covered by school arithmetic.


### Terms “unary”, “binary”, “operand” -----------------------------------------------------------------

Before we move on, let’s grasp some common terminology.

- An *operand* – is what *operators* are applied to. 

    - For instance, in the multiplication of 5 * 2 there are two operands: the left operand is 5 and the right operand is 2. Sometimes, people call these “arguments” instead of “operands”.

- An operator is *unary* if it has a *single operand*. 

    - For example, the unary negation - reverses the sign of a number:

```js
let x = 1;

x = -x;
alert( x ); // -1, unary negation was applied

```

An operator is *binary* if it has *two operands*. The same minus exists in binary form as well:

```js
let x = 1, y = 3;
alert( y - x ); // 2, binary minus subtracts values

```

Formally, in the examples above we have two different operators that share the same symbol: the negation operator, a unary operator that reverses the sign, and the subtraction operator, a binary operator that subtracts one number from another.




### Maths ---------------------------------------------------------------------------------------

The following math operations are supported:

*Addition +*,
*Subtraction -*,
*_ Multiplication * _*,
*Division /*,
*Remainder %*,
*Exponentiation* **.

The first four are straightforward, while % and ** need a few words about them.





### Remainder % ----------------------------------------------------------------------------------

The remainder operator %, despite its appearance, is not related to percents.

- The result of a % b is the *remainder of the integer division* of a by b.

    - Es decir, "%" sirve para calcular el resto de una división. 

For instance:

```js
alert( 5 % 2 ); // 1, the remainder of 5 divided by 2
alert( 8 % 3 ); // 2, the remainder of 8 divided by 3
alert( 8 % 4 ); // 0, the remainder of 8 divided by 4

```





### Exponentiation ** ------------------------------------------------------------------------

The *exponentiation* operator a ** b raises a to the power of b.

In school maths, we write that as ab.

For instance:

```js
alert( 2 ** 2 ); // 2² = 4
alert( 2 ** 3 ); // 2³ = 8
alert( 2 ** 4 ); // 2⁴ = 16

```

Just like in maths, the exponentiation operator is defined for non-integer numbers as well.

For example, a square root is an exponentiation *by ½*:

```js
alert( 4 ** (1/2) ); // 2 (power of 1/2 is the same as a square root)
alert( 8 ** (1/3) ); // 2 (power of 1/3 is the same as a cubic root)

```





### String concatenation with binary + --------------------------------------------------

Let’s meet the features of JavaScript operators that are beyond school arithmetics.

Usually, the plus operator + sums numbers.

But, if the binary *+* is applied to *strings*, it merges (*concatenates*) them:


```js
let s = "my" + "string";
alert(s); // mystring

```

Note that if any of the operands is a string, then the other one is *converted to a string* too.

For example:

```js
alert( '1' + 2 ); // "12"
alert( 2 + '1' ); // "21"

```

See, it doesn’t matter whether the *first operand is a string or the second one*.

Here’s a more complex example:

```js
alert(2 + 2 + '1' ); // "41" and not "221"

```

Here, operators work one after another. The first + sums two numbers, so it returns 4, then the next + *adds the string 1 to it*, so it’s like *4 + '1' = '41'* and *not 14 !!!!!!!!!!!*.

```js
alert('1' + 2 + 2); // "122" and not "14"

```

Here, the first operand is a string, the compiler treats the other two operands as strings too. The 2 *gets concatenated* to '1', so it’s like '1' + 2 = "12" and "12" + 2 = "122".

The binary *+ is the only* operator that supports strings in such a way. *Other arithmetic operators* work only with numbers and *always convert* their operands to numbers.

Here’s the demo for subtraction and division: 

```js
alert( 6 - '2' ); // 4, converts '2' to a number
alert( '6' / '2' ); // 3, converts both operands to numbers

```



### Numeric conversion, unary + ----------------------------------------------------------------

The plus + exists in two forms: the binary form that we used above and the unary form.

The *unary plus* or, in other words, the plus operator + applied to a single value, *doesn’t do anything to numbers*. But if the operand is not a number, the unary plus *converts it into a number*.

For example:

```js
// No effect on numbers
let x = 1;
alert( +x ); // 1

let y = -2;
alert( +y ); // -2

// Converts non-numbers
alert( +true ); // 1
alert( +"" );   // 0

```

It actually does the *same thing as Number(...), but is shorter*.

The need to convert strings to numbers arises very often. For example, if we are getting values from HTML form fields, they are usually strings. What if we want to sum them?

The binary plus would *add them as strings*:

```js
let apples = "2";
let oranges = "3";

alert( apples + oranges ); // "23", the binary plus concatenates strings

```


If we want to treat them as numbers, *we need to convert and then sum them*:

```js
let apples = "2";
let oranges = "3";

// both values converted to numbers before the binary plus
alert( +apples + +oranges ); // 5

// the longer variant
// alert( Number(apples) + Number(oranges) ); // 5

```

From a mathematician’s standpoint, the abundance of pluses may seem strange. But from a programmer’s standpoint, there’s nothing special: unary pluses are applied first, they convert strings to numbers, and then the binary plus sums them up.

Why are unary pluses applied to values before the binary ones? As we’re going to see, that’s because of their higher precedence.




### Operator precedence ---------------------------------------------------------------

If an expression has more than one operator, the *execution order* is defined by their *precedence*, or, in other words, the default priority order *of operators*.

From school, we all know that the multiplication in the expression 1 + 2 * 2 should be calculated before the addition. That’s exactly the precedence thing. The *multiplication* is said to have a *higher precedence* than the *addition*.

*Parentheses* override any precedence, so if we’re not satisfied with the default order, we can use them to change it. For example, write (1 + 2) * 2.

There are many operators in JavaScript. Every operator has a corresponding *precedence number*. The one with the *larger number executes first*. If the precedence is the same, the execution order is from left to right.

Here’s an extract from the precedence table (you don’t need to remember this, but note that *unary operators are higher than corresponding binary ones*):


Precedence  Name             Sign
----------  ---------------  ----
…           …                …
14          unary plus       +
14          unary negation   -
13          exponentiation   **
12          multiplication   *
12          division         /
11          addition         +
11          subtraction      -
…           …                …
2           assignment       =
…           …                …


- La tabla original utiliza … para indicar que se han omitido filas intermedias de la tabla completa de precedencia de operadores de JavaScript.

    - La tabla no muestra todos los niveles de precedencia, sino algunos ejemplos relevantes.



As we can see, the “unary plus” has a priority of 14 which is higher than the 11 of “addition” (binary plus). That’s why, in the expression "+apples + +oranges", unary pluses work before the addition.





### Assignment ---------------------------------------------------------------------------------

Let’s note that an assignment = is also an operator. It is listed in the precedence table with the very low priority of 2.

That’s why, when we assign a variable, like x = 2 * 2 + 1, the *calculations are done first and then the = is evaluated*, storing the result in x.

```js
let x = 2 * 2 + 1;

alert( x ); // 5

```



### Assignment = returns a value ------------------------------------------------------------

The fact of = being an operator, not a “magical” language construct has an interesting implication.

All operators in JavaScript return a value. That’s obvious for + and -, but also true for =.

The call x = value writes the value into x and then returns it.

Here’s a demo that uses an assignment as part of a more complex expression:

```js
let a = 1;
let b = 2;

let c = 3 - (a = b + 1);

alert( a ); // 3
alert( c ); // 0

```

In the example above, the result of expression (a = b + 1) is the value which was assigned to a (that is 3). It is then used for further evaluations.

Funny code, isn’t it? We should understand how it works, because sometimes we see it in JavaScript libraries.

Although, *please don’t write the code like that*. Such tricks definitely don’t make code clearer or readable.





### Chaining assignments ---------------------------------------------------------------------

Another interesting feature is the ability to chain assignments:

```js
let a, b, c;

a = b = c = 2 + 2;

alert( a ); // 4
alert( b ); // 4
alert( c ); // 4

```

Chained assignments evaluate from right to left. First, the rightmost expression 2 + 2 is evaluated and then assigned to the variables on the left: c, b and a. At the end, all the variables share a single value.

Once again, for the purposes of readability *it’s better to split such code into few lines*:

```js
c = 2 + 2;
b = c;
a = c;

```

That’s easier to read, especially when eye-scanning the code fast.



### Modify-in-place -------------------------------------------------------------------------

We often need to apply an operator to a variable and store the new result in that same variable.

For example:

```js
let n = 2;
n += 5; // now n = 7 (same as n = n + 5)
n *= 2; // now n = 14 (same as n = n * 2)

alert( n ); // 14

```

*Short “modify-and-assign” operators* exist for all arithmetical and bitwise operators: /=, -=, etc.

Such operators have the same precedence as a normal assignment, so they run after most other calculations:

```js
let n = 2;

n *= 3 + 5; // right part evaluated first, same as n *= 8

alert( n ); // 16

```



### Increment/decrement -------------------------------------------------------------------

Increasing or decreasing a number by one is among the most common numerical operations.

So, there are special operators for it:

Increment *++* increases a variable *by 1*:

```js
let counter = 2;
counter++;        // works the same as counter = counter + 1, but is shorter
alert( counter ); // 3

```

Decrement *--* decreases a variable *by 1*:

```js
let counter = 2;
counter--;        // works the same as counter = counter - 1, but is shorter
alert( counter ); // 1

```


Important: Increment/decrement can *only* be applied to *variables*. Trying to use it on a value like 5++ will give an error.


- The operators ++ and -- *can be placed either before or after* a variable.

    - When the operator goes after the variable, it is in “postfix form”: counter++. 

    - The “prefix form” is when the operator goes before the variable: ++counter.


Both of these statements do the same thing: increase counter by 1.

Is there any difference? Yes, but we can only see it if we use the returned value of ++/--.

Let’s clarify. As we know, all operators return a value. Increment/decrement is no exception. The *prefix* form *returns the new value* while the *postfix* form *returns the old value* (prior to increment/decrement).

To see the difference, here’s an example:

```js
let counter = 1;
let a = ++counter; // (*)

alert(a); // 2

```

In the line (*), the prefix form ++counter increments counter and returns the new value, 2. So, the alert shows 2.

Now, let’s use the postfix form:

```js
let counter = 1;
let a = counter++; // (*) changed ++counter to counter++

alert(a); // 1

```

In the line (*), the postfix form counter++ also increments counter but returns the old value (prior to increment). So, the alert shows 1.

To summarize:

If the result of increment/decrement is not used, there is no difference in which form to use:

```js
let counter = 0;
counter++;
++counter;
alert( counter ); // 2, the lines above did the same

```

*If* we’d like to *increase a value and immediately use the result* of the operator, *we need the prefix form !!!!!!!!!!!!!!!!!!!!!!*:

```js
let counter = 0;
alert( ++counter ); // 1

```

If we’d like to increment a value but use its previous value, we need the postfix form:

```js
let counter = 0;
alert( counter++ ); // 0

```


#### Increment/decrement among other operators

The operators *++/--* can be used *inside expressions* as well. Their precedence is higher than most other arithmetical operations.

For instance:

```js
let counter = 1;
alert( 2 * ++counter ); // 4

```

Compare with:

```js
let counter = 1;
alert( 2 * counter++ ); // 2, because counter++ returns the "old" value

```

Though technically okay, *such notation usually makes code less readable*. One line does multiple things – not good.

While reading code, a fast “vertical” eye-scan can easily miss something like counter++ and it won’t be obvious that the variable increased.

*We advise a style of “one line – one action”*:

```js
let counter = 1;
alert( 2 * counter );
counter++;

```





### Bitwise operators ----------------------------------------------------------------------

*Bitwise operators* treat arguments as *32-bit integer numbers* and work on the level of their binary representation.

These operators *are not JavaScript-specific*. They are supported in most programming languages.

The list of operators:

AND ( & )
OR ( | )
XOR ( ^ )
NOT ( ~ )
LEFT SHIFT ( << )
RIGHT SHIFT ( >> )
ZERO-FILL RIGHT SHIFT ( >>> )

These operators *are used very rarely*, when we need to fiddle with numbers on the very lowest (bitwise) level. We won’t need these operators any time soon, as web development has little use of them, but in some special areas, such as *cryptography*, they are useful. You can read the Bitwise Operators chapter on MDN when a need arises.








### Comma ------------------------------------------------------------------------------

The comma operator , is one of the *rarest* and most unusual operators. Sometimes, it’s used *to write shorter code*, so we need to know it in order to understand what’s going on.

The comma operator allows us to *evaluate several expressions*, dividing them with a comma ,. Each of them is evaluated but *only the result of the last one is returned*.

For example:

```js
let a = (1 + 2, 3 + 4);

alert( a ); // 7 (the result of 3 + 4)

```

Here, the first expression 1 + 2 is evaluated and its result is thrown away. Then, 3 + 4 is evaluated and returned as the result.


- Comma has a very low precedence:

    - Please note that the comma operator has *very low precedence*, *lower than =*, so *parentheses* are important in the example above.

    - Without them: a = 1 + 2, 3 + 4 evaluates + first, summing the numbers into a = 3, 7, then the assignment operator = assigns a = 3, and the rest is ignored. It’s like (a = 1 + 2), 3 + 4.


*Why do we need* an operator that throws away everything except the last expression?

Sometimes, people use it in more complex constructs *to put several actions in one line*.

For *example*:

```js
// three operations in one line
for (a = 1, b = 3, c = a * b; a < 10; a++) {
 ...
}

```

Such tricks are used in many JavaScript frameworks. That’s why we’re mentioning them. *But usually they don’t improve code readability* so we should *think well before using them*.






### Ejercicios ---------------------------------------------------------------------------------------

Están al final de este capítulo del libro. Tengo pendiente hacerlos. 

[............................................................................]









#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
##









## 2.9.- COMPARISONS ________________________________________________________________________________________

We know many *comparison operators from maths*.

- In JavaScript they are written like this:

    - Greater/less than: *a > b*, a < b.

    - Greater/less than or equals: *a >= b*, a <= b.

    - Equals: *a == b*, please note the double equality sign == means the *equality test*, while a single one *a = b means an assignment*.

    - Not equals: In maths the notation is ≠, but in JavaScript it’s written as *a != b*.

In this article we’ll learn more about different types of comparisons, how JavaScript makes them, including important peculiarities.

At the end you’ll find a good recipe to avoid “JavaScript quirks”-related issues.



### Boolean is the result --------------------------------------------------------------------------------

- All comparison operators return a boolean value:

    - *true* – means “yes”, “correct” or “the truth”.

    - *false* – means “no”, “wrong” or “not the truth”.

For example:

```js
alert( 2 > 1 );  // true (correct)
alert( 2 == 1 ); // false (wrong)
alert( 2 != 1 ); // true (correct)

```

A comparison result *can be assigned to a variable*, just like any value:

```js
let result = 5 > 4; // assign the result of the comparison
alert( result ); // true

```




### String comparison -----------------------------------------------------------------------------------

To see whether a *string* is greater than another, JavaScript uses the so-called “dictionary” or “lexicographical” order.

In other words, strings are *compared letter-by-letter*.

For example:

```js
alert( 'Z' > 'A' ); // true
alert( 'Glow' > 'Glee' ); // true
alert( 'Bee' > 'Be' ); // true

```

- The algorithm to compare two strings is simple:

    1. Compare the first character of both strings.
    
    2. If the first character from the first string is greater (or less) than the other string’s, then the first string is greater (or less) than the second. We’re done.
    
    3. Otherwise, if both strings’ first characters are the same, compare the second characters the same way.
    
    4. Repeat until the end of either string.
    
    5. If both strings end at the same length, then they are equal. Otherwise, the longer string is greater.
    

- In the first example above, the comparison 'Z' > 'A' gets to a result at the first step.

- The second comparison 'Glow' and 'Glee' needs more steps as strings are compared character-by-character:

    1. G is the same as G.
    2. l is the same as l.
    3. *o is greater than e. Stop here. The first string is greater*.



- Not a real dictionary, but *Unicode order*:

    - The comparison algorithm given above is roughly equivalent to the one used in *dictionaries* or phone books, but *it’s not exactly the same*.

    - For instance, case matters. A capital letter *"A" is not equal to the lowercase "a"*. Which one is greater? The lowercase "a". Why? Because the lowercase character has a greater index in the internal encoding *table* JavaScript uses (*Unicode*). We’ll get back to specific details and consequences of this in the chapter Strings.









### Comparison of different types ----------------------------------------------------------------

When comparing values of different types, JavaScript *converts the values to numbers*.

For example:

```js
alert( '2' > 1 ); // true, string '2' becomes a number 2
alert( '01' == 1 ); // true, string '01' becomes a number 1

```

For boolean values, true becomes 1 and false becomes 0.

For example:

```js
alert( true == 1 ); // true
alert( false == 0 ); // true

```


- A funny consequence: 

    - It is possible that at the same time:

        - Two values are equal.

        - *One of them is true as a boolean and the other one is false as a boolean*.

    - For example:


```js
let a = 0;
alert( Boolean(a) ); // false

let b = "0";
alert( Boolean(b) ); // true

alert(a == b); // true!

```

From JavaScript’s standpoint, this result is quite normal. An equality check converts values using the numeric conversion (hence "0" becomes 0), while the *explicit Boolean conversion uses another set of rules*.





### Strict equality -----------------------------------------------------------------------------

A regular equality check == has a problem. *It cannot differentiate 0 from false*:

```js
alert( 0 == false ); // true

```

The same thing happens with an *empty string ""*:

```js
alert( '' == false ); // true

```


This happens because operands of different types are converted to numbers by the equality operator ==. An empty string, just like false, becomes a zero.

What to do if we’d like to differentiate 0 from false?

*A strict equality operator === checks the equality without type conversion*.

In other words, if a and b are of different types, then a === b immediately returns false without an attempt to convert them.

Let’s try it:

```js
alert( 0 === false ); // false, because the types are different

```

There is also a *“strict non-equality” operator !==* analogous to !=.

The strict equality operator is a bit longer to write, but makes it obvious what’s going on and leaves less room for errors.




### Comparison with null and undefined ---------------------------------------------------------------

There’s a non-intuitive behavior when null or undefined are compared to other values.

- For a *strict equality check ===*

    - These values are different, because each of them is a different type.

```js
alert( null === undefined ); // false

```

- For a *non-strict check ==*

    - There’s a special rule. These two are a “sweet couple”: they equal each other (in the sense of ==), but not any other value.


```js
alert( null == undefined ); // true

```


- For *maths* and other *comparisons < > <= >=*

    - null/undefined are converted to numbers: *null becomes 0*, while *undefined becomes NaN*.


Now let’s see some funny things that happen when we apply these rules. And, what’s more important, how to not fall into a trap with them.




### Strange result: null vs 0 ---------------------------------------------------------------------------------

Let’s compare null with a zero:

```js
alert( null > 0 );  // (1) false
alert( null == 0 ); // (2) false
alert( null >= 0 ); // (3) true

```

Mathematically, that’s strange. The last result states that “null is greater than or equal to zero”, so in one of the comparisons above it must be true, but they are both false.

- The reason is that an *equality check* == *and comparisons* > < >= <= *work differently*. 

    - *Comparisons* convert null to a number, *treating it as 0*. That’s why (3) null >= 0 is true and (1) null > 0 is false.

    - On the other hand, the *equality check ==* for undefined and null is defined such that, *without any conversions*, they equal each other and don’t equal anything else. That’s why (2) null == 0 is false.





### An incomparable undefined --------------------------------------------------------------------------

The value undefined shouldn’t be compared to other values:

```js
alert( undefined > 0 ); // false (1)
alert( undefined < 0 ); // false (2)
alert( undefined == 0 ); // false (3)

```

- Why does it dislike zero so much? Always false!


- We get these results because:

    - *Comparisons* (1) and (2) return false because *undefined gets converted to NaN* and NaN is a special numeric value which returns false for all comparisons.

    - The *equality check ==* (3) returns false because *undefined only equals null*, undefined, and no other value.






### Avoid problems ------------------------------------------------------------------------------

- Why did we go over these examples? Should we remember these peculiarities all the time? Well, not really. Actually, these tricky things will *gradually become familiar over time*, but there’s a solid way to avoid problems with them:

    - *Treat any comparison with undefined/null* except the strict equality === *with exceptional care*.
    
    - *Don’t use comparisons >= > < <= with a variable which may be null/undefined*, unless you’re really sure of what you’re doing. If a variable can have these values, check for them separately.







### Summary ---------------------------------------------------------------------------------

Comparison operators return a boolean value.

Strings are compared letter-by-letter in the “dictionary” order.

When values of different types are compared, they get converted to numbers (with the exclusion of a strict equality check).

The values null and undefined equal == each other and do not equal any other value.

Be careful when using comparisons like > or < with variables that can occasionally be null/undefined. Checking for null/undefined separately is a good idea.






### Ejercicios -------------------------------------------------------------------------------

What will be the result for these expressions?

```js
5 > 4
"apple" > "pineapple"
"2" > "12"
undefined == null
undefined === null
null == "\n0\n"
null === +"\n0\n"

```





















#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
##




## 2.10.- CONDITIONAL BRANCHING: IF, '?' ____________________________________________________________________

Sometimes, we need to perform different actions *based on* different *conditions*.

To do that, we can use the if statement and the conditional operator ?, that’s also called a “question mark” operator.


### The “if” statement ----------------------------------------------------------------------------------------

The *if(...)* statement evaluates a *condition* in parentheses and, if the result is true, executes a block of code.

For example:

```js
let year = prompt('In which year was ECMAScript-2015 specification published?', '');

if (year == 2015) alert( 'You are right!' );

```

In the example above, the condition is a simple equality check (year == 2015), but it can be much more complex.

If we want to execute *more than one statement*, we have to wrap our code block inside curly *braces*:

```js
if (year == 2015) {
  alert( "That's correct!" );
  alert( "You're so smart!" );
}

```

*We recommend* wrapping your code block with curly *braces* {} every time you use an if statement, *even if there is only one statement* to execute. Doing so improves readability.




### Boolean conversion ----------------------------------------------------------------------------------

The if (…) statement evaluates the expression in its parentheses and *converts the result to a boolean*.

- Let’s recall the conversion rules from the chapter Type Conversions:

  - A *number 0*, an *empty string ""*, *null*, *undefined*, and *NaN* all become *false*. Because of that they are called “falsy” values.

  - *Other values* become *true*, so they are called “truthy”.


So, the code under this condition would never execute:

```js
if (0) { // 0 is falsy
  ...
}

```


…and inside this condition – it always will:

```js
if (1) { // 1 is truthy
  ...
}

```

We can also pass a *pre-evaluated* boolean value to if, like this:

```js
let cond = (year == 2015); // equality evaluates to true or false

if (cond) {
  ...
}

```


### The “else” clause -------------------------------------------------------------------------------

The if statement may contain an optional *else block*. It executes *when* the condition is *falsy*.

For example:

```js
let year = prompt('In which year was the ECMAScript-2015 specification published?', '');

if (year == 2015) {
  alert( 'You guessed it right!' );
} else {
  alert( 'How can you be so wrong?' ); // any value except 2015
}

```



### Several conditions: “else if” ---------------------------------------------------------------

Sometimes, we’d like to test several variants of a condition. The *else if* clause lets us do that.

For example:

```js
let year = prompt('In which year was the ECMAScript-2015 specification published?', '');

if (year < 2015) {
  alert( 'Too early...' );
} else if (year > 2015) {
  alert( 'Too late' );
} else {
  alert( 'Exactly!' );
}

```

In the code above, JavaScript first checks year < 2015. *If that is falsy, it goes to the next condition* year > 2015. If that is also falsy, it shows the last alert.

There can be more else if blocks. The final else is optional.



### Conditional operator ‘?’ (ternary) ------------------------------------------------------------------

Sometimes, we need to assign a variable depending on a condition.

For instance:

```js
let accessAllowed;
let age = prompt('How old are you?', '');  // Muestra una ventana emergente que pregunta al usuario su edad y guarda la respuesta en la variable age.

if (age > 18) {
  accessAllowed = true;
} else {
  accessAllowed = false;
}

alert(accessAllowed);

```

The so-called “conditional” or “question mark” operator lets us *do that in a shorter and simpler way*.

The operator is represented by a *question mark ?*. Sometimes it’s *called “ternary”*, because the operator has *three operands*. It is actually the one and only operator in JavaScript which has that many.


The *syntax* is:

```js
let result = condition ? value1 : value2;

```

The condition is evaluated: if it’s truthy then value1 is returned, otherwise – value2.

For example:

```js
let accessAllowed = (age > 18) ? true : false;

```

Technically, we can omit the parentheses around age > 18. The question mark operator has a low precedence, so it executes after the comparison >.

This example will do the same thing as the previous one:

```js
// the comparison operator "age > 18" executes first anyway
// (no need to wrap it into parentheses)
let accessAllowed = age > 18 ? true : false;

```

But *parentheses make the code more readable, so we recommend using them*.

- Please note:

  - In the example above, you can avoid using the question mark operator because the comparison itself returns true/false:

```js
// the same
let accessAllowed = age > 18;

```




### Multiple ‘?’ (multiple ternary)------------------------------------------------------------------------------------

A sequence of question mark operators ? can return a value that depends on more than one condition.

For instance:

```js
let age = prompt('age?', 18);

let message = (age < 3) ? 'Hi, baby!' :
  (age < 18) ? 'Hello!' :
  (age < 100) ? 'Greetings!' :
  'What an unusual age!';

alert( message );

```

- It may be difficult at first to grasp what’s going on. But after a closer look, we can see that it’s just an ordinary sequence of tests:

  1. The first question mark checks whether age < 3.

  2. If true – it returns 'Hi, baby!'. *Otherwise, it continues to the expression after the colon “:”*, checking age < 18.

  3. If that’s true – it returns 'Hello!'. Otherwise, it continues to the expression after the next colon “:”, checking age < 100.

  4. If that’s true – it returns 'Greetings!'. Otherwise, it continues to the expression after the last colon “:”, returning 'What an unusual age!'.




Here’s how this looks using if..else:

```js
if (age < 3) {
  message = 'Hi, baby!';
} else if (age < 18) {
  message = 'Hello!';
} else if (age < 100) {
  message = 'Greetings!';
} else {
  message = 'What an unusual age!';
}

```



### Non-traditional use of ‘?’ (ternary) -------------------------------------------------------------------------

Sometimes the question mark ? is used as a replacement for if:

```js
let company = prompt('Which company created JavaScript?', '');

(company == 'Netscape') ?
   alert('Right!') : alert('Wrong.');

```


Depending on the condition company == 'Netscape', either the first or the second expression after the ? gets executed and shows an alert.

We don’t assign a result to a variable here. Instead, we execute different code depending on the condition.

*It’s NOT recommended to use the question mark operator in this way*.

The notation is shorter than the equivalent if statement, which appeals to some programmers. But it is less readable.

Here is the same code using if for comparison:


```js
let company = prompt('Which company created JavaScript?', '');

if (company == 'Netscape') {
  alert('Right!');
} else {
  alert('Wrong.');
}

```


*Our eyes scan the code vertically*. Code blocks which span *several lines* are *easier to understand* than a long, horizontal instruction set.

The purpose of the question mark operator ? is to return one value or another depending on its condition. Please use it for exactly that. Use if when you need to execute different branches of code.




### Ejercicios -----------------------------------------------------------------------------

[.................................................................]

Tengo pendiente hacer los ejercicios del final de este capítulo del libro. 











#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
##






## 2.11.- LOGICAL OPERATORS _________________________________________________________________________________

There are four logical operators in JavaScript: || (OR), && (AND), ! (NOT), ?? (Nullish Coalescing). Here we cover the first three, the ?? operator is in the next article.

Although they are called “logical”, they can be applied to values of any type, not only boolean. Their result can also be of any type.

Let’s see the details.


### || (OR) -----------------------------------------------------------------------------------------------

The “OR” operator is represented with two vertical line symbols:

```js
result = a || b;

```

In classical programming, the logical OR is meant to manipulate boolean values only. If any of its arguments are true, it returns true, otherwise it returns false.

In JavaScript, the operator is a little bit trickier and more powerful. But first, let’s see what happens with boolean values.

There are four possible logical combinations:

```js
alert( true || true );   // true
alert( false || true );  // true
alert( true || false );  // true
alert( false || false ); // false

```

As we can see, the result is always true except for the case when both operands are false.

If an operand is not a boolean, it’s converted to a boolean for the evaluation.

For instance, the number 1 is treated as true, the number 0 as false:


```js
if (1 || 0) { // works just like if( true || false )
  alert( 'truthy!' );
}

```

Most of the time, OR || is used in an if statement to test if any of the given conditions is true.

For example:

```js
let hour = 9;

if (hour < 10 || hour > 18) {
  alert( 'The office is closed.' );
}

```

We can pass more conditions:

```js
let hour = 12;
let isWeekend = true;

if (hour < 10 || hour > 18 || isWeekend) {
  alert( 'The office is closed.' ); // it is the weekend
}

```



### OR "||" finds the first truthy value ---------------------------------------------------------

The logic described above is somewhat classical. Now, let’s bring in the “extra” features of JavaScript.

The extended algorithm works as follows.

Given multiple OR’ed values:

```js
result = value1 || value2 || value3;

```

- The OR || operator does the following:

    - Evaluates operands from left to right.
    
    - For each operand, converts it to boolean. If the result is true, stops and returns the original value of that operand.
    
    - If all operands have been evaluated (i.e. all were false), returns the last operand.

A value is returned in its original form, without the conversion.

In other words, a chain of OR || returns the first truthy value or the last one if no truthy value is found.

For instance:

```js
alert( 1 || 0 ); // 1 (1 is truthy)

alert( null || 1 ); // 1 (1 is the first truthy value)
alert( null || 0 || 1 ); // 1 (the first truthy value)

alert( undefined || null || 0 ); // 0 (all falsy, returns the last value)

```

This leads to some interesting usage compared to a “pure, classical, boolean-only OR”.




#### Getting the first truthy value from a list of variables or expressions -------------------------

For instance, we have firstName, lastName and nickName variables, all optional (i.e. can be undefined or have falsy values).

Let’s use OR || to choose the one that has the data and show it (or "Anonymous" if nothing set):

```js
let firstName = "";
let lastName = "";
let nickName = "SuperCoder";

alert( firstName || lastName || nickName || "Anonymous"); // SuperCoder

```

If all variables were falsy, "Anonymous" would show up.





#### Short-circuit evaluation -----------------------------------------------------------------------

Another feature of OR || operator is the so-called “short-circuit” evaluation.

It means that || processes its arguments until the first truthy value is reached, and then the value is returned immediately, without even touching the other argument.

The importance of this feature becomes obvious if an operand isn’t just a value, but an expression with a side effect, such as a variable assignment or a function call.

In the example below, only the second message is printed:

```js
true || alert("not printed");
false || alert("printed");

```

In the first line, the OR || operator stops the evaluation immediately upon seeing true, so the alert isn’t run.

Sometimes, people use this feature to execute commands only if the condition on the left part is falsy.





### && (AND) ----------------------------------------------------------------------------------------------

The AND operator is represented with two ampersands &&:

```js
result = a && b;

```

In classical programming, AND returns true if both operands are truthy and false otherwise:

```js
alert( true && true );   // true
alert( false && true );  // false
alert( true && false );  // false
alert( false && false ); // false

```

An example with if:

```js
let hour = 12;
let minute = 30;

if (hour == 12 && minute == 30) {
  alert( 'The time is 12:30' );
}

```


Just as with OR, any value is allowed as an operand of AND:

```js
if (1 && 0) { // evaluated as true && false
  alert( "won't work, because the result is falsy" );
}

```



#### AND “&&” finds the first falsy value ------------------------------------------------------------

Given multiple AND’ed values:

```js
result = value1 && value2 && value3;

```

The AND && operator does the following:

Evaluates operands from left to right.
For each operand, converts it to a boolean. If the result is false, stops and returns the original value of that operand.
If all operands have been evaluated (i.e. all were truthy), returns the last operand.
In other words, AND returns the first falsy value or the last value if none were found.

The rules above are similar to OR. The difference is that AND returns the first falsy value while OR returns the first truthy one.

Examples:

```js
// if the first operand is truthy,
// AND returns the second operand:
alert( 1 && 0 ); // 0
alert( 1 && 5 ); // 5

// if the first operand is falsy,
// AND returns it. The second operand is ignored
alert( null && 5 ); // null
alert( 0 && "no matter what" ); // 0

```

We can also pass several values in a row. See how the first falsy one is returned:

```js
alert( 1 && 2 && null && 3 ); // null

```

When all values are truthy, the last value is returned:

```js
alert( 1 && 2 && 3 ); // 3, the last one

```




#### Precedence of AND && is higher than OR || -------------------------------------------

The precedence of AND && operator is higher than OR ||.

So the code a && b || c && d is essentially the same as if the && expressions were in parentheses: (a && b) || (c && d).




#### IMPORTANT: Don’t replace if with || or && -------------------------------------------------------

Sometimes, people use the AND && operator as a “shorter way to write if”.

For instance:

```js
let x = 1;

(x > 0) && alert( 'Greater than zero!' );

```

The action in the right part of && would execute only if the evaluation reaches it. That is, only if (x > 0) is true.

So we basically have an analogue for:

```js
let x = 1;

if (x > 0) alert( 'Greater than zero!' );

```

Although, the variant with && appears shorter, if is more obvious and tends to be a little bit more readable. So we recommend using every construct for its purpose: use if if we want if and use && if we want AND.






### ! (NOT) ----------------------------------------------------------------------------------

The boolean NOT operator is represented with an exclamation sign !.

The syntax is pretty simple:

```js
result = !value;

```

The operator accepts a single argument and does the following:

Converts the operand to boolean type: true/false.

Returns the inverse value.

For instance:

```js
alert( !true ); // false
alert( !0 ); // true

```

A double NOT !! is sometimes used for converting a value to boolean type:

```js
alert( !!"non-empty string" ); // true
alert( !!null ); // false

```

That is, the first NOT converts the value to boolean and returns the inverse, and the second NOT inverses it again. In the end, we have a plain value-to-boolean conversion.

There’s a little more verbose way to do the same thing – a built-in Boolean function:

```js
alert( Boolean("non-empty string") ); // true
alert( Boolean(null) ); // false

```

The precedence of NOT ! is the highest of all logical operators, so it always executes first, before && or ||.




### EJERCICIOS -------------------------------------------------------------------------------

[...........................................................]

Tengo pendiente hacer los ejercicios del final de este capítulo del libro. 










#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
#############################################################################################################
##



## 2.12.- NULLISH COALESCING OPERATOR '??' __________________________________________________________________________








## 2.13.- LOOPS: WHILE AND FOR ____________________________________________________________________________________







## 2.14.- THE "SWITCH" STATEMENT ________________________________________________________________________________





## 2.15.- FUNCTIONS ____________________________________________________________________________________________






## 2.16.- FUNCTION EXPRESSIONS _________________________________________________________________________________






## 2.17.- ARROW FUNCTIONS, THE BASICS ______________________________________________________________________








## 2.18.- JavaScript SPECIALS _________________________________________________________________________________









######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
#





# 3.- CODE QUALITY _____________________________________________________________________________________


## 3.1.- DEBUGGING IN THE BROWSER ------------------------------------------------------------------



## 3.2.- CODING STYLE  ------------------------------------------------------------------




## 3.3.- COMMENTS ------------------------------------------------------------------




## 3.4.- NINJA CODE ------------------------------------------------------------------




## 3.5.- AUTOMATED TESTING WITH Mocha ------------------------------------------------------------------






## 3.6.- POLYFILLS AND TRANSPILERS ---------------------------------------------------------------









######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
#





# 4.- OBJECTS: THE BASICS ____________________________________________________________________________



## 4.1.- OBJECTS --------------------------------------------------------------------------------------



## 4.2.- OBJECT REFERENCES AND COPYING -----------------------------------------------------------------------------


## 4.3.- GARBAGE COLLECTION --------------------------------------------------------------------------------------




## 4.4.- OBJECT METHODS, "this" --------------------------------------------------------------------------------------



## 4.5.- CONSTRUCTOR, OPERATOR "new" --------------------------------------------------------------------------------------




## 4.6.- OPTIONAL CHAINING '?' --------------------------------------------------------------------------------------




## 4.7.- SYMBOL TYPE --------------------------------------------------------------------------------------





## 4.8.- OBJECT TO PRIMITIVE CONVERSION ------------------------------------------------------------------------------








######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
######################################################################################################
#






# 5.- DATA TYPES _______________________________________________________________________________



## 5.1.- METHODS OF PRIMITIVES ----------------------------------------------------------------------



## 5.2.- NUMBERS -------------------------------------------------------------------------------



## 5.3.- STRINGS --------------------------------------------------------------------------------





## 5.4.- ARRAYS ----------------------------------------------------------------------

Objects allow you to store keyed collections of values. That’s fine.

But quite often we find that we need an ordered collection, where we have a 1st, a 2nd, a 3rd element and so on. For example, we need that to store a list of something: users, goods, HTML elements etc.

It is not convenient to use an object here, because it provides no methods to manage the order of elements. We can’t insert a new property “between” the existing ones. Objects are just not meant for such use.

There exists a special data structure named Array, to store ordered collections.


### Declaration ----------------------------------------------------------------------------

There are two syntaxes for creating an empty array:

```js
let arr = new Array();
let arr = [];

```

Almost all the time, the second syntax is used. We can supply initial elements in the brackets:

```js
let fruits = ["Apple", "Orange", "Plum"];

```

Array elements are numbered, starting with zero.

We can get an element by its number in square brackets:


```js
let fruits = ["Apple", "Orange", "Plum"];

alert( fruits[0] ); // Apple
alert( fruits[1] ); // Orange
alert( fruits[2] ); // Plum

```

We can replace an element:

```js
fruits[2] = 'Pear'; // now ["Apple", "Orange", "Pear"]

```

…Or add a new one to the array:

```js
fruits[3] = 'Lemon'; // now ["Apple", "Orange", "Pear", "Lemon"]

```

The total count of the elements in the array is its length:

```js
let fruits = ["Apple", "Orange", "Plum"];

alert( fruits.length ); // 3

```

We can also use alert to show the whole array.

```js
let fruits = ["Apple", "Orange", "Plum"];

alert( fruits ); // Apple,Orange,Plum

```

An array can store elements of any type.

For instance:

```js
// mix of values
let arr = [ 'Apple', { name: 'John' }, true, function() { alert('hello'); } ];

// get the object at index 1 and then show its name
alert( arr[1].name ); // John

// get the function at index 3 and run it
arr[3](); // hello

```


- Trailing comma:

    - An array, just like an object, may end with a comma:

    ```js
    let fruits = [
    "Apple",
    "Orange",
    "Plum",
    ];

    ```

    - The “trailing comma” style makes it easier to insert/remove items, because all lines become alike.






### Get last elements with "at" --------------------------------------------------------------

- A recent addition: This is a recent addition to the language. Old browsers may need polyfills.

Let’s say we want the last element of the array.

Some programming languages allow the use of negative indexes for the same purpose, like fruits[-1].

Although, in JavaScript it won’t work. The result will be undefined, because the index in square brackets is treated literally.

We can explicitly calculate the last element index and then access it: fruits[fruits.length - 1].

```js
let fruits = ["Apple", "Orange", "Plum"];

alert( fruits[fruits.length-1] ); // Plum

```

A bit cumbersome, isn’t it? We need to write the variable name twice.

Luckily, there’s a shorter syntax: fruits.at(-1):


```js
let fruits = ["Apple", "Orange", "Plum"];

// same as fruits[fruits.length-1]
alert( fruits.at(-1) ); // Plum

```

- In other words, arr.at(i):

    - is exactly the same as arr[i], if i >= 0.
    
    - for negative values of i, it steps back from the end of the array.






### Methods pop/push, shift/unshift ------------------------------------------------------------

- A queue is one of the most common uses of an array. In computer science, this means an ordered collection of elements which supports two operations:

    - push appends an element to the end.
    
    - shift get an element from the beginning, advancing the queue, so that the 2nd element becomes the 1st.


Arrays support both operations.

In practice we need it very often. For example, a queue of messages that need to be shown on-screen.

There’s another use case for arrays – the data structure named stack.

- It supports two operations:

    - push adds an element to the end.

    - pop takes an element from the end.


So new elements are added or taken always from the “end”.

A stack is usually illustrated as a pack of cards: new cards are added to the top or taken from the top.


For stacks, the latest pushed item is received first, that’s also called LIFO (Last-In-First-Out) principle. For queues, we have FIFO (First-In-First-Out).

Arrays in JavaScript can work both as a queue and as a stack. They allow you to add/remove elements, both to/from the beginning or the end.

In computer science, the data structure that allows this, is called deque.

1) Methods that work with the end of the array:  ---------------------------------------------------------------------------

1. *pop* 

Extracts the last element of the array and returns it:

```js
let fruits = ["Apple", "Orange", "Pear"];

alert( fruits.pop() ); // remove "Pear" and alert it

alert( fruits ); // Apple, Orange

```

Both fruits.pop() and fruits.at(-1) return the last element of the array, but fruits.pop() also modifies the array by removing it.




2. *push* 

Append the element to the end of the array:

```js
let fruits = ["Apple", "Orange"];

fruits.push("Pear");

alert( fruits ); // Apple, Orange, Pear

```

The call fruits.push(...) is equal to fruits[fruits.length] = ....




2) Methods that work with the beginning of the array: -----------------------------------------------------------

1. shift

Extracts the first element of the array and returns it:

```js
let fruits = ["Apple", "Orange", "Pear"];

alert( fruits.shift() ); // remove Apple and alert it

alert( fruits ); // Orange, Pear

```


2. unshift

Add the element to the beginning of the array:

```js
let fruits = ["Orange", "Pear"];

fruits.unshift('Apple');

alert( fruits ); // Apple, Orange, Pear

```


Methods push and unshift can add multiple elements at once:

```js
let fruits = ["Apple"];

fruits.push("Orange", "Peach");
fruits.unshift("Pineapple", "Lemon");

// ["Pineapple", "Lemon", "Apple", "Orange", "Peach"]
alert( fruits );

```





### Internals -----------------------------------------------------------------------------

An array is a special kind of object. The square brackets used to access a property arr[0] actually come from the object syntax. That’s essentially the same as obj[key], where arr is the object, while numbers are used as keys.

They extend objects providing special methods to work with ordered collections of data and also the length property. But at the core it’s still an object.

Remember, there are only eight basic data types in JavaScript (see the Data types chapter for more info). Array is an object and thus behaves like an object.

For instance, it is copied by reference:

```js
let fruits = ["Banana"]

let arr = fruits; // copy by reference (two variables reference the same array)

alert( arr === fruits ); // true

arr.push("Pear"); // modify the array by reference

alert( fruits ); // Banana, Pear - 2 items now

```

…But what makes arrays really special is their internal representation. The engine tries to store its elements in the contiguous memory area, one after another, just as depicted on the illustrations in this chapter, and there are other optimizations as well, to make arrays work really fast.

But they all break if we quit working with an array as with an “ordered collection” and start working with it as if it were a regular object.

For instance, technically we can do this:

```js
let fruits = []; // make an array

fruits[99999] = 5; // assign a property with the index far greater than its length

fruits.age = 25; // create a property with an arbitrary name

```

That’s possible, because arrays are objects at their base. We can add any properties to them.

But the engine will see that we’re working with the array as with a regular object. Array-specific optimizations are not suited for such cases and will be turned off, their benefits disappear.

- The ways to misuse an array:

    - Add a non-numeric property like arr.test = 5.

    - Make holes, like: add arr[0] and then arr[1000] (and nothing between them).

    - Fill the array in the reverse order, like arr[1000], arr[999] and so on.


Please think of arrays as special structures to work with the ordered data. They provide special methods for that. Arrays are carefully tuned inside JavaScript engines to work with contiguous ordered data, please use them this way. And if you need arbitrary keys, chances are high that you actually require a regular object {}.




### Performance --------------------------------------------------------------------------

Methods push/pop run fast, while shift/unshift are slow.

Why is it faster to work with the end of an array than with its beginning? Let’s see what happens during the execution:

```js
fruits.shift(); // take 1 element from the start

```

It’s not enough to take and remove the element with the index 0. Other elements need to be renumbered as well.

- The shift operation must do 3 things:

    1. Remove the element with the index 0.

    2. Move all elements to the left, renumber them from the index 1 to 0, from 2 to 1 and so on.

    3. Update the length property.


The more elements in the array, the more time to move them, more in-memory operations.

The similar thing happens with unshift: to add an element to the beginning of the array, we need first to move existing elements to the right, increasing their indexes.

And what’s with push/pop? They do not need to move anything. To extract an element from the end, the pop method cleans the index and shortens length.

The actions for the pop operation:

```js
fruits.pop(); // take 1 element from the end

```

The pop method does not need to move anything, because other elements keep their indexes. That’s why it’s blazingly fast.

The similar thing with the push method.





### Loops -------------------------------------------------------------------------------

One of the oldest ways to cycle array items is the for loop over indexes:

```js
let arr = ["Apple", "Orange", "Pear"];

for (let i = 0; i < arr.length; i++) {
  alert( arr[i] );
}

```

But for arrays there is another form of loop, for..of:

```js
let fruits = ["Apple", "Orange", "Plum"];

// iterates over array elements
for (let fruit of fruits) {
  alert( fruit );
}

```


The for..of doesn’t give access to the number of the current element, just its value, but in most cases that’s enough. And it’s shorter.

Technically, because arrays are objects, it is also possible to use for..in:

```js
let arr = ["Apple", "Orange", "Pear"];

for (let key in arr) {
  alert( arr[key] ); // Apple, Orange, Pear
}

```

- But that’s actually a bad idea. There are potential problems with it:

    1. The loop for..in iterates over all properties, not only the numeric ones.

        - There are so-called “array-like” objects in the browser and in other environments, that look like arrays. That is, they have length and indexes properties, but they may also have other non-numeric properties and methods, which we usually don’t need. The for..in loop will list them though. So if we need to work with array-like objects, then these “extra” properties can become a problem.

    2. The for..in loop is optimized for generic objects, not arrays, and thus is 10-100 times slower. Of course, it’s still very fast. The speedup may only matter in bottlenecks. But still we should be aware of the difference.


Generally, we shouldn’t use for..in for arrays.





### A word about "length" -------------------------------------------------------------------

The length property automatically updates when we modify the array. To be precise, it is actually not the count of values in the array, but the greatest numeric index plus one.

For instance, a single element with a large index gives a big length:

```js
let fruits = [];
fruits[123] = "Apple";

alert( fruits.length ); // 124

```

Note that we usually don’t use arrays like that.

Another interesting thing about the length property is that it’s writable.

If we increase it manually, nothing interesting happens. But if we decrease it, the array is truncated. The process is irreversible, here’s the example:

```js
let arr = [1, 2, 3, 4, 5];

arr.length = 2; // truncate to 2 elements
alert( arr ); // [1, 2]

arr.length = 5; // return length back
alert( arr[3] ); // undefined: the values do not return

```

So, the simplest way to clear the array is: arr.length = 0;.






### new Array() -----------------------------------------------------------------------------

There is one more syntax to create an array:

```js
let arr = new Array("Apple", "Pear", "etc");

```

It’s rarely used, because square brackets [] are shorter. Also, there’s a tricky feature with it.

If new Array is called with a single argument which is a number, then it creates an array without items, but with the given length.

Let’s see how one can shoot themselves in the foot:

```js
let arr = new Array(2); // will it create an array of [2] ?

alert( arr[0] ); // undefined! no elements.

alert( arr.length ); // length 2

```

To avoid such surprises, we usually use square brackets, unless we really know what we’re doing.





### Multidimensional arrays ----------------------------------------------------------------------

Arrays can have items that are also arrays. We can use it for multidimensional arrays, for example to store matrices:

```js
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

alert( matrix[0][1] ); // 2, the second value of the first inner array

```




### toString -----------------------------------------------------------------------------

Arrays have their own implementation of toString method that returns a comma-separated list of elements.

For instance:

```js
let arr = [1, 2, 3];

alert( arr ); // 1,2,3
alert( String(arr) === '1,2,3' ); // true

```

Also, let’s try this:

```js
alert( [] + 1 ); // "1"
alert( [1] + 1 ); // "11"
alert( [1,2] + 1 ); // "1,21"

```

Arrays do not have Symbol.toPrimitive, neither a viable valueOf, they implement only toString conversion, so here [] becomes an empty string, [1] becomes "1" and [1,2] becomes "1,2".

When the binary plus "+" operator adds something to a string, it converts it to a string as well, so the next step looks like this:

```js
alert( "" + 1 ); // "1"
alert( "1" + 1 ); // "11"
alert( "1,2" + 1 ); // "1,21"

```





### Don't compare arrays with == ----------------------------------------------------------------

Arrays in JavaScript, unlike some other programming languages, shouldn’t be compared with operator ==.

This operator has no special treatment for arrays, it works with them as with any objects.

- Let’s recall the rules:

    - Two objects are equal == only if they’re references to the same object.
    
    - If one of the arguments of == is an object, and the other one is a primitive, then the object gets converted to primitive, as explained in the chapter Object to primitive conversion.
    
    - With an exception of null and undefined that equal == each other and nothing else.


The strict comparison === is even simpler, as it doesn’t convert types.

So, if we compare arrays with ==, they are never the same, unless we compare two variables that reference exactly the same array.

For example:

```js
alert( [] == [] ); // false
alert( [0] == [0] ); // false

```

These arrays are technically different objects. So they aren’t equal. The == operator doesn’t do item-by-item comparison.

Comparison with primitives may give seemingly strange results as well:


```js
alert( 0 == [] ); // true

alert('0' == [] ); // false

```

Here, in both cases, we compare a primitive with an array object. So the array [] gets converted to primitive for the purpose of comparison and becomes an empty string ''.

Then the comparison process goes on with the primitives, as described in the chapter Type Conversions:

```js
// after [] was converted to ''
alert( 0 == '' ); // true, as '' becomes converted to number 0

alert('0' == '' ); // false, no type conversion, different strings

```

So, how to compare arrays?

That’s simple: don’t use the == operator. Instead, compare them item-by-item in a loop or using iteration methods explained in the next chapter.





### Summary -------------------------------------------------------------------------------

Array is a special kind of object, suited to storing and managing ordered data items.

The declaration:

```js
// square brackets (usual)
let arr = [item1, item2...];

// new Array (exceptionally rare)
let arr = new Array(item1, item2...);

```

- The call to new Array(number) creates an array with the given length, but without elements.

    - The length property is the array length or, to be precise, its last numeric index plus one. It is auto-adjusted by array methods.
    
    - If we shorten length manually, the array is truncated.


- Getting the elements:

    - we can get element by its index, like arr[0]
    
    - also we can use at(i) method that allows negative indexes. For negative values of i, it steps back from the end of the array. If i >= 0, it works same as arr[i].



- We can use an array as a deque with the following operations:

    - push(...items) adds items to the end.
    
    - pop() removes the element from the end and returns it.
    
    - shift() removes the element from the beginning and returns it.
    
    - unshift(...items) adds items to the beginning.



- To loop over the elements of the array:

    - for (let i=0; i<arr.length; i++) – works fastest, old-browser-compatible.
    
    - for (let item of arr) – the modern syntax for items only,
    
    - for (let i in arr) – never use.


To compare arrays, don’t use the == operator (as well as >, < and others), as they have no special treatment for arrays. They handle them as any objects, and it’s not what we usually want.

Instead you can use for..of loop to compare arrays item-by-item.

We will continue with arrays and study more methods to add, remove, extract elements and sort arrays in the next chapter Array methods.



### Ejercicios -----------------------------------------------------------------------------


[...........................................................................................]

Me falta ir al libro y copiar los ejercicios que hay al final de este apartado. 



############################################################################################
############################################################################################
############################################################################################
############################################################################################
############################################################################################
############################################################################################
############################################################################################
############################################################################################
############################################################################################
############################################################################################
############################################################################################
############################################################################################
############################################################################################
############################################################################################
############################################################################################
############################################################################################
############################################################################################
############################################################################################
############################################################################################
############################################################################################
############################################################################################
############################################################################################
############################################################################################
############################################################################################
############################################################################################
############################################################################################
############################################################################################
############################################################################################
############################################################################################
############################################################################################
#


## 5.5.- ARRAY METHODS ----------------------------------------------------------------------



## 5.6.- ITERABLES ----------------------------------------------------------------------




## 5.7.- MAP AND SET ----------------------------------------------------------------------





## 5.8.- WeakMap AND WeakSet ----------------------------------------------------------------------





## 5.9.- OBJECT KEYS, VALUES, ENTRIES ----------------------------------------------------------------------





## 5.10.- DESTRUCTURING ASSIGNMENT ----------------------------------------------------------------------





## 5.11.- DATE AND TIME ----------------------------------------------------------------------







## 5.12.- JSON METHODS, toJSON ----------------------------------------------------------------------
















