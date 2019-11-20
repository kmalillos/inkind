# In-Kind Connections

A custom donation tracker and database.

### Try It Out (Login details below): [Live Page Here](https://inkindconnections.herokuapp.com/)


**Username:** admin <br>
**Password:** test 


<!-- ## How It Works

* User creates a Login though the Sign-Up page
* Once Login is created, User signs into the app
* Home Page displays all the different sections of dog's life:
    * Pet Info, Vet Info, Vaccinations, Activity, Diet, Potty, Hygenie, Favorites, and Resources

    ![Image](https://github.com/kmalillos/dog-journal/blob/master/read-me/home-page.JPG)

* User can use "Add" button to go to a Form, where User can enter and submit User input
* User input is displayed in each section
* User can delete existing input in each section by clicking on the 'Trash Icon'

    ![Image](https://github.com/kmalillos/dog-journal/blob/master/read-me/section-page.JPG) -->

<!-- **Sample Demo:** [Link]() -->

## Developer Notes

### Built With:
* MVC Structure
* React
* Node
* Express
* mySQL
* Sequelize
* JWT Authenticatication

### MVC Structure:

* **Model-View-Controller (MVC) Structure** - architectural pattern that separates an application into three main logical components (model, view, and controller) where each component is built to handle a specific development aspect

* **Model** - data-related logic, found in 'model' directory

    *  Model contains data-related logic using **Sequelize** to create tables and columns in **mySQL** : 
        * 'Vendor' table, includes name, address, and contact info of individual or company who made the donation ('Vendor))
        * 'Donation' table, includes type, description, date, and value of item donated ('Donation')
        * 'User' table, holds username and password for each user (used for authentication)
    
    ![Image](https://github.com/kmalillos/inkind/blob/master/readme/mvc1.PNG)

    * 'Vendor' table is associated with 'Donation' table
        * A 'Vendor' can have many 'Donations'
        * When 'Vendor' is deleted, all 'Donations' associated with 'Vendor' is also deleted

        ![Image](https://github.com/kmalillos/inkind/blob/master/readme/mvc2.PNGURL HERE)

    * 'Donation' table is associated with 'Vendor' table
        * 'Donations' belongs to 'Vendor' and cannot be created without a 'Vendor'

        ![Image](https://github.com/kmalillos/inkind/blob/master/readme/mvc4.PNG)

* **View** -  UI logic, found in 'client' directory

* **Controller** - interface between Model and View components, found in 'controller' directory


<!-- ### Models-Views-Controller (MVC) Paradigm

### Handlebars.js

### Bootstrap

### CSS

### Express.js

###  mySQL

###  Sequelize

###  JavaScript + jQuery

###  Passport.js -->

## Contributors

### Kaylah Malillos ([Portfolio](https://kmalillos.github.io/))