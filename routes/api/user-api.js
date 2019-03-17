const userController = require("../../controllers/userController")

module.exports = function(app) {

    app.post("/api/user/signup", userController.createUser);
    app.post("/api/user/:id", userController.findUser);
    // app.get("/api/user/:id", userController.findUser);
    app.delete("/api/user/:id", userController.deleteUser);

};