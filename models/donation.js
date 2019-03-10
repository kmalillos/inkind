module.exports = function (sequelize, DataTypes) {

    var Donation = sequelize.define("Donation", {
        type: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        note: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        date: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        value: {
            type: DataTypes.TEXT,
            allowNull: true,
        }
    });

    Donation.associate = function (models) {
        // We're saying that a Donation should belong to an Vendor
        // A Donation can't be created without an Vendor due to the foreign key constraint
        Donation.belongsTo(models.Vendor, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Donation;
};
