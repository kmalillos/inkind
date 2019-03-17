module.exports = function (sequelize, DataTypes) {

    var Donation = sequelize.define("Donation", {
        donationType: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        note: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        date: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        donationValue: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    }, {
            // underscored: true,
            // freezeTableName: true,
            timestamps: false
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
