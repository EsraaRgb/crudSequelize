import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("assignment5", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export const drawTables = async () => {
  return await sequelize.sync().then((result) => {
    console.log("connected to DB .............");
  }).catch((err)=>{
    console.log('failed to connect to DB ...............');
  })
};
