[FRONTEND DEPLOYED](https://rowlandhill.github.io/list-project-front-end/)

# What Mangia Time does:

### Mangia Time is an easy-to-use recipe application.  It replaces someone's recipe book, or recipe cards.

The application works by using a PostgreSQL database on the backend (which is Ruby) to store the user's credentials and recipes.  By using AJAX calls from the front end to the back end, the user can send or request information from either the User Controller or the Recipe Controller.  The Controller processes the request, then the serializer filters the appropriate information to send back to the user.

My approach in building this app changed pretty quickly.  I originally wanted to have 3 tables: users, recipes and ingredients.  That was a little too complex for the timeframe, so I decided to just guide the user to enter their ingredients and directions in the description field of recipes.

I started out by creating a basic HTML and CSS layout, so I could begin going through the authentication requests, and make sure a user could sign up, sign in, change their password and sign out.  Once I could create users, I then began testing my CRUD actions for the recipes.  I needed the user to be able to CREATE, READ/INDEX, UPDATE and DELETE the recipes.  After making sure those actions were successful, I then moved on to formating the website so the User Experience was more pleasant when making the CRUD actions.  I made it so the recipes updated immediately, added notifications so the user knew the recipe ID they just created, and also cleared form fields and added other notifications to assist and guide the user.

I then began working on making the website more visually appealing, but there is still more work to do there, and other places.

Some of the unsolved problems are:
  - Aesthetics: while functional, the way the modals interface with handlebars could use some tidying up.
  - Ingredients: I would like to add an ingredients table.  This would allow the user to separate them from the description, and more easily read and edit their recipes.
  - I'd like the app to be more mobile-friendly.  Although the modals make it responsive, I'd like it to be better suited for a mobile phone (it works well on an iPad, and that's normally what people use when cooking, if they're using a device)
  - I'd like the user to be able to search by recipe name, not ID.

# User Stories:

  - As a user, I want to be able to manage my recipes so I can have a place for them.
  - I want to be able to create, store, edit, locate and read my recipes with ingredients listed
  - I want the recipes I choose to be available to me.  I don't want to sort through an entire website, I just want mine.
  - I want my own user name and password, and to be able to log in and out of the SPA.
  - Eventually, I want a function that will scale the recipes as I desire (reduce or increase serving size)
  - I also want to eventually be able to access public recipes, with pictures of the finish products/meals.


## Wireframe:

[Wireframe link](http://imgur.com/MIngnNX)

## Links to the application:

[FRONTEND DEPLOYED](https://rowlandhill.github.io/list-project-front-end/)
[BACKEND DEPLOYED](https://mangiatime.herokuapp.com/)
[FRONTEND REPO](https://github.com/rowlandhill/list-project-front-end)
[BACKEND REPO](https://github.com/rowlandhill/list-project-api)
