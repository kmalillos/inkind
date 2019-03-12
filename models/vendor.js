module.exports = function (sequelize, DataTypes) {

  var Vendor = sequelize.define("Vendor", {
    
    vendorName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    address: {
      type: DataTypes.STRING,
    },
    city: {
      type: DataTypes.STRING,
    },
    state: {
      type: DataTypes.STRING,
    },
    zip: {
      type: DataTypes.STRING,
    },
    phone: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    }
  }, {
      // freezeTableName: true,
      timestamps: false
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