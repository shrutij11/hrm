import express, { Request, Response} from "express";
import connection from "./db/config";
import { Departments } from "./models/departments";
import  router  from "./routes/routes";

const app = express();
app.use(express.json());
app.use(router);


app.get("/", (req: Request,res: Response)=> {
        res.json({
            message:"hey"
        })
})
connection.sync().then(()=>{
    console.log("Db connected"); 
}).catch((err:string)=>{
    console.log("Err", err);
});
app.listen(3001, ()=> {
        console.log("Server started on port 3001")
    });
    module.exports=app;