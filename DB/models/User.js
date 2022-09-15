import { DataTypes } from "sequelize";
import { sequelize } from "../connection.js";

export const UserModel = sequelize.define("User", {
  userName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  age: { type: DataTypes.INTEGER },
  address: { type: DataTypes.STRING },
});
