import { UserModel } from "../../../DB/models/User.js";
import { Op } from "sequelize";

export const addUser =  async (req, res) => {
    const { userName, email, password, age, address } = req.body;
    const newUser = await userModel.create({
      userName,
      email,
      password,
      age,
      address,
    });
    res.json({ message: "Done", newUser });
  }
export const updateUser = async (req, res) => {
    const { id } = req.params;
    const { userName, email, password, age, address } = req.body;
    const updatedUser = await userModel.update(
      { userName, email, password, age, address },
      { where: { id } }
    );
    res.json({ message: "Done", updatedUser });
  }
export const deleteUser =  async (req, res) => {
    const { id } = req.params;
    const result = await userModel.destroy({
      where: { id },
    });
    res.json({ result });
  }
export const getUserById =  async (req, res) => {
    const { id } = req.params;
    const user = await userModel.findByPk(id, {
      include: productModel,
    });
    res.json({ user });
  }
export const getAllUsers = async(req,res)=>{
    const users = await userModel.findAll({include:productModel})
    res.json({users})
  }
export const getAllUsersAgeBetween = async (req,res)=>{
    const {x,y} = req.params
    const users = await userModel.findAll(
      {
        where: {
          age:{
            [Op.between]:[x,y]
          }
        }
      
      }
    )
    res.json(users)

  }
export const getAllUsersByName = async (req,res)=>{
    const {name} = req.query
    const users = await userModel.findAll(
      {
        where: {
          userName:{
            [Op.like]:`${name}%`
          }
        }
      
      }
    )
    res.json(users)
  }
export const getAllUsersAgeLessThan = async (req,res)=>{
    const {age} = req.params
    const users = await userModel.findAll(
      {
        where: {
          age:{
            [Op.lt]:[age]
          }
        }
      
      }
    )
    res.json(users)
  }
export const getAllUsersAgeGreaterThan = async (req,res)=>{
  const {age} = req.params
  const users = await userModel.findAll(
    {
      where: {
        age:{
          [Op.gt]:[age]
        }
      }
    
    }
  )
  res.json(users)
}

