import  express  from "express";
import {deletePost, getalldata, postdata}  from "../controllers/details.js";


const routers = express.Router()

routers.get('/all',getalldata)

routers.post('/',postdata)

routers.delete('/:id',deletePost)

export default routers;