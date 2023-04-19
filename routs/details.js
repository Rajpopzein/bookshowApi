import  express  from "express";
import {deletePost, getalldata, postdata, updatePost}  from "../controllers/details.js";


const routers = express.Router()

routers.get('/all',getalldata)

routers.post('/',postdata)

routers.delete('/:id',deletePost)

routers.put('/:id',updatePost)

export default routers;