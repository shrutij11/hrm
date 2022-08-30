import {Router} from "express"
import { Departments } from "../models/departments"
import { createDepartment, updateDepartment, deleteDepartment,getAllDepartments } from "../controllers/controller"

const router = Router();
router.post("/create/department", createDepartment);
router.get("/alldepartments", getAllDepartments);
router.put("/update/department/:id", updateDepartment);
router.delete("/delete/department/:id", deleteDepartment);

export default router;