import { DataTypes } from "sequelize";
import { sequelize } from "../connection.js";
import { UserModel } from "./User.js";

export const ProductModel = sequelize.define("Product", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

ProductModel.belongsTo(UserModel, {
  foreignKey:"createdBy",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});
UserModel.hasMany(ProductModel, {
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});


