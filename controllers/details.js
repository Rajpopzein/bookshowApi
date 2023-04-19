import express,{response,json} from 'express'
import { uuid } from 'uuidv4';
import { client } from '../Db/dataConnection.js'


const db = client.db("livebookstore")
const collection = db.collection('books')

export const getalldata = async(req,res) => {
    // res.status(200).jason({status:'ok'})
    try{
        await client.connect()
        const alldata = await collection.find({}).toArray()
        res.status(200).json({status:'true', data: alldata})
        }
    finally{
        await client.close()
    }

}

export const postdata = async(req,res) =>{
    try{
        await client.connect()
        const reqdata = {...req.body, id:uuid()}
        await collection.insertOne(reqdata)
        console.log(req.body)
        res.status(200).json({status:'true',data:reqdata})
    }
    finally{
       await client.close()
    }
}

export const deletePost = async(req,res) =>{
    try{
        await client.connect();
        const query = req.params
        const deleted = await collection.deleteOne(query)
        console.log(deleted)
        if(deleted.deletedCount > 0){
            res.status(200).json({status:'true',message:'Data deleted'})
        }
        else
        {
            res.status(200).json({status:'false',message:'Data not found'})
        }
    }
    finally{
        await client.close()
    }
}

export const updatePost = async(req,res)=>{
    try{
        await client.connect()
        const idss = req.params
        const newvalue = {$set:req.body}
        const upvalue = await collection.updateOne(idss,newvalue)
        const updatedvalue = await collection.findOne({id:idss.id})
        if(upvalue.matchedCount > 0)
        {
            res.status(200).json({status:'true',message:'data updated',data:updatedvalue})
        }
        else{
            res.status(200).json({status:'false',message:'data not updated'})
        }

    }
    finally{
        await client.close()
    }
}