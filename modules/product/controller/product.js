import { Op } from "sequelize";
import { ProductModel } from "../../../DB/models/Product.js";
import { UserModel } from "../../../DB/models/User.js";

export const addProduct = async (req, res) => {
  const { name, price, description, createdBy } = req.body;
  const product = await ProductModel.create({
    name,
    price,
    description,
    createdBy,
  });
  res.json({ message: "Done", product });
};
export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name, price, description, createdBy } = req.body;
  const product = await ProductModel.update(
    { name, price, description, createdBy },
    { where: { id } }
  );
  res.json({ message: "Done", product });
};
export const deleteProduct = async (req, res) => {
  const { id } = req.params;
  const product = await ProductModel.destroy({ where: { id } });
  res.json(product);
};
export const getAllProducts = async (req, res) => {
    const products = await ProductModel.findAll();
  res.json(products);
};
export const getProductById = async (req, res) => {
    const { id } = req.params;
    const product = await ProductModel.findOne({include:{UserModel,attributes:['userName','email']},where:{id}});
  res.json(product);

};
export const getProductByName = async (req, res) => {
    const {name} = req.query
    const products = await ProductModel.findAll({
        where:{
            name:{
                [Op.like]:`${name}%`
            }
        }
    })
  res.json();
};
