import { RequestHandler } from "express";
import {Departments} from "../models/departments"

export const createDepartment: RequestHandler = async(req, res, next)=>{
    var dept= await Departments.create({...req.body});
    return res
    .status(200)
    .json({message: "Dept created", data:dept})
};

export const deleteDepartment: RequestHandler = async (req, res, next) => {
    const { id } = req.params;
    const deletedept: Departments | null = await Departments.findByPk(id);
    await Departments.destroy({ where: { id } });
    return res
      .status(200)
      .json({ message: "dept deleted successfully", data: deletedept });
  };
  
  export const getAllDepartments: RequestHandler = async (req, res, next) => {
    const alldept: Departments[] = await Departments.findAll();
    return res
      .status(200)
      .json({ message: "dept fetched successfully", data: alldept });
  };
  
//   export const getTodoById: RequestHandler = async (req, res, next) => {
//     const { id } = req.params;
//     const todos: Todos | null = await Todos.findByPk(id);
//     return res
//       .status(200)
//       .json({ message: "Todo fetched successfully", data: todos });
//   };
  
  export const updateDepartment: RequestHandler = async (req, res, next) => {
    const { id } = req.params;
    await Departments.update({ ...req.body }, { where: { id } });
    const updatedept: Departments | null = await Departments.findByPk(id);
    return res
      .status(200)
      .json({ message: "dept updated successfully", data: updatedept });
  };