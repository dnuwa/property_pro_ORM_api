'use strict';
module.exports = (sequelize, DataTypes) => {
  const Property = sequelize.define('Property', {
    userId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    city: DataTypes.STRING,
    address: DataTypes.STRING,
    type: DataTypes.STRING,
    photo: DataTypes.STRING,
    price: DataTypes.STRING,
    rooms: DataTypes.INTEGER,
    status: DataTypes.STRING,
    isActive: DataTypes.BOOLEAN
  }, {});
  Property.associate = function(models) {
    // associations can be defined here

    // look up more on this association
    models.Property.belongsTo(models.User, { foreignKey: "userId" });
  };
  return Property;
};