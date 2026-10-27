<!-- English translation of puigcarrasco_gestiotareas.pdf (original: Spanish) -->

# Project proposal

By: Mª Puig Carrasco Lara
21 February 2013

IES Juan de Garay · C/ Juan de Garay, 25 · 46017 Valencia, Spain · Tel: 96 357 70 61 · Fax: 96 357 73 50

# Proposal 1: Dynamic lists for managing tasks

## 1. DESCRIPTION

The goal of the project is the design, development and implementation of a simple web tool, as responsive and accessible as possible, that lets users manage tasks through lists.

## 2. REQUIREMENTS ANALYSIS

- Server-side programming language: PHP (compatible with the SQL language, which will allow access to the database)
- Client-side programming language to add behaviour and interactivity: JavaScript/XML, AJAX… making use of external libraries to add features and/or effects such as drag & drop or choosing a background colour — for example jQuery, Prototype, script.aculo.us…
- Building and designing the web page: HTML and CSS. Making use of a sprite containing all the site's images (with buttons, link-state images, symbols…), positioned with CSS, which would be loaded in a single HTTP request and thus reduce the page's loading time.
- Database management system: MySQL through the phpMyAdmin application
- Database manipulation language: SQL.
- Web server: Apache
- The application will distinguish between 3 types of users: administrator, registered user, unregistered user. Each with different features.
- A registered user is one who creates an account, validates it through a link in their e-mail and sets their own password.
- Main administrator functions:
  - delete, create and edit users.
- Main functions for registered users:
  - Create a list
  - Create tasks
  - Delete tasks
  - Edit tasks
  - Change the order of tasks
  - Share a task list and join other lists by invitation
  - Option to create multiple lists per user
  - Configure account options:
    - Change password
    - Change e-mail
    - Delete account
- Main functions for unregistered users:
  - View a task list shared by a registered user
  - Register
- Minimum number of screens:
  - Home page
    - registered user = will see their personal list, a calendar with information about their tasks, the lists they have been invited to, a form for adding tasks, sharing a list…
    - unregistered user = will see nothing more than the list shared with them through a link and/or the option to register.
  - Registration page
  - Account options settings page
  - Account activation page
  - E-mail page
  - Password reset page
- Option to enter someone's e-mail to share the list with them. Sharing could also imply editing, but for that an account would be needed, as well as offering the choice of joining the list or not. If they have no account, they would be guided through creating one before being able to accept the request to join the list.
- It may have another interface for mobile phones (iPhone) with its own CSS style sheet.
- Accessibility: the guiding principle is to achieve a simple and clear user interface. Making use of:
  - Breadcrumbs and headings to inform the user at all times about the content of the page
  - The administrator's contact information
- Security
  - user passwords will be stored encrypted so that the administrator user has no access to them.
  - The user will access their personal list over a secure connection (https).

## 3. PERSONAL NOTE

In attempting to develop this web application I would go deeper into the visual side and into the behaviours and interactivity I could add. I know it has few functions, but I don't know whether they are difficult to implement. What I would really like is to be able to / know how to use any external AJAX library, and for the little I do to be done well. I would even like to be able to implement this proposal using classes and objects in PHP.
