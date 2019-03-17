module.exports = function (sequelize, DataTypes) {

    var User = sequelize.define("User", {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // auth: {
        //     type: DataTypes.STRING,
        //     allowNull: true,
        // },
        // ID: {
        //     type: DataTypes.STRING,
        //     allowNull: true,
        // },

    }, {
            // underscored: true,
            // freezeTableName: true,
            timestamps: false
        });

    return User;

};