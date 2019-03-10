module.exports = function (sequelize, DataTypes) {

  var Vendor = sequelize.define("Vendor", {
    vendorName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    address: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    state: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    zip: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
    }

  });

  Vendor.associate = function (models) {
    // Associating Vendor with Donation
    // When an Vendor is deleted, also delete any associated Donation
    Vendor.hasMany(models.Donation, {
      onDelete: "cascade"
    });
  };

  return Vendor;
};