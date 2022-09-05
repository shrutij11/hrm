import { RequestHandler } from "express";
import { ValidationError } from "sequelize/types";
import {Departments} from "../models/departments"


//CREATE DEPARTMENT
export const createDepartment: RequestHandler = async(req, res, next)=>{
     if(!req.body.department_name)
       return res.status(400).json({'error': 'Must include department name'});
     if(req.body.department_name.length <=2)
       return res.status(400).json({'error': 'Length of department name should be greater than 2'});
      var letters = /^[A-Za-z]+$/;
     if(!(req.body.department_name.match(letters)))
      return res.status(400).json({'error': 'department name should contain only letters'});
     const val = await Departments.findOne({ where: { department_name: req.body.department_name } });
 if(val) 
    return res.status(400).json({'error': 'Depatment name is already present in the database'});
 var dept= await Departments.create({...req.body});

  
  return res
  .status(200)
  .json({message: "Dept created", data:dept})
};
  
//DELETE DEPARTMENT

export const deleteDepartment: RequestHandler = async (req, res, next) => {
    const { id } = req.params;
    //if(!id)return res.status(400).json({'error': 'id not found'});
     const val = await Departments.findOne({ where: { id: req.params.id } });
   if(!val) return res.status(400).json({'error': 'id not found'});
    const deletedept: Departments | null = await Departments.findByPk(id);
    await Departments.destroy({ where: { id } });
    return res
      .status(200)
      .json({ message: "dept deleted successfully", data: deletedept });
  };


  //GET ALL DEPARTMENTS
  export const getAllDepartments: RequestHandler = async (req, res, next) => {
    const alldept: Departments[] = await Departments.findAll();
    return res
      .status(200)
      .json({ message: "dept fetched successfully", data: alldept });
  };
  

//UPDATE DEPARTMENT
export const updateDepartment: RequestHandler = async (req, res, next) => {

  const val = await Departments.findOne({ where: { id: req.params.id } });
  if(!val) return res.status(400).json({'error': 'id not found'});
  if(req.body.department_name.length <=2)
  return res.status(400).json({'error': 'Length of department name should be greater than 2'});
var letters = /^[A-Za-z]+$/;
if(!(req.body.department_name.match(letters)))
 return res.status(400).json({'error': 'department name should contain only letters'});
const value = await Departments.findOne({ where: { department_name: req.body.department_name } });
if(value) 
return res.status(400).json({'error': 'Depatment name is already present in the database'});
const { id } = req.params;
  await Departments.update({ ...req.body }, { where: { id } });
  const updatedept: Departments | null = await Departments.findByPk(id);
  return res
    .status(200)
    .json({ message: "dept updated successfully", data: updatedept });
};

