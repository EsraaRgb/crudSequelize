import { DataTypes } from "sequelize";
import { sequelize } from "../connection.js";

export const UserModel = sequelize.define("User", {
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  userName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  age: { type: DataTypes.INTEGER },
  address: { type: DataTypes.STRING },
});
