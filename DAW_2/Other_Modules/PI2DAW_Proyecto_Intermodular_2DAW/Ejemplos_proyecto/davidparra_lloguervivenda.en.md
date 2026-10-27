<!-- English translation of davidparra_lloguervivenda.doc (original: Spanish) -->

# Project: Housing rental tool

## 1. DESCRIPTION

The main goal of the project is the design, development and implementation of a web tool for renting homes in a specific town, in which the members of the site can add, manage or delete homes for rent, and the visitors of the site can search for homes by town, price, capacity, etc. The visitor can open each rental listing, check the availability of the home on a graphical calendar and make a booking between specific dates if they are available, upon which the owner of the listing receives an automatic e-mail informing them of the bookings that have been made.

## 2. REQUIREMENTS

- PHP will be used as the programming language.
- MySQL will be used as the database management system.
- The application will distinguish between three types of users: administrators, clients and visitors.
- Each type of user will only have access to the menus that correspond to them.
- User passwords will be stored in the database.
- The main features for clients will be:
  - Creating rental listings (title, description, photo upload, choice of a rental availability range (dates), town, address)
  - Editing rental listings
  - Viewing rental listings (available/occupied dates, visitor comments).
  - Confirming bookings proposed by visitors.
  - Rejecting bookings, including a reason.
- The main features for administrators will be:
  - View, edit or delete clients.
  - View, edit or delete rental listings
- The main features for visitors will be:
  - Search engine for rental listings by town, price, capacity, etc.
  - Option to register in order to offer homes.
  - Viewing each rental listing with a graphical calendar showing monthly availability, and the option to leave a comment.
  - Option to make a booking, which must be confirmed by the owner of the home (in that case an automatic e-mail will be sent informing them of the booking).
  - Option to cancel the booking (only available for 2 days after making the booking).
