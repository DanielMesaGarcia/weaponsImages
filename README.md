# Ionic + Express + Sequelize + Multer Example

This is a basic example using Ionic + Express + Sequelize + Multer that shows how to upload/download images using Multer.

It captures images in Ionic, and pick photos up as well using Ionic Capacitor.

## Getting Started

Clone this respository.

```
git clone https://github.com/DanielMesaGarcia/WeaponsImages.git
```

Create MySQL database and configure database in ionic-express-sequelize-multer-photos/backend/config/db.config.js

Install dependencies and run backend:

```
cd ionic-express-sequelize-multer-photos/backend
npm install
node index.js
```

Install dependencies and run frontend:

```
cd ionic-express-sequelize-multer-photos/frontend
npm install
ionic serve
```

You will need a mysql database with the tables weapons and upgrades
You will have to change the password and user in backend/config
The database is configured to not reset with every run, if you want to
change this, go to backend\index.js and set db.sequelize.sync({ force: false })
to true

# postman
https://documenter.getpostman.com/view/29809716/2s9YRCVqf5

# Aditions
I've added a secondary database to add upgrades to each weapon
If you want to update an entry, you have to click update and then
submit with the new data. To remove "update mode", click READ
You can add and delete upgrades, but you can't update them

## Prerequisites

All you need is... some time and...
* Visual Studio Code.
* Ionic.

* More hours than you first could think of...

## Built With

* [Visual Studio Code](https://code.visualstudio.com/) - The Editor used in this project
* [Ionic 6](https://ionicframework.com/docs/intro) - Ionic Framework is an open source UI toolkit for building performant, high-quality mobile and desktop apps using web technologies (HTML, CSS, and JavaScript).

## Acknowledgments

* https://gist.github.com/PurpleBooth/109311bb0361f32d87a2. A very complete template for README.md files.
* https://ionicframework.com/docs/angular/your-first-app. Ionic Start App Tutorial#   W e a p o n s I m a g e s 
 
 