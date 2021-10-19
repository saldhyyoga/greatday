"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class visitor extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	visitor.init(
		{
			name: DataTypes.STRING,
			phonenumber: DataTypes.STRING,
			address: DataTypes.STRING,
			office: DataTypes.STRING,
			email: DataTypes.STRING,
			tujuan: DataTypes.TEXT,
			gender: DataTypes.ENUM("Laki-laki", "Perempuan"),
		},
		{
			sequelize,
			modelName: "visitor",
			underscored: true,
		}
	);
	return visitor;
};
