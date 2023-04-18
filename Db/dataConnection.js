import { MongoClient, ServerApiVersion } from "mongodb";

const url = "mongodb+srv://rajkumarr:1234567890-r@cluster0.ob16fjv.mongodb.net/?retryWrites=true&w=majority"


export const client = new MongoClient(url,{
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  })

 