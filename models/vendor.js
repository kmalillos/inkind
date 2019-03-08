module.exports = function(sequelize, DataTypes) {
    
    var Vendor = sequelize.define("Vendor", {
      // Giving the Vendor model a name of type STRING
      name: DataTypes.STRING
    });
  
    Vendor.associate = function(models) {
      // Associating Vendor with Donation
      // When an Vendor is deleted, also delete any associated Donation
      Vendor.hasMany(models.Donation, {
        onDelete: "cascade"
      });
    };
  
    return Vendor;
  };