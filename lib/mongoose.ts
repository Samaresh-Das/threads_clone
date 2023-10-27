import mongoose from "mongoose";

let isConnected = false; //variable to check connection status

export const connectToDB = async () => {
  mongoose.set("strictQuery", false);

  if (!process.env.MONGODB_URL) return console.log("Mongo URL not found");
  if (isConnected) return console.log("Already connected");

  try {
    await mongoose.connect(process.env.MONGODB_URL);

    isConnected = true;
    console.log("Connected to mongo db");
  } catch (error) {
    console.log(error);
  }
};
