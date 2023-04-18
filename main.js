import express from "express";
import bodyParser from "body-parser";
import useRouts from './routs/details.js';
import cors from 'cors';


const app = express();

const port = 4000

app.use(bodyParser.json())

app.use(cors({origin:'*',}))

app.use('/user',useRouts)

app.get("/user",(req, res)=>{
    return(
        res.send("welcome")
    )
})




app.listen(port,()=>{console.log(`working in ${port}`)})