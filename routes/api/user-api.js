const userController = require("../../controllers/userController")

module.exports = function(app) {

    app.post("/api/user/signup", userController.createUser);

    app.post("/api/user/login", userController.loginUser);
    
    app.delete("/api/user/:id", userController.deleteUser);

};