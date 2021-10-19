'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class survey extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  survey.init({
    visitor_id: DataTypes.INTEGER,
    rating: DataTypes.INTEGER,
    suggestion: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'survey',
    underscored: true,
  });
  return survey;
};