# In-Kind Connections

A custom donation tracker and database.

### Try It Out (Login details below): [Live Page Here](https://inkindconnections.herokuapp.com/)

**Username:** admin <br>
**Password:** test 

![Image](https://github.com/kmalillos/inkind/blob/master/readme/Capture1.PNG)


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

* **Model-View-Controller (MVC) Structure** - *architectural pattern that separates an application into three main logical components (model, view, and controller) where each component is built to handle a specific development aspect*

* **Model** - *data-related logic that interacts with database*

    *  'Model' directory contains data-related logic using **Sequelize** to create tables and columns in **mySQL** (relational database management system)
        * 'Vendor' table, includes name, address, and contact info of individual or company who made the donation ('Vendor')
        * 'Donation' table, includes type, description, date, and value of item donated ('Donation')
        * 'User' table, holds username and password for each user (used for authentication)
    
    ![Image](https://github.com/kmalillos/inkind/blob/master/readme/mvc1.PNG)

    * 'Vendor' table is associated with 'Donation' table
        * A 'Vendor' can have many 'Donations'
        * When 'Vendor' is deleted, all 'Donations' associated with 'Vendor' is also deleted

        ![Image](https://github.com/kmalillos/inkind/blob/master/readme/mvc2.PNG)

    * 'Donation' table is associated with 'Vendor' table
        * 'Donations' belongs to 'Vendor' and cannot be created without a 'Vendor'

        ![Image](https://github.com/kmalillos/inkind/blob/master/readme/mvc4.PNG)

* **View** -  *user-interface logic, found in 'client' directory*

    * Viewt/'client' directory contains **React** directories and files installed with *create-react-app* in command line
        * More on React later below.

        ![Image](https://github.com/kmalillos/inkind/blob/master/readme/mvc5.PNG)

* **Controller** - *interface between Model and View components*

    * 'Controller' directory contains logic for CRUD (create, read, update, delete) methods for **mySQL**
        * *.findAll* and *.findOne* methods 'reads' database
        * *.create* method 'creates' new entry in database   
        * *.destroy* method 'deletes' entry in database    
            * takes user input using *req.params.id*
            * then sends response via JSON (JavaScript Object Notation) of database

        ![Image](https://github.com/kmalillos/inkind/blob/master/readme/mvc6.PNG)

### React:

* **React** - *JavaScript library for building user-interface components and uses a virtual DOM prior to manipulating 'real' DOM*
    
    * used *'create-react-app'* [(Documentation Here)](https://reactjs.org/docs/create-a-new-react-app.html) in to create React files

    * 'App.js' exports React components in 'index.js' which renders content in 'index.html' in 'public' directory

        ![Image](https://github.com/kmalillos/inkind/blob/master/readme/react9.PNG)

        * *BrowserRouter* from "react-router-dom" uses 'Routes' to render components
        * Components are imported in 'App.js' from 'components'

        ![Image](https://github.com/kmalillos/inkind/blob/master/readme/react1.PNG)

        ![Image](https://github.com/kmalillos/inkind/blob/master/readme/react2.PNG)

    * 'Components' directory in 'src' directory contains JS files that creates each UI component

        * *Class Components* (ex: VendorList component) imports API from 'utils' and components from another functional component (i.e. VendorTable component)

            ![Image](https://github.com/kmalillos/inkind/blob/master/readme/react3.PNG)

        * VendorList *class (or smart) component* manages state, manipulates data using API, and calls lifecycle method (i.e. render();)

            ![Image](https://github.com/kmalillos/inkind/blob/master/readme/react4.PNG)

            * Then, this component renders data inside components of VendorTable component
                * Uses .map function to loop through data

                ![Image](https://github.com/kmalillos/inkind/blob/master/readme/react5.PNG)

        * VendorTable *functional (or dumb) component* focuses on user interface and accept props to pass through them (and rarely use state) 

            * This component imports styling from 'react-bootstrap' and linking functionality from 'react-router-dom' packagers

            ![Image](https://github.com/kmalillos/inkind/blob/master/readme/react8.PNG)

            * VendorTable creates a table to display data to be exported to 'VendorList' component
                * accepts props 'children' to be populated inside <tbody> element

                ![Image](https://github.com/kmalillos/inkind/blob/master/readme/react6.PNG)

            * VendorTableItem passes props to be populated in 'VendorList' component
                * contents here are populated in VendorTable

                ![Image](https://github.com/kmalillos/inkind/blob/master/readme/react7.PNG)


<!-- ## Node and Express -->
        

## Contributors

### Kaylah Malillos ([Portfolio](https://kmalillos.github.io/))