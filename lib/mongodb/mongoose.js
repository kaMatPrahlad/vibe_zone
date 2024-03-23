import mongoose from "mongoose";

let isConnected = false; //Track connection status

export const connectToDB = async () => {
  mongoose.set("strickQuery", true);

  if (isConnected) {
    console.log("MongoDB is already connected");
    return;
  }
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      dbName: "Vibezone",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    isConnected = true;
    console.log("Successfully Connected to MongoDB"); // if ists not work than 
  } catch (error) {
    console.log(error);
  }
};
