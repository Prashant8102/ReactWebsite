import mongoose from "mongoose";
import dotenv from "dotenv";

mongoose.set("strictQuery", true);

dotenv.config();// to initialize dotenv

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const Connection = async () => {
 
  const URL = `mongodb://${USERNAME}:${PASSWORD}@ac-lq1jp6p-shard-00-00.4toknla.mongodb.net:27017,ac-lq1jp6p-shard-00-01.4toknla.mongodb.net:27017,ac-lq1jp6p-shard-00-02.4toknla.mongodb.net:27017/?ssl=true&replicaSet=atlas-6teq0h-shard-0&authSource=admin&retryWrites=true&w=majority`;
  try {
    await mongoose.connect(URL, { useUnifiedTopology: true }); //mongoose.connect is a asyncronous function so that's why we are using await and async
    console.log("Server is successfully connected to mongodb");
  } catch (error) {
    console.log("server is not connected because of the error", error.message);
  }
};
export default Connection;
